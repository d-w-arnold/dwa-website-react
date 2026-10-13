import type {EntryData, ListItemData} from '../content/siteContent';
import RichText from './RichText';

type TimelineCardProps = {
    entry: EntryData;
    index: number;
};

function DetailList({items}: {items: ListItemData[]}) {
    return (
        <ul className="detailList">
            {items.map((item, itemIndex) => (
                <li key={`${item.parts.map((part) => part.type).join('-')}-${itemIndex}`}>
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
            {items.map((item, itemIndex) => (
                <li key={`${item.parts.map((part) => part.type).join('-')}-${itemIndex}`}>
                    <RichText parts={item.parts}/>
                    {item.nestedItems ? <NestedDetailList items={item.nestedItems}/> : null}
                </li>
            ))}
        </ul>
    );
}

function TimelineCard({entry, index}: TimelineCardProps) {
    return (
        <div className="timelineCard roboto">
            <div className="timelineMarker">{index + 1}</div>
            <div className="timelineContent">
                <div className="timelineCardHeader">
                    <div>
                        <h3 className="timelineCompany">
                            <a target="_blank" rel="noopener noreferrer" href={entry.organization.href}>
                                {entry.organization.name}
                            </a>
                        </h3>
                        <p className="timelineTitle">
                            <RichText parts={entry.title}/>
                        </p>
                    </div>
                    <span className="timelineDate">{entry.dateRange}</span>
                </div>

                <p className="timelineLocation">{entry.location}</p>

                {entry.details ? (
                    <div className="timelineDetails">
                        <DetailList items={entry.details}/>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default TimelineCard;

