import React, {Fragment} from "react";
import GITHUB_ICON from '../github_white.png';
import KEYBASE_ICON from '../keybase-tile.svg';

function Contact() {
    let github = 'https://github.com/d-w-arnold';
    let keybase = 'https://keybase.io/d_w_arnold';
    return (
        <Fragment>
            <div className="body">

                <script src="https://www.google.com/recaptcha/api.js" async defer/>
                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/>

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
                            {/*TODO: Form*/}
                            Form
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Contact;
