import {homeSections} from '../content/siteContent';
import RichText from './RichText';

function Home() {
    return (
        <div className="body">
            {homeSections.map((section, sectionIndex) => (
                <section
                    key={section.title}
                    className={`entryCard homeSection roboto${sectionIndex === 0 ? ' homeSectionFeatured' : ''}`}
                >
                    <h2 className="title">{section.title}</h2>
                    <div className="writing">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                            <p key={`${section.title}-${paragraphIndex}`} className={paragraphIndex < section.paragraphs.length - 1 ? 'spacing2' : undefined}>
                                <RichText parts={paragraph}/>
                            </p>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Home;
