import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home_Com from './components/Home';
import Education_Com from "./components/Education";
import Computing_Com from "./components/Computing";
import Contact_Com from "./components/Contact";

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/computing">Computing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/education" component={Education}/>
            <Route path="/computing" component={Computing}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
);

const Home = () => (
    <Home_Com/>
);

const Education = () => (
    <Education_Com/>
);

const Computing = () => (
    <Computing_Com/>
);

const Contact = () => (
    <Contact_Com/>
);

export default BasicExample;
