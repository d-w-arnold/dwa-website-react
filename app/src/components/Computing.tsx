import React from "react";

function Computing() {
    // Certs
    let aws_cloud_solu_arch_assoc = 'https://www.credly.com/badges/8847454f-bed9-4f5a-a443-1a26d1cfb2bd'
    let aws_cloud_pract = 'https://www.credly.com/badges/56620dbe-7a8a-4213-985b-05269b168480'
    let hackerrank = 'https://www.hackerrank.com/dwarnold'
    // Java
    let ciphertext_decryption = 'https://github.com/d-w-arnold/ciphertext-decryption';
    let countdown_game = 'https://github.com/d-w-arnold/java-countdown';
    let csv_to_txt = 'https://github.com/d-w-arnold/reflective-journal-CSV-to-TXT-converter';
    let data_link_protocol = 'https://github.com/d-w-arnold/CO633-computer-networks-assignments';
    let git_bisect = 'https://github.com/d-w-arnold/CO663-git-bisect';
    let iot_server = 'https://github.com/d-w-arnold/CO657-IoT-server';
    let java_hackerrank = 'https://github.com/d-w-arnold/java-hackerrank';
    let java_sudoku_solver = 'https://github.com/d-w-arnold/java-sudoku-solver';
    let light_controller = 'https://github.com/d-w-arnold/fairy-lights-controller';
    // Python
    let news_web_crawler = 'https://github.com/d-w-arnold/local-news-data-collection';
    let python_sudoku_solver = 'https://github.com/d-w-arnold/python-sudoku-solver';
    let python_hackerrank = 'https://github.com/d-w-arnold/python-hackerrank';
    // Shell
    let homebrew_auto_upgrade = 'https://github.com/d-w-arnold/homebrew-auto-upgrade';
    let open_all_images = 'https://github.com/d-w-arnold/macOS-open-all-images';
    // Web Dev
    let cv_visualisation = 'https://github.com/d-w-arnold/technical-challenge-D3.js';
    let dwa_website_first = 'https://github.com/d-w-arnold/dwa-website-first';
    let dwa_website_react = 'https://github.com/d-w-arnold/dwa-website-react';
    let iot_web_app = 'https://github.com/d-w-arnold/CO657-IoT-admin-web-app';
    let my_first_openAPI = 'https://github.com/d-w-arnold/my-first-openAPI';
    // C/C++
    let cli_address_book = 'https://github.com/d-w-arnold/command-line-address-book';
    let iot_device = 'https://github.com/d-w-arnold/bluetooth-IoT-device';
    // Misc.
    let cipher_quiz = 'https://github.com/d-w-arnold/gambit-cipher-quiz';
    let tcp_packets = 'https://github.com/d-w-arnold/CO545-assignment-4';
    // Non-CV
    let fast_food_randomiser = 'https://github.com/d-w-arnold/fast-food-randomiser';
    let timestamp_media = 'https://github.com/d-w-arnold/appleScript-timestamp-media';
    // Events
    let cisco_uni_cha = 'https://www.cisco.com/c/m/en_uk/training-events/university-challenge.html';
    let talks = 'https://github.com/d-w-arnold/learn-git-gitHub-jetBrains';
    // Experience
    let sihealth = 'https://www.sihealth.co.uk/';
    let peach = 'https://www.peach.me/en-gb/';
    let red_bull_careers = 'https://www.redbull.com/int-en/redbullracing';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Computing</p>

                <div className="roboto">
                    <table className="computingTable">
                        <tbody>
                        <tr>
                            <td className="computingSubTitle">Certs</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={aws_cloud_solu_arch_assoc}>AWS
                                    Certified Solutions Architect – Associate</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={aws_cloud_pract}>AWS Certified Cloud
                                    Practitioner</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={hackerrank}>HackerRank Problem
                                    Solving 6-Star</a><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Skills</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={'https://github.com/aws/aws-cdk'}>AWS
                                    CDK</a> (AWS Cloud Development Kit),
                                Python3 (w/ <a target="_blank" rel="noopener noreferrer"
                                               href={'https://www.jetbrains.com/pycharm/'}>PyCharm</a>, <a
                                target="_blank" rel="noopener noreferrer"
                                href={'https://github.com/boto/boto3'}>Boto3</a>),
                                Unix CLI (w/ <a target="_blank" rel="noopener noreferrer"
                                                href={'https://github.com/aws/aws-cli'}>AWS CLI</a>),
                                Git (w/ Bitbucket),
                                Docker (w/ <a target="_blank" rel="noopener noreferrer"
                                              href={'https://aws.amazon.com/ecr/'}>AWS ECR</a>),
                                Shell Scripting,
                                MySQL,
                                Markdown,
                                LaTeX,
                                Cryptography,
                                Mathematics
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">OS's</td>
                            <td className="computingWriting">macOS, iOS, Ubuntu, Amazon Linux, Windows 7/10</td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Projects</td>
                            <td className="computingWriting"> {/*rel="noopener noreferrer"*/}
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website_react}>My React
                                    Website</a> (React, TypeScript, SCSS & AWS Lambda Python3)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={ciphertext_decryption}>Ciphertext
                                    Decryption</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={homebrew_auto_upgrade}>Homebrew
                                    Package Auto-Upgrade</a> (Shell)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={java_hackerrank}>Java
                                    HackerRank</a> (Java & JUnit)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={git_bisect}>Git Bisect</a> (Java &
                                Maven)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={light_controller}>Lights
                                    Controller</a> (Java & JUnit)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={java_sudoku_solver}>Sudoku
                                    Solver</a> (Java & JavaFX)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_server}>IoT Server</a> (Java &
                                JDBC)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={data_link_protocol}>Data-Link
                                    Protocol</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={countdown_game}>Countdown CLI
                                    Game</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={csv_to_txt}>CSV to TXT
                                    Converter</a> (Java)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={python_hackerrank}>Python
                                    HackerRank</a> (Python3 & UT)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={python_sudoku_solver}>Sudoku
                                    Solver</a> (Python3)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={news_web_crawler}>News Web
                                    Crawler</a> (Python3)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={my_first_openAPI}>My First
                                    OpenAPI</a> (Java, OpenAPI & Docker-Compose)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website_first}>My First
                                    Website</a> (PHP, HTML, CSS & jQuery)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cv_visualisation}>CV
                                    Visualisation</a> (React, D3.js, TypeScript & SCSS)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_web_app}>IoT Admin Web
                                    App</a> (MySQL, PHP & CSS)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={iot_device}>IoT BLE Device</a> (C++
                                Arduino)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cli_address_book}>CLI
                                    Address Book</a> (C)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={tcp_packets}>TCP Packets</a> (Erlang)<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cipher_quiz}>Cipher
                                    Quiz</a> (Python3,
                                C++ & Erlang)<br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={open_all_images}>Open All Images</a> (Shell & AppleScript)<br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={fast_food_randomiser}>Fast Food Randomiser</a> (Shell)<br/>
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

                {/* siHealth */}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={sihealth}>siHealth</a></b></td>
                            <td className="location">Harwell Campus, Didcot, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">DevOps Engineer</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Nov. 2021 - Current</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="jobDetails">
                        <p>•&nbsp;&nbsp;Lead the company's transition of cloud resources from Azure to AWS.</p>
                        <p>•&nbsp;&nbsp;Implemented a new AWS architecture process using AWS CDK (AWS Cloud Development
                            Kit).</p>
                        <p>•&nbsp;&nbsp;Tech stack: macOS, AWS CDK, Python3 (w/ PyCharm, Boto3), Unix CLI (w/ AWS CLI),
                            Git (w/ Bitbucket), Docker (w/ AWS ECR), Shell Scripting, MySQL</p>
                    </div>
                </div>

                <div className="spacing2"/>

                {/* Peach Media */}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={peach}>Peach</a></b></td>
                            <td className="location">(Remote) - London, U.K.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="jobTitle">Junior Software Engineer</td>
                        </tr>
                        <tr>
                            <td className="jobDates">Oct. 2020 - Nov. 2021</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="jobDetails">
                        <p>•&nbsp;&nbsp;DevOps team member.</p>
                        <p>•&nbsp;&nbsp;Tech stack: Linux, Git, AWS, Python (w/ Django), Docker, SQL, TeamCity,
                            Jenkins</p>
                    </div>
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
                        <p>•&nbsp;&nbsp;Project lead the organisation of new starter hardware and software delivery.</p>
                        <p>•&nbsp;&nbsp;Volunteered during busy F1 race weekend.</p>
                        <p>•&nbsp;&nbsp;Designed and implemented a custom Java program to improve productivity.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Computing;
