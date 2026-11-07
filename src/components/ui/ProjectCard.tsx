import { ArrowUpRight, CheckCircle2, GitFork, Sparkles, UserCheck, Users, Wrench } from "lucide-react";
import type { Project } from "../../data/types";
import { GithubIcon } from "./BrandIcons";

type ProjectCardProps = {
  project: Project;
  layout?: "flagship" | "standard";
};

export default function ProjectCard({
  project,
  layout = project.featured ? "flagship" : "standard",
}: ProjectCardProps) {
  const {
    title,
    description,
    problemSolved,
    contribution,
    highlights,
    stack,
    repoUrl,
    liveUrl,
    collaboration,
  } = project;

  if (layout === "flagship") {
    return (
      <article className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-6 sm:p-8 md:p-10 shadow-2xl transition hover:border-emerald-500/50">
        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px]"
        />

        <div className="relative">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
              <Sparkles size={13} className="text-emerald-400" />
              Flagship Project · Cloud &amp; DevSecOps
            </span>

            <span className="text-xs font-mono text-zinc-400">
              Verified Source Code
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-zinc-300 max-w-3xl">
            {description}
          </p>

          {/* Problem Solved & Actual Contribution Grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Wrench size={13} />
                Problem It Solves
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {problemSolved}
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <UserCheck size={13} />
                My Actual Contribution
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {contribution}
              </p>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Implementation Details &amp; CI/CD Architecture
              </h4>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Stack */}
          {stack && stack.length > 0 && (
            <div className="mt-7">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                Verified Technologies
              </h4>
              <ul className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Link: Show GitHub Repository (Live demo shown only if genuine URL exists) */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-4">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-xs font-bold text-black transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-md shadow-emerald-500/20"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-xs font-semibold text-zinc-200 transition hover:border-emerald-400"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}

            <span className="text-xs text-zinc-400">
              Repository: mohdshahid7033/cloud-devsecops-platform
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Standard card for "Other Projects"
  return (
    <article className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 shadow-lg">
      <div>
        {/* Collaboration Badge with Honest Credit */}
        {collaboration && (
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-300">
            <Users size={12} className="text-amber-400" />
            <span>{collaboration}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-zinc-300">
          {description}
        </p>

        {/* Problem Solved & Contribution Blocks */}
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3">
            <h5 className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <Wrench size={11} /> Problem It Solves
            </h5>
            <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
              {problemSolved}
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3">
            <h5 className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <UserCheck size={11} /> My Contribution
            </h5>
            <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
              {contribution}
            </p>
          </div>
        </div>

        {/* Key Verified Features */}
        {highlights && highlights.length > 0 && (
          <div className="mt-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Verified Features &amp; Modules
            </h4>
            <ul className="space-y-1.5">
              {highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-zinc-300"
                >
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-zinc-800/80">
        {/* Tech Stack */}
        {stack && stack.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mb-5">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* Action Link: GitHub Repository */}
        <div className="flex items-center justify-between">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-400 hover:bg-zinc-800"
          >
            <GithubIcon size={14} />
            <span>GitHub Repository</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 px-3 py-1.5 text-xs font-medium text-emerald-300 hover:bg-emerald-400 hover:text-black"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={12} />
            </a>
          )}

          {!liveUrl && (
            <span className="text-[11px] text-zinc-400 flex items-center gap-1">
              <GitFork size={12} />
              Open Source
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
