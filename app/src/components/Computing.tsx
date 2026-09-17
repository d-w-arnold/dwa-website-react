function Computing() {
    // Certs
    const aws_csa_a = 'https://www.credly.com/badges/8847454f-bed9-4f5a-a443-1a26d1cfb2bd';
    const aws_ccp = 'https://www.credly.com/badges/56620dbe-7a8a-4213-985b-05269b168480';
    const hackerrank_profile = 'https://www.hackerrank.com/dwarnold';
    // Tech stack
    const aws_cdk = 'https://github.com/aws/aws-cdk';
    const pycharm = 'https://www.jetbrains.com/pycharm/';
    const boto3 = 'https://github.com/boto/boto3';
    const oh_my_zsh = 'https://ohmyz.sh/';
    const homebrew = 'https://brew.sh/';
    const git = 'https://git-scm.com/';
    const aws_cli = 'https://aws.amazon.com/cli/';
    const ecr = 'https://aws.amazon.com/ecr/';
    const docker_compose = 'https://docs.docker.com/compose/';
    const bitbucket = 'https://www.atlassian.com/software/bitbucket/';
    const jira = 'https://www.atlassian.com/software/jira/';
    const confluence = 'https://www.atlassian.com/software/confluence/';
    const markdown = 'https://www.markdownguide.org/getting-started/';
    const latex = 'https://www.latex-project.org/';
    const cryptography = 'https://www.geeksforgeeks.org/cryptography-and-its-types/';
    // AWS Tech Stack
    const certificate_manager = 'https://aws.amazon.com/certificate-manager/';
    const amazon_mq = 'https://aws.amazon.com/amazon-mq/';
    const amplify = 'https://aws.amazon.com/amplify/';
    const cloudformation = 'https://aws.amazon.com/cloudformation/';
    const cloudfront = 'https://aws.amazon.com/cloudfront/';
    const cloudwatch = 'https://aws.amazon.com/cloudwatch/';
    const codeartifact = 'https://aws.amazon.com/codeartifact/';
    const codebuild = 'https://aws.amazon.com/codebuild/';
    const codepipeline = 'https://aws.amazon.com/codepipeline/';
    const dynamodb = 'https://aws.amazon.com/dynamodb/';
    const ec2 = 'https://aws.amazon.com/ec2/';
    const ecs = 'https://aws.amazon.com/ecs/';
    const efs = 'https://aws.amazon.com/efs/';
    const elasticache = 'https://aws.amazon.com/elasticache/';
    const eventbridge = 'https://aws.amazon.com/eventbridge/';
    const iam = 'https://aws.amazon.com/iam/';
    const kms = 'https://aws.amazon.com/kms/';
    const lambda = 'https://aws.amazon.com/lambda/';
    const rds = 'https://aws.amazon.com/rds/';
    const route53 = 'https://aws.amazon.com/route53/';
    const s3 = 'https://aws.amazon.com/s3/';
    const ses = 'https://aws.amazon.com/ses/';
    const sns = 'https://aws.amazon.com/sns/';
    const systems_manager = 'https://aws.amazon.com/systems-manager/';
    const secrets_manager = 'https://aws.amazon.com/secrets-manager/';
    const step_functions = 'https://aws.amazon.com/step-functions/';
    const waf = 'https://aws.amazon.com/waf/';
    // GitHub repos
    const aws_cdk_examples = 'https://github.com/d-w-arnold/aws-cdk-examples';
    const aws_ec2_examples = 'https://github.com/d-w-arnold/aws-ec2-examples';
    const aws_lambda_examples = 'https://github.com/d-w-arnold/aws-lambda-examples';
    const aws_scripts_examples = 'https://github.com/d-w-arnold/aws-scripts-examples';
    const cipher_decrypt = 'https://github.com/d-w-arnold/ciphertext-decryption';
    const dwa_website_react = 'https://github.com/d-w-arnold/dwa-website-react';
    const homebrew_auto = 'https://github.com/d-w-arnold/homebrew-auto-upgrade';
    const ipsec_vpn_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/ipsec_vpn';
    const open_all_images = 'https://github.com/d-w-arnold/macOS-open-all-images';
    const openvpn_vpn_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/internal_domain/openvpn_vpn';
    const proxy_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/proxy';
    const pypi_server = 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/internal_domain/pypi';
    const python_hackerrank = 'https://github.com/d-w-arnold/python-hackerrank';
    const sudoku_solver = 'https://github.com/d-w-arnold/python-sudoku-solver';
    const timestamp_media = 'https://github.com/d-w-arnold/appleScript-timestamp-media';
    // Events
    const cisco_uni_cha = 'https://www.cisco.com/c/m/en_uk/training-events/university-challenge.html';

    return (
        <div className="body">
            <h2 className="title">Computing Skills</h2>

            <div className="skillsGrid roboto">
                <section className="skillSection entryCard">
                    <h3 className="skillTitle">Certificates</h3>
                    <ul className="skillList">
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_csa_a}>AWS CSA-A (Certified Solutions Architect – Associate)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_ccp}>AWS CCP (Certified Cloud Practitioner)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={hackerrank_profile}>HackerRank Problem Solving 6-Star (Badge)</a></li>
                    </ul>
                </section>

                <section className="skillSection entryCard">
                    <h3 className="skillTitle">Operating Systems</h3>
                    <ul className="skillList">
                        <li>macOS</li>
                        <li>Amazon Linux 2</li>
                        <li>Ubuntu 22.04</li>
                        <li>iOS</li>
                    </ul>
                </section>

                <section className="skillSection entryCard skillSectionWide">
                    <h3 className="skillTitle">Tech Stack</h3>
                    <ul className="skillList">
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS Cloud Development Kit (CDK)</a>*</li>
                        <li>Python3 [ <a target="_blank" rel="noopener noreferrer" href={pycharm}>PyCharm</a> | <a target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> ]</li>
                        <li>Unix CLI [ <a target="_blank" rel="noopener noreferrer" href={oh_my_zsh}>oh-my-zsh</a> | <a target="_blank" rel="noopener noreferrer" href={homebrew}>Homebrew</a> | <a target="_blank" rel="noopener noreferrer" href={git}>Git</a> | <a target="_blank" rel="noopener noreferrer" href={aws_cli}>AWS CLI</a> ]</li>
                        <li>Shell (Bash) Scripting</li>
                        <li>Docker [ <a target="_blank" rel="noopener noreferrer" href={ecr}>AWS ECR - Elastic Container Registry</a> | <a target="_blank" rel="noopener noreferrer" href={docker_compose}>Docker Compose</a> ]</li>
                        <li>MySQL</li>
                        <li>Atlassian [ <a target="_blank" rel="noopener noreferrer" href={bitbucket}>Bitbucket</a> | <a target="_blank" rel="noopener noreferrer" href={jira}>Jira</a> | <a target="_blank" rel="noopener noreferrer" href={confluence}>Confluence</a> ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={markdown}>Markdown</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={latex}>LaTeX</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={cryptography}>Cryptography</a></li>
                    </ul>
                </section>

                <section className="skillSection entryCard skillSectionWide">
                    <h3 className="skillTitle">Projects</h3>
                    <ul className="skillList">
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_cdk_examples}>AWS CDK Examples</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={ipsec_vpn_server}>IPsec VPN Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={openvpn_vpn_server}>OpenVPN VPN Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={proxy_server}>Proxy Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={pypi_server}>PyPi Server</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={aws_cdk}>AWS CDK</a>* ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_scripts_examples}>AWS Scripts Examples</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> | Shell | <a target="_blank" rel="noopener noreferrer" href={aws_cli}>AWS CLI</a> ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_lambda_examples}>AWS Lambda Examples</a> [ Python3 | <a target="_blank" rel="noopener noreferrer" href={boto3}>Boto3 - AWS SDK for Python</a> | JavaScript ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={aws_ec2_examples}>AWS EC2 Examples</a> [ Shell ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={dwa_website_react}>My React Website</a> [ React | TypeScript | Python3 - <a target="_blank" rel="noopener noreferrer" href={lambda}>AWS Lambda (Functions)</a> | SCSS ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={python_hackerrank}>HackerRank Problem Solving Solutions</a> [ Python3 ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={sudoku_solver}>Sudoku Solver</a> [ Python3 ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={cipher_decrypt}>Ciphertext Decryption</a> [ Java ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={homebrew_auto}>Homebrew Package Auto-Upgrade Tool</a> [ Shell ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={open_all_images}>Open All Images</a> [ Shell | AppleScript ]</li>
                        <li><a target="_blank" rel="noopener noreferrer" href={timestamp_media}>Timestamp Media</a> [ AppleScript ]</li>
                    </ul>
                </section>

                <section className="skillSection entryCard skillSectionWide">
                    <h3 className="skillTitle">*AWS Tech Stack</h3>
                    <ul className="skillList skillListCompact">
                        <li><a target="_blank" rel="noopener noreferrer" href={certificate_manager}>ACM - Certificate Manager</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={amazon_mq}>AmazonMQ</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={amplify}>Amplify (Apps)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={cloudformation}>CloudFormation</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={cloudfront}>CloudFront</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={cloudwatch}>CloudWatch (Alarms, Log Groups, Metrics)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={codeartifact}>CodeArtifact</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={codebuild}>CodeBuild</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={codepipeline}>CodePipeline (inc. CodeConnections, formerly CodeStar Connections)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={dynamodb}>DynamoDB</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={ec2}>EC2 - Elastic Compute Cloud (ALBs & NLBs, Security Groups, ASGs, Launch Templates, Volumes, Elastic IPs)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={ecr}>ECR - Elastic Container Registry</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={ecs}>ECS - Elastic Container Service (Fargate)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={efs}>EFS - Elastic File System</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={elasticache}>ElastiCache (Redis OSS)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={eventbridge}>EventBridge (Buses, Rules)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={iam}>IAM - Identity & Access Management (User Groups, Roles, Policies)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={kms}>KMS - Key Management Service</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={lambda}>Lambda (Functions)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={rds}>RDS - Relational Database Service (Databases, Proxies)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={route53}>Route53 (Hosted Zones, Domain Management)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={s3}>S3 - Simple Storage Service (Buckets, Lifecycle Rules)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={ses}>SES - Simple Email Service</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={sns}>SNS - Simple Notification Service (Topics, Mobile Push Notifications)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={systems_manager}>SSM - Systems Manager (Parameter Store)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={secrets_manager}>Secrets Manager</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={step_functions}>Step Functions (State Machines)</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={waf}>WAF - Web Application Firewall (Web ACLs)</a></li>
                    </ul>
                </section>

                <section className="skillSection entryCard">
                    <h3 className="skillTitle">Events</h3>
                    <ul className="skillList">
                        <li><a target="_blank" rel="noopener noreferrer" href={cisco_uni_cha}>2017 Cisco University Challenge</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Computing;
