import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const fullnameErrMsg = 'Please provide a name of at least 2 characters, thank you.';
const emailaddressErrMsg = 'Please enter a valid email address, thank you.';
const mssgErrMsg = 'Please do not exceed 1000 characters in your message, thank you.';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recaptchaResponse: null,
            mailSent: false,
            errorMssg: this.props.config.errorMessage,
            error: null,
            errors: {
                fullname: '',
                emailaddress: '',
                mssg: '',
            }
        };
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'fullname':
                errors.fullname =
                    value.length > 2 ? '' : fullnameErrMsg;
                break;
            case 'emailaddress':
                errors.emailaddress =
                    validEmailRegex.test(value) ? '' : emailaddressErrMsg;
                break;
            case 'mssg':
                errors.mssg =
                    value.length < 1000 ? '' : mssgErrMsg;
                break;
            default:
                break;
        }
        this.setState({
            errors,
            error: false,
            [name]: value
        });
    };

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            // If we have an error string, set valid to false
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };

    // TODO: Look into why form won't submit after having just tried to submit just a mssg, then populated all fields, and still won't submit.
    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            // Valid Form
            recaptchaRef.current.execute();
        } else {
            // Invalid Form
            this.setState({
                errorMssg: 'Please meet the above criteria before submitting this form, thank you.',
                error: true
            })
        }
    };

    handleCaptchaResponseChange(response) {
        this.setState({recaptchaResponse: response});
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API}`,
            headers: {"content-type": "application/json"},
            data: this.state
        })
            .then(result => {
                if (result.data.sent) {
                    this.setState({
                        mailSent: result.data.sent,
                        error: false
                    });
                } else {
                    this.setState({
                        errorMssg: result.data.mssg,
                        error: true
                    });
                }
            })
            .catch(error => {
                this.setState({
                    errorMssg: this.props.config.errorMessage,
                    error: error.message
                });
            });
    }

    render() {
        const {successMessage, fieldsConfig} = this.props.config;
        let fullnameError = this.state.errors.fullname;
        let emailaddressError = this.state.errors.emailaddress;
        let mssgError = this.state.errors.mssg;
        return (
            <form action="#" id="contact-form" noValidate>
                {fieldsConfig &&
                fieldsConfig.map(field => {
                    return (
                        <React.Fragment key={field.id}>
                            {field.type !== "textarea" ? (
                                <React.Fragment>
                                    <div className="tinySpacing">
                                        <label htmlFor={field.fieldName}>{field.label}</label>
                                    </div>
                                    <input
                                        type={field.type}
                                        name={field.fieldName}
                                        className={field.klassName}
                                        tabIndex={field.id}
                                        onChange={e => this.handleInputChange(e)}
                                        noValidate
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
                                        name={field.fieldName}
                                        className={field.klassName}
                                        tabIndex={field.id}
                                        onChange={e => this.handleInputChange(e)}
                                        rows="10"
                                        noValidate
                                    />
                                    {mssgError.length > 0 &&
                                    <span className="tinySpacing error">{mssgError}</span>}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    );
                })}
                {/*TODO: Fix button sizing/formatting, when website loaded from a component other than Contact*/}
                <div className="buttonPlacement">
                    <button
                        type="submit"
                        id="button"
                        onClick={(e) => this.handleFormSubmit(e)}
                        tabIndex="4">Send Your Message
                    </button>
                </div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lcl1rcUAAAAAP9cwFpK09YM8xi3Lhbc0jjgSFWs"
                    theme="dark"
                    onChange={(response) => this.handleCaptchaResponseChange(response)}
                />
                <div className="tinySpacing">
                    {this.state.mailSent && <div className="success">{successMessage}</div>}
                    {this.state.error && <div className="error">{this.state.errorMssg}</div>}
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
