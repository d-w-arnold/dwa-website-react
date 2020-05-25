import React, {Fragment} from "react";
import './App.css';
import Nav from './Nav';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="loader">
                    <div id="loading">
                        <img id="loading-icon" src="%PUBLIC_URL%/resources/favicon/android-chrome-192x192.png"
                             alt="Loading ..."/>
                    </div>
                </div>
                <div id="myDiv" className="animate-bottom">
                    <header>
                        <div id="top">
                            <div className="alignRight">
                                <a className="iconLink" target="_blank" href="https://github.com/d-w-arnold">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a className="iconLink" target="_blank"
                                   href="https://www.linkedin.com/in/david-w-arnold">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a className="iconLink" target="_blank" href="https://keybase.io/d_w_arnold">
                                    <i className="fa fa-key" aria-hidden="true"></i>
                                </a>
                                <a id="cv" target="_blank" href="/resources/David_W_Arnold-CV-website.pdf">** CV
                                    (Résumé) **</a>
                            </div>
                            <div className="alignLeft">
                                <p id="delta">
                                    <a href="/">∆WA</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 id="myName"><a className="link-color" target="_blank"
                                               href="/resources/David_W_Arnold-CV-website.pdf">David W.
                                Arnold</a></h1>
                        </div>
                        <Nav/>
                    </header>
                </div>
            </Fragment>
        );
    }
}

export default App;
