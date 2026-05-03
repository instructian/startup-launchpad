import React from "react";

const TRACKS = [
  {
    id: "explorer",
    label: "Explorer",
    sub: "Traditional Freshman",
    color: "#4B3B8B",
    barColor: "linear-gradient(90deg, #4B3B8B 0%, #238B7A 45%, #D35400 70%, #C0392B 100%)",
    barStart: "0%",
    barWidth: "95%",
    entryLabel: "Fall Y1 — Semester 1",
    entryBadge: "#4B3B8B",
    brings: "Curiosity & openness to new ideas",
    commitment: "4 semesters (full program)",
    icons: [
      <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ],
  },
  {
    id: "joiner",
    label: "Joiner",
    sub: "Joins Existing Team",
    color: "#238B7A",
    barColor: "linear-gradient(90deg, #238B7A 0%, #D35400 55%, #C0392B 100%)",
    barStart: "25%",
    barWidth: "70%",
    entryLabel: "Spring Y1 or Fall Y2 (Rolling)",
    entryBadge: "#238B7A",
    brings: "Execution skills, team energy",
    commitment: "2–3 semesters",
    icons: [
      <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ],
  },
  {
    id: "accelerator",
    label: "Accelerator",
    sub: "Transfer / Upperclassman",
    color: "#D35400",
    barColor: "linear-gradient(90deg, #D35400 0%, #C0392B 100%)",
    barStart: "50%",
    barWidth: "45%",
    entryLabel: "Fall Y2 — Semester 3",
    entryBadge: "#D35400",
    brings: "Existing venture or prior traction",
    commitment: "2 semesters",
    icons: [
      <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ],
  },
  {
    id: "contributor",
    label: "Contributor",
    sub: "Specialized Skills",
    color: "#8A99AA",
    barColor: null,
    barStart: "5%",
    barWidth: "90%",
    entryLabel: "Anytime — Rolling Entry",
    entryBadge: "#8A99AA",
    brings: "Design, development, marketing",
    commitment: "Project-based / Part-time",
    icons: [
      <svg key="i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ],
  },
];

export const DiagramBInfographic = () => {
  return (
    <div className="w-full h-full bg-[#F7F5F0] text-[#071628] font-sans relative overflow-hidden flex flex-col p-10">

      {/* Header */}
      <div className="mb-5 relative z-10">
        <h2 className="text-5xl font-display font-bold uppercase tracking-tight text-[#0D2240]">Student Entry Points</h2>
        <p className="text-lg uppercase tracking-widest text-[#D4882A] font-display font-semibold mt-1">Not everyone starts at the beginning. Every path leads to Launch.</p>
      </div>

      {/* Main table */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E0D8] min-h-0">

        {/* Timeline header */}
        <div className="flex bg-[#0D2240] text-white font-display uppercase tracking-widest font-bold text-sm flex-shrink-0">
          <div className="w-56 border-r border-white/20 px-5 py-3 flex items-center flex-shrink-0">Track / Persona</div>
          <div className="flex-1 flex">
            <div className="flex-1 text-center py-3 bg-[#4B3B8B]/50 mx-0.5 text-xs">
              <div>Fall Y1</div>
              <div className="opacity-60 font-mono normal-case text-[10px]">Discover</div>
            </div>
            <div className="flex-1 text-center py-3 bg-[#238B7A]/50 mx-0.5 text-xs">
              <div>Spring Y1</div>
              <div className="opacity-60 font-mono normal-case text-[10px]">Validate</div>
            </div>
            <div className="flex-1 text-center py-3 bg-[#D35400]/50 mx-0.5 text-xs">
              <div>Fall Y2</div>
              <div className="opacity-60 font-mono normal-case text-[10px]">Build</div>
            </div>
            <div className="flex-1 text-center py-3 bg-[#C0392B]/50 mx-0.5 text-xs">
              <div>Spring Y2</div>
              <div className="opacity-60 font-mono normal-case text-[10px]">Launch</div>
            </div>
            <div className="w-16 text-center py-3 bg-[#D4882A]/60 mx-0.5 text-[10px]">Sun<br/>stone</div>
          </div>
        </div>

        {/* Track rows */}
        <div className="flex-1 flex flex-col divide-y divide-[#E5E0D8] min-h-0">
          {TRACKS.map((t) => (
            <div key={t.id} className="flex-1 flex hover:bg-[#FAFAF8] transition-colors min-h-0">
              {/* Track label cell */}
              <div className="w-56 p-4 flex flex-col justify-center border-r border-[#E5E0D8] flex-shrink-0">
                <div className="w-9 h-9 rounded-lg text-white flex items-center justify-center mb-2 flex-shrink-0" style={{ backgroundColor: t.color }}>
                  {t.icons[0]}
                </div>
                <div className="font-display font-bold uppercase text-[#0D2240] text-lg leading-tight">{t.label}</div>
                <div className="text-xs text-[#8A99AA] font-medium mb-2">{t.sub}</div>
                <div className="text-[10px] text-[#D4882A] font-bold uppercase tracking-wide">&#9654; {t.entryLabel}</div>
              </div>

              {/* Bar cell */}
              <div className="flex-1 relative flex items-center px-3 py-3">
                {/* Col guides */}
                <div className="absolute inset-0 flex pointer-events-none">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex-1 border-r border-[#E5E0D8] last:border-r-0"></div>
                  ))}
                </div>

                {/* The track bar */}
                <div className="relative w-full h-9" style={{ paddingLeft: t.barStart }}>
                  {t.barColor ? (
                    <div
                      className="h-full rounded-full relative flex items-center px-3 text-white text-xs font-bold shadow-md overflow-hidden"
                      style={{ width: t.barWidth, background: t.barColor }}
                    >
                      <span className="relative z-10 whitespace-nowrap">{t.commitment}</span>
                      <div className="absolute right-2 top-0 bottom-0 w-6 bg-white/20 rounded-r-full"></div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center gap-3" style={{ width: t.barWidth }}>
                      {["Design", "Code", "Marketing", "Video"].map(skill => (
                        <div key={skill} className="text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap" style={{ backgroundColor: t.color }}>{skill}</div>
                      ))}
                      <span className="text-xs text-[#8A99AA] whitespace-nowrap">— project-based</span>
                    </div>
                  )}
                </div>

                {/* Brings tag */}
                <div className="absolute bottom-1.5 text-[9px] font-mono text-[#8A99AA]" style={{ left: `calc(${t.barStart} + 12px)` }}>
                  Brings: {t.brings}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 relative z-10 flex items-center gap-5 bg-white/60 border border-[#E5E0D8] rounded-xl px-5 py-3 flex-wrap">
        <span className="text-xs font-display uppercase tracking-widest text-[#0D2240] font-bold mr-1">Legend</span>
        {[
          { color: "#4B3B8B", label: "Discover (Fall Y1)" },
          { color: "#238B7A", label: "Validate (Spring Y1)" },
          { color: "#D35400", label: "Build (Fall Y2)" },
          { color: "#C0392B", label: "Launch (Spring Y2)" },
          { color: "#D4882A", label: "Sunstone graduation" },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: l.color }}></div>
            <span className="text-xs font-medium text-[#071628]">{l.label}</span>
          </div>
        ))}
        <div className="border-l border-[#E5E0D8] pl-4 flex items-center gap-1.5">
          <svg width="20" height="8" viewBox="0 0 20 8"><path d="M0 4 L14 4" stroke="#0D2240" strokeWidth="2"/><path d="M12 1 L20 4 L12 7" fill="#0D2240"/></svg>
          <span className="text-xs font-medium">Track progression (bar length = active semesters)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">{["Design","Code"].map(s => <div key={s} className="px-1.5 py-0.5 text-[9px] text-white rounded-full bg-[#8A99AA]">{s}</div>)}</div>
          <span className="text-xs font-medium">Contributor skill tags</span>
        </div>
      </div>
    </div>
  );
};
