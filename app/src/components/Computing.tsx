import {computingSections} from '../content/siteContent';
import PageIntro from './PageIntro';
import RichText from './RichText';

const certificateCount = computingSections.find((section) => section.title === 'Certificates')?.items.length ?? 0;
const projectCount = computingSections.find((section) => section.title === 'Projects')?.items.length ?? 0;
const awsServiceCount = computingSections.find((section) => section.title === '*AWS Tech Stack')?.items.length ?? 0;

function Computing() {
    return (
        <div className="body">
            <PageIntro
                eyebrow="Capabilities"
                title="Computing Skills"
                summary="Hands-on platform engineering across AWS, combining Infrastructure as Code, reusable automation, and pragmatic delivery tooling shaped by building centralized cloud platforms with TypeScript, Python, CDK, and OpenTofu."
                meta={[
                    `${certificateCount} certificates & badges`,
                    `${awsServiceCount} AWS services used in practice`,
                    `${projectCount} portfolio projects across cloud, automation & tooling`,
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
