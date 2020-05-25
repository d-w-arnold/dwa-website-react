import React, {Fragment} from "react";
import './App.css';
import Nav from './Nav';

class App extends React.Component {
    render() {
        let cv_path = '/resources/David_W_Arnold-CV-website.pdf';
        let loading_icon = '/resources/favicon/android-chrome-192x192.png';
        let github = 'https://github.com/d-w-arnold';
        let linkedin = 'https://www.linkedin.com/in/david-w-arnold';
        let keybase = 'https://keybase.io/d_w_arnold';
        return (
            <Fragment>
                <div id="loader">
                    <div id="loading">
                        <img id="loading-icon" src={loading_icon}
                             alt="Loading ..."/>
                    </div>
                </div>
                <div id="myDiv" className="animate-bottom">
                    <header>
                        <div id="top">
                            <div className="alignRight">
                                <a className="iconLink" target="_blank" rel="noopener noreferrer" href={github}>
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a className="iconLink" target="_blank" rel="noopener noreferrer"
                                   href={linkedin}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a className="iconLink" target="_blank" rel="noopener noreferrer" href={keybase}>
                                    <i className="fa fa-key" aria-hidden="true"></i>
                                </a>
                                <a id="cv" target="_blank" rel="noopener noreferrer"
                                   href="/resources/David_W_Arnold-CV-website.pdf">** CV
                                    (Résumé) **</a>
                            </div>
                            <div className="alignLeft">
                                <p id="delta">
                                    <a href="/">∆WA</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 id="myName"><a className="link-color" target="_blank" rel="noopener noreferrer"
                                               href={cv_path}>David W.
                                Arnold</a></h1>
                        </div>
                    </header>
                    <Nav/>
                </div>
            </Fragment>
        );
    }
}

export default App;
