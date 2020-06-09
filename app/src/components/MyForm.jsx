import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recaptchaResponse: null,
            mailSent: false,
            error: null
        };
    }

    handleInputChange = (e, field) => {
        let value = e.target.value;
        let updateValue = {};
        updateValue[field] = value;
        this.setState(updateValue);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        recaptchaRef.current.execute();
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
                    this.setState({mailSent: result.data.sent});
                    this.setState({error: false});
                } else {
                    this.setState({error: true});
                }
            })
            .catch(error => this.setState({error: error.message}));
    }

    render() {
        const {successMessage, errorMessage, fieldsConfig} = this.props.config;
        return (
            <form action="#" id="contact-form">
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
                                        onChange={e => this.handleInputChange(e, field.fieldName)}
                                    />
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
                                        onChange={e => this.handleInputChange(e, field.fieldName)}
                                        rows="10"
                                    />
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
                    {/*TODO: Make this a dynamic error message*/}
                    {this.state.error && <div className="error">{errorMessage}</div>}
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
