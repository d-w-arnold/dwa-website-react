export type IconClass = 'iconUni' | 'iconPaper' | 'iconLap';

export type InlinePart =
    | {type: 'text'; text: string}
    | {type: 'link'; text: string; href: string; className?: string}
    | {type: 'route'; text: string; to: string; className?: string}
    | {type: 'icon'; iconClass: IconClass};

export type ListItemData = {
    parts: InlinePart[];
    nestedItems?: ListItemData[];
};

export type HomeSectionData = {
    title: string;
    paragraphs: InlinePart[][];
};

export type EntryData = {
    organization: {
        name: string;
        href: string;
        iconClass: IconClass;
    };
    title: InlinePart[];
    location: string;
    dateRange: string;
    details?: ListItemData[];
};

export type SkillSectionData = {
    title: string;
    wide?: boolean;
    compact?: boolean;
    items: InlinePart[][];
};

const links = {
    aws: {
        cdk: 'https://github.com/aws/aws-cdk',
        cli: 'https://aws.amazon.com/cli/',
        certificateManager: 'https://aws.amazon.com/certificate-manager/',
        amazonMq: 'https://aws.amazon.com/amazon-mq/',
        amplify: 'https://aws.amazon.com/amplify/',
        cloudformation: 'https://aws.amazon.com/cloudformation/',
        cloudfront: 'https://aws.amazon.com/cloudfront/',
        cloudwatch: 'https://aws.amazon.com/cloudwatch/',
        codeartifact: 'https://aws.amazon.com/codeartifact/',
        codebuild: 'https://aws.amazon.com/codebuild/',
        codepipeline: 'https://aws.amazon.com/codepipeline/',
        dynamodb: 'https://aws.amazon.com/dynamodb/',
        ec2: 'https://aws.amazon.com/ec2/',
        ecr: 'https://aws.amazon.com/ecr/',
        ecs: 'https://aws.amazon.com/ecs/',
        efs: 'https://aws.amazon.com/efs/',
        elasticache: 'https://aws.amazon.com/elasticache/',
        eventbridge: 'https://aws.amazon.com/eventbridge/',
        iam: 'https://aws.amazon.com/iam/',
        kms: 'https://aws.amazon.com/kms/',
        lambda: 'https://aws.amazon.com/lambda/',
        rds: 'https://aws.amazon.com/rds/',
        route53: 'https://aws.amazon.com/route53/',
        s3: 'https://aws.amazon.com/s3/',
        ses: 'https://aws.amazon.com/ses/',
        sns: 'https://aws.amazon.com/sns/',
        systemsManager: 'https://aws.amazon.com/systems-manager/',
        secretsManager: 'https://aws.amazon.com/secrets-manager/',
        stepFunctions: 'https://aws.amazon.com/step-functions/',
        waf: 'https://aws.amazon.com/waf/',
    },
    tools: {
        pycharm: 'https://www.jetbrains.com/pycharm/',
        boto3: 'https://github.com/boto/boto3',
        ohMyZsh: 'https://ohmyz.sh/',
        homebrew: 'https://brew.sh/',
        git: 'https://git-scm.com/',
        dockerCompose: 'https://docs.docker.com/compose/',
        bitbucket: 'https://www.atlassian.com/software/bitbucket/',
        jira: 'https://www.atlassian.com/software/jira/',
        confluence: 'https://www.atlassian.com/software/confluence/',
        markdown: 'https://www.markdownguide.org/getting-started/',
        latex: 'https://www.latex-project.org/',
        cryptography: 'https://www.geeksforgeeks.org/cryptography-and-its-types/',
    },
    certifications: {
        awsCsaA: 'https://www.credly.com/badges/8847454f-bed9-4f5a-a443-1a26d1cfb2bd',
        awsCcp: 'https://www.credly.com/badges/56620dbe-7a8a-4213-985b-05269b168480',
        hackerrank: 'https://www.hackerrank.com/dwarnold',
    },
    projects: {
        awsCdkExamples: 'https://github.com/d-w-arnold/aws-cdk-examples',
        awsEc2Examples: 'https://github.com/d-w-arnold/aws-ec2-examples',
        awsLambdaExamples: 'https://github.com/d-w-arnold/aws-lambda-examples',
        awsScriptsExamples: 'https://github.com/d-w-arnold/aws-scripts-examples',
        cipherDecrypt: 'https://github.com/d-w-arnold/ciphertext-decryption',
        dwaWebsiteReact: 'https://github.com/d-w-arnold/dwa-website-react',
        homebrewAuto: 'https://github.com/d-w-arnold/homebrew-auto-upgrade',
        ipsecVpnServer: 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/ipsec_vpn',
        openAllImages: 'https://github.com/d-w-arnold/macOS-open-all-images',
        openvpnVpnServer: 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/internal_domain/openvpn_vpn',
        proxyServer: 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/proxy',
        pypiServer: 'https://github.com/d-w-arnold/aws-cdk-examples/tree/main/cdk-sih/cdk_sih/internal_domain/pypi',
        pythonHackerrank: 'https://github.com/d-w-arnold/python-hackerrank',
        sudokuSolver: 'https://github.com/d-w-arnold/python-sudoku-solver',
        timestampMedia: 'https://github.com/d-w-arnold/appleScript-timestamp-media',
    },
    employers: {
        peach: 'https://www.peach.me/en-gb/',
        redBull: 'https://www.redbull.com/int-en/redbullracing',
        sihealth: 'https://www.sihealth.co.uk/',
    },
    education: {
        compNetCom: 'https://www.kent.ac.uk/courses/modules/module/COMP6330',
        compSciYearInd: 'https://www.kent.ac.uk/courses/undergraduate/128/computer-science-with-a-year-in-industry',
        compSecCrypt: 'https://www.kent.ac.uk/courses/modules/module/COMP6340',
        dataMining: 'https://www.kent.ac.uk/courses/modules/module/COMP8320',
        harvey: 'http://www.harveygs.kent.sch.uk',
        iot: 'https://www.kent.ac.uk/courses/modules/module/COMP6570',
        newberry: 'https://www.newberry.edu',
        openUni: 'https://www.open.ac.uk',
        progLangImp: 'https://www.kent.ac.uk/courses/modules/module/COMP6580',
        progLangsApp: 'https://www.kent.ac.uk/courses/modules/module/COMP6630',
        tmlep: 'https://www.tmlep.com/',
        uniOfKent: 'https://www.kent.ac.uk/',
    },
    interests: {
        cadwellPark: 'https://youtu.be/W9OdNDSdbCs',
        euroPro: 'https://www.europrotour.com/',
        istj: 'https://www.16personalities.com/istj-personality',
        littlestoneJuniorOpen: 'https://www.howdidido.com/Directory/Result?sectionId=4658&compNumber=663',
        kentAmChamp2014: 'https://www.kentgolf.org/competition.php?compid=441',
        kentAmChamp2015: 'https://www.kentgolf.org/viewround.php?roundid=18996',
        kentGolf: 'https://www.kentgolf.org/',
        lakeDistrict: 'https://www.visitlakedistrict.com/',
        myAnimeList: 'https://myanimelist.net/profile/dw_arnie',
    },
    internal: {
        researchProject: '/research/Quantum_Cryptography-Security_for_the_Post-Quantum_world.pdf',
        satelliteDiagram: '/diagram/Satellite_Data_Acquisition_System.png',
    },
    events: {
        ciscoUniChallenge: 'https://www.cisco.com/c/m/en_uk/training-events/university-challenge.html',
    },
} as const;

export const homeSections: HomeSectionData[] = [
    {
        title: 'Welcome!',
        paragraphs: [[
            {type: 'text', text: "I'm a Software Engineer (specialty: AWS Cloud Engineer), and a First-Class Honours Computer Science graduate from the "},
            {type: 'link', text: 'University of Kent', href: links.education.uniOfKent},
            {type: 'text', text: '.'},
        ]],
    },
    {
        title: 'About Me',
        paragraphs: [
            [
                {type: 'text', text: 'My personality type is: '},
                {type: 'link', text: 'Logistician (ISTJ)', href: links.interests.istj},
            ],
            [
                {type: 'text', text: 'Hiking in the '},
                {type: 'link', text: 'Lake District', href: links.interests.lakeDistrict},
                {type: 'text', text: ', climbing peaks to take in the views, with the occasional swim in fresh water lakes/tarns/rivers, is an annual summer event I simply live for.'},
            ],
            [{type: 'text', text: "I enjoy cooking fresh meals, with local ingredients, and I'm always trying to learn new recipes!"}],
            [
                {type: 'text', text: 'Motorsport is a strong passion of mine. Having done multiple '},
                {type: 'link', text: 'Track Day', href: links.interests.cadwellPark},
                {type: 'text', text: ' sessions, with occasional tuition from professional racing drivers, I relish the opportunity to better my skills behind the wheel.'},
            ],
            [{type: 'text', text: "I'm currently learning Japanese - 読んでいただきありがとうございます！"}],
            [
                {type: 'text', text: "Also, you'll find me regularly updating my Japanese "},
                {type: 'link', text: 'Watch and Reading Lists', href: links.interests.myAnimeList},
                {type: 'text', text: '.'},
            ],
        ],
    },
    {
        title: 'My Dissertation (Undergraduate)',
        paragraphs: [
            [
                {type: 'icon', iconClass: 'iconPaper'},
                {type: 'text', text: 'Research Project - '},
                {type: 'link', text: '"Quantum Cryptography: Security for the Post-Quantum world"', href: links.internal.researchProject},
            ],
            [{type: 'text', text: 'This research project set out to survey the field of Quantum Cryptography, providing a basic insight into various aspects of Quantum Cryptography - all of which could be very important regarding our online security in the future! Aimed at people in industry concerned with security.'}],
        ],
    },
    {
        title: 'Early Life',
        paragraphs: [
            [{type: 'text', text: 'Before I was a Software Engineer, I trained as a professional golfer.'}],
            [
                {type: 'text', text: 'My grandfather bought me my first golf clubs for my 7th birthday. Over the years I represented '},
                {type: 'link', text: 'Kent County Golf Union (KCGU)', href: links.interests.kentGolf},
                {type: 'text', text: " in various teams: Kent Under 13's, Under 14's, Under 16's (Captain), Under 18's."},
            ],
            [
                {type: 'text', text: 'Aged 15, I scored 68 to win the '},
                {type: 'link', text: 'Littlestone Junior Open 2011', href: links.interests.littlestoneJuniorOpen},
                {type: 'text', text: '.'},
            ],
            [
                {type: 'text', text: 'My best (72 hole, 2 days) finish was top 10 in the '},
                {type: 'link', text: 'Kent Amateur Championship 2014', href: links.interests.kentAmChamp2014},
                {type: 'text', text: '.'},
            ],
            [
                {type: 'text', text: 'One of my latest best rounds of golf was in the '},
                {type: 'link', text: 'Kent Amateur Championship 2015', href: links.interests.kentAmChamp2015},
                {type: 'text', text: '.'},
            ],
            [
                {type: 'text', text: 'Aged 19 with a handicap of [-1], I relinquished my amateur status and turned professional, participating on the '},
                {type: 'link', text: 'EuroPro UK Golf Tour', href: links.interests.euroPro},
                {type: 'text', text: '.'},
            ],
            [{type: 'text', text: 'In late 2016, I hung up my golf clubs to study Computer Science. Golf remains a passion of mine, and will remain a lifetime hobby.'}],
        ],
    },
];

export const experienceEntries: EntryData[] = [
    {
        organization: {name: 'siHealth Ltd.', href: links.employers.sihealth, iconClass: 'iconLap'},
        title: [{type: 'text', text: 'DevOps Engineer'}],
        location: 'Harwell Campus, Didcot, U.K.',
        dateRange: 'Nov. 2021 - Current',
        details: [
            {parts: [{type: 'text', text: 'All-in-one: Cloud Engineer / Cloud Architect / DevOps'}]},
            {
                parts: [
                    {type: 'text', text: 'Tech Stack: [ macOS | '},
                    {type: 'link', text: 'AWS Cloud Development Kit (CDK)', href: links.aws.cdk},
                    {type: 'text', text: ' | Python3 | PyCharm | '},
                    {type: 'link', text: 'Boto3 - AWS SDK for Python', href: links.tools.boto3},
                    {type: 'text', text: ' | Unix CLI | Git | '},
                    {type: 'link', text: 'AWS CLI', href: links.aws.cli},
                    {type: 'text', text: ' | Shell (Bash) Scripting | Docker | MySQL | Atlassian ]'},
                ],
            },
            {parts: [{type: 'text', text: "Lead the company's migration of cloud resources from Azure to AWS."}]},
            {
                parts: [
                    {type: 'text', text: 'Implemented a new Infrastructure as Code (IaC) process using '},
                    {type: 'link', text: 'AWS CDK', href: links.aws.cdk},
                    {type: 'text', text: '.'},
                ],
            },
            {
                parts: [{type: 'text', text: 'Main responsibilities:'}],
                nestedItems: [
                    {parts: [{type: 'text', text: 'Development/provisioning of new cloud resources (via IaC and/or scripts) to support multiple active projects.'}]},
                    {parts: [{type: 'text', text: 'Oversee all Continuous Integration/Continuous Delivery (CI/CD) processes.'}]},
                    {parts: [{type: 'text', text: 'Provide internal support to technical team members using cloud resources.'}]},
                ],
            },
            {
                parts: [
                    {type: 'text', text: 'Solely architected and implemented new IaC for an in-house '},
                    {type: 'link', text: 'Satellite Data Acquisition System', href: links.internal.satelliteDiagram},
                    {type: 'text', text: ', for serving live data to company products.'},
                ],
            },
        ],
    },
    {
        organization: {name: 'Peach', href: links.employers.peach, iconClass: 'iconLap'},
        title: [{type: 'text', text: 'Junior Software Engineer'}],
        location: '(Remote) - London, U.K.',
        dateRange: 'Oct. 2020 - Nov. 2021',
        details: [
            {parts: [{type: 'text', text: 'DevOps team member.'}]},
            {parts: [{type: 'text', text: 'Tech Stack: [ Linux | Git | AWS | Python (inc. Django) | Docker | SQL | TeamCity | Jenkins ]'}]},
        ],
    },
    {
        organization: {name: 'Red Bull Technology / Red Bull Racing', href: links.employers.redBull, iconClass: 'iconLap'},
        title: [{type: 'text', text: 'IT Student Placement'}],
        location: 'Milton Keynes, U.K.',
        dateRange: 'Jun. 2018 - Jun. 2019',
        details: [
            {parts: [{type: 'text', text: 'Project lead the organisation of new starter hardware and software delivery.'}]},
            {parts: [{type: 'text', text: 'Volunteered during busy F1 race weekend.'}]},
        ],
    },
];

export const educationNote: InlinePart[] = [
    {type: 'text', text: 'NB. See my AWS certificates in the '},
    {type: 'route', text: 'Computing Skills', to: '/computing'},
    {type: 'text', text: ' section.'},
];

export const educationEntries: EntryData[] = [
    {
        organization: {name: 'University of Kent', href: links.education.uniOfKent, iconClass: 'iconUni'},
        title: [
            {type: 'text', text: '(First-Class Honours) '},
            {type: 'link', text: 'BSc Computer Science with a Year in Industry', href: links.education.compSciYearInd},
        ],
        location: 'Canterbury, U.K.',
        dateRange: 'Sep. 2016 - Jun. 2020',
        details: [
            {
                parts: [{type: 'text', text: 'Year 3: 82%'}],
                nestedItems: [
                    {
                        parts: [
                            {type: 'text', text: '(First-Class) '},
                            {type: 'icon', iconClass: 'iconPaper'},
                            {type: 'text', text: 'Research Project - '},
                            {type: 'link', text: '"Quantum Cryptography: Security for the Post-Quantum world"', href: links.internal.researchProject},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: 'Awarded: Most Exciting Idea for Global Outreach - Sponsored by '},
                            {type: 'link', text: 'TMLEP', href: links.education.tmlep},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: '92% '},
                            {type: 'link', text: 'Computer Security and Cryptography', href: links.education.compSecCrypt},
                            {type: 'text', text: ' [ Java ] - Featuring my '},
                            {type: 'link', text: 'favourite assignment', href: links.projects.cipherDecrypt},
                            {type: 'text', text: ' ^_^'},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: '88% '},
                            {type: 'link', text: 'Computer Networks and Communication', href: links.education.compNetCom},
                            {type: 'text', text: ' [ Java ]'},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: '88% '},
                            {type: 'link', text: 'Programming Language Implementation', href: links.education.progLangImp},
                            {type: 'text', text: ' [ OCaml | C ]'},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: '88% '},
                            {type: 'link', text: 'Programming Languages: Applications and Design', href: links.education.progLangsApp},
                            {type: 'text', text: ' [ Java | Rust | Haskell ]'},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: '82% '},
                            {type: 'link', text: '(Masters) Data Mining and Knowledge Discovery', href: links.education.dataMining},
                            {type: 'text', text: ' [ R ]'},
                        ],
                    },
                    {
                        parts: [
                            {type: 'text', text: '70% '},
                            {type: 'link', text: 'Internet of Things', href: links.education.iot},
                            {type: 'text', text: ' [ C++ Arduino | Java | JDBC | MySQL | PHP | CSS ]'},
                        ],
                    },
                ],
            },
            {parts: [{type: 'text', text: 'Year 2: 78% [ Java | Erlang | JavaScript | jQuery | AJAX | PHP | HTML | CSS | Haskell ]'}]},
            {parts: [{type: 'text', text: 'Year 1: 86% [ Java | JavaScript | MySQL | PHP | HTML | CSS ]'}]},
        ],
    },
    {
        organization: {name: 'Newberry College', href: links.education.newberry, iconClass: 'iconUni'},
        title: [{type: 'text', text: 'Mathematics Major'}],
        location: 'Newberry, South Carolina, U.S.A.',
        dateRange: 'Jan. 2015 - Oct. 2015',
        details: [
            {parts: [{type: 'text', text: 'I was offered a 100% scholarship (golf and academic) to play for the Newberry College NCAA (National Collegiate Athletic Association) golf team while studying as a Mathematics Major.'}]},
            {parts: [{type: 'text', text: 'My GPA (Grade Point Average) for the time I was there was 3.8/4.0 (A-Grade).'}]},
        ],
    },
    {
        organization: {name: 'The Open University', href: links.education.openUni, iconClass: 'iconUni'},
        title: [{type: 'text', text: 'Certificate of Higher Education (Open)'}],
        location: '(Remote) - Milton Keynes, U.K.',
        dateRange: 'Jun. 2012 - Jul. 2014',
        details: [
            {parts: [{type: 'text', text: 'I studied (part-time) for two years: Computing, Psychology and Mathematics.'}]},
            {parts: [{type: 'text', text: 'Computing: Overall Continuous Assessment Score: 75%, Overall Examinable Score: 89%'}]},
        ],
    },
    {
        organization: {name: 'The Harvey Grammar School', href: links.education.harvey, iconClass: 'iconUni'},
        title: [{type: 'text', text: 'GCSE (General Certificate of Higher Education)'}],
        location: 'Folkestone, U.K.',
        dateRange: 'Sep. 2007 - Jul. 2012',
    },
];

export const computingSections: SkillSectionData[] = [
    {
        title: 'Certificates',
        items: [
            [{type: 'link', text: 'AWS CSA-A (Certified Solutions Architect – Associate)', href: links.certifications.awsCsaA}],
            [{type: 'link', text: 'AWS CCP (Certified Cloud Practitioner)', href: links.certifications.awsCcp}],
            [{type: 'link', text: 'HackerRank Problem Solving 6-Star (Badge)', href: links.certifications.hackerrank}],
        ],
    },
    {
        title: 'Operating Systems',
        items: [
            [{type: 'text', text: 'macOS'}],
            [{type: 'text', text: 'Amazon Linux 2'}],
            [{type: 'text', text: 'Ubuntu 22.04'}],
            [{type: 'text', text: 'iOS'}],
        ],
    },
    {
        title: 'Tech Stack',
        wide: true,
        items: [
            [
                {type: 'link', text: 'AWS Cloud Development Kit (CDK)', href: links.aws.cdk},
                {type: 'text', text: '*'},
            ],
            [
                {type: 'text', text: 'Python3 [ '},
                {type: 'link', text: 'PyCharm', href: links.tools.pycharm},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'Boto3 - AWS SDK for Python', href: links.tools.boto3},
                {type: 'text', text: ' ]'},
            ],
            [
                {type: 'text', text: 'Unix CLI [ '},
                {type: 'link', text: 'oh-my-zsh', href: links.tools.ohMyZsh},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'Homebrew', href: links.tools.homebrew},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'Git', href: links.tools.git},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'AWS CLI', href: links.aws.cli},
                {type: 'text', text: ' ]'},
            ],
            [{type: 'text', text: 'Shell (Bash) Scripting'}],
            [
                {type: 'text', text: 'Docker [ '},
                {type: 'link', text: 'AWS ECR - Elastic Container Registry', href: links.aws.ecr},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'Docker Compose', href: links.tools.dockerCompose},
                {type: 'text', text: ' ]'},
            ],
            [{type: 'text', text: 'MySQL'}],
            [
                {type: 'text', text: 'Atlassian [ '},
                {type: 'link', text: 'Bitbucket', href: links.tools.bitbucket},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'Jira', href: links.tools.jira},
                {type: 'text', text: ' | '},
                {type: 'link', text: 'Confluence', href: links.tools.confluence},
                {type: 'text', text: ' ]'},
            ],
            [{type: 'link', text: 'Markdown', href: links.tools.markdown}],
            [{type: 'link', text: 'LaTeX', href: links.tools.latex}],
            [{type: 'link', text: 'Cryptography', href: links.tools.cryptography}],
        ],
    },
    {
        title: 'Projects',
        wide: true,
        items: [
            [
                {type: 'link', text: 'AWS CDK Examples', href: links.projects.awsCdkExamples},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'AWS CDK', href: links.aws.cdk},
                {type: 'text', text: '* ]'},
            ],
            [
                {type: 'link', text: 'IPsec VPN Server', href: links.projects.ipsecVpnServer},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'AWS CDK', href: links.aws.cdk},
                {type: 'text', text: '* ]'},
            ],
            [
                {type: 'link', text: 'OpenVPN VPN Server', href: links.projects.openvpnVpnServer},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'AWS CDK', href: links.aws.cdk},
                {type: 'text', text: '* ]'},
            ],
            [
                {type: 'link', text: 'Proxy Server', href: links.projects.proxyServer},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'AWS CDK', href: links.aws.cdk},
                {type: 'text', text: '* ]'},
            ],
            [
                {type: 'link', text: 'PyPi Server', href: links.projects.pypiServer},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'AWS CDK', href: links.aws.cdk},
                {type: 'text', text: '* ]'},
            ],
            [
                {type: 'link', text: 'AWS Scripts Examples', href: links.projects.awsScriptsExamples},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'Boto3 - AWS SDK for Python', href: links.tools.boto3},
                {type: 'text', text: ' | Shell | '},
                {type: 'link', text: 'AWS CLI', href: links.aws.cli},
                {type: 'text', text: ' ]'},
            ],
            [
                {type: 'link', text: 'AWS Lambda Examples', href: links.projects.awsLambdaExamples},
                {type: 'text', text: ' [ Python3 | '},
                {type: 'link', text: 'Boto3 - AWS SDK for Python', href: links.tools.boto3},
                {type: 'text', text: ' | JavaScript ]'},
            ],
            [
                {type: 'link', text: 'AWS EC2 Examples', href: links.projects.awsEc2Examples},
                {type: 'text', text: ' [ Shell ]'},
            ],
            [
                {type: 'link', text: 'My React Website', href: links.projects.dwaWebsiteReact},
                {type: 'text', text: ' [ React | TypeScript | Python3 - '},
                {type: 'link', text: 'AWS Lambda (Functions)', href: links.aws.lambda},
                {type: 'text', text: ' | SCSS ]'},
            ],
            [
                {type: 'link', text: 'HackerRank Problem Solving Solutions', href: links.projects.pythonHackerrank},
                {type: 'text', text: ' [ Python3 ]'},
            ],
            [
                {type: 'link', text: 'Sudoku Solver', href: links.projects.sudokuSolver},
                {type: 'text', text: ' [ Python3 ]'},
            ],
            [
                {type: 'link', text: 'Ciphertext Decryption', href: links.projects.cipherDecrypt},
                {type: 'text', text: ' [ Java ]'},
            ],
            [
                {type: 'link', text: 'Homebrew Package Auto-Upgrade Tool', href: links.projects.homebrewAuto},
                {type: 'text', text: ' [ Shell ]'},
            ],
            [
                {type: 'link', text: 'Open All Images', href: links.projects.openAllImages},
                {type: 'text', text: ' [ Shell | AppleScript ]'},
            ],
            [
                {type: 'link', text: 'Timestamp Media', href: links.projects.timestampMedia},
                {type: 'text', text: ' [ AppleScript ]'},
            ],
        ],
    },
    {
        title: '*AWS Tech Stack',
        wide: true,
        compact: true,
        items: [
            [{type: 'link', text: 'ACM - Certificate Manager', href: links.aws.certificateManager}],
            [{type: 'link', text: 'AmazonMQ', href: links.aws.amazonMq}],
            [{type: 'link', text: 'Amplify (Apps)', href: links.aws.amplify}],
            [{type: 'link', text: 'CloudFormation', href: links.aws.cloudformation}],
            [{type: 'link', text: 'CloudFront', href: links.aws.cloudfront}],
            [{type: 'link', text: 'CloudWatch (Alarms, Log Groups, Metrics)', href: links.aws.cloudwatch}],
            [{type: 'link', text: 'CodeArtifact', href: links.aws.codeartifact}],
            [{type: 'link', text: 'CodeBuild', href: links.aws.codebuild}],
            [{type: 'link', text: 'CodePipeline (inc. CodeConnections, formerly CodeStar Connections)', href: links.aws.codepipeline}],
            [{type: 'link', text: 'DynamoDB', href: links.aws.dynamodb}],
            [{type: 'link', text: 'EC2 - Elastic Compute Cloud (ALBs & NLBs, Security Groups, ASGs, Launch Templates, Volumes, Elastic IPs)', href: links.aws.ec2}],
            [{type: 'link', text: 'ECR - Elastic Container Registry', href: links.aws.ecr}],
            [{type: 'link', text: 'ECS - Elastic Container Service (Fargate)', href: links.aws.ecs}],
            [{type: 'link', text: 'EFS - Elastic File System', href: links.aws.efs}],
            [{type: 'link', text: 'ElastiCache (Redis OSS)', href: links.aws.elasticache}],
            [{type: 'link', text: 'EventBridge (Buses, Rules)', href: links.aws.eventbridge}],
            [{type: 'link', text: 'IAM - Identity & Access Management (User Groups, Roles, Policies)', href: links.aws.iam}],
            [{type: 'link', text: 'KMS - Key Management Service', href: links.aws.kms}],
            [{type: 'link', text: 'Lambda (Functions)', href: links.aws.lambda}],
            [{type: 'link', text: 'RDS - Relational Database Service (Databases, Proxies)', href: links.aws.rds}],
            [{type: 'link', text: 'Route53 (Hosted Zones, Domain Management)', href: links.aws.route53}],
            [{type: 'link', text: 'S3 - Simple Storage Service (Buckets, Lifecycle Rules)', href: links.aws.s3}],
            [{type: 'link', text: 'SES - Simple Email Service', href: links.aws.ses}],
            [{type: 'link', text: 'SNS - Simple Notification Service (Topics, Mobile Push Notifications)', href: links.aws.sns}],
            [{type: 'link', text: 'SSM - Systems Manager (Parameter Store)', href: links.aws.systemsManager}],
            [{type: 'link', text: 'Secrets Manager', href: links.aws.secretsManager}],
            [{type: 'link', text: 'Step Functions (State Machines)', href: links.aws.stepFunctions}],
            [{type: 'link', text: 'WAF - Web Application Firewall (Web ACLs)', href: links.aws.waf}],
        ],
    },
    {
        title: 'Events',
        items: [[{type: 'link', text: '2017 Cisco University Challenge', href: links.events.ciscoUniChallenge}]],
    },
];

