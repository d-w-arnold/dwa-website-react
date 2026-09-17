import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the site header and navigation', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /david w\. arnold/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
});


