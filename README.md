# Mohd Shahid Moin Uddin — Developer Portfolio

A modern, fast, responsive developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Vite**, and **Motion**. Designed to showcase practical experience in **Web Development, Cloud Infrastructure, and DevOps Toolchains**.

---

## 🌟 Highlights & Features

- **Professional Identity**: Presented honestly as an **Aspiring Full-Stack Developer** (Frontend-focused with foundational Python/backend knowledge and practical Cloud & DevOps project experience).
- **Flagship Project Spotlight**: Comprehensive architectural breakdown of the **Cloud-Based DevSecOps Platform** (Flask, Docker, AWS EC2/ECR/SSM, GitHub Actions, SonarQube, MySQL) detailing problem solved and actual contributions.
- **Collaborative Project Attributions**: Transparent co-developer recognition with Abaid Khan for the **Hotel Management System** and **National Land Acquisition and Management System**.
- **Six Honest Skill Domains**: Clearly distinguishing independent programming ability, foundational knowledge, practical project exposure, and AI-assisted workflows.
- **Accurate Academic & Credential Records**: BCA final-year status (St. Paul's Degree and PG College, Osmania University, 2027) and Full Stack Development Certification (2025).
- **Direct Contact Channels**: Active mailto link to `shahidmohd7033@gmail.com`, LinkedIn profile, GitHub repository links, and client-side validated contact form.
- **Downloadable Resume Integration**: Configured with a predictable public path (`public/resume.pdf`) and graceful awaiting-state handling until the PDF is supplied.
- **Separation of Concerns**: All content and data live in `src/data/content.ts` with strict TypeScript types in `src/data/types.ts`.
- **Accessible & Responsive**: Fully keyboard navigable, WCAG contrast compliant, with `reducedMotion` respect for visitors with motion sensitivity.
- **Clean Architecture**: 0 console errors, 0 linter warnings, 100% type-checked production build.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Bundler** | [Vite 8](https://vitejs.dev/) |
| **Motion** | [Motion](https://motion.dev/) (Framer Motion) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand SVGs |

---

## 📂 Project Structure

```
my-portfolio/
├── public/
│   ├── cloud-devops-hero.png   # Hero infrastructure concept visual
│   ├── favicon.svg             # Website favicon
│   ├── icons.svg
│   └── resume.pdf              # [Optional] Place your actual resume PDF here
├── src/
│   ├── assets/                 # Component assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky responsive navigation with active scroll tracking
│   │   │   └── Footer.tsx      # Footer with direct links, credentials & back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section with deliberate 2-line name & CTAs
│   │   │   ├── About.tsx       # Bio, quick facts & career objective
│   │   │   ├── Skills.tsx      # 6 technical domains with honest level indicators
│   │   │   ├── Projects.tsx    # Flagship project + 2 collaborative projects
│   │   │   ├── Education.tsx   # BCA degree information (Osmania University)
│   │   │   ├── Certifications.tsx # Full stack development credential
│   │   │   └── Contact.tsx     # Direct channels (Email, LinkedIn, GitHub) & form
│   │   └── ui/
│   │       ├── BrandIcons.tsx  # Optimized GitHub & LinkedIn SVGs
│   │       ├── ContactForm.tsx # Client-side validated form with honest handling
│   │       ├── ProjectCard.tsx # Flagship architectural layout & standard cards
│   │       ├── Reveal.tsx      # Accessible viewport reveal animations
│   │       ├── Section.tsx     # Reusable two-column layout wrapper
│   │       └── SocialLinks.tsx # Social media icons wrapper
│   ├── data/
│   │   ├── content.ts          # Central source of truth for text & projects
│   │   └── types.ts            # Strict TypeScript interfaces
│   ├── hooks/
│   │   └── useActiveSection.ts # IntersectionObserver active link hook
│   ├── App.tsx                 # Main application shell with SEO tags
│   ├── index.css               # Tailwind CSS & sleek scrollbar styling
│   └── main.tsx                # React DOM entrypoint
├── index.html                  # HTML template with metadata
├── package.json                # Dependencies & scripts
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `pnpm`

### 2. Installation
```powershell
npm install
```

### 3. Development Server
Run the local development server with Hot Module Replacement:
```powershell
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build & Typecheck
Verify TypeScript types and build the optimized production bundle:
```powershell
npx tsc -b
npm run build
```
Preview the built bundle locally:
```powershell
npm run preview
```

### 5. Linting
Run ESLint to check for code consistency:
```powershell
npm run lint
```

---

## 📄 Resume Integration Instructions

To activate the **Download Resume** button:
1. Export your finalized resume as a PDF named `resume.pdf`.
2. Place the file inside the `public/` directory:
   `public/resume.pdf`
3. In `src/data/content.ts`, change:
   ```ts
   hasResume: true,
   ```
4. Run `npm run build` to verify. The button in the Hero section will immediately switch from "Awaiting PDF" to an active direct download button.

---

## 🌐 Free Hosting & Deployment Recommendations

This project is built with static production bundling and works out of the box on top-tier free hosting platforms:

### Option 1: Vercel (Recommended — Fastest & Simplest)
1. Push your code to your GitHub account (`mohdshahid7033/my-portfolio`).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and select your repository.
4. Framework preset automatically detects **Vite**.
5. Click **Deploy**. Vercel will build and assign you a free `your-portfolio.vercel.app` domain with automated SSL and instant preview deploys on every Git push.

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Select **Import from Git** and pick your repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy Site**.

### Option 3: GitHub Pages
1. In `vite.config.ts`, set `base: '/my-portfolio/'` (matching your repo name).
2. Set up a GitHub Actions workflow `.github/workflows/deploy.yml` with `actions/deploy-pages`.

---

## 👤 Author

**Mohd Shahid Moin Uddin**
- Location: Hyderabad, Telangana, India
- Role: Aspiring Full-Stack Developer
- Email: [shahidmohd7033@gmail.com](mailto:shahidmohd7033@gmail.com)
- LinkedIn: [mohd-shahid-moinuddin-815624426](https://www.linkedin.com/in/mohd-shahid-moinuddin-815624426/)
- GitHub: [@mohdshahid7033](https://github.com/mohdshahid7033)
- Education: BCA (Expected 2027), St. Paul's Degree and PG College, Osmania University
