import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { profile, projects } from "../../data/content";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro={projects.intro}>
      <div className="space-y-12">
        {/* 1. Flagship Cloud & DevSecOps Project */}
        <div>
          <Reveal>
            <ProjectCard project={projects.flagship} layout="flagship" />
          </Reveal>
        </div>

        {/* 2. Other Projects */}
        <div>
          <Reveal>
            <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div>
                <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                  <FolderGit2 className="h-5 w-5 text-emerald-400" />
                  Other Projects
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Desktop and spatial database applications with accurate collaboration credits
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                2 Verified Collaborations
              </span>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.other.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} layout="standard" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom GitHub CTA */}
        <Reveal>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-zinc-200">
                Explore More Repositories on GitHub
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Inspect commit histories, setup scripts, and repository workflows.
              </p>
            </div>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-emerald-400 transition hover:border-emerald-400 hover:bg-emerald-500/10 shrink-0"
            >
              <span>Visit GitHub Profile</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
