import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HOME_COM from './components/Home';
import EDUCATION_COM from './components/Education';
import COMPUTING_COM from './components/Computing';
import CONTACT_COM from './components/Contact';

const BasicExample = () => (
    <Router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/computing">Computing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/education" component={Education}/>
        <Route path="/computing" component={Computing}/>
        <Route path="/contact" component={Contact}/>
    </Router>
);

const Home = () => (
    <HOME_COM/>
);

const Education = () => (
    <EDUCATION_COM/>
);

const Computing = () => (
    <COMPUTING_COM/>
);

const Contact = () => (
    <CONTACT_COM/>
);

export default BasicExample;
