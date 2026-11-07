import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile, sectionIds } from "../../data/content";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  // Give the bar a background once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClass = (id: string) =>
    `relative py-1 text-sm font-medium transition-colors ${
      activeId === id
        ? "text-emerald-400"
        : "text-zinc-400 hover:text-zinc-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-zinc-800/80 bg-[#090d0b]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12"
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-sm font-bold text-emerald-400 shadow-sm transition group-hover:border-emerald-400/60 group-hover:bg-emerald-500/20">
            {profile.initials}
          </span>
          <span className="hidden sm:inline-block font-semibold tracking-normal text-zinc-200 group-hover:text-white transition">
            {profile.fullName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-emerald-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action & Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Open to Roles</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-zinc-700/80 p-2 text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-zinc-800/80 bg-[#090d0b]/98 px-6 py-5 md:hidden backdrop-blur-lg"
      >
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-medium transition ${
                  activeId === item.id
                    ? "bg-emerald-500/10 text-emerald-400 font-semibold"
                    : "text-zinc-300 hover:bg-zinc-800/50 hover:text-white"
                }`}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-zinc-800 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400 px-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Open to Internships & Junior Roles</span>
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2.5 text-center text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
