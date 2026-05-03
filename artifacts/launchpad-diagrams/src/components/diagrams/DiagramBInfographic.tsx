import React from "react";

const COLS = [
  { label: "Fall Y1", sub: "Discover", bg: "#4B3B8B", period: "Aug–Dec Y1", event: "Ideathon", pitch: "90-sec", date: "Late Nov Y1" },
  { label: "Spring Y1", sub: "Validate", bg: "#238B7A", period: "Jan–May Y1", event: "Innov. Fest", pitch: "3-min", date: "Late Apr Y1" },
  { label: "Fall Y2", sub: "Build", bg: "#D35400", period: "Aug–Dec Y2", event: "Adv. Ideathon", pitch: "5-min", date: "Late Nov Y2" },
  { label: "Spring Y2", sub: "Launch", bg: "#C0392B", period: "Jan–May Y2", event: "Innov. Fest", pitch: "7–10 min", date: "Late Apr Y2" },
];

const TRACKS = [
  {
    id: "explorer", label: "Explorer", sub: "Traditional Freshman",
    iconBg: "#0D2240", barGradient: "linear-gradient(90deg, #4B3B8B 0%, #238B7A 45%, #D35400 72%, #C0392B 100%)",
    barStart: 0, barCols: 4, entryLabel: "Fall Y1 — Semester 1",
    brings: "Curiosity & openness", commitment: "Full 4 semesters",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  },
  {
    id: "joiner", label: "Joiner", sub: "Joins Existing Team",
    iconBg: "#238B7A", barGradient: "linear-gradient(90deg, #238B7A 0%, #D35400 55%, #C0392B 100%)",
    barStart: 1, barCols: 3, entryLabel: "Spring Y1 or Fall Y2 (Rolling)",
    brings: "Execution skills, team energy", commitment: "2–3 semesters",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    id: "accelerator", label: "Accelerator", sub: "Transfer / Upperclassman",
    iconBg: "#D35400", barGradient: "linear-gradient(90deg, #D35400 0%, #C0392B 100%)",
    barStart: 2, barCols: 2, entryLabel: "Fall Y2 — Semester 3",
    brings: "Existing venture or traction", commitment: "2 semesters",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  },
  {
    id: "contributor", label: "Contributor", sub: "Specialized Skills",
    iconBg: "#8A99AA", barGradient: null,
    barStart: 0, barCols: 4, entryLabel: "Anytime — Rolling / Project-based",
    brings: "Design, dev, marketing, storytelling", commitment: "Project-based / Part-time",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
  },
];

export const DiagramBInfographic = () => {
  return (
    <div className="w-full h-full bg-[#F7F5F0] text-[#071628] font-sans relative overflow-hidden flex flex-col p-8">

      {/* Header */}
      <div className="mb-4 relative z-10 flex-shrink-0">
        <h2 className="text-4xl font-display font-bold uppercase tracking-tight text-[#0D2240]">Student Entry Points</h2>
        <p className="text-base uppercase tracking-widest text-[#D4882A] font-display font-semibold mt-0.5">Not everyone starts at the beginning. Every path leads to Launch.</p>
      </div>

      {/* Main table */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E0D8] min-h-0">

        {/* Timeline column headers */}
        <div className="flex bg-[#0D2240] text-white font-display uppercase tracking-widest font-bold flex-shrink-0">
          <div className="w-56 border-r border-white/20 px-4 py-2 flex items-center flex-shrink-0 text-xs">Track / Persona</div>
          <div className="flex-1 flex">
            {COLS.map(c => (
              <div key={c.label} className="flex-1 text-center py-2 mx-0.5 rounded text-xs" style={{ backgroundColor: c.bg + "80" }}>
                <div className="font-bold">{c.label}</div>
                <div className="font-mono text-[9px] opacity-60 normal-case">{c.sub}</div>
                <div className="font-mono text-[8px] opacity-40 normal-case">{c.period}</div>
                <div className="font-mono text-[8px] normal-case mt-0.5 text-[#D4882A] opacity-80">{c.date}</div>
              </div>
            ))}
            <div className="w-14 flex-shrink-0 flex flex-col items-center justify-center py-2 border-l border-white/20">
              <div className="w-5 h-5 rotate-45 border-2 border-[#D4882A] flex items-center justify-center">
                <div className="-rotate-45 text-[7px] font-mono text-[#D4882A]">&#9670;</div>
              </div>
              <div className="text-[8px] mt-1 normal-case font-mono text-[#D4882A]">Sun<br/>stone</div>
            </div>
          </div>
        </div>

        {/* Track rows */}
        <div className="flex-1 flex flex-col divide-y divide-[#E5E0D8] min-h-0">
          {TRACKS.map((t) => {
            const barLeftPct = (t.barStart / 4) * 100;
            const barWidthPct = (t.barCols / 4) * 100;
            return (
              <div key={t.id} className="flex-1 flex hover:bg-[#FAFAF8] transition-colors min-h-0">
                {/* Label cell */}
                <div className="w-56 p-3 flex flex-col justify-center border-r border-[#E5E0D8] flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg text-white flex items-center justify-center mb-1.5 flex-shrink-0" style={{ backgroundColor: t.iconBg }}>
                    {t.icon}
                  </div>
                  <div className="font-display font-bold uppercase text-[#0D2240] text-base leading-tight">{t.label}</div>
                  <div className="text-[10px] text-[#8A99AA] font-medium">{t.sub}</div>
                  <div className="text-[9px] text-[#D4882A] font-bold uppercase tracking-wide mt-1">&#9654; {t.entryLabel}</div>
                  <div className="text-[9px] text-[#8A99AA] mt-0.5">Brings: {t.brings}</div>
                </div>

                {/* Bar cell */}
                <div className="flex-1 relative flex flex-col justify-center px-2 py-2">
                  {/* Col guides */}
                  <div className="absolute inset-0 flex pointer-events-none pr-14">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex-1 border-r border-[#E5E0D8] last:border-r-0"></div>
                    ))}
                  </div>

                  {/* Entry arrow connection */}
                  <div
                    className="absolute top-0 bottom-0 border-l-2 border-dashed border-[#E5E0D8]"
                    style={{ left: `calc(${barLeftPct * 0.88}% + 1px)` }}
                  ></div>

                  {/* The bar */}
                  <div className="relative w-[88%] h-8">
                    <div
                      className="absolute"
                      style={{ left: `${barLeftPct}%`, width: `${barWidthPct}%`, height: "100%" }}
                    >
                      {t.barGradient ? (
                        <div
                          className="h-full rounded-full flex items-center px-3 text-white text-xs font-bold shadow-md relative overflow-hidden"
                          style={{ background: t.barGradient }}
                        >
                          {/* Entry point dot */}
                          <div className="absolute left-0 w-4 h-4 rounded-full bg-white/30 border-2 border-white/80 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
                          <span className="relative z-10 ml-3 whitespace-nowrap text-[10px]">{t.commitment}</span>
                          {/* Arrow at end */}
                          <svg className="absolute right-0 mr-0.5" width="10" height="20" viewBox="0 0 10 20">
                            <path d="M0 10 L8 2 L8 18 Z" fill="rgba(255,255,255,0.4)"/>
                          </svg>
                        </div>
                      ) : (
                        <div className="h-full flex items-center gap-2">
                          {["Design", "Code", "Marketing", "Video"].map(skill => (
                            <div key={skill} className="text-white text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0" style={{ backgroundColor: t.iconBg }}>{skill}</div>
                          ))}
                          <span className="text-[9px] text-[#8A99AA] whitespace-nowrap">— project-based</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Entry timing label below bar */}
                  <div
                    className="absolute bottom-0.5 text-[8px] font-mono"
                    style={{ left: `calc(${barLeftPct * 0.88}% + 6px)`, color: t.iconBg + "AA" }}
                  >
                    &#9650; Entry: {t.entryLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 flex-shrink-0 flex items-start gap-5 bg-white/60 border border-[#E5E0D8] rounded-xl px-5 py-2.5 flex-wrap relative z-10">
        <span className="text-xs font-display uppercase tracking-widest text-[#0D2240] font-bold">Legend</span>
        {COLS.map(c => (
          <div key={c.label} className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: c.bg }}></div>
            <span className="text-xs font-medium">{c.label} – {c.sub}</span>
            <span className="text-[9px] text-[#8A99AA]">({c.date}, {c.event} {c.pitch})</span>
          </div>
        ))}
        <div className="border-l border-[#E5E0D8] pl-3 flex items-center gap-1.5">
          <div className="w-4 h-4 rotate-45 border-2 border-[#D4882A] bg-[#D4882A] flex-shrink-0"></div>
          <span className="text-xs font-medium">Sunstone — Spring Y2 (Advanced venture competition)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/50 border-2 border-white flex-shrink-0"></div>
          <span className="text-xs font-medium">Entry point dot (left end of bar)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-10 h-3 rounded-full bg-gradient-to-r from-[#4B3B8B] to-[#C0392B]"></div>
          <span className="text-xs font-medium">Bar width = active semesters in program</span>
        </div>
      </div>
    </div>
  );
};
