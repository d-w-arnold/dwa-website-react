import React, {Component, RefObject} from "react";
import PropTypes, {Validator} from "prop-types";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef: RefObject<any> = React.createRef();
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const fullnameErrMsg = 'Please provide a name of at least 2 characters, thank you.';
const emailaddressErrMsg = 'Please enter a valid email address, thank you.';
const mssgErrMsg = 'Please do not exceed 1000 characters in your message, thank you.';

type MyProps = any;
type MyState = {
    recaptchaResponse: string | null;
    sent: boolean;
    mssg: string;
    error: boolean | null;
    errors: {
        fullname: string;
        emailaddress: string;
        mssg: string;
    };
};

class MyForm extends Component<MyProps, MyState> {
    static propTypes: { config: Validator<NonNullable<object>> };

    constructor(props: MyProps) {
        super(props);
        this.state = {
            recaptchaResponse: null,
            sent: false,
            mssg: this.props.errorMessage,
            error: null,
            errors: {
                fullname: '',
                emailaddress: '',
                mssg: '',
            }
        };
    }

    handleInputChange = (e: { preventDefault: () => void; target: { name: string; value: string; }; }) => {
        e.preventDefault();
        const {name, value} = e.target;
        let errors: { fullname: string, emailaddress: string, mssg: string } = this.state.errors;
        switch (name) {
            case 'fullname':
                errors.fullname = value.length >= 2 ? '' : fullnameErrMsg;
                break;
            case 'emailaddress':
                errors.emailaddress = validEmailRegex.test(value) ? '' : emailaddressErrMsg;
                break;
            case 'mssg':
                errors.mssg = value.length < 1000 ? '' : mssgErrMsg;
                break;
            default:
                break;
        }
        this.setState({
            mssg: this.state.mssg,
            sent: this.state.sent,
            recaptchaResponse: this.state.recaptchaResponse,
            error: false,
            errors,
            [name]: value
        });
    };

    validateForm = (errors: { fullname: string; emailaddress: string; mssg: string; }) => {
        let valid = true;
        Object.values(errors).forEach(
            // If we have an error string, set valid to false
            (val: string) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            // Valid Form
            recaptchaRef.current.execute();
        } else {
            // Invalid Form
            this.setState({
                mssg: 'Please meet the above criteria before submitting this form, thank you.',
                error: true
            })
        }
    };

    handleCaptchaResponseChange(response: string | null) {
        this.setState({recaptchaResponse: response});
        axios.post(this.props.config.api, this.state)
            .then(result => {
                if (result.data.sent) {
                    this.setState({
                        sent: result.data.sent,
                        error: false
                    });
                } else {
                    this.setState({
                        mssg: result.data.mssg,
                        error: true
                    });
                }
            })
            .catch(error => {
                this.setState({
                    mssg: this.props.config.errorMessage,
                    error: error.message
                });
            });
            recaptchaRef.current.reset();
    }

    render() {
        const {fieldsConfig} = this.props.config;
        let fullnameError = this.state.errors.fullname;
        let emailaddressError = this.state.errors.emailaddress;
        let mssgError = this.state.errors.mssg;
        return (
            <form onSubmit={(e) => this.handleFormSubmit(e)} id="contact-form" noValidate>
                {fieldsConfig && fieldsConfig.map((field: { id: number; type: string; fieldName: string; label: string; klassName: string; }) => {
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
                                        onChange={e => this.handleInputChange(e)}
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
                                        onChange={e => this.handleInputChange(e)}
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
                    onChange={(response: string | null) => this.handleCaptchaResponseChange(response)}
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
                    {this.state.error && <div className="error">{this.state.mssg}</div>}
                </div>
            </form>
        );
    }
}

export default MyForm;
//propTypes for the component
MyForm.propTypes = {
    config: PropTypes.object.isRequired
};
