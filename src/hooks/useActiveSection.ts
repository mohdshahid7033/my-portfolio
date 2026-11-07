import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view or nearest to the center.
 * Features an intersection observer with a bottom-of-page scroll fallback.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "home");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Thin horizontal band around the upper middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-25% 0px -45% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: If user scrolled to the absolute bottom of page, highlight the last section (contact)
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight - 50) {
        const lastId = ids[ids.length - 1];
        if (lastId) setActiveId(lastId);
      } else if (window.scrollY < 100) {
        setActiveId("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids]);

  return activeId;
}
