import { Award, Calendar, CheckCircle } from "lucide-react";
import { certifications } from "../../data/content";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      intro={certifications.intro}
    >
      <div className="space-y-6">
        {certifications.items.map((cert) => (
          <Reveal key={`${cert.issuer}-${cert.name}`}>
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6 md:p-8 transition-all hover:border-zinc-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 sm:p-3 text-emerald-400 shrink-0">
                    <Award size={22} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {cert.name}
                    </h3>
                    <p className="mt-1 font-medium text-emerald-400 text-xs sm:text-sm">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-zinc-300 max-w-2xl">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs font-semibold text-zinc-300">
                    <Calendar size={12} className="text-emerald-400" />
                    {cert.year}
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle size={13} className="shrink-0" />
                  <span>Verified Course Completion</span>
                </span>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
