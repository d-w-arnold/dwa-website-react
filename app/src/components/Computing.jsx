import React from "react";

function Computing() {
    let dwa_website_react = 'https://github.com/d-w-arnold/dwa_website_react';
    let my_first_website = 'https://github.com/d-w-arnold/deltawhiskeyalpha.com';
    let csv_to_txt = 'https://github.com/d-w-arnold/Reflective-Journal_CSV-to-TXT-Converter';
    let ciphertext_decrypt = 'https://github.com/d-w-arnold/CO634-Assignment-2';
    let iot_device = 'https://github.com/d-w-arnold/CO657-IoT_Device';
    let git_bisect = 'https://github.com/d-w-arnold/CO663-Git_Bisect';
    let timestamp_media = 'https://github.com/d-w-arnold/AppleScript_Timestamp-Media';
    let iot_server = 'https://github.com/d-w-arnold/CO657-IoT_Server';
    let iot_web_app = 'https://github.com/d-w-arnold/CO657-IoT_Admin_Web_App';
    let sudoku_solver = 'https://github.com/d-w-arnold/Java_Sudoku-Solver';
    let talks = 'https://github.com/d-w-arnold/Learn_Git_GitHub_JetBrains';
    let cisco_uni_cha = 'https://www.cisco.com/c/m/en_uk/training-events/university-challenge.html';
    let red_bull_careers = 'https://redbullracing.redbull.com/careers';
    let it_alan = 'http://www.it-alan.co.uk/';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Computing</p>

                <div className="roboto">
                    <table className="computingTable">
                        <tbody>
                        <tr>
                            <td className="computingSubTitle">OS's</td>
                            <td className="computingWriting">Mac OS, iOS, Windows 7/10, Ubuntu</td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Skills</td>
                            <td className="computingWriting">UNIX CLI, Git, Java, JavaScript (w/ React, jQuery, AJAX &
                                Node.js), TypeScript, Docker, PHP, MySQL, HTML, CSS, SCSS, Shell, Erlang, C, C++, Rust,
                                R, AppleScript, Markdown, LaTeX, JetBrains IDEs, Cryptography, Mathematics
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Projects</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website_react}>My First
                                    Dockerised React Website</a> (JavaScript, React, JSX, Docker, Docker-Compose, PHP,
                                HTML & CSS)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={my_first_website}>My First
                                    Website</a> (PHP, HTML, CSS, JavaScript & jQuery)<br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={csv_to_txt}>CSV
                                    to TXT
                                    Converter</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={ciphertext_decrypt}>Ciphertext
                                    Decryption</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_device}>IoT BLE &
                                    Motion Detection
                                    Device</a> (C++)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={git_bisect}>Git
                                    Bisect</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={timestamp_media}>Timestamp
                                    Media</a> (AppleScript)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_server}>IoT Central
                                    Server</a> (Java & JDBC)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_web_app}>IoT
                                    Admin Web
                                    App</a> (PHP, HTML, CSS & MySQL)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={sudoku_solver}>Sudoku
                                    Solver</a> (Java &
                                JavaFX)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={talks}>Learn:
                                    Git,
                                    GitHub and JetBrains IDEs</a> (Markdown) (Talks aimed at Year 1 and 2
                                undergraduates)
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Events</td>
                            <td className="computingWriting"><a
                                target="_blank" rel="noopener noreferrer"
                                href={cisco_uni_cha}>2017
                                Cisco
                                University Challenge</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="spacing6"/>

                <p className="title">Experience</p>

                {/*Red Bull*/}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={red_bull_careers}>Red Bull Technology /
                                Red Bull Racing</a></b></td>
                            <td className="location">Milton Keynes, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">IT Student Placement</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Jun. 2018 - Jun. 2019</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="jobDetails">
                        <p>•&nbsp;&nbsp;Responsible for supporting, maintaining and optimising internal
                            systems.</p>
                        <p>•&nbsp;&nbsp;Expected to work well both individually and as part of a team.</p>
                        <p>•&nbsp;&nbsp;Main accountabilities during role:</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Support and manage critical business
                            applications and
                            tools</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Communication, building relationships and
                            working with
                            people across teams</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Technical approach to problem solving</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Participation in project work</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Identify and propose opportunities to improve processes
                            and systems</p>
                    </div>
                </div>

                <div className="spacing4"/>

                {/*IT-Alan*/}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={it_alan}>IT-Alan</a></b></td>
                            <td className="location">Burmarsh, Kent, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">Assistant Engineer</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Jun. 2017 - Sep. 2017</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="jobDetails">
                        <p>•&nbsp;&nbsp;Computer repair & maintenance with a Microsoft Certified Systems
                            Engineer.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Computing;
