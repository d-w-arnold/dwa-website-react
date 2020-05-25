import React, {Fragment} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import GITHUB_ICON from '../github_white.png';
import KEYBASE_ICON from '../keybase-tile.svg';

function Contact() {
    let github = 'https://github.com/d-w-arnold';
    let keybase = 'https://keybase.io/d_w_arnold';
    return (
        <Fragment>
            <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/>
            <div className="body">

                {/*TODO: React form validation*/}

                <p id="contactTitle" className="title">Contact</p>

                <div className="roboto">
                    <div className="contact-details">
                        <div className="left">
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

const recaptchaRef = React.createRef();

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            emailaddress: '',
            mssg: ''
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

    render() {
        return (
            <form id="contact-form" onSubmit={() => {
                recaptchaRef.current.execute();
            }}>
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
                <button type="submit" id="button" tabIndex="4">Send Your Message</button>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lcl1rcUAAAAAP9cwFpK09YM8xi3Lhbc0jjgSFWs"
                    onChange={this.onChange}
                />
            </form>
        );
    }
}

export default Contact;
