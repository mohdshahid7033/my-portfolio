import { about } from "../../data/content";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import { Bot, Target, Terminal } from "lucide-react";

export default function About() {
  const emphasisAreas = [
    {
      title: "Frontend Development",
      desc: "Solid foundation in HTML and CSS with independent basic JavaScript programming.",
    },
    {
      title: "Backend & Python Foundations",
      desc: "Understanding client-server systems, basic Python syntax, and building backend logic with guidance.",
    },
    {
      title: "Cloud & DevOps Exposure",
      desc: "Practical hands-on exposure containerizing apps with Docker and automating CI/CD with GitHub Actions and AWS.",
    },
    {
      title: "AI-Assisted Engineering",
      desc: "Leveraging ChatGPT, Gemini, Claude, and Antigravity while critically reviewing workflows, architecture, and code changes.",
    },
  ];

  return (
    <Section id="about" title="About me" intro={about.intro}>
      <div className="space-y-8 sm:space-y-12">
        {/* Foundation Narrative */}
        <Reveal>
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-zinc-300">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* Quick Facts Card Grid */}
        <Reveal>
          <div>
            <h3 className="mb-3.5 sm:mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Academic Background &amp; Profile Summary
            </h3>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3.5 sm:p-4 transition hover:border-zinc-700"
                >
                  <dt className="text-xs font-medium text-zinc-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-zinc-100 text-sm">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Technical Focus Areas */}
        <Reveal>
          <div>
            <h3 className="mb-3.5 sm:mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Technical Focus &amp; Practical Experience
            </h3>
            <div className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
              {emphasisAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-3 sm:p-3.5 transition hover:border-emerald-500/30"
                >
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-emerald-400 shrink-0" />
                    <h4 className="text-xs font-semibold text-zinc-200">
                      {area.title}
                    </h4>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* AI-Assisted Workflow Highlight */}
        <Reveal>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 sm:p-5">
            <div className="flex items-start gap-3 sm:gap-3.5">
              <Bot className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-zinc-200 text-xs sm:text-sm">
                  AI-Assisted Development Philosophy
                </p>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  I treat AI tools (ChatGPT, Gemini, Claude, Antigravity) as active learning and engineering accelerators. My focus is always on understanding why a solution works, evaluating system architecture, verifying code changes, and developing my own independent programming capabilities.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Career Objective Banner */}
        <Reveal>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5">
            <div className="flex items-start gap-3 sm:gap-3.5">
              <Target className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-emerald-300 text-xs sm:text-sm">
                  Career Objective
                </p>
                <p className="mt-1 text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  Seeking internship and fresher opportunities in full-stack web development or junior cloud/DevOps roles where I can contribute my frontend skills, practical project experience with Docker and AWS, and commitment to learning from experienced engineering mentors.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
