import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  /** Element ID for in-page navigation anchors (e.g. href="#about") */
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

// Shared layout for content sections:
// heading + intro on the left (sticky on large screens), content on the right.
export default function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-zinc-800/80"
    >
      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-12 lg:py-24">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                Section
              </span>
            </div>
            <h2
              id={headingId}
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-zinc-400">
                {intro}
              </p>
            )}
          </div>
        </Reveal>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
