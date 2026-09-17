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
                <p className="title">Education</p>

                <div className="roboto">
                    <div className="uniCourseDetails">
                        NB. See my AWS certificates in the <Link className="link-color" to="/computing">Computing Skills</Link> section.
                    </div>
                </div>

                <div className="spacing4"/>

                {/*University of Kent*/}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconUni" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={uni_of_kent}>University of Kent</a></b>
                            </td>
                            <td className="location">Canterbury, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">(First-Class Honours) <a className="link-color" target="_blank" rel="noopener noreferrer" href={comp_sci_year_ind}>BSc Computer Science with a Year in Industry</a></td>
                        </tr>
                        <tr>
                            <td className="jobDates">Sep. 2016 - Jun. 2020</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="uniCourseDetails">
                        <p>•&nbsp;&nbsp;Year 3: 82%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;(First-Class) <span className="iconPaper" aria-hidden="true"/>Research Project - <a className="link-color" target="_blank" rel="noopener noreferrer" href={research_project}>"Quantum Cryptography: Security for the Post-Quantum world"</a></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Awarded: Most Exciting Idea for Global Outreach - Sponsored by <a className="link-color" target="_blank" rel="noopener noreferrer" href="https://www.tmlep.com/">TMLEP</a></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;92% <a className="link-color" target="_blank" rel="noopener noreferrer" href={comp_sec_crypt}>Computer Security and Cryptography</a> [ Java ] - Featuring my <a className="link-color" target="_blank" rel="noopener noreferrer" href={cipher_decrypt}>favourite assignment</a> ^_^</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;88% <a className="link-color" target="_blank" rel="noopener noreferrer" href={comp_net_com}>Computer Networks and Communication</a> [ Java ]</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;88% <a className="link-color" target="_blank" rel="noopener noreferrer" href={prog_lang_imp}>Programming Language Implementation</a> [ OCaml | C ]</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;88% <a className="link-color" target="_blank" rel="noopener noreferrer" href={prog_langs_app}>Programming Languages: Applications and Design</a> [ Java | Rust | Haskell ]</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;82% <a className="link-color" target="_blank" rel="noopener noreferrer" href={data_mining}>(Masters) Data Mining and Knowledge Discovery</a> [ R ]</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;70% <a className="link-color" target="_blank" rel="noopener noreferrer" href={iot}>Internet of Things</a> [ C++ Arduino | Java | JDBC | MySQL | PHP | CSS ]</p>
                        <p>•&nbsp;&nbsp;Year 2: 78% [ Java | Erlang | JavaScript | jQuery | AJAX | PHP | HTML | CSS | Haskell ]</p>
                        <p>•&nbsp;&nbsp;Year 1: 86% [ Java | JavaScript | MySQL | PHP | HTML | CSS ]</p>
                    </div>
                </div>

                <div className="spacing2"/>

                {/*Newberry College*/}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconUni" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={newberry}>Newberry College</a></b></td>
                            <td className="location">Newberry, South Carolina, U.S.A.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">Mathematics Major</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Jan. 2015 - Oct. 2015</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="uniCourseDetails">
                        <p>•&nbsp;&nbsp;I was offered a 100% scholarship (golf and academic) to play for the
                            Newberry
                            College NCAA (National Collegiate Athletic Association) golf team while studying as
                            a
                            Mathematics Major.</p>
                        <p>•&nbsp;&nbsp;My GPA (Grade Point Average) for the time I was there was 3.8/4.0
                            (A-Grade).</p>
                    </div>
                </div>

                <div className="spacing2"/>

                {/*The Open University*/}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconUni" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={open_uni}>The Open University</a></b>
                            </td>
                            <td className="location">(Remote) - Milton Keynes, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">Certificate of Higher Education (Open)</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Jun. 2012 - Jul. 2014</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="uniCourseDetails">
                        <p>•&nbsp;&nbsp;I studied (part-time) for two years: Computing, Psychology and
                            Mathematics.</p>
                        <p>•&nbsp;&nbsp;Computing: Overall Continuous Assessment Score: 75%, Overall Examinable
                            Score:
                            89%</p>
                    </div>
                </div>

                <div className="spacing2"/>

                {/*The Harvey Grammar School*/}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconUni" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={harvey}>The Harvey Grammar
                                School</a></b>
                            </td>
                            <td className="location">Folkestone, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">GCSE (General Certificate of Higher Education)</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Sep. 2007 - Jul. 2012</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Education;
