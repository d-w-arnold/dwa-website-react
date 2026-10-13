import MyForm, {type FormConfig} from "./MyForm";
import PageIntro from './PageIntro';

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
            klassName: 'fullname-field response',
            placeholder: 'Your name',
            description: 'A minimum of 2 characters works best.',
            autoComplete: 'name'
        },
        {
            id: 2,
            label: 'Email Address:',
            fieldName: 'emailaddress',
            type: 'email',
            isRequired: true,
            klassName: 'emailaddress-field response',
            placeholder: 'you@example.com',
            description: 'This is only used to reply to your message.',
            autoComplete: 'email'
        },
        {
            id: 3,
            label: 'Message:',
            fieldName: 'mssg',
            type: 'textarea',
            isRequired: true,
            klassName: 'mssg-field response',
            placeholder: 'Share a little context about your enquiry…',
            description: 'Include enough detail for a useful response.',
            autoComplete: 'off'
        }
    ]
};

function Contact() {
    return (
        <div className="body">
            <PageIntro
                eyebrow="Connect"
                title="Contact"
                summary="Use the form below to get in touch about engineering work, technical discussions, or collaboration opportunities."
                meta={[
                    'Secure form with reCAPTCHA',
                    'Clear context helps speed up replies',
                ]}
            />

            <div className="contactLayout roboto">
                <aside className="contactSidebar entryCard" aria-labelledby="contact-guidance-title">
                    <h3 id="contact-guidance-title" className="skillTitle">Helpful guidance</h3>
                    <ul className="detailList contactChecklist">
                        <li>Briefly describe your project, role, or question.</li>
                        <li>Mention any relevant timelines, technologies, or constraints.</li>
                        <li>Include the best email address for a response.</li>
                    </ul>
                </aside>

                <section className="contactPanel entryCard" aria-labelledby="contact-form-title">
                    <h3 id="contact-form-title" className="skillTitle">Send a message</h3>
                    <MyForm config={config}/>
                </section>
            </div>
        </div>
    );
}


export default Contact;
