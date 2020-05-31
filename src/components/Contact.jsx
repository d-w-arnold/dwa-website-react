import React, {Fragment} from "react";
import axios from 'axios';
// import ReCAPTCHA from "react-google-recaptcha"; // TODO: Add when finished
import GITHUB_ICON from '../github_white.png';
import KEYBASE_ICON from '../keybase-tile.svg';

function Contact() {
    let github = 'https://github.com/d-w-arnold';
    let keybase = 'https://keybase.io/d_w_arnold';
    return (
        <Fragment>
            <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/>
            <div className="body">

                {/* TODO: React form validation */}

                <p id="contactTitle" className="title">Contact</p>

                <div className="roboto">
                    <div className="contact-details">
                        <div className="left">
                            {/* TODO: Fix LinkedIn Public Profile Badge */}
                            <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                                 datatype="vertical" data-theme="dark" data-vanity="david-w-arnold"><a
                                className="LI-simple-link"
                                href='https://uk.linkedin.com/in/david-w-arnold?trk=profile-badge'>David W. Arnold</a>
                            </div>
                            <div id="github" className="center logos">
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    <img src={GITHUB_ICON} alt="GitHub" width="64" height="64"/>
                                </a>
                            </div>
                            <div id="keybase" className="center logos">
                                <a href={keybase} target="_blank" rel="noopener noreferrer">
                                    <img src={KEYBASE_ICON} alt="Keybase" width="64" height="64"/>
                                </a>
                            </div>
                        </div>
                        <div className="right">
                            <MyForm/>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

// const recaptchaRef = React.createRef();
const API_PATH = 'http://localhost:8080/api/contact/index.php';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            emailaddress: '',
            mssg: '',
            mailSent: false,
            error: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        if (name === 'fullname') {
            this.setState({fullname: target.value});
        } else if (name === 'emailaddress') {
            this.setState({emailaddress: target.value});
        } else if (name === 'mssg') {
            this.setState({mssg: target.value});
        }
    }

    onChange(value) {
        console.log("ReCAPTCHA success! Captcha value:", value);
    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state); // TODO: Remove when finished
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({error: error.message}));
    };

    render() {
        return (
            <form id="contact-form">
                <div className="tinySpacing">
                    <label htmlFor="name">Name:</label>
                </div>
                <input
                    type="text"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handleInputChange}
                    className="response"
                    id="name"
                    tabIndex="1"
                    autoFocus={true}/>
                <div className="tinySpacing">
                    <label htmlFor="email">Email Address:</label>
                </div>
                <input
                    type="email"
                    name="emailaddress"
                    value={this.state.emailaddress}
                    onChange={this.handleInputChange}
                    className="response"
                    id="email"
                    tabIndex="2"/>
                <div className="tinySpacing">
                    <label htmlFor="message">Message:</label>
                </div>
                <textarea
                    name="mssg"
                    value={this.state.mssg}
                    onChange={this.handleInputChange}
                    className="response"
                    id="message"
                    tabIndex="3"
                    rows="10"/>
                <div className="buttonPlacement">
                    <input
                        type="submit"
                        id="button"
                        onClick={(e) => this.handleFormSubmit(e)}
                        value="Send Your Message"
                        tabIndex="4"/>
                </div>
                <div>
                    {this.state.mailSent &&
                    <div>Thank you for contacting us.</div>
                    }
                </div>
                {/*<ReCAPTCHA TODO: Add when finished*/}
                {/*    ref={recaptchaRef}*/}
                {/*    size="invisible"*/}
                {/*    sitekey="6Lcl1rcUAAAAAP9cwFpK09YM8xi3Lhbc0jjgSFWs"*/}
                {/*    onChange={this.onChange}*/}
                {/*/>*/}
            </form>
        );
    }
}

export default Contact;
