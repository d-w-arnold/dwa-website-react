import React, {Component} from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef<ReCAPTCHA>();
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const fullnameErrMsg = 'Please provide a name of at least 2 characters, thank you.';
const emailaddressErrMsg = 'Please enter a valid email address, thank you.';
const mssgErrMsg = 'Please do not exceed 1000 characters in your message, thank you.';

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

type MyState = FormValues & {
    recaptchaResponse: string | null;
    sent: boolean;
    error: boolean;
    statusMessage: string;
    errors: FormErrors;
};

class MyForm extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            ...props.config.fields,
            recaptchaResponse: null,
            sent: false,
            error: false,
            statusMessage: '',
            errors: {
                fullname: '',
                emailaddress: '',
                mssg: '',
            }
        };
    }

    getFieldError = (name: FieldName, value: string) => {
        switch (name) {
            case 'fullname':
                return value.trim().length >= 2 ? '' : fullnameErrMsg;
            case 'emailaddress':
                return validEmailRegex.test(value) ? '' : emailaddressErrMsg;
            case 'mssg':
                return value.length > 0 && value.length <= 1000 ? '' : mssgErrMsg;
            default:
                return '';
        }
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (!['fullname', 'emailaddress', 'mssg'].includes(name)) {
            return;
        }

        const fieldName = name as FieldName;

        this.setState(prevState => ({
            ...prevState,
            [fieldName]: value,
            sent: false,
            error: false,
            statusMessage: '',
            errors: {
                ...prevState.errors,
                [fieldName]: this.getFieldError(fieldName, value),
            },
        }));
    };

    validateForm = () => {
        const errors: FormErrors = {
            fullname: this.getFieldError('fullname', this.state.fullname),
            emailaddress: this.getFieldError('emailaddress', this.state.emailaddress),
            mssg: this.getFieldError('mssg', this.state.mssg),
        };

        this.setState({errors});

        return Object.values(errors).every((value) => value.length === 0);
    };

    handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.validateForm()) {
            recaptchaRef.current?.execute();
        } else {
            this.setState({
                statusMessage: 'Please meet the above criteria before submitting this form, thank you.',
                error: true
            });
        }
    };

    handleCaptchaResponseChange = async (response: string | null) => {
        if (!response) {
            this.setState({
                error: true,
                statusMessage: this.props.config.errorMessage,
            });
            return;
        }

        this.setState({recaptchaResponse: response});

        try {
            const result = await axios.post(this.props.config.api, {
                fullname: this.state.fullname,
                emailaddress: this.state.emailaddress,
                mssg: this.state.mssg,
                recaptchaResponse: response,
            });

            if (result.data.sent) {
                this.setState({
                    sent: true,
                    error: false,
                    statusMessage: '',
                });

                return;
            }

            this.setState({
                sent: false,
                error: true,
                statusMessage: result.data.mssg ?? this.props.config.errorMessage,
            });
        } catch {
            this.setState({
                sent: false,
                error: true,
                statusMessage: this.props.config.errorMessage,
            });
        } finally {
            recaptchaRef.current?.reset();
        }
    };

    render() {
        const {fieldsConfig} = this.props.config;
        const fullnameError = this.state.errors.fullname;
        const emailaddressError = this.state.errors.emailaddress;
        const mssgError = this.state.errors.mssg;
        return (
            <form onSubmit={this.handleFormSubmit} id="contact-form" noValidate>
                {fieldsConfig && fieldsConfig.map((field) => {
                    return (
                        <React.Fragment key={field.id}>
                            {field.type !== "textarea" ? (
                                <React.Fragment>
                                    <div className="tinySpacing">
                                        <label htmlFor={field.fieldName}>{field.label}</label>
                                    </div>
                                    <input
                                        type={field.type}
                                        id={field.fieldName}
                                        name={field.fieldName}
                                        className={field.klassName}
                                        tabIndex={field.id}
                                        required={field.isRequired}
                                        value={this.state[field.fieldName]}
                                        onChange={this.handleInputChange}
                                    />
                                    {field.fieldName === "fullname" && fullnameError.length > 0 &&
                                    <span className="tinySpacing error">{fullnameError}</span>}
                                    {field.fieldName === "emailaddress" && emailaddressError.length > 0 &&
                                    <span className="tinySpacing error">{emailaddressError}</span>}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <div className="tinySpacing">
                                        <label htmlFor={field.fieldName}>{field.label}</label>
                                    </div>
                                    <textarea
                                        id={field.fieldName}
                                        name={field.fieldName}
                                        className={field.klassName}
                                        tabIndex={field.id}
                                        required={field.isRequired}
                                        value={this.state[field.fieldName]}
                                        onChange={this.handleInputChange}
                                        rows={6}
                                    />
                                    {mssgError.length > 0 &&
                                    <span className="tinySpacing error">{mssgError}</span>}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    );
                })}
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={this.props.config.sitekey}
                    theme="dark"
                    onChange={this.handleCaptchaResponseChange}
                />
                <div className="buttonPlacement">
                    <button
                        type="submit"
                        id="button"
                        tabIndex={4}>Send Your Message
                    </button>
                </div>
                <div className="tinySpacing">
                    {this.state.sent && <div className="success">{this.props.config.successMessage}</div>}
                    {this.state.error && <div className="error">{this.state.statusMessage}</div>}
                </div>
            </form>
        );
    }
}

export default MyForm;
