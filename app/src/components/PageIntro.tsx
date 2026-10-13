type PageIntroProps = {
    eyebrow?: string;
    title: string;
    summary: string;
    meta?: string[];
};

function PageIntro({eyebrow, title, summary, meta = []}: PageIntroProps) {
    return (
        <section className="pageIntro entryCard roboto">
            {eyebrow ? <p className="pageEyebrow">{eyebrow}</p> : null}
            <h2 className="title pageTitle">{title}</h2>
            <p className="pageSummary">{summary}</p>

            {meta.length > 0 ? (
                <ul className="pageMeta" aria-label={`${title} highlights`}>
                    {meta.map((item) => (
                        <li key={item} className="pageMetaItem">{item}</li>
                    ))}
                </ul>
            ) : null}
        </section>
    );
}

export default PageIntro;
