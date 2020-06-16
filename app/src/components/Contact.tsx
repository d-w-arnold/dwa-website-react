import React from "react";
import GITHUB_ICON from '../icons/github_white.png';
import KEYBASE_ICON from '../icons/keybase-tile.svg';
import MyForm from "./MyForm";

/**
 * @config preparing config prop.
 * api: url for the server endpoint
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be the same
 * fieldsConfig = settings for each input/textarea field
 */
const config = {
    api: `${process.env.REACT_APP_API}`,
    successMessage: 'Thank you for contacting me, I\'ll be in touch!',
    errorMessage: 'Sorry we have some problems.',
    fields: {
        fullname: '',
        emailaddress: '',
        mssg: ''
    },
    fieldsConfig: [
        {
            id: 1,
            label: 'Name:',
            fieldName: 'fullname',
            type: 'text',
            isRequired: true,
            klassName: 'fullname-field response'
        },
        {
            id: 2,
            label: 'Email Address:',
            fieldName: 'emailaddress',
            type: 'email',
            isRequired: true,
            klassName: 'emailaddress-field response'
        },
        {
            id: 3,
            label: 'Message:',
            fieldName: 'mssg',
            type: 'textarea',
            isRequired: true,
            klassName: 'mssg-field response'
        }
    ]
}

function Contact() {
    let github = 'https://github.com/d-w-arnold';
    let keybase = 'https://keybase.io/d_w_arnold';
    // @ts-ignore
    return (
        <React.Fragment>
            <div className="body">

                <p id="contactTitle" className="title">Contact</p>

                <div className="roboto">
                    <div className="contact-details">
                        <div className="left">
                            {/*TODO: LinkedIn badge not appearing when website loaded from a component other than Contact*/}
                            <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                                 data-type="vertical" data-theme="dark" data-vanity="david-w-arnold"><a
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
                            <MyForm config={config}/>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Contact;
