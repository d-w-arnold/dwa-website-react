import {Link, Route, Routes} from "react-router-dom";
import Computing from './components/Computing';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';

const Nav = () => (
    <>
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
            <Route path="/" element={<Home/>}/>
            <Route path="/computing" element={<Computing />}/>
            <Route path="/experience" element={<Experience />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </>
);

export default Nav;
