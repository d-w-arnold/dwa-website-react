import {Link} from "react-router-dom";

function Education() {
    const cipher_decrypt = 'https://github.com/d-w-arnold/ciphertext-decryption';
    const comp_net_com = 'https://www.kent.ac.uk/courses/modules/module/COMP6330';
    const comp_sci_year_ind = 'https://www.kent.ac.uk/courses/undergraduate/128/computer-science-with-a-year-in-industry';
    const comp_sec_crypt = 'https://www.kent.ac.uk/courses/modules/module/COMP6340';
    const data_mining = 'https://www.kent.ac.uk/courses/modules/module/COMP8320';
    const harvey = 'http://www.harveygs.kent.sch.uk';
    const iot = 'https://www.kent.ac.uk/courses/modules/module/COMP6570';
    const newberry = 'https://www.newberry.edu';
    const open_uni = 'https://www.open.ac.uk';
    const prog_lang_imp = 'https://www.kent.ac.uk/courses/modules/module/COMP6580';
    const prog_langs_app = 'https://www.kent.ac.uk/courses/modules/module/COMP6630';
    const research_project = '/research/Quantum_Cryptography-Security_for_the_Post-Quantum_world.pdf';
    const uni_of_kent = 'https://www.kent.ac.uk/';

    return (
        <div className="body">
            <h2 className="title">Education</h2>

            <div className="roboto">
                <p className="uniCourseDetails note">
                    NB. See my AWS certificates in the <Link className="link-color" to="/computing">Computing Skills</Link> section.
                </p>
            </div>

            <div className="spacing4"/>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconUni" aria-hidden="true"/><a
                            target="_blank" rel="noopener noreferrer" href={uni_of_kent}>University of Kent</a></h3>
                        <p className="jobTitle">(First-Class Honours) <a className="link-color" target="_blank" rel="noopener noreferrer" href={comp_sci_year_ind}>BSc Computer Science with a Year in Industry</a></p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">Canterbury, U.K.</p>
                        <p className="jobDates">Sep. 2016 - Jun. 2020</p>
                    </div>
                </header>

                <div className="uniCourseDetails">
                    <ul className="detailList">
                        <li>
                            Year 3: 82%
                            <ul className="nestedDetailList">
                                <li>(First-Class) <span className="iconPaper" aria-hidden="true"/>Research Project - <a className="link-color" target="_blank" rel="noopener noreferrer" href={research_project}>"Quantum Cryptography: Security for the Post-Quantum world"</a></li>
                                <li>Awarded: Most Exciting Idea for Global Outreach - Sponsored by <a className="link-color" target="_blank" rel="noopener noreferrer" href="https://www.tmlep.com/">TMLEP</a></li>
                                <li>92% <a className="link-color" target="_blank" rel="noopener noreferrer" href={comp_sec_crypt}>Computer Security and Cryptography</a> [ Java ] - Featuring my <a className="link-color" target="_blank" rel="noopener noreferrer" href={cipher_decrypt}>favourite assignment</a> ^_^</li>
                                <li>88% <a className="link-color" target="_blank" rel="noopener noreferrer" href={comp_net_com}>Computer Networks and Communication</a> [ Java ]</li>
                                <li>88% <a className="link-color" target="_blank" rel="noopener noreferrer" href={prog_lang_imp}>Programming Language Implementation</a> [ OCaml | C ]</li>
                                <li>88% <a className="link-color" target="_blank" rel="noopener noreferrer" href={prog_langs_app}>Programming Languages: Applications and Design</a> [ Java | Rust | Haskell ]</li>
                                <li>82% <a className="link-color" target="_blank" rel="noopener noreferrer" href={data_mining}>(Masters) Data Mining and Knowledge Discovery</a> [ R ]</li>
                                <li>70% <a className="link-color" target="_blank" rel="noopener noreferrer" href={iot}>Internet of Things</a> [ C++ Arduino | Java | JDBC | MySQL | PHP | CSS ]</li>
                            </ul>
                        </li>
                        <li>Year 2: 78% [ Java | Erlang | JavaScript | jQuery | AJAX | PHP | HTML | CSS | Haskell ]</li>
                        <li>Year 1: 86% [ Java | JavaScript | MySQL | PHP | HTML | CSS ]</li>
                    </ul>
                </div>
            </section>

            <div className="spacing2"/>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconUni" aria-hidden="true"/><a
                            target="_blank" rel="noopener noreferrer" href={newberry}>Newberry College</a></h3>
                        <p className="jobTitle">Mathematics Major</p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">Newberry, South Carolina, U.S.A.</p>
                        <p className="jobDates">Jan. 2015 - Oct. 2015</p>
                    </div>
                </header>

                <div className="uniCourseDetails">
                    <ul className="detailList">
                        <li>I was offered a 100% scholarship (golf and academic) to play for the Newberry College NCAA (National Collegiate Athletic Association) golf team while studying as a Mathematics Major.</li>
                        <li>My GPA (Grade Point Average) for the time I was there was 3.8/4.0 (A-Grade).</li>
                    </ul>
                </div>
            </section>

            <div className="spacing2"/>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconUni" aria-hidden="true"/><a
                            target="_blank" rel="noopener noreferrer" href={open_uni}>The Open University</a></h3>
                        <p className="jobTitle">Certificate of Higher Education (Open)</p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">(Remote) - Milton Keynes, U.K.</p>
                        <p className="jobDates">Jun. 2012 - Jul. 2014</p>
                    </div>
                </header>

                <div className="uniCourseDetails">
                    <ul className="detailList">
                        <li>I studied (part-time) for two years: Computing, Psychology and Mathematics.</li>
                        <li>Computing: Overall Continuous Assessment Score: 75%, Overall Examinable Score: 89%</li>
                    </ul>
                </div>
            </section>

            <div className="spacing2"/>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconUni" aria-hidden="true"/><a
                            target="_blank" rel="noopener noreferrer" href={harvey}>The Harvey Grammar School</a></h3>
                        <p className="jobTitle">GCSE (General Certificate of Higher Education)</p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">Folkestone, U.K.</p>
                        <p className="jobDates">Sep. 2007 - Jul. 2012</p>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Education;
