import React from "react";
import './App.scss';
import Nav from './Nav';

class App extends React.Component {
    render() {
        let cv_path = '/cv/David_W_Arnold-CV-website.pdf';
        let github = 'https://github.com/d-w-arnold';
        let linkedin = 'https://uk.linkedin.com/in/david-w-arnold';
        let keybase = 'https://keybase.io/d_w_arnold';
        return (
            <React.Fragment>
                <div id="myDiv">
                    <header>
                        <div id="top">
                            <div className="alignRight">
                                <a className="iconLink" target="_blank" rel="noopener noreferrer" href={github}>
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a className="iconLink" target="_blank" rel="noopener noreferrer"
                                   href={linkedin}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a className="iconLink" target="_blank" rel="noopener noreferrer" href={keybase}>
                                    <i className="fa fa-key" aria-hidden="true"/>
                                </a>
                                <a id="cv" target="_blank" rel="noopener noreferrer"
                                   href={cv_path}>** CV (Résumé) **</a>
                            </div>
                            <div className="alignLeft">
                                <p id="delta">
                                    <a href="/">∆WA</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 id="myName"><a className="link-color" target="_blank" rel="noopener noreferrer"
                                               href={cv_path}>David W. Arnold</a></h1>
                        </div>
                    </header>
                    <Nav/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
