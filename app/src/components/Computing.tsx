import React from "react";

function Computing() {
    // Java
    let ciphertext_decrypt = 'https://github.com/d-w-arnold/CO634-Assignment-2';
    let git_bisect = 'https://github.com/d-w-arnold/CO663-Git_Bisect';
    let iot_server = 'https://github.com/d-w-arnold/CO657-IoT_Server';
    let countdown_game = 'https://github.com/d-w-arnold/Java_countdown';
    let sudoku_solver_java = 'https://github.com/d-w-arnold/Java_Sudoku-Solver';
    let csv_to_txt = 'https://github.com/d-w-arnold/Reflective-Journal_CSV-to-TXT-Converter';
    let light_controller = 'https://github.com/d-w-arnold/Fairy_Lights_Controller';
    let data_link_protocol = 'https://github.com/d-w-arnold/CO633-Computer_Networks_Assignments';
    // Python
    let sudoku_solver_python = 'https://github.com/d-w-arnold/Python_Sudoku-Solver';
    let news_web_crawler = 'https://github.com/d-w-arnold/local_news-data_collection';
    // Shell
    let homebrew_package_auto_upgrade = 'https://github.com/d-w-arnold/check_homebrew_update';
    // Web Dev
    let dwa_website_react = 'https://github.com/d-w-arnold/dwa_website_react';
    let my_first_openAPI = 'https://github.com/d-w-arnold/online_test_DWP';
    let dwa_website = 'https://github.com/d-w-arnold/deltawhiskeyalpha.com';
    let cv_visualisation = 'https://github.com/d-w-arnold/technical_challenge_D3.js';
    let simple_questionnaire = 'https://github.com/d-w-arnold/laravel-test';
    let iot_web_app = 'https://github.com/d-w-arnold/CO657-IoT_Admin_Web_App';
    // C/C++
    let iot_device = 'https://github.com/d-w-arnold/CO657-IoT_Device';
    let cli_address_book = 'https://github.com/d-w-arnold/Command_Line_Address_Book';
    // Erlang
    let tcp_packets = 'https://github.com/d-w-arnold/CO545-Assignment-4';
    // Misc.
    let cipher_quiz = 'https://github.com/d-w-arnold/Gambit_Cipher_Quiz';
    // Non-CV
    let randomiser = 'https://github.com/d-w-arnold/Fast_Food_Ranker';
    let timestamp_media = 'https://github.com/d-w-arnold/AppleScript_Timestamp-Media';
    // Events
    let cisco_uni_cha = 'https://www.cisco.com/c/m/en_uk/training-events/university-challenge.html';
    let talks = 'https://github.com/d-w-arnold/Learn_Git_GitHub_JetBrains';
    // Experience
    let peach = 'https://www.peachvideo.com/en-gb/';
    let red_bull_careers = 'https://redbullracing.redbull.com/careers';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Computing</p>

                <div className="roboto">
                    <table className="computingTable">
                        <tbody>
                        <tr>
                            <td className="computingSubTitle">OS's</td>
                            <td className="computingWriting">Mac OS, iOS, Ubuntu, Windows 7/10</td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Skills</td>
                            <td className="computingWriting">Unix CLI, Git, JetBrains IDEs, Java, Python, Shell, Docker,
                                JavaScript (w/ React, jQuery, AJAX & Node.js), TypeScript, PHP, SQL, HTML, SCSS, C/C++,
                                Erlang, AppleScript, Markdown, LaTeX, Cryptography, Mathematics
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Projects</td>
                            <td className="computingWriting"> {/*rel="noopener noreferrer"*/}
                                {/* Java */}
                                <a target="_blank" rel="noopener noreferrer" href={ciphertext_decrypt}>Ciphertext
                                    Decryption</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={git_bisect}>Git Bisect</a> (Java &
                                Maven)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_server}>IoT Server</a> (Java &
                                JDBC)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={countdown_game}>Countdown
                                    Game</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={sudoku_solver_java}>Sudoku
                                    Solver</a> (Java & JavaFX)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={csv_to_txt}>CSV to TXT
                                    Converter</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={light_controller}>Lights
                                    Controller</a> (Java & JUnit)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={data_link_protocol}>Data-Link
                                    Protocol</a> (Java)<br/>
                                {/* Python */}
                                <a target="_blank" rel="noopener noreferrer" href={sudoku_solver_python}>Sudoku
                                    Solver</a> (Python)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={news_web_crawler}>News Web
                                    Crawler</a> (Python)<br/>
                                {/* Shell */}
                                <a target="_blank" rel="noopener noreferrer" href={homebrew_package_auto_upgrade}>Homebrew
                                    Package Auto-Upgrade</a> (Shell)<br/>
                                {/* Web Dev */}
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website_react}>My Dockerised
                                    React Website</a> (React, TypeScript, Docker, Docker-Compose, PHP & SCSS)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={my_first_openAPI}>My First
                                    OpenAPI</a> (Java, OpenAPI & Docker-Compose)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website}>My Website</a> (PHP,
                                HTML, CSS & jQuery)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cv_visualisation}>CV
                                    Visualisation</a> (React, D3.js, TypeScript & SCSS)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={simple_questionnaire}>Simple
                                    Questionnaire</a> (PHP, Laravel & MySQL)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_web_app}>IoT Admin Web
                                    App</a> (PHP, MySQL & CSS)<br/>
                                {/* C/C++ */}
                                <a target="_blank" rel="noopener noreferrer" href={iot_device}>IoT BLE & Motion
                                    Detection</a> (C++)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cli_address_book}>CLI
                                    Address Book</a> (C)<br/>
                                {/* Erlang */}
                                <a target="_blank" rel="noopener noreferrer" href={tcp_packets}>TCP Packets</a> (Erlang)<br/>
                                {/* Misc. */}
                                <a target="_blank" rel="noopener noreferrer" href={cipher_quiz}>Cipher Quiz</a> (Python,
                                C++ & Erlang)<br/>
                                {/* Non-CV */}
                                <a target="_blank" rel="noopener noreferrer"
                                   href={randomiser}>Fast Food Randomiser</a> (Shell)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={timestamp_media}>Timestamp
                                    Media</a> (AppleScript)<br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Events</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={cisco_uni_cha}>2017 Cisco University
                                    Challenge</a><br/>

                                <a target="_blank" rel="noopener noreferrer" href={talks}>Learn: Git, GitHub and
                                    JetBrains IDEs</a> (University talks)
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="spacing6"/>

                <p className="title">Experience</p>

                {/* Peach Media */}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={peach}>Peach</a></b></td>
                            <td className="location">London, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">Junior Software Engineer</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Oct. 2020 - Current</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="spacing2"/>

                {/* Red Bull */}
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
                        <p>•&nbsp;&nbsp;Achievements:</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Designed and implemented a custom Java program to
                            improve
                            productivity.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Project lead the organisation of new starter hardware
                            and
                            software delivery.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Volunteered during busy F1 race weekend.</p>
                        <p>•&nbsp;&nbsp;Responsibilities:</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Supporting, maintaining and optimising internal systems
                            on
                            an individual and team level.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Liaising with personnel across all levels of the
                            business,
                            providing excellent communications to explain procedures in a practical, and user-friendly
                            way.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Providing a level-headed and rational approach to
                            problem
                            solving, resulting in time efficient, cost effective, and creative solutions.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Acting as first point of contact for business-wide
                            hardware/software issues, including critical incidents.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Logging incidents and service requests, as well as
                            managing
                            response times.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;&nbsp;Identify and propose opportunities to improve existing
                            processes and systems.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Computing;
