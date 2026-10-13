import {experienceEntries} from '../content/siteContent';
import TimelineCard from './TimelineCard';
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

            <div className="timelineCards entryCard">
                {experienceEntries.map((entry, index) => (
                    <TimelineCard key={`${entry.organization.name}-${entry.dateRange}`} entry={entry} index={index}/>
                ))}
            </div>
        </div>
    );
}

export default Experience;
