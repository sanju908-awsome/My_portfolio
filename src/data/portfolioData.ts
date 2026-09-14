import { Project, SkillCategory, HackathonEntry, JourneyStep, Certification, CodingPlatform } from '../types';

/**
 * =========================================================================
 * SANJAY KUMAR (SANJU) — PORTFOLIO CONTENT CONFIGURATION
 * =========================================================================
 * Easily edit personal information, projects, links, skills, and hackathons
 * in this file. Changes here reflect immediately across all components.
 * =========================================================================
 */

export const personalInfo = {
  fullName: "Sanjay Kumar",
  displayName: "Sanju",
  initials: "SK.",
  role: "Computer Science Engineering Student",
  specializations: "Full-Stack Developer • AI/ML Enthusiast • Hackathon Builder",
  
  headline: "Building technology that solves real-world problems.",
  alternativeHeadline: "Code. Create. Solve. Build.",
  
  aboutLead: "Hi, I'm Sanju — a Computer Science Engineering student passionate about turning ideas into working technology.",
  aboutBio: "My journey started with a Diploma in Computer Science Engineering, followed by entering B.Tech CSE through lateral entry. I treat coding not merely as coursework, but as an active craft for solving tangible operational friction. From building real-time roadside breakdown dispatch systems to exploring computer vision algorithms for water safety, I love shipping high-utility software and competing in intense hackathons.",
  
  // Editorial Micro-Details
  educationBadge: "B.Tech in Computer Science Engineering",
  academicPath: "Diploma in CSE → B.Tech CSE (Lateral Entry)",
  location: "India",
  status: "Open to Opportunities & Collaborations",
  currentFocus: "Full Stack • AI/ML • Computer Vision • Cloud",

  // Contact & Social Links
  email: "sanjukarra15@gmail.com",
  githubUrl: "https://github.com", // update with your exact GitHub username
  linkedinUrl: "https://linkedin.com", // update with your exact LinkedIn username
  resumeFilename: "Sanjay_Kumar_Resume_CSE.pdf",
  profileImage: "https://i.ibb.co/yFrCpkdC/Whats-App-Image-2026-09-14-at-10-31-12-AM.jpg",
  cutoutImage: "/sanjay-cutout.webp",
};

/**
 * =========================================================================
 * SKILLS DATA
 * Categories with realistic proficiencies (No fake 95% bars)
 * =========================================================================
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Python", proficiency: "Working Knowledge", note: "ML pipelines, scripts, OpenCV, backend logic" },
      { name: "Java", proficiency: "Working Knowledge", note: "OOP principles, core algorithms & data structures" },
      { name: "C++", proficiency: "Working Knowledge", note: "DSA foundations, problem solving & performance" },
      { name: "SQL", proficiency: "Working Knowledge", note: "Relational queries, schema design, joins & indexing" }
    ]
  },
  {
    title: "WEB DEVELOPMENT",
    skills: [
      { name: "React", proficiency: "Working Knowledge", note: "Component architecture, state, hooks & SPA routing" },
      { name: "Node.js", proficiency: "Working Knowledge", note: "REST APIs, asynchronous runtime & microservices" },
      { name: "Express.js", proficiency: "Working Knowledge", note: "Middleware, routing, authentication & API design" },
      { name: "JavaScript (ES6+)", proficiency: "Working Knowledge", note: "Modern syntax, async/await, DOM & event loop" },
      { name: "HTML5 & CSS3", proficiency: "Working Knowledge", note: "Semantic structure, responsive layouts & Tailwind" },
      { name: "Socket.IO", proficiency: "Familiar", note: "Real-time bidirectional event-based communication" }
    ]
  },
  {
    title: "AI / MACHINE LEARNING & COMPUTER VISION",
    skills: [
      { name: "OpenCV", proficiency: "Working Knowledge", note: "Video stream processing, frame manipulation & masks" },
      { name: "YOLO (You Only Look Once)", proficiency: "Working Knowledge", note: "Real-time multi-class object detection" },
      { name: "Scikit-learn", proficiency: "Working Knowledge", note: "Classification, regression, Random Forest & ensembles" },
      { name: "DeepSORT", proficiency: "Familiar", note: "Real-time multi-object tracking with deep associations" },
      { name: "Pandas & NumPy", proficiency: "Working Knowledge", note: "Data cleaning, feature engineering & matrix ops" }
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "MySQL", proficiency: "Working Knowledge", note: "Relational modeling, transactions, foreign key constraints" },
      { name: "Oracle", proficiency: "Familiar", note: "Enterprise database concepts & PL/SQL foundations" }
    ]
  },
  {
    title: "TOOLS & CLOUD PLATFORMS",
    skills: [
      { name: "Git", proficiency: "Working Knowledge", note: "Branching workflows, version control & conflict resolution" },
      { name: "GitHub", proficiency: "Working Knowledge", note: "Open source collaboration, PR reviews & repo management" },
      { name: "Google Cloud", proficiency: "Currently Learning", note: "Cloud compute, bucket storage & containerization" },
      { name: "VS Code", proficiency: "Working Knowledge", note: "Primary IDE, debugger tooling & environment extensions" },
      { name: "Android Studio", proficiency: "Familiar", note: "Mobile runtime emulation & native testing environments" }
    ]
  }
];

/**
 * =========================================================================
 * FEATURED PROJECTS
 * Detailed specs, problems, solutions, architecture & tech stacks
 * =========================================================================
 */
export const projectsData: Project[] = [
  {
    id: "roadside-assistant",
    number: "01",
    title: "Roadside Assistant",
    subtitle: "Roadside Mechanic Booking & Dispatch System",
    category: "Full-Stack Web & Real-Time Geo Tracking",
    featured: true,
    status: "In Development",
    description: "A comprehensive on-demand platform connecting stranded motorists facing highway breakdown emergencies with qualified nearby mechanics in real-time.",
    problem: "When vehicles encounter mechanical failures or punctures in unfamiliar transit corridors, drivers struggle with exorbitant local towing quotes, lack of verified technicians, and blind uncertainty regarding arrival times.",
    solution: "Engineered an end-to-end dispatch infrastructure featuring bidirectional socket communication, location telemetry via Google Maps, auto-dispatch matching, and job lifecycle verification.",
    technologies: ["React", "Node.js", "Express.js", "Socket.IO", "MySQL", "Google Maps API", "Tailwind CSS"],
    features: [
      "Dedicated dual portal: Motorist Emergency UI & On-Duty Mechanic Dispatch Dashboard",
      "Geolocation radius querying to ping active mobile mechanics within range",
      "Real-time status updates: Requested → Accepted → In-Transit → On-Site → Completed",
      "Interactive Google Maps tracking showcasing mechanic approach vector",
      "Estimated time of arrival (ETA) computation and emergency diagnostics checklist",
      "Transparent upfront service estimate to eliminate predatory roadside pricing"
    ],
    architectureSteps: [
      { step: "01", title: "Incident Broadcast", description: "Driver inputs vehicle failure telemetry (battery, tyre, engine) and shares browser GPS coordinates." },
      { step: "02", title: "Spatial Querying", description: "Backend calculates geospatial distance to online mechanics and transmits WebSocket broadcast." },
      { step: "03", title: "Dispatch & Live Sync", description: "Mechanic accepts the order; live tracking socket established with route polyline rendering." },
      { step: "04", title: "Job Resolution", description: "On-site diagnostic completion verified with timestamped resolution log saved into MySQL." }
    ],
    challenges: [
      "Handling real-time state synchronization when one party briefly drops mobile connection on highways.",
      "Optimizing spatial distance queries to avoid polling overhead on high-frequency location updates."
    ],
    outcome: "Currently in active development. Demonstrates working sub-second event broadcasts over WebSockets, live GPS telemetry, and persistent order lifecycles with ongoing feature hardening.",
    githubUrl: "https://github.com",
    diagramType: "geo-dispatch"
  },
  {
    id: "certificate-verifier",
    number: "02",
    title: "Certificate Verification System",
    subtitle: "Educational Credential Tamper Detection Concept",
    category: "Security, OCR & Web Systems",
    featured: false,
    status: "Working Concept",
    description: "A fast verification utility concept designed to authenticate academic transcripts and degree awards using cryptographic hash matching, QR decoding, and OCR tamper cross-examination.",
    problem: "Academic fraud and forged PDF credentials create substantial administrative friction for universities, recruiters, and credential assessment agencies.",
    solution: "Built a browser-first verification platform that combines structured QR signature payloads, optical character text extraction, and sha-256 integrity checks against recorded metadata.",
    technologies: ["React", "Vite", "Tailwind CSS", "Tesseract OCR / JS", "Crypto-JS", "QR Engine"],
    features: [
      "Instant drag-and-drop certificate image and PDF document inspection",
      "Automated extraction of credential serial IDs via embedded high-density QR codes",
      "Client-side SHA-256 cryptographic checksum calculation to check document byte tampering",
      "Visual confidence matrix highlighting mismatch between printed student name and ledger payload",
      "Clean, tamper-evident verification certificate audit badge"
    ],
    architectureSteps: [
      { step: "01", title: "Document Upload", description: "User or recruiter drops credential file into the client-side parsing canvas." },
      { step: "02", title: "QR & Hash Check", description: "Embedded cryptographic payload scanned and compared with calculated document fingerprint." },
      { step: "03", title: "OCR Text Extraction", description: "Key entities (Student Name, Roll No, Degree Major) cross-referenced against signed manifest." },
      { step: "04", title: "Authenticity Verdict", description: "Presents cryptographic verification badge with timestamped audit proof." }
    ],
    challenges: [
      "Maintaining high OCR accuracy across scanned, rotated, or low-resolution certificate photos.",
      "Keeping client-side parsing performant without blocking the main UI thread."
    ],
    outcome: "Created an intuitive, tamper-proof proof-of-concept interface suitable for rapid collegiate credential cross-checking.",
    githubUrl: "https://github.com",
    diagramType: "hash-verification"
  }
];

/**
 * =========================================================================
 * WHAT I DO / WHAT I BUILD (4 CORE PILLARS)
 * =========================================================================
 */
export const whatIBuild = [
  {
    number: "01",
    title: "FULL-STACK DEVELOPMENT",
    description: "Building modern, resilient web applications using React, Node.js, Express, and structured databases. Focused on clean architecture, responsive usability, and intuitive user experiences.",
    tags: ["React", "Node.js", "Express", "REST APIs", "MySQL", "Socket.IO"]
  },
  {
    number: "02",
    title: "AI / MACHINE LEARNING",
    description: "Exploring statistical learning models and machine learning pipelines to extract insight from raw datasets and tackle real-world analytical problems with pragmatic code.",
    tags: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Data Pipelines"]
  },
  {
    number: "03",
    title: "COMPUTER VISION",
    description: "Working with OpenCV and deep learning object detection networks (YOLO, DeepSORT) to build real-time visual monitoring systems that automate surveillance and human safety.",
    tags: ["OpenCV", "YOLO", "DeepSORT", "Object Tracking", "Video Streams"]
  },
  {
    number: "04",
    title: "HACKATHON PROJECTS",
    description: "Rapidly transforming problem statements into functioning full-stack prototypes under tight 24-to-48 hour clocks. High execution discipline with emphasis on functional delivery.",
    tags: ["Rapid Prototyping", "Team Collaboration", "System Design", "Sprint Execution"]
  }
];

/**
 * =========================================================================
 * HACKATHONS & COMPETITIONS
 * Factual entries (Participant, Finalist, Prototype) - No fabricated wins
 * =========================================================================
 */
export const hackathonsData: HackathonEntry[] = [
  {
    id: "hack-01",
    number: "01",
    name: "Inter-College 24H Innovation Hackathon",
    year: "2024",
    domain: "Civic Tech & Public Mobility",
    teamSize: "4 Developers",
    role: "Lead Full-Stack Developer",
    problemStatement: "Bridging the emergency response gap for vehicular breakdowns along semi-urban state highways.",
    technologies: ["React", "Express.js", "MySQL", "Socket.IO", "Maps API"],
    outcome: "Finalist",
    keyTakeaway: "Pitched and defended a functional real-time mechanic dispatch prototype under intense time pressure and panel questioning."
  },
  {
    id: "hack-02",
    number: "02",
    name: "AI & Computer Vision Hack Sprint",
    year: "2024",
    domain: "Public Safety & Healthcare AI",
    teamSize: "3 Developers",
    role: "Computer Vision & Pipeline Engineer",
    problemStatement: "Automating distress surveillance in public recreational water bodies without requiring invasive wearable sensors.",
    technologies: ["Python", "YOLO", "OpenCV", "DeepSORT", "Multiprocessing"],
    outcome: "Team Prototype",
    keyTakeaway: "Optimized model inference down to sub-40ms per frame on local GPUs to demonstrate live camera stream tracking."
  },
  {
    id: "hack-03",
    number: "03",
    name: "Smart Campus Engineering Sprint",
    year: "2023",
    domain: "Academic Tech & Integrity",
    teamSize: "3 Developers",
    role: "Frontend & Logic Architect",
    problemStatement: "Streamlining paperless academic verification while mitigating credential duplication and forging.",
    technologies: ["React", "Vite", "Tesseract OCR", "Crypto-JS"],
    outcome: "Participant",
    keyTakeaway: "Discovered the power of client-side cryptography and OCR for instantaneous document validation."
  }
];

/**
 * =========================================================================
 * MY JOURNEY (ACADEMIC & TECHNICAL MILESTONES)
 * Transparent student progression: Diploma CSE → B.Tech CSE (Lateral Entry)
 * =========================================================================
 */
export const journeySteps: JourneyStep[] = [
  {
    period: "Foundational Phase",
    milestone: "Diploma in Computer Science Engineering",
    title: "Core Computing Foundations & Programming Primer",
    institutionOrContext: "State Board of Technical Education",
    description: "Built rigorous hands-on technical fundamentals in C, C++, computer networks, relational database management (SQL), and digital logic. Developed an enduring enthusiasm for writing software that interacts directly with systems.",
    highlights: ["Object-Oriented Programming principles", "Database design & schema normalization", "Operating systems & Unix shell basics"]
  },
  {
    period: "Progression via Lateral Entry",
    milestone: "B.Tech in Computer Science Engineering",
    title: "Engineering Rigor & Scaled Software Systems",
    institutionOrContext: "Undergraduate CSE Program",
    description: "Secured lateral entry into the B.Tech CSE program. Deepened knowledge in advanced data structures & algorithms, web architecture, machine learning concepts, and software engineering methodologies.",
    highlights: ["Advanced DSA & Algorithm complexity", "Full-Stack web development stacks (MERN/PERN)", "Software engineering project lifecycles"]
  },
  {
    period: "Practical Exploration",
    milestone: "Project-Oriented Engineering",
    title: "Building Real-World Solutions Over Theory",
    institutionOrContext: "Self-Driven Development & Lab Work",
    description: "Committed to practical project building: designed the Roadside Breakdown Assistant platform with live Socket tracking and developed the Computer Vision Drowning Detection prototype using YOLO and OpenCV.",
    highlights: ["Full-Stack system architecture", "Computer vision model integration", "Real-time WebSocket event orchestration"]
  },
  {
    period: "Continuous Upskilling",
    milestone: "Certifications & Hackathon Sprints",
    title: "Industry Skill Hardening & Competitive Sprints",
    institutionOrContext: "Hackathons & Technical Badging",
    description: "Completed Cisco Linux Essentials and specialized enterprise simulations with Deloitte via Forage. Actively tested collaboration and rapid problem-solving stamina in 24-48 hour hackathon arenas.",
    highlights: ["Cisco Linux system administration", "Data analytics & cyber threat simulations", "Agile prototype delivery under deadline"]
  }
];

/**
 * =========================================================================
 * CERTIFICATIONS
 * Factual certifications with verifiable competencies
 * =========================================================================
 */
export const certificationsData: Certification[] = [
  {
    id: "cisco-linux",
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    year: "2024",
    credentialId: "CSCO-LE-VERIFIED",
    description: "Fundamental proficiency in Linux operating systems, terminal command execution, file permissions, shell navigation, users, and packaging systems.",
    skillsGained: ["Linux CLI", "File Systems & Permissions", "Bash Shell Scripting", "System Administration Basics"]
  },
  {
    id: "deloitte-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    year: "2024",
    credentialId: "FORAGE-DELOITTE-DA",
    description: "Practical simulation tackling business data interpretation, data cleaning, exploratory data analysis, dashboard framing, and presenting analytical findings.",
    skillsGained: ["Exploratory Data Analysis", "Business Intelligence", "Data Interpretation", "Client Presentation"]
  },
  {
    id: "deloitte-cyber",
    title: "Cyber Security Simulation",
    issuer: "Deloitte (via Forage)",
    year: "2023",
    credentialId: "FORAGE-DELOITTE-CYBER",
    description: "Hands-on experience analyzing simulated security breaches, understanding authentication flows, identifying vulnerability vectors, and recommending threat containment.",
    skillsGained: ["Cyber Threat Analysis", "Incident Triage", "Vulnerability Vectors", "Security Hygiene"]
  }
];

/**
 * =========================================================================
 * CODING / BUILD / LEARN PLATFORMS
 * Transparent, no fabricated LeetCode contest rankings or fake commit numbers
 * =========================================================================
 */
export const codingPlatforms: CodingPlatform[] = [
  {
    name: "GitHub",
    handle: "@sanjaykumar",
    tagline: "Building projects and learning in public.",
    url: "https://github.com",
    focusAreas: ["Open Repositories", "Full-Stack Codebases", "AI/CV Experiments", "Collaborative PRs"],
    metricsText: "Source code repository for academic systems, hackathon MVPs, and daily implementation drills."
  },
  {
    name: "LeetCode",
    handle: "Problem Solving",
    tagline: "Sharpening problem-solving and DSA skills.",
    url: "https://leetcode.com",
    focusAreas: ["Arrays & Strings", "Binary Search & Trees", "Hash Maps & Two Pointers", "Dynamic Programming Basics"],
    metricsText: "Consistent practice solving algorithmic challenges in C++, Java, and Python to master computational complexity."
  }
];
