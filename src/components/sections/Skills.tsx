import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { skills } from "../../data/content";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import { Bot, Check, Cloud, Database, Layout, Server, Shield, Terminal } from "lucide-react";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Layout className="h-5 w-5 text-emerald-400" />,
  "Backend & Programming Foundations": <Server className="h-5 w-5 text-emerald-400" />,
  "Cloud & DevOps Exposure": <Cloud className="h-5 w-5 text-emerald-400" />,
  "Security & Code Quality": <Shield className="h-5 w-5 text-emerald-400" />,
  "Databases & Storage": <Database className="h-5 w-5 text-emerald-400" />,
  "AI Development Tools & Version Control": <Bot className="h-5 w-5 text-emerald-400" />,
};

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro={skills.intro}>
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {skills.categories.map((category) => (
            <Reveal key={category.title}>
              <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5">
                        {categoryIcons[category.title] ?? (
                          <Terminal className="h-5 w-5 text-emerald-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-zinc-100">
                          {category.title}
                        </h3>
                        <span className="inline-block mt-0.5 rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                          {category.experienceType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {category.description}
                  </p>
                </div>

                {/* Chips */}
                <motion.ul
                  className="mt-5 flex flex-wrap gap-2"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={chipVariants}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-emerald-500/40 hover:text-white"
                    >
                      <Check size={11} className="text-emerald-400" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Honest Proficiency Note */}
        <Reveal>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-4 text-xs text-zinc-400 flex items-center justify-between flex-wrap gap-2">
            <span>
              ℹ️ <strong>Honest skill representation:</strong> Clearly distinguishes independent programming ability, foundational conceptual knowledge, practical project exposure, and AI-assisted workflows.
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
