import React from "react";

const TRACKS = [
  {
    id: "explorer",
    label: "The Explorer",
    entry: "Starts at Discover (Fall Y1)",
    entryColor: "#7c4422",
    cardBg: "bg-white/60",
    cardBorder: "border-[#eaddce]",
    shadow: "shadow-[6px_6px_0_rgba(234,221,206,0.6)]",
    tilt: "-rotate-1",
    iconBg: "#0D2240",
    quote: '"I have a passion, but no idea yet."',
    quoteColor: "text-[#7c4422]",
    brings: "Curiosity & design thinking mindset",
    commitment: "Full 4 semesters",
    description: "The full four-semester journey. Form a team, discover a problem, validate with customers, build a product, and launch to market.",
    dotColor: "#eaddce",
    dotBorder: "#7c4422",
  },
  {
    id: "joiner",
    label: "The Joiner",
    entry: "Spring Y1 or Fall Y2 (Rolling)",
    entryColor: "#5b7a61",
    cardBg: "bg-white/60",
    cardBorder: "border-[#d8e2da]",
    shadow: "shadow-[6px_6px_0_rgba(216,226,218,0.6)]",
    tilt: "rotate-1",
    iconBg: "#5b7a61",
    quote: '"I want to help build something real."',
    quoteColor: "text-[#5b7a61]",
    brings: "Execution skills, complementary expertise",
    commitment: "2–3 semesters",
    description: "Joins an existing team when execution resources are needed. Brings fresh energy right when the team is ready to validate or build.",
    dotColor: "#d8e2da",
    dotBorder: "#5b7a61",
  },
  {
    id: "accelerator",
    label: "The Accelerator",
    entry: "Enters at Build (Fall Y2)",
    entryColor: "#b5651d",
    cardBg: "bg-white/60",
    cardBorder: "border-[#f4dcc2]",
    shadow: "shadow-[6px_6px_0_rgba(244,220,194,0.6)]",
    tilt: "-rotate-1",
    iconBg: "#b5651d",
    quote: '"We already have traction. We need resources."',
    quoteColor: "text-[#b5651d]",
    brings: "Existing venture, prior startup experience",
    commitment: "2 semesters",
    description: "Skips early phases. Perfect for transfers or upperclassmen who already have an idea with momentum. Enters at Build and gets deep mentorship.",
    dotColor: "#f4dcc2",
    dotBorder: "#b5651d",
  },
  {
    id: "contributor",
    label: "The Contributor",
    entry: "Anytime — Project-Based (Rolling)",
    entryColor: "#6b5b68",
    cardBg: "bg-white/60",
    cardBorder: "border-[#d3c8d1]",
    shadow: "shadow-[6px_6px_0_rgba(211,200,209,0.6)]",
    tilt: "rotate-1",
    iconBg: "#6b5b68",
    quote: '"I have skills and want to do real work."',
    quoteColor: "text-[#6b5b68]",
    brings: "Design, development, video, marketing",
    commitment: "Project-based / Part-time",
    description: "Acts as an agency resource for the cohort. Builds portfolio while helping multiple startups. No full team commitment required.",
    dotColor: "#d3c8d1",
    dotBorder: "#6b5b68",
  },
];

export const DiagramBNarrative = () => {
  return (
    <div className="w-full h-full bg-[#FDF8EE] text-[#4A3B32] font-sans relative overflow-hidden p-10 flex flex-col">
      {/* Paper texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" style={{ zIndex: 1 }}>
        <filter id="noise-b-narr">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.08 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-b-narr)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col min-h-0">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-serif text-[#7c4422] italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>Four Paths to the Summit</h2>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8a7664]">Where will your journey begin? &bull; Smith Center for Entrepreneurship</p>
          <div className="mx-auto mt-3 w-32 h-[1px] bg-[#7c4422] opacity-25 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FDF8EE] border border-[#7c4422] rotate-45"></div>
          </div>
        </div>

        {/* Timeline spine + cards */}
        <div className="flex-1 flex gap-6 min-h-0">

          {/* Vertical timeline spine */}
          <div className="w-28 flex-shrink-0 flex flex-col items-center py-2">
            <div className="text-center mb-3">
              <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: "#eaddce", border: "2px solid #7c4422" }}></div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#7c4422] leading-tight">Discover<br/>Fall Y1</div>
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-[#eaddce] via-[#d8e2da] to-[#f4dcc2] opacity-60"></div>
            <div className="text-center my-2">
              <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: "#d8e2da", border: "2px solid #5b7a61" }}></div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#5b7a61] leading-tight">Validate<br/>Spring Y1</div>
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-[#d8e2da] to-[#f4dcc2] opacity-60"></div>
            <div className="text-center my-2">
              <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: "#f4dcc2", border: "2px solid #b5651d" }}></div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#b5651d] leading-tight">Build<br/>Fall Y2</div>
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-[#f4dcc2] to-[#ecd8d8] opacity-60"></div>
            <div className="text-center my-2">
              <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: "#ecd8d8", border: "2px solid #9c3f3f" }}></div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#9c3f3f] leading-tight">Launch<br/>Spring Y2</div>
            </div>
            <div className="w-px h-4 bg-gradient-to-b from-[#ecd8d8] to-[#D4882A] opacity-60"></div>
            <div className="text-center mt-1">
              <div className="w-6 h-6 rotate-45 mx-auto mb-1" style={{ backgroundColor: "#D4882A", border: "2px solid #0D2240" }}></div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#D4882A] leading-tight">Sunstone</div>
            </div>
          </div>

          {/* 2×2 grid of track cards */}
          <div className="flex-1 grid grid-cols-2 gap-5 min-h-0">
            {TRACKS.map((t) => (
              <div
                key={t.id}
                className={`${t.cardBg} p-5 rounded-xl border ${t.cardBorder} ${t.shadow} ${t.tilt} hover:rotate-0 transition-transform flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: t.iconBg }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {t.id === "explorer" && <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>}
                      {t.id === "joiner" && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                      {t.id === "accelerator" && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>}
                      {t.id === "contributor" && <><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></>}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl leading-tight" style={{ color: t.iconBg, fontFamily: 'Georgia, serif' }}>{t.label}</h3>
                    <div className="text-xs font-bold uppercase tracking-wide mt-0.5 px-2 py-0.5 rounded inline-block" style={{ color: t.entryColor, backgroundColor: t.dotColor }}>
                      &#9654; {t.entry}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className={`italic text-sm ${t.quoteColor} mb-2`}>{t.quote}</p>

                {/* Description */}
                <p className="text-xs text-[#4A3B32] opacity-80 mb-3 flex-1">{t.description}</p>

                {/* Brings + Commitment */}
                <div className="pt-2 border-t border-dashed" style={{ borderColor: t.dotBorder + "50" }}>
                  <div className="text-[10px] text-[#8a7664] space-y-0.5">
                    <div><span className="font-bold" style={{ color: t.entryColor }}>Brings:</span> {t.brings}</div>
                    <div><span className="font-bold" style={{ color: t.entryColor }}>Commitment:</span> {t.commitment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 bg-white/50 border border-[#eaddce] rounded-xl px-5 py-3 flex items-center gap-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7c4422] font-serif mr-1">Legend</span>
          {[
            { color: "#eaddce", border: "#7c4422", label: "Discover (Fall Y1)" },
            { color: "#d8e2da", border: "#5b7a61", label: "Validate (Spring Y1)" },
            { color: "#f4dcc2", border: "#b5651d", label: "Build (Fall Y2)" },
            { color: "#ecd8d8", border: "#9c3f3f", label: "Launch (Spring Y2)" },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: l.color, borderColor: l.border }}></div>
              <span className="text-xs text-[#4A3B32]">{l.label}</span>
            </div>
          ))}
          <div className="border-l border-[#eaddce] pl-4 flex items-center gap-1.5">
            <div className="w-4 h-4 rotate-45 border-2" style={{ backgroundColor: "#D4882A", borderColor: "#0D2240" }}></div>
            <span className="text-xs text-[#4A3B32]">Sunstone graduation &amp; venture recognition</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-12 h-px border-t-2 border-dashed opacity-50" style={{ borderColor: "#D4882A" }}></div>
            <span className="text-xs text-[#4A3B32]">Program spine (semester sequence)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
