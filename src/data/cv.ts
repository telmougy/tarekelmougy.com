export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  dates: string;
  industry: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Tarek Elmougy",
  roles: ["Senior SDET", "Senior QA Automation Engineer", "Test Architect"],
  pitch:
    "I architect scalable QA automation frameworks from scratch and ensure release quality across web, mobile, API, and embedded systems — across Fintech, SaaS, Web3, and Automotive.",
  location: "Cairo, Egypt — Open to Remote / Global",
  email: "t.mougy@gmail.com",
  linkedin: "https://linkedin.com/in/tarek-elmougy",
  github: "https://github.com/telmougy",
  cvPath: "/tarek-elmougy-cv.pdf",
};

export const stats: { label: string; value: string }[] = [
  { label: "Years of experience", value: "8+" },
  { label: "Automated scenarios", value: "1000+" },
  { label: "Test cases authored", value: "5000+" },
  { label: "Domains tested", value: "5+" },
];

export const about = [
  "Senior SDET / QA Automation Engineer with 8+ years of experience across Fintech, SaaS, Web3, Automotive, and SDK platforms.",
  "I design scalable automation frameworks from scratch, build reliable UI/API test suites, and strengthen CI/CD quality gates for products where regressions are expensive.",
  "I've owned QA as a sole engineer, led automation as a tech lead, and worked closely with product, backend, frontend, and DevOps teams to turn requirements into risk-based test strategy, automation coverage, and release readiness.",
  "Based in Cairo, open to remote roles worldwide. I care about reliable systems, clean test architecture, fast feedback loops, and helping teams ship with confidence.",
];

export const experience: Experience[] = [
  {
    company: "P2P.org",
    companyUrl: "https://p2p.org",
    role: "Senior SDET (Software Development Engineer in Test)",
    dates: "Jul 2025 — Present",
    industry: "Web3 / Blockchain Staking",
    bullets: [
      "Lead QA for Web3 and blockchain staking systems, ensuring reliability across high-value financial workflows.",
      "Built a Playwright-based dApp automation framework from scratch — wallet connections, transaction signing — and integrated it into CI/CD.",
      "Tested wallet integrations across MetaMask, Rabby, Safe Wallet, OKX Wallet, and Ledger hardware devices.",
      "Refactored and stabilized 200+ API automation tests, reducing flakiness and improving reliability.",
    ],
  },
  {
    company: "Lynk.sa",
    companyUrl: "https://lynk.sa",
    role: "Senior QA Automation Engineer / QA Consultant",
    dates: "Jan 2025 — May 2026",
    industry: "Fintech / Trading",
    bullets: [
      "Owned the QA function as the sole QA engineer — test strategy, coverage, and release validation workflows.",
      "Built a backend API automation framework using REST Assured, TestNG, and Java.",
      "Authored 3000+ manual and automated test cases across trading, onboarding, admin operations, and financial workflows.",
      "Automated 300+ API scenarios validating business rules, edge cases, and error handling.",
    ],
  },
  {
    company: "Tradeling.com",
    companyUrl: "https://tradeling.com",
    role: "Senior QA Automation Engineer",
    dates: "Jul 2023 — Dec 2024",
    industry: "B2B E-commerce / SaaS",
    bullets: [
      "Executed comprehensive testing for both web and mobile applications across multi-platform releases.",
      "Migrated part of the web automation coverage from Cypress to Playwright — improved test stability, maintainability, and execution reliability.",
      "Developed 300+ Cypress automation scenarios for web regression coverage.",
    ],
  },
  {
    company: "Luciq.ai (formerly Instabug)",
    companyUrl: "https://luciq.ai",
    role: "Senior QA Automation Engineer",
    dates: "Feb 2022 — Jul 2023",
    industry: "Mobile SDK / Developer Tools",
    bullets: [
      "Acted as QA Tech Lead — mentored and supported 3 junior QA engineers.",
      "Planned testing activities, task breakdowns, and estimations across 15+ sprints.",
      "Developed 400+ automated scenarios using Cypress and REST Assured.",
      "Performed 3000+ manual tests across iOS, Android, Flutter, Unity, and Cordova SDK integrations.",
    ],
  },
  {
    company: "Valeo",
    companyUrl: "https://valeo.com",
    role: "Senior Validation Engineer",
    dates: "Jan 2019 — Feb 2022",
    industry: "Automotive / Embedded",
    bullets: [
      "Scripted 6,000+ automated test scenarios using Java and CASTLE.",
      "Standardized validation activities to increase maintainability across 5 concurrent projects.",
      "Built a custom desktop application (C# frontend / Python backend) to help management track engineering efforts.",
    ],
  },
  {
    company: "BI-Technologies",
    companyUrl: "https://www.bi-technologies.net",
    role: "Quality Control Engineer",
    dates: "Jul 2017 — Dec 2018",
    industry: "Enterprise Software Solutions",
    bullets: [
      "Established the company's first automation framework for web and mobile using Selenium and Appium — validating sales force automation, ERP, and field/fleet management products.",
      "Logged 150+ bugs and tracked them through the full lifecycle to closure.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Core Automation",
    items: ["Playwright", "Cypress", "Selenium", "REST Assured", "Appium", "Cucumber"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "C#", "SQL"],
  },
  {
    label: "CI/CD & DevOps",
    items: ["GitHub Actions", "Jenkins", "Azure DevOps", "Maven", "Git", "Docker", "Allure Reporting"],
  },
  {
    label: "Testing & QA Management",
    items: ["TestRail", "Testmo", "Test AIO", "Xray", "Jira", "MS TFS"],
  },
  {
    label: "Performance & Specialized",
    items: ["JMeter", "Charles Proxy", "Postman", "Swagger", "SQLite"],
  },
  {
    label: "AI-Assisted Development",
    items: ["Claude Code", "Codex", "Cursor", "Windsurf", "Spec Kit", "CodeRabbit"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    title: "Solidity Smart Contract Development",
    issuer: "Cyfrin Updraft",
    date: "Feb 2026",
    credentialId: "K6WE2F04M8EJ",
  },
  {
    title: "Blockchain Basics",
    issuer: "Cyfrin Updraft",
    date: "Jan 2026",
    credentialId: "BBCC-6EWR5PC3TCLGP",
  },
  {
    title: "Performance Testing with JMeter",
    issuer: "QAcart",
    date: "May 2024",
    credentialId: "647b9b1a12e968b5ab0b5a57",
  },
  {
    title: "REST Assured Framework Design",
    issuer: "QAcart",
    date: "May 2024",
    credentialId: "6322d65a68a7914ddf6217d6",
  },
  {
    title: "REST Assured",
    issuer: "QAcart",
    date: "May 2024",
    credentialId: "63184ee928f3aa74c42d6277",
  },
  {
    title: "ISTQB® Technical Test Analyst (Course)",
    issuer: "ISTQB",
    date: "Jul 2020",
  },
  {
    title: "ISTQB® Foundation Level",
    issuer: "ISTQB",
    date: "Mar 2018",
    credentialId: "180308038",
  },
];

export type Project = {
  title: string;
  company: string;
  summary: string;
  stack: string[];
  focus: string[];
};

export const projects: Project[] = [
  {
    title: "Web3 Ethereum dApp Automation",
    company: "P2P.org — Ethereum Staking dApp",
    summary:
      "Built Playwright automation for P2P.org's Ethereum staking dApp covering wallet flows, staking journeys, and transaction preparation. Maintained and migrated API automation coverage into a unified Playwright-based stack.",
    stack: ["Playwright", "TypeScript", "REST APIs", "GitHub Actions", "Allure", "Web3"],
    focus: ["Ethereum staking", "dApp automation", "Wallet flows", "API automation migration", "CI/CD"],
  },
  {
    title: "Fintech QA Function From Scratch",
    company: "Lynk.sa — Digital Murabaha Platform",
    summary:
      "Built Lynk's QA function from strategy and process to a REST Assured framework with Dockerized CI/CD execution, Allure reporting, and Slack integration. Covered order lifecycle, trade requests, commodity purchase flows, lender/admin operations, and backend validations for Sharia-compliant digital Murabaha workflows.",
    stack: ["Java", "REST Assured", "TestNG", "GitHub Actions", "Docker", "Allure", "Slack"],
    focus: ["QA from scratch", "Fintech testing", "API automation", "Release readiness", "Dockerized execution"],
  },
  {
    title: "E-commerce Search & Seller Dashboard Automation",
    company: "Tradeling — Seller Dashboard · Search · PDP",
    summary:
      "Owned QA for seller dashboard, search engine, listing, and product detail pages as the sole QA. Built Cypress and API automation with CI/CD execution and Allure reporting, then led the migration from Cypress to Playwright for long-term stability.",
    stack: ["Cypress", "TypeScript", "REST Assured", "Java", "GitHub Actions", "Allure", "Playwright"],
    focus: ["Sole QA ownership", "Search testing", "E-commerce automation", "Cypress → Playwright migration"],
  },
  {
    title: "APM SDK Testing & Automation",
    company: "Luciq.ai (Instabug) — Application Performance Monitoring",
    summary:
      "Tested APM SDK behavior manually using Charles Proxy to inspect HTTP/HTTPS traffic, requests, responses, and SDK events. Automated product coverage with Cypress, REST Assured, and Jenkins while mentoring 3 junior QA engineers.",
    stack: ["Cypress", "TypeScript", "REST Assured", "Java", "Jenkins", "Charles Proxy"],
    focus: ["SDK testing", "APM testing", "API automation", "CI/CD", "Mentoring"],
  },
  {
    title: "Automotive Validation & Internal Tooling",
    company: "Valeo — PSA COM2020 · MRA2 · Nissan E-Shifter",
    summary:
      "Automated validation coverage for PSA COM2020, MRA2, and Nissan E-Shifter projects using Valeo's internal CASTLE framework. During COVID, also worked as a developer to build Billable Hours — a WPF desktop tool to help managers monitor engineer effort and allocation.",
    stack: ["Java", "CASTLE Framework", "WPF", "C#", "MVVM", "Python"],
    focus: ["Automotive validation", "System testing", "Desktop tooling", "Internal productivity tools"],
  },
  {
    title: "Sales Force & Ordering Automation Framework",
    company: "BI-Technologies — Salesbuzz · MANDOOBi",
    summary:
      "Built BI-Technologies' first automation framework after starting as Manual QA. Designed and implemented automated coverage for Salesbuzz (mobile sales force automation) and MANDOOBi (FMCG merchant ordering) across web and mobile business flows.",
    stack: ["Java", "Selenium", "Appium", "Sikuli", "TestNG"],
    focus: ["First automation framework", "Web automation", "Mobile automation", "Manual → automation transition"],
  },
];

export type Recommendation = {
  name: string;
  title: string;
  relationship: string;
  quote: string;
  avatar?: string;
  linkedin?: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Ahmed AbouElhamayed",
    title: "Researcher, Engineer and Manager — Software & Hardware",
    relationship: "Managed Tarek at Luciq.ai",
    quote:
      "Tarek was one of the most reliable engineers in my team. Other than his amazing technical skills, he showed extraordinary level of leadership, reliability and flexibility. He's the type of person that I look for as a manager because he made my life very easy. I did not have to tell him what to do. He would jump in to fill in whenever I noticed something is missing. He knows when to check with me before he takes a decision vs when to take the decision himself to get things moving. If I need something done, I know that if I assign it to him, I can remove it from my mind and consider it done.\n\nOther than the work aspect, he brought a very good spirit to the team which helped make the team very cohesive and strong. Any meeting that included him became a meeting that we look forward to because of his light spirit and his way of making everyone included and engaged.\n\nI genuinely hope I can get the blessing of working with him again.",
    avatar: "/AhmedAbouElhamayed.jpeg",
    linkedin: "https://www.linkedin.com/in/aabouelhamayed/",
  },
  {
    name: "Ahmed Farag",
    title: "Staff Software Engineer — AI-Empowered Search & Personalization Architect · CKAD · JSNSD · API Security",
    relationship: "Managed Tarek at Tradeling",
    quote:
      "Tarek worked with me as a Senior QA Engineer at Tradeling, and he quickly stood out for his sharp attention to detail — catching missing requirements and edge cases that others would easily miss.\n\nWhat set him apart was that he never treated his role as just \"testing.\"\n\nHe took the time to understand the business context behind every feature, which consistently translated into high-quality deliverables.\n\nHe was also highly proactive, driving improvements to our CI/CD and automation processes by researching and introducing new tools to the team.\n\nAdd to that strong communication skills and a great collaborative attitude, and you get an engineer any team would be lucky to have. I'd gladly work with him again.",
    avatar: "/AhmedFarag.jpeg",
    linkedin: "https://www.linkedin.com/in/ahmedfaragmostafa/",
  },
  {
    name: "Amar Farouk Merah",
    title: "Product Lead",
    relationship: "Managed Tarek at Lynk.sa",
    quote:
      "If I was to describe Tarek as a professional, the character limit on this post wouldn't let me do him justice. Tarek has been instrumental not just in our technical team, but in our organization. As a Senior QA Engineer, he's been our first line of defence against unexpected issues and a voice for reason and logic that many lack, but he masters. As a teammate, he's always willing to partner with anyone to ensure quality and resolutions are handled accordingly. Amazing work ethic and I am proud and lucky to have the chance to work with him.",
    avatar: "/amarfaroukmerah.jpeg",
    linkedin: "https://www.linkedin.com/in/amarfaroukmerah/",
  },
];

export const education: { title: string; issuer: string; date: string }[] = [
  {
    title: "B.Sc. Computer & Information Science",
    issuer: "Ain Shams University",
    date: "May 2016",
  },
];
