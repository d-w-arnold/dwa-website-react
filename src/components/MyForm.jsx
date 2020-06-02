import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

// TODO: Add when finished
// import ReCAPTCHA from "react-google-recaptcha";
// const recaptchaRef = React.createRef();

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mailSent: false,
            error: null
        };
    }

    /**
     * @function handleChange
     * @param e { obj } - change event
     * @param field { string } - namve of the field
     * @return void
     */
    handleInputChange = (e, field) => {
        let value = e.target.value;
        let updateValue = {};
        updateValue[field] = value;
        this.setState(updateValue);
    };

    /**
     * @function handleFormSubmit
     * @param e { obj } - form event
     * @return void
     */
    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API}`,
            headers: {"content-type": "application/json"},
            data: this.state
        })
            .then(result => {
                if (result.data.sent) {
                    this.setState({
                        mailSent: result.data.sent
                    });
                    this.setState({error: false});
                } else {
                    this.setState({error: true});
                }
            })
            .catch(error => this.setState({error: error.message}));
    };

    // TODO: Remove when finished
    onChange(value) {
        console.log("ReCAPTCHA success! Captcha value:", value);
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
                                        onChange={e => this.handleInputChange(e, field.fieldName)}/>
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
                                        rows="10"/>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    );
                })}
                <div className="buttonPlacement">
                    <input
                        type="submit"
                        id="button"
                        onClick={(e) => this.handleFormSubmit(e)}
                        value="Send Your Message"
                        tabIndex="4"/>
                </div>
                <div>
                    {this.state.mailSent && <div className="success">{successMessage}</div>}
                    {this.state.error && <div className="error">{errorMessage}</div>}
                </div>
                {/*TODO: Add when finished*/}
                {/*<ReCAPTCHA*/}
                {/*    ref={recaptchaRef}*/}
                {/*    size="invisible"*/}
                {/*    sitekey="6Lcl1rcUAAAAAP9cwFpK09YM8xi3Lhbc0jjgSFWs"*/}
                {/*    onChange={this.onChange}*/}
                {/*/>*/}
            </form>
        );
    }
}

export default MyForm;
//propTypes for the component
MyForm.propTypes = {
    config: PropTypes.object.isRequired
};
