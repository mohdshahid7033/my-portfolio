import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  FileText,
  GitBranch,
  Layers,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { profile, techStrip } from "../../data/content";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative mx-auto grid min-h-[82vh] w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16"
      >
        {/* Subtle background glow - centered and contained to avoid horizontal document stretch */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 -z-10 h-72 w-72 max-w-full rounded-full bg-emerald-500/10 blur-[100px]"
        />

        {/* Left column: Content (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full min-w-0 lg:col-span-7"
        >
          {/* Opportunity status badge */}
          <div className="mb-4 sm:mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-emerald-300 leading-tight">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-left break-words">{profile.opportunityStatus}</span>
          </div>

          {/* Deliberate Two-Line Name Formatting */}
          <h1 className="text-[1.65rem] min-[390px]:text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none break-words">
            <span className="block">MOHD SHAHID</span>
            <span className="block text-emerald-400">MOIN UDDIN</span>
          </h1>

          {/* Final Professional Positioning */}
          <div className="mt-3 sm:mt-4 space-y-1">
            <h2 className="text-lg font-bold text-zinc-100 sm:text-2xl">
              {profile.headline}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-emerald-400">
              Frontend-focused with Python &amp; DevOps Project Experience
            </p>
          </div>

          {/* Supporting Professional Description */}
          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-300">
            {profile.supportingDescription}
          </p>

          {/* Status & Location Pill */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs text-zinc-400 w-full min-w-0">
            <span className="flex items-center gap-1.5 shrink-0">
              <MapPin size={14} className="text-emerald-400 shrink-0" aria-hidden="true" />
              <span>{profile.location}</span>
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="max-w-full rounded-xl sm:rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-zinc-300 text-[11px] sm:text-xs leading-normal break-words">
              🎓 Final-Year BCA (2027) · Osmania University
            </span>
          </div>

          {/* Action Buttons - Vertically stacked on mobile (w-full), row on tablet/desktop */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 sm:px-6 py-3.5 text-xs font-bold text-black transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-md shadow-emerald-500/20 text-center"
            >
              <span>Explore Projects</span>
              <ArrowRight size={15} aria-hidden="true" className="shrink-0" />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 sm:px-6 py-3.5 text-xs font-semibold text-zinc-200 transition hover:border-emerald-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 text-center"
            >
              <span>Contact Me</span>
            </a>

            {/* Download Resume Button with Graceful State */}
            {profile.hasResume ? (
              <a
                href={profile.resumeUrl}
                download="resume.pdf"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 text-center"
              >
                <Download size={14} className="shrink-0" />
                <span>Download Resume</span>
              </a>
            ) : (
              <div className="relative group w-full sm:w-auto">
                <button
                  type="button"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-dashed border-zinc-700 bg-zinc-900/50 px-5 py-3.5 text-xs font-medium text-zinc-400 cursor-not-allowed text-center"
                  title="Place resume.pdf in public/ folder to enable instant download"
                >
                  <FileText size={14} className="text-zinc-500 shrink-0" />
                  <span>Resume (Awaiting PDF)</span>
                </button>
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 border border-zinc-700 px-2 py-1 text-[10px] text-zinc-300 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Place resume.pdf in public/ to activate
                </span>
              </div>
            )}
          </div>

          {/* Social Profiles */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4 pt-5 sm:pt-6 border-t border-zinc-800/80 w-full min-w-0">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider shrink-0">
              Profiles:
            </span>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3.5 py-1.5 text-xs text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-400 min-h-[36px]"
            >
              <GithubIcon size={14} className="shrink-0" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3.5 py-1.5 text-xs text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-400 min-h-[36px]"
            >
              <LinkedinIcon size={14} className="shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right column: Design Illustration Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full min-w-0 lg:col-span-5"
        >
          {/* Ambient Glow - Contained within boundaries */}
          <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 blur-[60px] pointer-events-none" />

          {/* Container Card */}
          <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0e1411]/90 shadow-2xl backdrop-blur-md">
            {/* Header: Architecture Illustration */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/80 px-3 py-2.5 sm:px-4 sm:py-3 gap-2 w-full min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-emerald-500/80" />
                <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-[11px] text-zinc-400 truncate min-w-0">
                  architecture-concept.draw
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-zinc-400 bg-zinc-800/80 rounded px-1.5 sm:px-2 py-0.5">
                <Sparkles size={11} className="text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap">design illustration</span>
              </div>
            </div>

            {/* Genuine Image Asset - Strictly bounded to card width */}
            <div className="relative p-2 sm:p-3 bg-gradient-to-b from-transparent to-[#070b08]/80 w-full min-w-0">
              <img
                src="/cloud-devops-hero.png"
                alt="Cloud DevOps and DevSecOps architecture concept visual"
                className="w-full max-w-full h-auto rounded-xl object-contain shadow-inner"
                loading="eager"
              />
            </div>

            {/* Clear design illustration concept footer - Min-w-0 enabled truncation */}
            <div className="border-t border-zinc-800/80 bg-zinc-950/70 p-3 sm:p-4 space-y-2 w-full min-w-0">
              <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 min-w-0">
                <Layers size={11} className="text-emerald-400 shrink-0" />
                <span className="truncate min-w-0">Conceptual Pipeline &amp; Deployment Topology</span>
              </p>

              <div className="flex items-center justify-between text-xs pt-1 gap-2 w-full min-w-0">
                <span className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 font-mono text-[10px] sm:text-xs truncate min-w-0 flex-1">
                  <GitBranch size={13} className="text-emerald-400 shrink-0" />
                  <span className="truncate min-w-0">GitHub Actions CI/CD</span>
                </span>
                <span className="text-zinc-500 font-mono text-[9px] sm:text-[11px] shrink-0 text-right">Pipeline Design</span>
              </div>

              <div className="flex items-center justify-between text-xs gap-2 w-full min-w-0">
                <span className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 font-mono text-[10px] sm:text-xs truncate min-w-0 flex-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate min-w-0">SonarQube Quality Gate</span>
                </span>
                <span className="text-zinc-500 font-mono text-[9px] sm:text-[11px] shrink-0 text-right">Security Scan</span>
              </div>

              <div className="flex items-center justify-between text-xs gap-2 w-full min-w-0">
                <span className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 font-mono text-[10px] sm:text-xs truncate min-w-0 flex-1">
                  <Terminal size={12} className="text-emerald-400 shrink-0" />
                  <span className="truncate min-w-0">Docker &amp; AWS EC2 / ECR</span>
                </span>
                <span className="text-zinc-500 font-mono text-[9px] sm:text-[11px] shrink-0 text-right">Container Host</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Verified Technology Strip */}
      <section
        aria-label="Verified Technologies"
        className="w-full min-w-0 border-y border-zinc-800/80 bg-zinc-950/40"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 lg:gap-x-8 gap-y-2.5 px-3 sm:px-6 py-4 sm:py-5 text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-400 lg:justify-between lg:px-12">
          {techStrip.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 sm:gap-2 transition hover:text-emerald-400 shrink-0"
            >
              <span className="h-1 w-1 rounded-full bg-emerald-500/60 shrink-0" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
