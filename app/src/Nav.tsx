// @ts-ignore
import React from "react";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import COMPUTING_COM from './components/Computing';
import CONTACT_COM from './components/Contact';
import EDUCATION_COM from './components/Education';
import EXPERIENCE_COM from './components/Experience';
import HOME_COM from './components/Home';

const BasicExample = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/computing">Computing Skills</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/computing" element={<ComputingSkills />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
);

const Home = () => (
    <HOME_COM/>
);

const ComputingSkills = () => (
    <COMPUTING_COM/>
);

const Experience = () => (
    <EXPERIENCE_COM/>
);

const Education = () => (
    <EDUCATION_COM/>
);

const Contact = () => (
    <CONTACT_COM/>
);

export default BasicExample;
