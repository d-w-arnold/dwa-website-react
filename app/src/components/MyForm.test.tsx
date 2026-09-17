import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import axios from 'axios';
import MyForm, {type FormConfig} from './MyForm';

vi.mock('axios');
vi.mock('react-google-recaptcha', async () => {
    const React = await import('react');

    return {
        default: React.forwardRef<{ execute: () => void; reset: () => void }, { onChange?: (value: string | null) => void }>(
            ({onChange}, ref) => {
                React.useImperativeHandle(ref, () => ({
                    execute: () => onChange?.('test-captcha-token'),
                    reset: () => undefined,
                }));

                return <div data-testid="recaptcha" />;
            }
        ),
    };
});

const mockedAxios = vi.mocked(axios);

const config: FormConfig = {
    api: 'https://example.com/contact',
    sitekey: 'site-key',
    successMessage: 'Thank you for contacting me, I\'ll be in touch!',
    errorMessage: 'Sorry we have some problems.',
    fields: {
        fullname: '',
        emailaddress: '',
        mssg: '',
    },
    fieldsConfig: [
        {
            id: 1,
            label: 'Name:',
            fieldName: 'fullname',
            type: 'text',
            isRequired: true,
            klassName: 'fullname-field response',
        },
        {
            id: 2,
            label: 'Email Address:',
            fieldName: 'emailaddress',
            type: 'email',
            isRequired: true,
            klassName: 'emailaddress-field response',
        },
        {
            id: 3,
            label: 'Message:',
            fieldName: 'mssg',
            type: 'textarea',
            isRequired: true,
            klassName: 'mssg-field response',
        },
    ],
};

describe('MyForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('shows validation feedback and avoids sending invalid submissions', async () => {
        const user = userEvent.setup();
        render(<MyForm config={config} />);

        await user.click(screen.getByRole('button', {name: /send your message/i}));

        expect(screen.getByText(/please provide a name of at least 2 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        expect(screen.getByText(/please do not exceed 1000 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/please meet the above criteria before submitting this form/i)).toBeInTheDocument();
        expect(mockedAxios.post).not.toHaveBeenCalled();
    });

    test('submits successfully and clears the form', async () => {
        const user = userEvent.setup();
        mockedAxios.post.mockResolvedValue({data: {sent: true}});

        render(<MyForm config={config} />);

        const nameInput = screen.getByLabelText(/name:/i);
        const emailInput = screen.getByLabelText(/email address:/i);
        const messageInput = screen.getByLabelText(/message:/i);

        await user.type(nameInput, 'David Arnold');
        await user.type(emailInput, 'david@example.com');
        await user.type(messageInput, 'Hello from a test.');
        await user.click(screen.getByRole('button', {name: /send your message/i}));

        await waitFor(() => {
            expect(mockedAxios.post).toHaveBeenCalledWith(config.api, {
                fullname: 'David Arnold',
                emailaddress: 'david@example.com',
                mssg: 'Hello from a test.',
                recaptchaResponse: 'test-captcha-token',
            });
        });

        expect(await screen.findByRole('status')).toHaveTextContent(config.successMessage);
        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(messageInput).toHaveValue('');
    });
});

