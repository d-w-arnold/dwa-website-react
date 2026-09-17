 import type {EntryData, ListItemData} from '../content/siteContent';
import RichText from './RichText';

type EntryCardProps = {
    entry: EntryData;
};

function DetailList({items}: {items: ListItemData[]}) {
    return (
        <ul className="detailList">
            {items.map((item, index) => (
                <li key={`${item.parts.map((part) => part.type).join('-')}-${index}`}>
                    <RichText parts={item.parts}/>
                    {item.nestedItems ? <NestedDetailList items={item.nestedItems}/> : null}
                </li>
            ))}
        </ul>
    );
}

function NestedDetailList({items}: {items: ListItemData[]}) {
    return (
        <ul className="nestedDetailList">
            {items.map((item, index) => (
                <li key={`${item.parts.map((part) => part.type).join('-')}-${index}`}>
                    <RichText parts={item.parts}/>
                    {item.nestedItems ? <NestedDetailList items={item.nestedItems}/> : null}
                </li>
            ))}
        </ul>
    );
}

function EntryCard({entry}: EntryCardProps) {
    return (
        <section className="entryCard roboto">
            <header className="entryHeader marginBottom2">
                <div>
                    <h3 className="employerName">
                        <span className={entry.organization.iconClass} aria-hidden="true"/>
                        <a target="_blank" rel="noopener noreferrer" href={entry.organization.href}>
                            {entry.organization.name}
                        </a>
                    </h3>
                    <p className="jobTitle">
                        <RichText parts={entry.title}/>
                    </p>
                </div>
                <div className="entryMeta">
                    <p className="location">{entry.location}</p>
                    <p className="jobDates">{entry.dateRange}</p>
                </div>
            </header>

            {entry.details ? (
                <div className="jobDetails">
                    <DetailList items={entry.details}/>
                </div>
            ) : null}
        </section>
    );
}

export default EntryCard;

