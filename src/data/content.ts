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
  "TYPESCRIPT",
  "PYTHON",
  "DOCKER",
  "GITHUB ACTIONS",
  "AWS",
  "GIT",
  "LINUX",
  "SQL",
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
    "An honest representation of my technical capabilities: clearly distinguishing independent programming proficiency, foundational knowledge, practical project exposure, and active learning.",
  categories: [
    {
      title: "Frontend Development",
      level: "Strong Foundation & Active Learning",
      experienceType: "Strong Knowledge & Independent Scripting",
      description:
        "Strong foundation in HTML and CSS layout systems. Capable of independently writing basic JavaScript programs and DOM interactions. Actively learning React component structures and basic TypeScript types.",
      skills: [
        "HTML & CSS (Strong Foundation)",
        "JavaScript (Basic / Independent Programs)",
        "React (Learning / Foundational)",
        "TypeScript (Learning / Foundational)",
      ],
    },
    {
      title: "Backend & Programming",
      level: "Foundational & Basic Knowledge",
      experienceType: "Basic Syntax & Conceptual Understanding",
      description:
        "Basic programming knowledge in Python with an understanding of client-server architecture, HTTP request-response cycles, and foundational backend concepts. Familiar with relational table concepts and basic SQL queries through project exposure.",
      skills: [
        "Python (Basic Programming Knowledge)",
        "Backend Development (Foundational Understanding)",
        "Databases & SQL (Basic Knowledge / Project Exposure)",
      ],
    },
    {
      title: "Cloud & DevOps",
      level: "Practical Project Experience",
      experienceType: "Containerization & CI/CD Pipelines",
      description:
        "Practical project experience containerizing local and staging runtimes using Docker, and automating testing and build workflows using GitHub Actions. Hands-on project exposure to AWS cloud services (EC2, ECR) rather than enterprise-scale expertise.",
      skills: [
        "Docker (Practical Project Experience)",
        "GitHub Actions (Practical CI/CD Experience)",
        "AWS (Project Exposure)",
      ],
    },
    {
      title: "Developer Tools & Fundamentals",
      level: "Core Fundamentals",
      experienceType: "Version Control & CLI Operations",
      description:
        "Core version control workflows for managing source code and collaborative branches, combined with command-line fundamentals for Linux directory navigation and shell operations.",
      skills: [
        "Git & GitHub (Fundamentals)",
        "Linux (Fundamentals / CLI)",
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
    status: "In Progress",
    description:
      "An in-progress cloud-based platform prototype built with Flask to experiment with application health monitoring, CI/CD automation, and security scanning in software delivery workflows.",
    problemSolved:
      "Modern development workflows frequently separate application code from automated security analysis and cloud deployment, increasing the risk of unpatched vulnerabilities and broken production releases.",
    contribution:
      "Building a lightweight Flask dashboard for health monitoring, containerizing the application with Docker and Docker Compose, configuring GitHub Actions workflows for automated testing and initial SonarQube static code checks, and configuring an AWS deployment workflow prototype using EC2 and ECR.",
    highlights: [
      "Flask dashboard prototype to display application health status and development activity.",
      "Docker containerization using Dockerfile and Docker Compose for consistent local development environments.",
      "Initial CI/CD pipeline setup using GitHub Actions with static code quality analysis experimentation.",
      "Configuring AWS deployment workflow concepts with Amazon ECR and EC2 container hosting.",
    ],
    stack: [
      "Python",
      "Flask",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "AWS (EC2, ECR)",
      "SonarQube",
      "HTML/CSS",
    ],
    repoUrl: "https://github.com/mohdshahid7033/cloud-devsecops-platform",
  },
  other: [
    {
      title: "Hotel Management System",
      featured: false,
      description:
        "A desktop hotel management application designed to manage front-desk hotel operations, room bookings, guest records, room availability, and revenue reports.",
      problemSolved:
        "Small-to-medium hospitality establishments need a dependable, lightweight desktop system to manage room reservations, guest logs, and billing without relying on complex cloud infrastructure.",
      contribution:
        "Implemented desktop graphical user interfaces using Python Tkinter, constructed room reservation and guest check-in/checkout workflows, built JSON data persistence handlers, and assisted with revenue calculation logic.",
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
      title: "National Land Acquisition and Management System (MLAMS)",
      featured: false,
      collaboration: "Collaborative project developed with Abaid Khan.",
      description:
        "A multi-module web-based land acquisition and records system prototype featuring GIS parcel boundary visualization, digital acquisition workflow tracking, compensation calculations, and centralized reporting.",
      problemSolved:
        "Large-scale infrastructure land acquisition involves multi-stage administrative approvals, complex geographic parcel boundaries, and transparent entitlement calculations that require organized digital data management.",
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
