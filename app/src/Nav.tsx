import {NavLink, Route, Routes} from "react-router-dom";
import Computing from './components/Computing';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';

const navItems = [
    {to: '/', label: 'Home', end: true},
    {to: '/computing', label: 'Computing Skills'},
    {to: '/experience', label: 'Experience'},
    {to: '/education', label: 'Education'},
    {to: '/contact', label: 'Contact'},
];

const Nav = () => (
    <>
        <nav className="siteNav entryCard" aria-label="Primary">
            <p className="siteNavLabel roboto">Explore the portfolio</p>
            <ul>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            end={item.end}
                            className={({isActive}) => isActive ? 'siteNavLink active' : 'siteNavLink'}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        <main id="main-content" className="pageContent" tabIndex={-1}>
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
