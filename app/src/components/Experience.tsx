function Experience() {
    const aws_cdk = 'https://github.com/aws/aws-cdk';
    const aws_cli = 'https://aws.amazon.com/cli/';
    const boto3 = 'https://github.com/boto/boto3';
    const peach = 'https://www.peach.me/en-gb/';
    const red_bull_careers = 'https://www.redbull.com/int-en/redbullracing';
    const sat_data_sys = '/diagram/Satellite_Data_Acquisition_System.png';
    const sihealth = 'https://www.sihealth.co.uk/';

    return (
        <div className="body">
            <h2 className="title">Experience</h2>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconLap" aria-hidden="true"/><a
                            target="_blank" rel="noopener noreferrer" href={sihealth}>siHealth Ltd.</a></h3>
                        <p className="jobTitle">DevOps Engineer</p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">Harwell Campus, Didcot, U.K.</p>
                        <p className="jobDates">Nov. 2021 - Current</p>
                    </div>
                </header>

                <div className="jobDetails">
                    <ul className="detailList">
                        <li>All-in-one: Cloud Engineer / Cloud Architect / DevOps</li>
                        <li>Tech Stack: [ macOS | <a className="link-color" target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS Cloud Development Kit (CDK)</a> | Python3 | PyCharm | <a className="link-color" target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> | Unix CLI | Git | <a className="link-color" target="_blank" rel="noopener noreferrer" href={aws_cli}>AWS CLI</a> | Shell (Bash) Scripting | Docker | MySQL | Atlassian ]</li>
                        <li>Lead the company's migration of cloud resources from Azure to AWS.</li>
                        <li>Implemented a new Infrastructure as Code (IaC) process using <a className="link-color" target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>.</li>
                        <li>
                            Main responsibilities:
                            <ul className="nestedDetailList">
                                <li>Development/provisioning of new cloud resources (via IaC and/or scripts) to support multiple active projects.</li>
                                <li>Oversee all Continuous Integration/Continuous Delivery (CI/CD) processes.</li>
                                <li>Provide internal support to technical team members using cloud resources.</li>
                            </ul>
                        </li>
                        <li>Solely architected and implemented new IaC for an in-house <a className="link-color" target="_blank" rel="noopener noreferrer" href={sat_data_sys}>Satellite Data Acquisition System</a>, for serving live data to company products.</li>
                    </ul>
                </div>
            </section>

            <div className="spacing2"/>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconLap" aria-hidden="true"/><a target="_blank" rel="noopener noreferrer" href={peach}>Peach</a></h3>
                        <p className="jobTitle">Junior Software Engineer</p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">(Remote) - London, U.K.</p>
                        <p className="jobDates">Oct. 2020 - Nov. 2021</p>
                    </div>
                </header>

                <div className="jobDetails">
                    <ul className="detailList">
                        <li>DevOps team member.</li>
                        <li>Tech Stack: [ Linux | Git | AWS | Python (inc. Django) | Docker | SQL | TeamCity | Jenkins ]</li>
                    </ul>
                </div>
            </section>

            <div className="spacing2"/>

            <section className="entryCard roboto">
                <header className="entryHeader marginBottom2">
                    <div>
                        <h3 className="employerName"><span className="iconLap" aria-hidden="true"/><a
                            target="_blank" rel="noopener noreferrer" href={red_bull_careers}>Red Bull Technology /
                            Red Bull Racing</a></h3>
                        <p className="jobTitle">IT Student Placement</p>
                    </div>
                    <div className="entryMeta">
                        <p className="location">Milton Keynes, U.K.</p>
                        <p className="jobDates">Jun. 2018 - Jun. 2019</p>
                    </div>
                </header>

                <div className="jobDetails">
                    <ul className="detailList">
                        <li>Project lead the organisation of new starter hardware and software delivery.</li>
                        <li>Volunteered during busy F1 race weekend.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Experience;
