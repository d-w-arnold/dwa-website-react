// @ts-ignore
import React from "react";
import {BrowserRouter as BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HOME_COM from './components/Home';
import EDUCATION_COM from './components/Education';
import COMPUTING_COM from './components/Computing';
import CONTACT_COM from './components/Contact';

const BasicExample = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/computing">Computing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/computing" element={<Computing />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
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
