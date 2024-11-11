import React from "react";

function Experience() {
    // Experience
    let sihealth = 'https://www.sihealth.co.uk/';
    let peach = 'https://www.peach.me/en-gb/';
    let red_bull_careers = 'https://www.redbull.com/int-en/redbullracing';
    return (
        <React.Fragment>
            <div className="body">
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
                        <p>•&nbsp;&nbsp;Tech stack: macOS, AWS CDK, Python3 (PyCharm, Boto3), Unix CLI (AWS CLI),
                            Git (Bitbucket), Docker (AWS ECR), Shell Scripting, MySQL</p>
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
                        <p>•&nbsp;&nbsp;Tech stack: Linux, Git, AWS, Python (inc. Django), Docker, SQL, TeamCity,
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

export default Experience;
