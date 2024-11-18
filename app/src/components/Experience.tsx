import React from "react";

function Experience() {
    let aws_cdk = 'https://github.com/aws/aws-cdk';
    let aws_cli = 'https://aws.amazon.com/cli/';
    let boto3 = 'https://github.com/boto/boto3';
    let peach = 'https://www.peach.me/en-gb/';
    let red_bull_careers = 'https://www.redbull.com/int-en/redbullracing';
    let sat_data_sys = '/diagram/Satellite_Data_Acquisition_System.png';
    let sihealth = 'https://www.sihealth.co.uk/';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Experience</p>

                {/* siHealth Ltd. */}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a
                                target="_blank" rel="noopener noreferrer" href={sihealth}>siHealth Ltd.</a></b></td>
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
                        <p>•&nbsp;&nbsp;All-in-one: Cloud Engineer / Cloud Architect / DevOps</p>
                        <p>•&nbsp;&nbsp;Tech Stack: [ macOS | <a className="link-color" target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS Cloud Development Kit (CDK)</a> | Python3 | PyCharm | <a className="link-color" target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> | Unix CLI | Git | <a className="link-color" target="_blank" rel="noopener noreferrer" href={aws_cli}>AWS CLI</a> | Shell (Bash) Scripting | Docker | MySQL | Atlassian ]</p><br/>
                        <p>•&nbsp;&nbsp;Lead the company's migration of cloud resources from Azure to AWS.</p>
                        <p>•&nbsp;&nbsp;Implemented a new Infrastructure as Code (IaC) process using <a className="link-color" target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>.</p>
                        <p>•&nbsp;&nbsp;Main responsibilities:</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Development/provisioning of new cloud resources (via IaC and/or scripts) to support multiple active projects.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Oversee all Continuous Integration/Continuous Delivery (CI/CD) processes.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;Provide internal support to technical team members using cloud resources.</p>
                        <p>•&nbsp;&nbsp;Solely architected and implemented new IaC for an in-house <a className="link-color" target="_blank" rel="noopener noreferrer" href={sat_data_sys}>Satellite Data Acquisition System</a>, for serving live data to company products.</p>
                    </div>
                </div>

                <div className="spacing2"/>

                {/* Peach Media */}
                <div className="roboto">
                    <table className="marginBottom2">
                        <tbody>
                        <tr>
                            <td className="employerName"><span className="iconLap" aria-hidden="true"/><b><a target="_blank" rel="noopener noreferrer" href={peach}>Peach</a></b></td>
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
                        <p>•&nbsp;&nbsp;Tech Stack: [ Linux | Git | AWS | Python (inc. Django) | Docker | SQL | TeamCity | Jenkins ]</p>
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;
