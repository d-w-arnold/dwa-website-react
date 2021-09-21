import React from "react";

function Education() {
    let report_path = '/research/Quantum_Cryptography-Security_for_the_Post-Quantum_world.pdf';
    let uni_of_kent = 'https://www.kent.ac.uk/';
    let newberry = 'https://www.newberry.edu';
    let open_uni = 'https://www.open.ac.uk';
    let harvey = 'http://www.harveygs.kent.sch.uk';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Education</p>

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
                            <td className="jobTitle">BSc Computer Science with a Year in Industry (First-Class
                                Honours)
                            </td>
                        </tr>
                        <tr>
                            <td className="jobDates">Sep. 2016 - Jun. 2020</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="uniCourseDetails">
                        <p>•&nbsp;&nbsp;Year 3: 82%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;<span className="iconPaper" aria-hidden="true"/><a
                            className="link-color" target="_blank" rel="noopener noreferrer" href={report_path}>Research
                            Project</a> - "Quantum Cryptography: Security for the Post-Quantum world": 1st class</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Awarded: Most Exciting Idea for
                            Global Outreach - Sponsored by <a className="link-color" target="_blank"
                                                              rel="noopener noreferrer"
                                                              href="https://www.tmlep.com/">TMLEP</a></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Computer Networks and Communication (Java): 88%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Computer Security and Cryptography (Java): 92%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Internet of Things (C++ Arduino, Java, JDBC, MySQL, PHP
                            & CSS): 70%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Programming Language Implementation (OCaml & C): 88%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Programming Languages: Application and Design
                            (Java, Rust & Haskell): 88%</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;(Masters) Data Mining and Knowledge Discovery
                            (R): 82%</p>
                        <p>•&nbsp;&nbsp;Year 2: 78% (Java, Erlang, JavaScript, jQuery, AJAX, PHP, HTML, CSS &
                            Haskell)</p>
                        <p>•&nbsp;&nbsp;Year 1: 86% (Java, JavaScript, MySQL, PHP, HTML & CSS)</p>
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
                        <p>•&nbsp;&nbsp;My GPA (Grade Point Average) for the time I was there was 3.80/4.00
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
                            <td className="location">Milton Keynes, U.K.</td>
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

                    <div className="uniCourseDetails">
                        <p>•&nbsp;&nbsp;(A-Grade): Mathematics, Science, Additional Science, English, Design &
                            Technology: Resistant Materials, BTEC Level 2 Certificate in Sport - Distinction*</p>
                        <p>•&nbsp;&nbsp;(B-Grade): Physical Education, English Literature, Geography, Media
                            Studies</p>
                        <p>•&nbsp;&nbsp;(C-Grade): Business Studies, Statistics</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;
