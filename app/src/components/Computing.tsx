import React from "react";

function Computing() {
    // Certs
    let aws_csa_a = 'https://www.credly.com/badges/8847454f-bed9-4f5a-a443-1a26d1cfb2bd';
    let aws_ccp = 'https://www.credly.com/badges/56620dbe-7a8a-4213-985b-05269b168480';
    let hackerrank_profile = 'https://www.hackerrank.com/dwarnold';
    // Tech stack
    let aws_cdk = 'https://github.com/aws/aws-cdk';
    let pycharm = 'https://www.jetbrains.com/pycharm/';
    let boto3 = 'https://github.com/boto/boto3';
    let oh_my_zsh = 'https://ohmyz.sh/';
    let homebrew = 'https://brew.sh/';
    let git = 'https://git-scm.com/';
    let aws_cli = 'https://aws.amazon.com/cli/';
    let ecr = 'https://aws.amazon.com/ecr/';
    let docker_compose = 'https://docs.docker.com/compose/';
    let bitbucket = 'https://www.atlassian.com/software/bitbucket/';
    let jira = 'https://www.atlassian.com/software/jira/';
    let confluence = 'https://www.atlassian.com/software/confluence/';
    let markdown = 'https://www.markdownguide.org/getting-started/';
    let latex = 'https://www.latex-project.org/';
    let cryptography = 'https://www.geeksforgeeks.org/cryptography-and-its-types/';
    // AWS Tech Stack
    let certificate_manager = 'https://aws.amazon.com/certificate-manager/';
    let amazon_mq = 'https://aws.amazon.com/amazon-mq/';
    let amplify = 'https://aws.amazon.com/amplify/';
    let cloudformation = 'https://aws.amazon.com/cloudformation/';
    let cloudfront = 'https://aws.amazon.com/cloudfront/';
    let cloudwatch = 'https://aws.amazon.com/cloudwatch/';
    let codeartifact = 'https://aws.amazon.com/codeartifact/';
    let codebuild = 'https://aws.amazon.com/codebuild/';
    let codepipeline = 'https://aws.amazon.com/codepipeline/';
    let dynamodb = 'https://aws.amazon.com/dynamodb/';
    let ec2 = 'https://aws.amazon.com/ec2/';
    let ecs = 'https://aws.amazon.com/ecs/';
    let efs = 'https://aws.amazon.com/efs/';
    let elasticache = 'https://aws.amazon.com/elasticache/';
    let eventbridge = 'https://aws.amazon.com/eventbridge/';
    let iam = 'https://aws.amazon.com/iam/';
    let kms = 'https://aws.amazon.com/kms/';
    let lambda = 'https://aws.amazon.com/lambda/';
    let rds = 'https://aws.amazon.com/rds/';
    let route53 = 'https://aws.amazon.com/route53/';
    let s3 = 'https://aws.amazon.com/s3/';
    let ses = 'https://aws.amazon.com/ses/';
    let sns = 'https://aws.amazon.com/sns/';
    let systems_manager = 'https://aws.amazon.com/systems-manager/';
    let secrets_manager = 'https://aws.amazon.com/secrets-manager/';
    let step_functions = 'https://aws.amazon.com/step-functions/';
    let waf = 'https://aws.amazon.com/waf/';
    // GitHub repos
    let aws_cdk_examples = 'https://github.com/d-w-arnold/aws-cdk-examples';
    let aws_ec2_examples = 'https://github.com/d-w-arnold/aws-ec2-examples';
    let aws_lambda_examples = 'https://github.com/d-w-arnold/aws-lambda-examples';
    let aws_scripts_examples = 'https://github.com/d-w-arnold/aws-scripts-examples';
    let cipher_decrypt = 'https://github.com/d-w-arnold/ciphertext-decryption';
    let dwa_website_react = 'https://github.com/d-w-arnold/dwa-website-react';
    let homebrew_auto = 'https://github.com/d-w-arnold/homebrew-auto-upgrade';
    let ipsec_vpn_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/ipsec_vpn';
    let open_all_images = 'https://github.com/d-w-arnold/macOS-open-all-images';
    let openvpn_vpn_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/internal_domain/openvpn_vpn';
    let proxy_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/proxy';
    let pypi_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/internal_domain/pypi';
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
                                <a target="_blank" rel="noopener noreferrer" href={aws_csa_a}>AWS CSA-A (Certified Solutions Architect – Associate)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={aws_ccp}>AWS CCP (Certified Cloud Practitioner)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={hackerrank_profile}>HackerRank Problem Solving 6-Star (Badge)</a><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Operating Systems</td>
                            <td className="computingWriting">
                                macOS<br/>
                                Amazon Linux 2<br/>
                                Ubuntu 22.04<br/>
                                iOS<br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Tech Stack</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS Cloud Development Kit (CDK)</a>*<br/>
                                Python3 [ <a target="_blank" rel="noopener noreferrer" href={pycharm}>PyCharm</a> | <a target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> ]<br/>
                                Unix CLI [ <a target="_blank" rel="noopener noreferrer" href={oh_my_zsh}>oh-my-zsh</a> | <a target="_blank" rel="noopener noreferrer" href={homebrew}>Homebrew</a> | <a target="_blank" rel="noopener noreferrer" href={git}>Git</a> | <a target="_blank" rel="noopener noreferrer" href={aws_cli}>AWS CLI</a> ]<br/>
                                Shell (Bash) Scripting<br/>
                                Docker [ <a target="_blank" rel="noopener noreferrer" href={ecr}>AWS ECR - Elastic Container Registry</a> | <a target="_blank" rel="noopener noreferrer" href={docker_compose}>Docker Compose</a> ]<br/>
                                MySQL<br/>
                                Atlassian [ <a target="_blank" rel="noopener noreferrer" href={bitbucket}>Bitbucket</a> | <a target="_blank" rel="noopener noreferrer" href={jira}>Jira</a> | <a target="_blank" rel="noopener noreferrer" href={confluence}>Confluence</a> ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={markdown}>Markdown</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={latex}>LaTeX</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={cryptography}>Cryptography</a><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">Projects</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={aws_cdk_examples}>AWS CDK Examples</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={ipsec_vpn_server}>IPsec VPN Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={openvpn_vpn_server}>OpenVPN VPN Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={proxy_server}>Proxy Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={pypi_server}>PyPi Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={aws_scripts_examples}>AWS Scripts Examples</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> | Shell | <a target="_blank" rel="noopener noreferrer" href={aws_cli}>AWS CLI</a> ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={aws_lambda_examples}>AWS Lambda Examples</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> | JavaScript ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={aws_ec2_examples}>AWS EC2 Examples</a> [ Shell ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={dwa_website_react}>My React Website</a> [ React | TypeScript | Python3 - <a target="_blank" rel="noopener noreferrer" href={'https://aws.amazon.com/lambda/'}>AWS Lambda (Functions)</a> | SCSS ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={python_hackerrank}>HackerRank Problem Solving Solutions</a> [ Python3 ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={sudoku_solver}>Sudoku Solver</a> [ Python3 ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={cipher_decrypt}>Ciphertext Decryption</a> [ Java ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={homebrew_auto}>Homebrew Package Auto-Upgrade Tool</a> [ Shell ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={open_all_images}>Open All Images</a> [ Shell | AppleScript ]<br/>
                                <a target="_blank" rel="noopener noreferrer" href={timestamp_media}>Timestamp Media</a> [ AppleScript ]<br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="computingSubTitle">*AWS Tech Stack</td>
                            <td className="computingWriting">
                                <a target="_blank" rel="noopener noreferrer" href={certificate_manager}>ACM - Certificate Manager</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={amazon_mq}>AmazonMQ</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={amplify}>Amplify (Apps)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={cloudformation}>CloudFormation</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={cloudfront}>CloudFront</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={cloudwatch}>CloudWatch (Alarms, Log Groups, Metrics)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={codeartifact}>CodeArtifact</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={codebuild}>CodeBuild</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={codepipeline}>CodePipeline (inc. CodeConnections, formerly CodeStar Connections)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={dynamodb}>DynamoDB</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={ec2}>EC2 - Elastic Compute Cloud (ALBs & NLBs, Security Groups, ASGs, Launch Templates, Volumes, Elastic IPs)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={ecr}>ECR - Elastic Container Registry</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={ecs}>ECS - Elastic Container Service (Fargate)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={efs}>EFS - Elastic File System</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={elasticache}>ElastiCache (Redis OSS)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={eventbridge}>EventBridge (Buses, Rules)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={iam}>IAM - Identity & Access Management (User Groups, Roles, Policies)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={kms}>KMS - Key Management Service</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={lambda}>Lambda (Functions)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={rds}>RDS - Relational Database Service (Databases, Proxies)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={route53}>Route53 (Hosted Zones, Domain Management)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={s3}>S3 - Simple Storage Service (Buckets, Lifecycle Rules)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={ses}>SES - Simple Email Service</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={sns}>SNS - Simple Notification Service (Topics, Mobile Push Notifications)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={systems_manager}>SSM - Systems Manager (Parameter Store)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={secrets_manager}>Secrets Manager</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={step_functions}>Step Functions (State Machines)</a><br/>
                                <a target="_blank" rel="noopener noreferrer" href={waf}>WAF - Web Application Firewall (Web ACLs)</a><br/>
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
