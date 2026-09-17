import MyForm, {type FormConfig} from "./MyForm";

/*
 * Config consumed by the contact form component.
 * - api: server endpoint URL
 * - successMessage/errorMessage: submission feedback
 * - fields: initial field values
 * - fieldsConfig: rendering details for each input/textarea
 */
const config: FormConfig = {
    api: import.meta.env.VITE_API ?? '',
    sitekey: import.meta.env.VITE_RECAPTCHA_SITEKEY ?? '',
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
};

function Contact() {
    return (
        <div className="body">
            <h2 id="contactTitle" className="title">Contact</h2>

            <div className="roboto">
                <div className="contact-details">
                    <div className="right">
                        <MyForm config={config}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;
