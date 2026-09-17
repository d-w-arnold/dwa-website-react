import './App.scss';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import {computingSections, educationEntries, experienceEntries} from './content/siteContent';

const cvPath = '/cv/David_W_Arnold-CV-website.pdf';
const github = 'https://github.com/d-w-arnold';
const keybase = 'https://keybase.io/d_w_arnold';
const linkedin = 'https://uk.linkedin.com/in/david-w-arnold';

const profileHighlights = [
    {label: 'Skill areas', value: `${computingSections.length}+`},
    {label: 'Roles highlighted', value: `${experienceEntries.length}`},
    {label: 'Education milestones', value: `${educationEntries.length}`},
];

function App() {
    return (
        <div id="myDiv" className="appShell">
            <a className="skipLink roboto" href="#main-content">Skip to content</a>
            <header className="siteHeader entryCard">
                <div className="siteHeaderTop">
                    <div className="alignLeft">
                        <p id="delta">
                            <Link className="brandMark" to="/">∆WA</Link>
                        </p>
                    </div>

                    <div className="alignRight">
                        <div className="socialLinks" aria-label="External profiles">
                            <a className="iconLink" target="_blank" rel="noopener noreferrer" href={github} aria-label="GitHub profile">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            <a className="iconLink" target="_blank" rel="noopener noreferrer" href={linkedin} aria-label="LinkedIn profile">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a className="iconLink" target="_blank" rel="noopener noreferrer" href={keybase} aria-label="Keybase profile">
                                <i className="fa fa-key" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="siteHero">
                    <div className="siteIdentity">
                        <p className="heroEyebrow roboto">Portfolio • Cloud &amp; Software Engineering</p>
                        <h1 id="myName">
                            <a className="link-color" target="_blank" rel="noopener noreferrer" href={cvPath}>David W. Arnold</a>
                        </h1>
                        <p className="heroIntro roboto">Software Engineer • AWS Cloud Engineer</p>
                        <p className="heroSummary roboto">
                            Building reliable cloud platforms, automation workflows, and maintainable engineering systems with a practical delivery mindset.
                        </p>

                        <div className="heroActions roboto">
                            <Link className="heroAction heroActionSecondary" to="/experience">View Experience</Link>
                            <Link className="heroAction heroActionGhost" to="/computing">Explore Skills</Link>
                            <a id="cv" className="heroAction" target="_blank" rel="noopener noreferrer" href={cvPath}>Download CV</a>
                        </div>
                    </div>

                    <section className="heroStats roboto" aria-label="Profile overview">
                        {profileHighlights.map((item) => (
                            <div key={item.label} className="heroStat entryCard">
                                <p className="heroStatValue">{item.value}</p>
                                <p className="heroStatLabel">{item.label}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </header>
            <Nav/>
        </div>
    );
}

export default App;
