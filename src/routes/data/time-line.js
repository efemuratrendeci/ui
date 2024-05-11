import TimeLineDetail, { Project, Certification } from "../models/TimeLine";

const mboProjects = [
    new Project("OneAPI", "OneAPI is the internal API management platform for Mercedes-Benz AG's developer community. It facilitates API providers in creating profiles for their APIs, enhancing global accessibility. My responsibility revolves around the development and upkeep of the analytics API within the platform. This analytics API focuses on tracking and analyzing the traffic of other APIs on the platform. Additionally, I developed and maintained another internal API, the DRD API, which is dedicated to retrieving user information specific to Mercedes-Benz users for the platform.", ["oneAPI {HUB}", "oneAPI {DRD API}", "oneAPI {ANALYTICS API}", "oneAPI {WEB COMPONENTS}", "oneAPI {DOCS}"]),
];

const mboTechStack = [
    "Next.js",
    "Node.js",
    "Express.js",
    "Golang",
    "Java",
    "Python",
    "PostgreSQL",
    "Druid",
    "Kafka",
    "Redis",
    "Docker",
    "Karate Framework",
    "Selenium",
    "Selenium Grid",
    "Superset",
    "Github",
    "Kong Gateway",
    "Vue.js",
];

const mboCerts = [
    new Certification("1692707461 - White Belt ", "This certification demonstrates proficiency in foundational principles and practices of secure software development. It covers essential concepts such as secure coding, threat modeling, and basic vulnerability management.", "White Belt-Efe Rendeci.pdf"),
    new Certification("1701350045 - Blue Belt ", "Building upon the White Certification, the Blue Certification signifies a deeper understanding and application of secure software development methodologies. It delves into advanced topics such as secure architecture design, encryption techniques, and secure deployment practices.", "Blue Belt-Efe Murat Rendeci.pdf"),
    new Certification("1702848963 - Purple Belt ", "The Purple Certification represents the pinnacle of expertise in secure software development. It validates mastery in complex security strategies, including threat intelligence analysis, advanced penetration testing, and secure software lifecycle management. Holders of the Purple Certification are recognized as leaders in the field, capable of designing and implementing highly resilient and secure software systems.", "Purple Belt-Efe Murat Rendeci.pdf")
];

const nebimCerts = [
    new Certification("TSQL - Reporting", "This is physical certificate that indicates successor is passed from Nebim TSQL exam.")
];

const nebimProjects = [
    new Project("E-Commerce", "Nebim has an integration layer called Integrator API, which enables external companies to retrieve and send data. I did project managements and developments by my self on theese projects.", ["Colombia", "Skechers", "Hummel", "Kiğılı", "Altınyıldız", "Madame-Coco", "Lufian", "DS Damat", "Efor", "Dagi", "BG Store"]),
    new Project("Logistic", "We established logistics integrations through the Integrator API and specialized software developed in-house.", ["Kiğılı", "Madame Coco", "Hummel", "Markalab", "Panço", "Dagi", "InterSport"]),
];

const nebimTechStack = [
    "SQL Server",
    "Node.js",
    "C#",
    "ASP.NET Core",
    "VB.NET"
];

const iuProjects = [
    new Project("Final Project", "Me and my collague designed a portable and efficient oven/fridge system at the same time via 'termo electrical material'. This material has 2 straight porcelain plates and npn junction between them. Theese junctions creates electricity if one of porcelain side is warm and the other is cold. If we provide electricity to the plates one side is getting warmer and the other one gets cold.", ["Termo Electrical Material", "Efficient Energy Usage"]),
];

const aselsanProjects = [
    new Project("Hisar-O Test Project", "Hisar is the air defence system developed by Aselsan. -O suffix mean that missile range is medium. I developed an application for creating dummy sinus and cosinus signals from pc port to device called inertial navigation system.", ["C#", "Descktop Application", "Serial Port Communication", "Signal Generation"]),
];

const timeline = [
    new TimeLineDetail(1, "mercedes-benz.jpeg", "Mercedes-Benz : Full-Stack Software Engineer", "Mercedes-Benz Group AG is a German luxury automotive corporation, founded in 1926 and headquartered in Stuttgart. A division of Daimler AG, it's renowned for its innovation, quality, and technological advancements in luxury vehicles, buses, coaches, and trucks. With a global presence, Mercedes-Benz is a symbol of excellence in the automotive industry. My role is full-stack software engineering on Mercedes-Benz.", "2022 - Present", mboTechStack, mboProjects, mboCerts),
    new TimeLineDetail(2, "nebim.webp", "Nebim Software : Special Software Development & Integration Constultant", "Nebim Software is a distinguished leader in the field of ERP systems, renowned for its innovative solutions tailored specifically for the retail sector. With an impressive market share, Nebim Software holds a commanding 60% of the market volume among retail brands. Its comprehensive suite of products and services empowers businesses to streamline operations, enhance efficiency, and achieve sustainable growth in today's competitive market landscape. My role was developing internal softwares and making integrations with external companies.", "2018 - 2022", nebimTechStack, nebimProjects, nebimCerts),
    new TimeLineDetail(3, "iu.png", "Istanbul University : Bachelor Degree@Electrical and Electronical Engineering", "I became curious about electrical and electronic systems, but it was during my internship at Aselsan that I realized the importance of understanding software development concepts alongside C++ for an Electrical and Electronic Engineer. This realization led me to pursue a Software Development Program at Wissen Academy after graduation, marking the beginning of my journey into software development.", "2013 - 2018", ["Wissen Academie"], iuProjects),
    new TimeLineDetail(4, "aselsan.jpeg", "Aselsan Defence : Intern", "Aselsan is a renowned Turkish defense electronics company, established in 1975. Specializing in advanced technology systems for military and civilian use, it is a global leader in communication, radar, electronic warfare, and command systems. With a strong focus on innovation and research, Aselsan plays a vital role in Turkey's defense sector and is recognized internationally for its contributions.", "2017 - 2017", [], aselsanProjects),
    new TimeLineDetail(5, "yeo.jpg", "YEO Otomation : Intern", "YEO is a Turkish company specializing in electrical and automation systems. With expertise in both fields, the company provides comprehensive solutions tailored to industrial and commercial needs. Known for its quality products and reliable services, YEO is a trusted partner for businesses seeking efficient and innovative electrical and automation solutions.", "2016 - 2016", [], [])
]

export default timeline;