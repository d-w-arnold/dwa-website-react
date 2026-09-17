import {educationEntries, educationNote} from '../content/siteContent';
import EntryCard from './EntryCard';
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

            <div className="stackedCards">
                {educationEntries.map((entry) => (
                    <EntryCard key={`${entry.organization.name}-${entry.dateRange}`} entry={entry}/>
                ))}
            </div>
        </div>
    );
}

export default Education;
