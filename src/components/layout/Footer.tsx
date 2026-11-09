import { ArrowUp, Mail } from "lucide-react";
import { fullName, profile } from "../../data/content";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-[#070a08]/90">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          {/* Identity & Short Description */}
          <div className="space-y-2 max-w-md">
            <p className="text-base font-semibold tracking-tight text-zinc-100">
              {fullName}
            </p>
            <p className="text-sm text-zinc-400">
              {profile.headline} · {profile.role}
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Final-Year BCA Student (Graduating 2027) · St. Paul's Degree and PG College, Osmania University, {profile.location}.
            </p>
          </div>

          {/* Social Profiles, Email Link, and Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="flex items-center gap-4 text-zinc-400">
              {/* GitHub */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                className="transition hover:text-emerald-400 focus-visible:text-emerald-400 p-1"
              >
                <GithubIcon size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                className="transition hover:text-emerald-400 focus-visible:text-emerald-400 p-1"
              >
                <LinkedinIcon size={18} />
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="transition hover:text-emerald-400 focus-visible:text-emerald-400 p-1"
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href="#home"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400 hover:bg-zinc-800"
            >
              <span>Back to top</span>
              <ArrowUp size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>© {currentYear} {fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            Engineered with React 19, TypeScript, Tailwind CSS v4 &amp; Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
