import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "exec-summary", label: "Executive Summary" },
  { id: "problem", label: "Problem & Rationale" },
  { id: "program-model", label: "Program Model" },
  { id: "roadmap", label: "Four-Semester Roadmap" },
  { id: "entry-model", label: "Entry & Placement" },
  { id: "event-ladder", label: "Event Ladder" },
  { id: "launchpad-tool", label: "Launchpad Tool" },
  { id: "resources", label: "Resource Requirements" },
  { id: "budget", label: "Budget Framework" },
  { id: "assessment", label: "Assessment Plan" },
  { id: "risks", label: "Risks & Mitigations" },
  { id: "approval", label: "Approval Ask" },
];

export function TableOfContents() {
  const [active, setActive] = useState<string>("exec-summary");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="doc-sidebar no-print sticky top-8 self-start w-56 flex-shrink-0 hidden lg:block">
      <div className="text-[10px] font-display font-semibold tracking-[0.15em] uppercase text-[#8A99AA] mb-3 px-3">
        Contents
      </div>
      <ul className="space-y-0.5">
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-3 py-1.5 rounded text-sm transition-all duration-150 leading-snug ${
                  isActive
                    ? "bg-[#0D2240] text-white font-semibold"
                    : "text-[#0D2240]/70 hover:text-[#0D2240] hover:bg-[#0D2240]/5"
                }`}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Print / Download button */}
      <button
        onClick={() => window.print()}
        className="mt-8 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D4882A] text-white rounded font-display font-semibold text-sm tracking-wide hover:bg-[#c07820] transition-colors"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 4.5a1 1 0 011-1h8a1 1 0 011 1v3H13a1 1 0 011 1v3a1 1 0 01-1 1h-1v.5a1 1 0 01-1 1h-7a1 1 0 01-1-1V12.5H2a1 1 0 01-1-1v-3a1 1 0 011-1h.5V4.5zM4 11.5v2h7v-2H4zm7-7H4v2.5h7V4.5zM2 8.5v2h11v-2H2zm8-5.5H5V2h5v1z" fill="currentColor"/>
        </svg>
        Print / Download
      </button>
    </nav>
  );
}
