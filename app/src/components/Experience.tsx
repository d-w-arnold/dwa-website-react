import {experienceEntries} from '../content/siteContent';
import EntryCard from './EntryCard';
import PageIntro from './PageIntro';

function Experience() {
    return (
        <div className="body">
            <PageIntro
                eyebrow="Career"
                title="Experience"
                summary="Selected roles covering cloud engineering, DevOps ownership, platform migration, and hands-on delivery across product teams."
                meta={[
                    `${experienceEntries.length} roles highlighted`,
                    'Cloud • DevOps • Automation',
                ]}
            />

            <div className="stackedCards">
                {experienceEntries.map((entry) => (
                    <EntryCard key={`${entry.organization.name}-${entry.dateRange}`} entry={entry}/>
                ))}
            </div>
        </div>
    );
}

export default Experience;
