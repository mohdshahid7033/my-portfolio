import { profile } from "../../data/content";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type SocialLinksProps = {
  /** Tailwind classes for the wrapper. Override to change spacing/colour. */
  className?: string;
  size?: number;
};

// Used in the hero, the contact section and the footer.
export default function SocialLinks({
  className = "flex gap-5 text-zinc-500",
  size = 20,
}: SocialLinksProps) {
  return (
    <div className={className}>
      <a
        href={profile.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in a new tab)"
        className="transition hover:text-emerald-400 focus-visible:text-emerald-400"
      >
        <GithubIcon size={size} />
      </a>

      {/* Only rendered when a real LinkedIn URL has been added in content.ts */}
      {profile.linkedinUrl && (
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          className="transition hover:text-emerald-400 focus-visible:text-emerald-400"
        >
          <LinkedinIcon size={size} />
        </a>
      )}
    </div>
  );
}
