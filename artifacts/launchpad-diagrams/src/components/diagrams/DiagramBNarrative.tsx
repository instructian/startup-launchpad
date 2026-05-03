import React from "react";

const SPINE = [
  { label: "Discover", period: "Fall Y1 (Aug–Dec Y1)", event: "Ideathon", pitch: "90-sec pitch", date: "Late Nov Y1", dotBg: "#eaddce", dotBorder: "#7c4422", textColor: "#7c4422" },
  { label: "Validate", period: "Spring Y1 (Jan–May Y1)", event: "Innovation Festival", pitch: "3-min pitch", date: "Late Apr Y1", dotBg: "#d8e2da", dotBorder: "#5b7a61", textColor: "#5b7a61" },
  { label: "Build", period: "Fall Y2 (Aug–Dec Y2)", event: "Adv. Ideathon", pitch: "5-min pitch", date: "Late Nov Y2", dotBg: "#f4dcc2", dotBorder: "#b5651d", textColor: "#b5651d" },
  { label: "Launch", period: "Spring Y2 (Jan–May Y2)", event: "Innovation Festival", pitch: "7–10 min", date: "Late Apr Y2", dotBg: "#ecd8d8", dotBorder: "#9c3f3f", textColor: "#9c3f3f" },
];

const TRACKS = [
  {
    id: "explorer", label: "The Explorer", entrySemester: "Discover", entryIndex: 0,
    entryBadge: "#eaddce", entryBadgeBorder: "#7c4422", entryText: "#7c4422",
    cardBorder: "#eaddce", tilt: "-rotate-1",
    iconBg: "#0D2240",
    quote: '"I have a passion, but no idea yet."',
    brings: "Curiosity & design thinking mindset",
    commitment: "Full 4 semesters",
    description: "The complete journey — discovers a problem, validates with customers, builds an MVP, and launches to market. Eligible for Sunstone.",
    entryLabel: "Enters: Fall Y1",
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: "joiner", label: "The Joiner", entrySemester: "Validate or Build", entryIndex: 1,
    entryBadge: "#d8e2da", entryBadgeBorder: "#5b7a61", entryText: "#5b7a61",
    cardBorder: "#d8e2da", tilt: "rotate-1",
    iconBg: "#5b7a61",
    quote: '"I want to help build something real."',
    brings: "Execution skills, complementary expertise",
    commitment: "2–3 semesters",
    description: "Joins an existing team when execution resources are needed. Enters at Spring Y1 or Fall Y2, bringing fresh energy to validate or build.",
    entryLabel: "Enters: Spring Y1 or Fall Y2 (Rolling)",
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "accelerator", label: "The Accelerator", entrySemester: "Build", entryIndex: 2,
    entryBadge: "#f4dcc2", entryBadgeBorder: "#b5651d", entryText: "#b5651d",
    cardBorder: "#f4dcc2", tilt: "-rotate-1",
    iconBg: "#b5651d",
    quote: '"We already have traction. We need support."',
    brings: "Existing venture or prior startup experience",
    commitment: "2 semesters",
    description: "Skips early phases. Perfect for transfer students or upperclassmen who already have a prototype or research result. Enters directly at Build.",
    entryLabel: "Enters: Fall Y2 (direct to Build)",
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    id: "contributor", label: "The Contributor", entrySemester: "Anytime", entryIndex: 0,
    entryBadge: "#d3c8d1", entryBadgeBorder: "#6b5b68", entryText: "#6b5b68",
    cardBorder: "#d3c8d1", tilt: "rotate-1",
    iconBg: "#6b5b68",
    quote: '"I have skills and want to do real work."',
    brings: "Design, code, marketing, storytelling",
    commitment: "Project-based / Part-time",
    description: "Supports multiple teams without full commitment. Acts as an agency resource for the cohort — builds portfolio while helping startups launch.",
    entryLabel: "Enters: Anytime (rolling / project-based)",
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
      </svg>
    ),
  },
];

export const DiagramBNarrative = () => {
  return (
    <div className="w-full h-full bg-[#FDF8EE] text-[#4A3B32] font-sans relative overflow-hidden p-8 flex flex-col">
      {/* Paper texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-12" style={{ zIndex: 1 }}>
        <filter id="noise-b-narr2">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.07 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-b-narr2)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col min-h-0">
        {/* Title */}
        <div className="text-center mb-4 flex-shrink-0">
          <h2 className="text-4xl font-serif text-[#7c4422] italic mb-1" style={{ fontFamily: 'Georgia, serif' }}>Four Paths to the Summit</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a7664]">Where will your journey begin? &bull; Smith Center for Entrepreneurship</p>
        </div>

        {/* Main layout: Spine + Cards */}
        <div className="flex-1 flex gap-4 min-h-0">

          {/* Vertical timeline spine */}
          <div className="w-32 flex-shrink-0 flex flex-col py-1">
            <div className="text-[9px] uppercase tracking-widest text-[#8a7664] text-center mb-2 font-bold">Program Spine</div>
            {SPINE.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="flex flex-col items-center text-center py-1 flex-1">
                  <div className="w-4 h-4 rounded-full mx-auto mb-1 border-2" style={{ backgroundColor: s.dotBg, borderColor: s.dotBorder }}></div>
                  <div className="text-[10px] font-bold uppercase tracking-wider leading-tight" style={{ color: s.textColor }}>{s.label}</div>
                  <div className="text-[8px] text-[#8a7664] leading-tight">{s.period}</div>
                  <div className="text-[8px] font-bold mt-0.5" style={{ color: s.textColor }}>{s.event}</div>
                  <div className="text-[8px] text-[#8a7664]">{s.pitch}</div>
                  <div className="text-[7px] text-[#8a7664] opacity-70">{s.date}</div>
                </div>
                {i < SPINE.length - 1 && (
                  <div className="w-px self-center flex-shrink-0 mx-auto" style={{ height: "12px", background: `linear-gradient(${s.dotBg}, ${SPINE[i+1].dotBg})` }}></div>
                )}
              </React.Fragment>
            ))}
            {/* Sunstone */}
            <div className="flex flex-col items-center mt-1">
              <div className="w-px h-3 bg-gradient-to-b from-[#ecd8d8] to-[#D4882A] opacity-60 mx-auto"></div>
              <div className="w-7 h-7 rotate-45 mx-auto my-1" style={{ backgroundColor: "#D4882A", border: "2px solid #0D2240" }}></div>
              <div className="text-[9px] font-bold text-[#D4882A] uppercase tracking-widest text-center leading-tight">Sunstone</div>
              <div className="text-[7px] text-[#8a7664] text-center">Adv. venture comp.</div>
            </div>
          </div>

          {/* Connection lines (visual SVG linking spine to cards) */}
          <div className="flex-shrink-0 flex flex-col justify-center py-1 relative w-10">
            {/* Simple visual connector lines */}
            <svg width="40" height="100%" viewBox="0 0 40 400" preserveAspectRatio="none" className="w-full h-full">
              {/* Explorer → connects at top (Discover level) */}
              <path d="M 0,60 C 20,60 20,80 40,80" fill="none" stroke="#7c4422" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
              {/* Joiner → connects at middle (Validate/Build level) */}
              <path d="M 0,180 C 20,180 20,200 40,200" fill="none" stroke="#5b7a61" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
              {/* Accelerator → connects at 3/4 (Build level) */}
              <path d="M 0,270 C 20,270 20,300 40,300" fill="none" stroke="#b5651d" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
              {/* Contributor → connects all levels */}
              <line x1="0" y1="60" x2="0" y2="340" stroke="#6b5b68" strokeWidth="1" strokeDasharray="3 4" opacity="0.3"/>
              <path d="M 0,200 C 20,200 20,380 40,380" fill="none" stroke="#6b5b68" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
            </svg>
          </div>

          {/* 2×2 card grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
            {TRACKS.map((t) => (
              <div
                key={t.id}
                className={`bg-white/60 p-4 rounded-xl border shadow-md ${t.tilt} hover:rotate-0 transition-transform flex flex-col min-h-0`}
                style={{ borderColor: t.cardBorder, boxShadow: `5px 5px 0 ${t.cardBorder}90` }}
              >
                {/* Header */}
                <div className="flex items-start gap-2.5 mb-2 flex-shrink-0">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: t.iconBg }}>
                    {t.renderIcon()}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg leading-tight" style={{ color: t.iconBg, fontFamily: 'Georgia, serif' }}>{t.label}</h3>
                    <div
                      className="text-[9px] font-bold uppercase tracking-wide mt-0.5 px-2 py-0.5 rounded inline-block"
                      style={{ color: t.entryText, backgroundColor: t.entryBadge, border: `1px solid ${t.entryBadgeBorder}50` }}
                    >
                      &#9654; {t.entryLabel}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="italic text-xs mb-1.5 flex-shrink-0" style={{ color: t.entryText }}>{t.quote}</p>

                {/* Description */}
                <p className="text-xs text-[#4A3B32] opacity-75 flex-1 min-h-0">{t.description}</p>

                {/* Footer */}
                <div className="pt-2 border-t border-dashed flex-shrink-0 mt-1.5" style={{ borderColor: t.entryBadgeBorder + "40" }}>
                  <div className="text-[9px] space-y-0.5">
                    <div><span className="font-bold" style={{ color: t.entryText }}>Brings:</span> <span className="text-[#4A3B32] opacity-70">{t.brings}</span></div>
                    <div><span className="font-bold" style={{ color: t.entryText }}>Commitment:</span> <span className="text-[#4A3B32] opacity-70">{t.commitment}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-3 flex-shrink-0 bg-white/50 border border-[#eaddce] rounded-xl px-4 py-2.5 flex items-center gap-4 flex-wrap">
          <span className="text-xs font-bold text-[#7c4422] italic" style={{ fontFamily: 'Georgia, serif' }}>Legend</span>
          {SPINE.map(s => (
            <div key={s.label} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full border flex-shrink-0" style={{ backgroundColor: s.dotBg, borderColor: s.dotBorder }}></div>
              <span className="text-xs text-[#4A3B32]">{s.label} &mdash; {s.event} ({s.pitch}, {s.date})</span>
            </div>
          ))}
          <div className="border-l border-[#eaddce] pl-3 flex items-center gap-1.5">
            <div className="w-4 h-4 rotate-45 border-2 flex-shrink-0" style={{ backgroundColor: "#D4882A", borderColor: "#0D2240" }}></div>
            <span className="text-xs text-[#4A3B32]">Sunstone — Spring Y2 (Advanced venture competition)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-px border-t-2 border-dashed opacity-40" style={{ borderColor: "#7c4422" }}></div>
            <span className="text-xs text-[#4A3B32]">Entry connection to program spine</span>
          </div>
        </div>
      </div>
    </div>
  );
};
