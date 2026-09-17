import {NavLink, Route, Routes} from "react-router-dom";
import Computing from './components/Computing';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';

const Nav = () => (
    <>
        <nav className="siteNav entryCard" aria-label="Primary">
            <ul>
                <li><NavLink to="/" end className={({isActive}) => isActive ? 'siteNavLink active' : 'siteNavLink'}>Home</NavLink></li>
                <li><NavLink to="/computing" className={({isActive}) => isActive ? 'siteNavLink active' : 'siteNavLink'}>Computing Skills</NavLink></li>
                <li><NavLink to="/experience" className={({isActive}) => isActive ? 'siteNavLink active' : 'siteNavLink'}>Experience</NavLink></li>
                <li><NavLink to="/education" className={({isActive}) => isActive ? 'siteNavLink active' : 'siteNavLink'}>Education</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => isActive ? 'siteNavLink active' : 'siteNavLink'}>Contact</NavLink></li>
            </ul>
        </nav>
        <main className="pageContent">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/computing" element={<Computing />}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </main>
    </>
);

export default Nav;
