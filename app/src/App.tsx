import './App.scss';
import {Link} from 'react-router-dom';
import Nav from './Nav';

const cvPath = '/cv/David_W_Arnold-CV-website.pdf';
const github = 'https://github.com/d-w-arnold';
const keybase = 'https://keybase.io/d_w_arnold';
const linkedin = 'https://uk.linkedin.com/in/david-w-arnold';

function App() {
    return (
        <div id="myDiv" className="appShell">
            <header className="siteHeader entryCard">
                <div id="top">
                    <div className="alignLeft">
                        <p id="delta">
                            <Link to="/">∆WA</Link>
                        </p>
                    </div>
                    <div className="alignRight">
                        <div className="socialLinks">
                            <a className="iconLink" target="_blank" rel="noopener noreferrer" href={github} aria-label="GitHub profile">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            <a className="iconLink" target="_blank" rel="noopener noreferrer" href={linkedin} aria-label="LinkedIn profile">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a className="iconLink" target="_blank" rel="noopener noreferrer" href={keybase} aria-label="Keybase profile">
                                <i className="fa fa-key" aria-hidden="true"/>
                            </a>
                            <a id="cv" target="_blank" rel="noopener noreferrer" href={cvPath}>CV (Résumé)</a>
                        </div>
                    </div>
                </div>
                <div className="siteIdentity">
                    <h1 id="myName"><a className="link-color" target="_blank" rel="noopener noreferrer" href={cvPath}>David W. Arnold</a></h1>
                    <p className="heroIntro roboto">Software Engineer • AWS Cloud Engineer</p>
                </div>
            </header>
            <Nav/>
        </div>
    );
}

export default App;
