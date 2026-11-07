// ─────────────────────────────────────────────────────────────
// Content and profile data for Mohd Shahid Moin Uddin's portfolio.
// Verified and calibrated for 100% technical accuracy.
// ─────────────────────────────────────────────────────────────
import type {
  Certification,
  EducationItem,
  Fact,
  NavItem,
  Profile,
  Project,
  SkillCategory,
} from "./types";

export const profile: Profile = {
  firstName: "Mohd Shahid",
  lastName: "Moin Uddin",
  fullName: "Mohd Shahid Moin Uddin",
  initials: "SM",
  headline: "Aspiring Full-Stack Developer",
  role: "Frontend-Focused Developer",
  supportingDescription:
    "Frontend-focused developer with foundational Python and backend knowledge, practical Cloud & DevOps project experience, and an interest in building reliable web applications.",
  location: "Hyderabad, Telangana, India",
  status: "Final-Year BCA Student · Osmania University · Graduating 2027",
  opportunityStatus: "Open to internships and fresher opportunities",
  summary:
    "Frontend-focused developer with foundational Python and backend knowledge, practical Cloud & DevOps project experience, and an interest in building reliable web applications. Actively developing independent programming depth across modern web and cloud technologies.",
  email: "shahidmohd7033@gmail.com",
  githubUrl: "https://github.com/mohdshahid7033",
  linkedinUrl: "https://www.linkedin.com/in/mohd-shahid-moinuddin-815624426/",
  // Path where your resume is located in public/resume.pdf
  resumeUrl: "/resume.pdf",
  hasResume: true,
  // Leave empty if not using a photograph. To add a photo later, place photo.jpg in public/ and specify '/photo.jpg'
  avatarUrl: "",
};

export const fullName = profile.fullName;

// Order here determines the navigation bar order.
export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// All section IDs observed by the active section scroll tracker.
export const sectionIds: string[] = [
  "home",
  ...navItems.map((item) => item.id),
];

// Technology strip displayed below the hero section.
export const techStrip: string[] = [
  "HTML & CSS",
  "JAVASCRIPT",
  "REACT",
  "PYTHON",
  "FLASK",
  "DOCKER",
  "AWS",
  "GITHUB ACTIONS",
  "POSTGRESQL",
];

export const about = {
  intro:
    "Final-year student with frontend foundations, hands-on cloud project exposure, and an active commitment to continuous learning.",
  paragraphs: [
    "I'm a final-year Bachelor of Computer Applications student interested in web development, cloud computing, and DevOps.",
    "I have a foundation in HTML, CSS, and JavaScript, alongside project experience involving Python, Flask, Docker, GitHub Actions, and AWS.",
    "I enjoy understanding how applications work, exploring new technologies, solving development problems, and improving my programming abilities.",
    "I also use AI development assistants such as ChatGPT, Gemini, Claude, and Antigravity to support coding, debugging, and learning. I focus on understanding application architecture, workflows, and code changes rather than blindly accepting generated code.",
    "I'm currently strengthening my independent programming skills and learning modern frontend and backend development.",
  ],
  facts: [
    { label: "Location", value: "Hyderabad, Telangana, India" },
    { label: "Degree", value: "Bachelor of Computer Applications (BCA)" },
    {
      label: "Institution",
      value: "St. Paul's Degree and PG College, Osmania University",
    },
    { label: "Current Status", value: "Final-Year Student" },
    { label: "Expected Graduation", value: "2027" },
    { label: "Professional Title", value: "Aspiring Full-Stack Developer" },
    {
      label: "Core Focus",
      value: "Frontend-focused with Python & DevOps Project Experience",
    },
    {
      label: "Opportunity Status",
      value: "Open to internships and fresher opportunities",
    },
  ] satisfies Fact[],
};

export const skills = {
  intro:
    "An honest representation of my technical capabilities: clearly distinguishing independent programming proficiency, foundational knowledge, practical project exposure, and AI-assisted workflows.",
  categories: [
    {
      title: "Frontend Development",
      level: "Independent Programming & Active Learning",
      experienceType: "Strong Knowledge & Independent Scripting",
      description:
        "Strong knowledge of modern HTML and CSS layout systems. Capable of independently writing basic JavaScript programs and DOM interactions. Actively learning React component structures and basic TypeScript types through portfolio development.",
      skills: [
        "HTML5 (Strong Knowledge)",
        "CSS3 (Layouts, Flexbox, Grid)",
        "JavaScript (Independent Basic Programming)",
        "TypeScript (Familiar with basic types & interfaces)",
        "React (Learning component structures & UI)",
      ],
    },
    {
      title: "Backend & Programming Foundations",
      level: "Foundational & Guided",
      experienceType: "Conceptual Knowledge & Guided Building",
      description:
        "Understands what backend systems do, client-server HTTP request cycles, and basic Python syntax. Requires assistance and guidance when structuring server programs and backend logic independently.",
      skills: [
        "Python (Basic Syntax & Data Structures)",
        "Backend Architecture Concepts",
        "Flask (Project Exposure & Basic Routing)",
        "Django (Exploration & Fundamentals)",
        "REST APIs (Understanding Endpoints & Requests)",
      ],
    },
    {
      title: "Cloud & DevOps Exposure",
      level: "Practical Project Experience",
      experienceType: "Project Implementation & Pipeline Configuration",
      description:
        "Hands-on project exposure containerizing a web application with Docker, configuring automated CI/CD workflows, and setting up an AWS deployment demonstration workflow.",
      skills: [
        "AWS (EC2, ECR, IAM, SSM — Project-level deployment automation)",
        "Docker & Docker Compose (Containerizing local & staging runtimes)",
        "GitHub Actions (Configuring automated build & test workflows)",
        "CI/CD Workflow Concepts",
      ],
    },
    {
      title: "Security & Code Quality",
      level: "Practical Project Experience",
      experienceType: "Pipeline Quality Gate Integration",
      description:
        "Practical experience integrating automated static code analysis into continuous integration pipelines to check for code smells, bugs, and common security weaknesses.",
      skills: [
        "SonarQube (Static code analysis & quality gate integration)",
        "DevSecOps Concepts (Embedding automated checks into delivery)",
        "Static Code Scanning Awareness",
      ],
    },
    {
      title: "Databases & Storage",
      level: "Foundational & Project Experience",
      experienceType: "Relational Queries & File Storage",
      description:
        "Familiar with relational table structures, basic SQL queries, schema concepts, and structured JSON file storage for lightweight offline applications.",
      skills: [
        "MySQL (Basic relational tables, schema structure & simple queries)",
        "PostgreSQL (Exposure to relational schema setup in collaborative work)",
        "JSON-based File Storage (Practical local data persistence)",
      ],
    },
    {
      title: "AI Development Tools & Version Control",
      level: "Active Daily Workflow",
      experienceType: "Architectural Understanding & AI-Assisted Engineering",
      description:
        "Regularly leverage AI coding assistants to accelerate learning, debug errors, and understand system workflows. Focus on explaining architecture and code changes rather than blindly accepting generated code.",
      skills: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "Antigravity",
        "Git & GitHub Workflows",
        "Linux Fundamentals (Basic shell commands & directory navigation)",
      ],
    },
  ] satisfies SkillCategory[],
};

export const projects: {
  intro: string;
  flagship: Project;
  other: Project[];
} = {
  intro:
    "Verified projects showcasing practical exposure to web applications, cloud deployment automation, containerization, and desktop systems. Every project links directly to its verified GitHub repository.",
  flagship: {
    title: "Cloud-Based DevSecOps Platform",
    featured: true,
    description:
      "A cloud-based platform built with Flask that brings application health monitoring, CI/CD automation, and security checks directly into the software delivery workflow.",
    problemSolved:
      "Modern development workflows frequently separate application code from automated security analysis and cloud deployment, increasing the risk of unpatched vulnerabilities and broken production releases.",
    contribution:
      "Worked on the Flask dashboard for health monitoring, containerized the application with Docker and Docker Compose, configured GitHub Actions workflows for automated testing and SonarQube static code checks, and set up a project-level AWS deployment demonstration workflow using EC2, ECR, and SSM.",
    highlights: [
      "Flask dashboard implementation to display application health metrics and deployment activity.",
      "Docker containerization using Dockerfile and Docker Compose for consistent local development and staging environments.",
      "Automated CI/CD pipeline using GitHub Actions with integrated SonarQube static code quality analysis.",
      "Configured an automated project deployment workflow using GitHub Actions, pushing container images to Amazon ECR and triggering EC2 instance updates via AWS Systems Manager (SSM).",
    ],
    stack: [
      "Python",
      "Flask",
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "AWS ECR",
      "AWS IAM",
      "AWS SSM",
      "GitHub Actions",
      "SonarQube",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
    ],
    repoUrl: "https://github.com/mohdshahid7033/cloud-devsecops-platform",
  },
  other: [
    {
      title: "Hotel Management System",
      featured: false,
      collaboration: "Jointly developed by Mohd Shahid Moin Uddin and Abaid Khan.",
      description:
        "A desktop hotel management application designed to manage hotel operations, bookings, guest information, staff, room availability, and revenue reports.",
      problemSolved:
        "Small-to-medium hotels need a dependable, lightweight desktop system to manage room reservations, guest logs, staff assignments, and billing without relying on complex cloud databases.",
      contribution:
        "Co-developed the desktop graphical interface using Python Tkinter, constructed reservation and guest check-in/checkout workflows, implemented JSON data persistence handlers, and collaborated on revenue reporting.",
      highlights: [
        "Constructed an intuitive desktop GUI using Python Tkinter for front-desk operations.",
        "Implemented modules for room booking, guest management, check-in, checkout, and live room availability tracking.",
        "Created staff management, guest search, booking history logs, housekeeping status, and revenue reporting.",
        "Utilized structured JSON-based data storage for lightweight, reliable, offline-first data persistence.",
      ],
      stack: [
        "Python",
        "Tkinter",
        "JSON-based Storage",
        "Desktop GUI",
        "Data Modeling",
      ],
      repoUrl: "https://github.com/mohdshahid7033/HOTEL-MANAGEMENT-SYSTEM",
    },
    {
      title: "National Land Acquisition and Management System",
      featured: false,
      collaboration: "Collaborative project developed with Abaid Khan.",
      description:
        "A multi-module land acquisition and records system featuring GIS parcel boundary visualization, digital acquisition workflow tracking, compensation calculations, and centralized reporting.",
      problemSolved:
        "Large-scale infrastructure land acquisition involves multi-stage administrative approvals, complex geographic parcel boundaries, and transparent entitlement calculations that require organized data management.",
      contribution:
        "Collaborated with co-developer Abaid Khan on reviewing and integrating frontend GIS map displays for land parcel boundaries, assisted with testing Node.js/Express API route endpoints, and supported PostgreSQL schema organization for compensation records.",
      highlights: [
        "Architected land parcel management modules to track survey records and multi-stage acquisition workflows.",
        "Integrated map visualization tools to display land parcel boundaries and plot geographic survey coordinates for acquisition records.",
        "Implemented compensation tracking and entitlement calculation logic for transparent acquisition processing.",
        "Collaborated on Node.js and Express backend API routes with PostgreSQL integration for relational data management.",
      ],
      stack: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "GIS Features",
        "JavaScript",
        "HTML/CSS",
        "REST APIs",
      ],
      repoUrl:
        "https://github.com/mohdshahid7033/National-Land-Acquisition-and-Management-System",
    },
  ],
};

export const education: {
  intro: string;
  items: EducationItem[];
} = {
  intro:
    "Formal academic foundation in computer science, software concepts, and practical problem solving.",
  items: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      status: "Final-Year Student",
      period: "Expected Graduation: 2027",
      institution: "St. Paul's Degree and PG College, Osmania University",
      location: "Hyderabad, Telangana, India",
      details: [
        "Core coursework in Operating Systems, Computer Architecture, Database Management Systems, and Software Engineering.",
        "Active self-directed focus on Web Development, Cloud & DevOps concepts, and practical project implementation.",
      ],
    },
  ],
};

export const certifications: {
  intro: string;
  items: Certification[];
} = {
  intro:
    "Industry-oriented training programs and verified technical credentials.",
  items: [
    {
      name: "Full Stack Development",
      issuer:
        "MHJCGC Software Solution Institute & Abid Ali Khan Educational Trust (The Siasat Daily)",
      year: "2025",
      description:
        "Training program covering full-stack web architectures, frontend UI development, backend RESTful APIs, relational databases, and modern deployment principles.",
    },
  ],
};

export const contact = {
  intro:
    "Interested in discussing an internship, entry-level web development role, or junior cloud/DevOps project? Feel free to reach out directly.",
  email: profile.email,
  githubUrl: profile.githubUrl,
  linkedinUrl: profile.linkedinUrl,
  location: profile.location,
};
