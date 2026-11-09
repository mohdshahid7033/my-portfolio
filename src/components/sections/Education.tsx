import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { education } from "../../data/content";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Education() {
  return (
    <Section id="education" title="Education" intro={education.intro}>
      <div className="space-y-8">
        {education.items.map((item) => (
          <Reveal key={item.degree}>
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6 md:p-8 transition-all hover:border-zinc-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 sm:p-3 text-emerald-400 shrink-0">
                    <GraduationCap size={22} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-1 font-medium text-emerald-400 text-xs sm:text-sm">
                      {item.institution}
                    </p>
                    {item.location && (
                      <p className="mt-0.5 text-xs text-zinc-400 flex items-center gap-1.5">
                        <MapPin size={12} className="text-zinc-500 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end flex-wrap gap-2 shrink-0 pt-2 sm:pt-0 border-t border-zinc-800/60 sm:border-t-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs font-semibold text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item.status}
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>
              </div>

              {item.details && item.details.length > 0 && (
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Academic Focus &amp; Coursework
                  </h4>
                  <ul className="space-y-1.5">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-xs leading-relaxed text-zinc-300 flex items-start gap-2"
                      >
                        <span className="text-emerald-400 mt-0.5 shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
