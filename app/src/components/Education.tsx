import {educationEntries, educationNote} from '../content/siteContent';
import TimelineCard from './TimelineCard';
import PageIntro from './PageIntro';
import RichText from './RichText';

function Education() {
    return (
        <div className="body">
            <PageIntro
                eyebrow="Learning"
                title="Education"
                summary="Academic work, research, and continuing development that underpin the engineering experience showcased across the site."
                meta={[
                    `${educationEntries.length} education milestones`,
                    'Research • coursework • growth',
                ]}
            />

            <div className="roboto">
                <p className="uniCourseDetails note">
                    <RichText parts={educationNote}/>
                </p>
            </div>

            <div className="spacing4"/>

            <div className="timelineCards entryCard">
                {educationEntries.map((entry, index) => (
                    <TimelineCard key={`${entry.organization.name}-${entry.dateRange}`} entry={entry} index={index}/>
                ))}
            </div>
        </div>
    );
}

export default Education;
