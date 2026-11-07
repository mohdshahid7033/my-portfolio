// Strict TypeScript interfaces defining the shape of content.ts.

export type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;
  headline: string;
  role: string;
  supportingDescription: string;
  location: string;
  summary: string;
  status: string;
  opportunityStatus: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  /** Relative path to resume asset, e.g. '/resume.pdf' */
  resumeUrl: string;
  /** Set to true once the actual PDF is placed in public/resume.pdf */
  hasResume: boolean;
  /** Optional personal photo path if user decides to add one later */
  avatarUrl?: string;
};

export type NavItem = {
  id: string;
  label: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  level: string;
  experienceType: string;
  description: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  problemSolved: string;
  contribution: string;
  featured: boolean;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  collaboration?: string;
};

export type EducationItem = {
  degree: string;
  status: string;
  period: string;
  institution: string;
  location: string;
  details?: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
  description?: string;
};
