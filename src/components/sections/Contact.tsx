import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { contact, profile } from "../../data/content";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import ContactForm from "../ui/ContactForm";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro={contact.intro}>
      <div className="space-y-8 sm:space-y-12">
        {/* Direct Channels Grid */}
        <Reveal>
          <div>
            <h3 className="mb-3.5 sm:mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Direct Contact &amp; Professional Profiles
            </h3>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              {/* Email Button (Valid mailto link) */}
              <a
                href={`mailto:${profile.email}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-500 transition group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="mt-3 sm:mt-4">
                  <span className="text-xs font-medium text-zinc-400">
                    Professional Email
                  </span>
                  <p className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition break-all">
                    {profile.email}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Click to compose email directly via mailto link
                  </p>
                </div>
              </a>

              {/* LinkedIn Profile Link */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                    <LinkedinIcon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-500 transition group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="mt-3 sm:mt-4">
                  <span className="text-xs font-medium text-zinc-400">
                    LinkedIn Profile
                  </span>
                  <p className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition break-all">
                    mohd-shahid-moinuddin-815624426
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Connect on LinkedIn for networking &amp; career updates
                  </p>
                </div>
              </a>

              {/* GitHub Profile Link */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                    <GithubIcon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-500 transition group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div className="mt-3 sm:mt-4">
                  <span className="text-xs font-medium text-zinc-400">
                    GitHub Profile
                  </span>
                  <p className="text-sm font-bold text-zinc-100 group-hover:text-emerald-400 transition break-all">
                    mohdshahid7033
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Explore active code repositories, pipelines &amp; commits
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
                    Hyderabad, IN
                  </span>
                </div>
                <div className="mt-3 sm:mt-4">
                  <span className="text-xs font-medium text-zinc-400">
                    Current Location
                  </span>
                  <p className="text-sm font-semibold text-zinc-200">
                    {profile.location}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Open to internships, hybrid, and remote opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact Form with Proper Validation */}
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
