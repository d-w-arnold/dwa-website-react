import React from "react";

function Computing() {
    // Certs
    let aws_csa_a = 'https://www.credly.com/badges/8847454f-bed9-4f5a-a443-1a26d1cfb2bd'
    let aws_ccp = 'https://www.credly.com/badges/56620dbe-7a8a-4213-985b-05269b168480'
    let hackerrank_profile = 'https://www.hackerrank.com/dwarnold'
    // GitHub repos
    let cipher_decrypt = 'https://github.com/d-w-arnold/ciphertext-decryption';
    let dwa_website_react = 'https://github.com/d-w-arnold/dwa-website-react';
    let fast_food_random = 'https://github.com/d-w-arnold/fast-food-randomiser';
    let homebrew_auto = 'https://github.com/d-w-arnold/homebrew-auto-upgrade';
    let open_all_images = 'https://github.com/d-w-arnold/macOS-open-all-images';
    let python_hackerrank = 'https://github.com/d-w-arnold/python-hackerrank';
    let sudoku_solver = 'https://github.com/d-w-arnold/python-sudoku-solver';
    let timestamp_media = 'https://github.com/d-w-arnold/appleScript-timestamp-media';
    // Events
    let cisco_uni_cha = 'https://www.cisco.com/c/m/en_uk/training-events/university-challenge.html';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Computing Skills</p>

                <div className="roboto">
                    <table className="computingTable">
                        <tbody>
                        <tr>
                            <td className="computingSubTitle">Certificates</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={aws_csa_a}>AWS CSA-A (Certified
                                    Solutions Architect – Associate)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={aws_ccp}>AWS CCP (Certified Cloud
                                    Practitioner)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={hackerrank_profile}>HackerRank Problem
                                    Solving 6-Star (Badge)</a><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Operating Systems</td>
                            <td className="computingWriting"><a target="_blank" rel="noopener noreferrer"
                                                                href={'https://www.apple.com/macos'}>macOS</a>, <a
                                target="_blank" rel="noopener noreferrer" href={'https://www.apple.com/ios'}>iOS</a>, <a
                                target="_blank" rel="noopener noreferrer"
                                href={'https://aws.amazon.com/amazon-linux-2/'}>Amazon Linux 2</a>, <a target="_blank"
                                                                                                       rel="noopener noreferrer"
                                                                                                       href={'https://releases.ubuntu.com/jammy'}>Ubuntu
                                22.04</a></td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Tech Stack</td>
                            <td className="computingWriting"><a target="_blank" rel="noopener noreferrer"
                                                                href={'https://github.com/aws/aws-cdk'}>AWS Cloud
                                Development Kit</a> (CDK*)<br/><a target="_blank" rel="noopener noreferrer"
                                                                  href={'https://www.python.org/downloads/'}>Python3</a> (inc. <a
                                target="_blank" rel="noopener noreferrer"
                                href={'https://www.jetbrains.com/pycharm/'}>PyCharm</a>, <a target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            href={'https://github.com/boto/boto3'}>Boto3
                                - AWS SDK for Python</a>)<br/><a target="_blank" rel="noopener noreferrer"
                                                                 href={'https://en.wikipedia.org/wiki/Unix_shell'}>Unix
                                CLI</a> (inc. <a target="_blank" rel="noopener noreferrer"
                                                 href={'https://ohmyz.sh/'}>oh-my-zsh</a>, <a target="_blank"
                                                                                              rel="noopener noreferrer"
                                                                                              href={'https://brew.sh/'}>Homebrew</a>, <a
                                target="_blank" rel="noopener noreferrer" href={'https://git-scm.com/'}>Git</a>, <a
                                target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/cli/'}>AWS
                                CLI</a>)<br/><a target="_blank" rel="noopener noreferrer"
                                                href={'https://www.geeksforgeeks.org/bash-scripting-introduction-to-bash-and-bash-scripting/'}>Shell
                                (Bash) Scripting</a><br/><a target="_blank" rel="noopener noreferrer"
                                                            href={'https://www.docker.com/get-started/'}>Docker</a> (inc. <a
                                target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/ecr/'}>AWS ECR -
                                Elastic Container Registry</a>, <a target="_blank" rel="noopener noreferrer"
                                                                   href={'https://docs.docker.com/compose/'}>docker-compose</a>)<br/><a
                                target="_blank" rel="noopener noreferrer" href={'https://www.mysql.com/'}>MySQL</a><br/><a
                                target="_blank" rel="noopener noreferrer"
                                href={'https://www.atlassian.com/software/'}>Atlassian</a> (inc. <a target="_blank"
                                                                                                    rel="noopener noreferrer"
                                                                                                    href={'https://www.atlassian.com/software/bitbucket/'}>Bitbucket</a>, <a
                                target="_blank" rel="noopener noreferrer"
                                href={'https://www.atlassian.com/software/jira/'}>Jira</a>, <a target="_blank"
                                                                                               rel="noopener noreferrer"
                                                                                               href={'https://www.atlassian.com/software/confluence/'}>Confluence</a>)<br/><a
                                target="_blank" rel="noopener noreferrer"
                                href={'https://www.markdownguide.org/'}>Markdown</a><br/><a target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            href={'https://www.latex-project.org/'}>LaTeX</a><br/><a
                                className="link-color" target="_blank" rel="noopener noreferrer"
                                href={'https://www.geeksforgeeks.org/cryptography-and-its-types/'}>Cryptography</a></td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">*AWS Tech Stack</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/certificate-manager/'}>ACM - Certificate
                                    Manager</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/amazon-mq/'}>AmazonMQ</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/cloudformation/'}>CloudFormation</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/cloudfront/'}>CloudFront</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/cloudwatch/'}>CloudWatch (Alarms, Log Groups,
                                    Metrics)</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/codeartifact/'}>CodeArtifact</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/codebuild/'}>CodeBuild</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/codepipeline/'}>CodePipeline (inc. CodeConnections, formerly CodeStar Connections)</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/dynamodb/'}>DynamoDB</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/ec2/'}>EC2 -
                                    Elastic Compute Cloud (ALBs & NLBs, Security Groups, ASGs, Launch Templates,
                                    Volumes, Elastic IPs)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/ecr/'}>ECR -
                                    Elastic Container Registry</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/ecs/'}>ECS -
                                    Elastic Container Service (Fargate)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/efs/'}>EFS -
                                    Elastic File System</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/elasticache/'}>ElastiCache (Redis OSS)</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/eventbridge/'}>EventBridge (Buses, Rules)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/iam/'}>IAM -
                                    Identity & Access Management (User Groups, Roles, Policies)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/kms/'}>KMS -
                                    Key Management Service</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/lambda/'}>Lambda (Functions)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/rds/'}>RDS -
                                    Relational Database Service (Databases, Proxies)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/route53/'}>Route53
                                    (Hosted Zones, Domain Management)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/s3/'}>S3 -
                                    Simple Storage Service (Buckets, Lifecycle Rules)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/ses/'}>SES -
                                    Simple Email Service</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/sns/'}>SNS -
                                    Simple Notification Service (Topics, Mobile Push Notifications)</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/systems-manager/'}>SSM - Systems Manager (Parameter
                                    Store)</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/secrets-manager/'}>Secrets Manager</a><br/>
                                <a target="_blank" rel="noopener noreferrer"
                                   href={'https://aws.amazon.com/step-functions/'}>Step Functions (State
                                    Machines)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/waf/'}>WAF -
                                    Web Application Firewall (Web ACLs)</a><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Projects</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website_react}>My React Website</a> [ React | TypeScript | Python3 - <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/lambda/'}>AWS Lambda (Functions)</a> | SCSS ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={python_hackerrank}>Hackerrank Solutions</a> [ Python3 ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={sudoku_solver}>Sudoku Solver</a> [ Python3 ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cipher_decrypt}>Ciphertext Decryption</a> [ Java ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={homebrew_auto}>Homebrew Package Auto-Upgrade Tool</a> [ Shell ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={open_all_images}>Open All Images</a> [ Shell | AppleScript ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={timestamp_media}>Timestamp Media</a> [ AppleScript ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={fast_food_random}>Fast Food Randomiser</a> [ Shell ]<br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Events</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={cisco_uni_cha}>2017 Cisco University Challenge</a><br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Computing;
