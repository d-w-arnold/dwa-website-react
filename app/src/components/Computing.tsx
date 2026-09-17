import {computingSections} from '../content/siteContent';
import PageIntro from './PageIntro';
import RichText from './RichText';

function Computing() {
    return (
        <div className="body">
            <PageIntro
                eyebrow="Capabilities"
                title="Computing Skills"
                summary="A practical mix of cloud platform engineering, automation, software delivery, and day-to-day tooling experience."
                meta={[
                    `${computingSections.length} skill groups`,
                    'AWS • Python • DevOps',
                    'Delivery-focused mindset',
                ]}
            />

            <div className="skillsGrid roboto">
                {computingSections.map((section) => (
                    <section
                        key={section.title}
                        className={`skillSection entryCard${section.wide ? ' skillSectionWide' : ''}`}
                    >
                        <h3 className="skillTitle">{section.title}</h3>
                        <ul className={`skillList${section.compact ? ' skillListCompact' : ''}`}>
                            {section.items.map((item, index) => (
                                <li key={`${section.title}-${index}`}>
                                    <RichText parts={item}/>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Computing;
