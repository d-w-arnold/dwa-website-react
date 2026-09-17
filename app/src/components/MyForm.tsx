import {useMemo, useRef, useState, type ChangeEvent, type FormEvent} from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const fullnameErrMsg = 'Please provide a name of at least 2 characters, thank you.';
const emailaddressErrMsg = 'Please enter a valid email address, thank you.';
const mssgErrMsg = 'Please do not exceed 1000 characters in your message, thank you.';
const formUnavailableErrMsg = 'The contact form is temporarily unavailable. Please try again later.';

export type FormValues = {
    fullname: string;
    emailaddress: string;
    mssg: string;
};

type FieldName = keyof FormValues;

export type FieldConfig = {
    id: number;
    label: string;
    fieldName: FieldName;
    type: 'text' | 'email' | 'textarea';
    isRequired: boolean;
    klassName: string;
    placeholder?: string;
    description?: string;
    autoComplete?: string;
};

export type FormConfig = {
    api: string;
    sitekey: string;
    successMessage: string;
    errorMessage: string;
    fields: FormValues;
    fieldsConfig: FieldConfig[];
};

type MyProps = {
    config: FormConfig;
};

type FormErrors = Record<FieldName, string>;

type ApiResponse = {
    sent?: boolean;
    mssg?: string;
};

const createEmptyErrors = (): FormErrors => ({
    fullname: '',
    emailaddress: '',
    mssg: '',
});

const getFieldError = (name: FieldName, value: string) => {
    switch (name) {
        case 'fullname':
            return value.trim().length >= 2 ? '' : fullnameErrMsg;
        case 'emailaddress':
            return validEmailRegex.test(value) ? '' : emailaddressErrMsg;
        case 'mssg':
            return value.trim().length > 0 && value.length <= 1000 ? '' : mssgErrMsg;
        default:
            return '';
    }
};

function MyForm({config}: MyProps) {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [values, setValues] = useState<FormValues>(config.fields);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [errors, setErrors] = useState<FormErrors>(createEmptyErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isFormConfigured = useMemo(() => Boolean(config.api && config.sitekey), [config.api, config.sitekey]);

    const validateForm = () => {
        const nextErrors: FormErrors = {
            fullname: getFieldError('fullname', values.fullname),
            emailaddress: getFieldError('emailaddress', values.emailaddress),
            mssg: getFieldError('mssg', values.mssg),
        };

        setErrors(nextErrors);
        return Object.values(nextErrors).every((value) => value.length === 0);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        if (!['fullname', 'emailaddress', 'mssg'].includes(name)) {
            return;
        }

        const fieldName = name as FieldName;

        setValues((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
        setSent(false);
        setError(false);
        setStatusMessage('');
        setErrors((prevState) => ({
            ...prevState,
            [fieldName]: getFieldError(fieldName, value),
        }));
    };

    const handleCaptchaResponseChange = async (response: string | null) => {
        if (!response) {
            setSent(false);
            setError(true);
            setStatusMessage(config.errorMessage);
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await axios.post<ApiResponse>(config.api, {
                fullname: values.fullname.trim(),
                emailaddress: values.emailaddress.trim(),
                mssg: values.mssg.trim(),
                recaptchaResponse: response,
            });

            if (result.data.sent) {
                setValues(config.fields);
                setErrors(createEmptyErrors());
                setSent(true);
                setError(false);
                setStatusMessage(config.successMessage);
                return;
            }

            setSent(false);
            setError(true);
            setStatusMessage(result.data.mssg ?? config.errorMessage);
        } catch (requestError) {
            const apiMessage = axios.isAxiosError<ApiResponse>(requestError)
                ? requestError.response?.data?.mssg
                : undefined;

            setSent(false);
            setError(true);
            setStatusMessage(apiMessage ?? config.errorMessage);
        } finally {
            recaptchaRef.current?.reset();
            setIsSubmitting(false);
        }
    };

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isFormConfigured) {
            setSent(false);
            setError(true);
            setStatusMessage(formUnavailableErrMsg);
            return;
        }

        if (!validateForm()) {
            setSent(false);
            setError(true);
            setStatusMessage('Please meet the above criteria before submitting this form, thank you.');
            return;
        }

        setSent(false);
        setError(false);
        setStatusMessage('');
        setIsSubmitting(true);
        recaptchaRef.current?.execute();
    };

    return (
        <form onSubmit={handleFormSubmit} id="contact-form" noValidate>
            {config.fieldsConfig.map((field) => {
                const fieldError = errors[field.fieldName];
                const errorId = `${field.fieldName}-error`;
                const hintId = field.description ? `${field.fieldName}-hint` : undefined;
                const describedBy = [hintId, fieldError ? errorId : undefined].filter(Boolean).join(' ') || undefined;
                const currentLength = values[field.fieldName].length;

                return (
                    <div key={field.id} className="formField">
                        <div className="fieldHeader">
                            <label htmlFor={field.fieldName}>{field.label}</label>
                            {field.type === 'textarea' ? (
                                <span className="fieldCounter" aria-live="polite">{currentLength}/1000</span>
                            ) : null}
                        </div>

                        {field.description ? (
                            <p id={hintId} className="fieldHint">{field.description}</p>
                        ) : null}

                        {field.type !== 'textarea' ? (
                            <input
                                type={field.type}
                                id={field.fieldName}
                                name={field.fieldName}
                                className={field.klassName}
                                tabIndex={field.id}
                                required={field.isRequired}
                                value={values[field.fieldName]}
                                onChange={handleInputChange}
                                placeholder={field.placeholder}
                                autoComplete={field.autoComplete}
                                aria-invalid={fieldError.length > 0}
                                aria-describedby={describedBy}
                                disabled={isSubmitting}
                            />
                        ) : (
                            <textarea
                                id={field.fieldName}
                                name={field.fieldName}
                                className={field.klassName}
                                tabIndex={field.id}
                                required={field.isRequired}
                                value={values[field.fieldName]}
                                onChange={handleInputChange}
                                rows={6}
                                maxLength={1000}
                                placeholder={field.placeholder}
                                autoComplete={field.autoComplete}
                                aria-invalid={fieldError.length > 0}
                                aria-describedby={describedBy}
                                disabled={isSubmitting}
                            />
                        )}
                        {fieldError.length > 0 && (
                            <span id={errorId} className="inlineError" role="alert">{fieldError}</span>
                        )}
                    </div>
                );
            })}
            <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={config.sitekey}
                theme="dark"
                onChange={handleCaptchaResponseChange}
            />
            <div className="buttonPlacement">
                <button
                    type="submit"
                    id="button"
                    tabIndex={4}
                    disabled={isSubmitting || !isFormConfigured}
                >
                    {isSubmitting ? 'Sending...' : 'Send Your Message'}
                </button>
            </div>

            <div className="statusStack" aria-live="polite">
                {sent && <div className="statusPanel success" role="status">{statusMessage}</div>}
                {!isFormConfigured && !statusMessage && (
                    <div className="statusPanel error" role="status">{formUnavailableErrMsg}</div>
                )}
                {error && <div className="statusPanel error" role="alert">{statusMessage}</div>}
            </div>
        </form>
    );
}

export default MyForm;
