import React from "react";

const COLS = [
  { label: "Fall Y1", sub: "Discover", color: "#9b8af0", period: "Aug–Dec Y1", event: "Ideathon (90-sec)", eventDate: "Late Nov Y1" },
  { label: "Spring Y1", sub: "Validate", color: "#4ad7c1", period: "Jan–May Y1", event: "Innov. Festival (3-min)", eventDate: "Late Apr Y1" },
  { label: "Fall Y2", sub: "Build", color: "#f39c12", period: "Aug–Dec Y2", event: "Adv. Ideathon (5-min)", eventDate: "Late Nov Y2" },
  { label: "Spring Y2", sub: "Launch", color: "#e74c3c", period: "Jan–May Y2", event: "Innov. Festival (7–10 min)", eventDate: "Late Apr Y2" },
];

const TRACKS = [
  {
    id: "explorer", num: "01", label: "Explorer", sub: "Freshman / New Student",
    color: "#9b8af0",
    entryCol: 0,
    exitCol: 4,
    entryLabel: "Enters: Fall Y1",
    brings: "Curiosity, no prior idea required",
    commitment: "4 semesters",
    description: "Full pathway — starts Discover, progresses all phases to Sunstone",
    entryType: "solid",
  },
  {
    id: "joiner", num: "02", label: "Joiner", sub: "Rolling Entry",
    color: "#4ad7c1",
    entryCol: 1,
    exitCol: 4,
    entryLabel: "Enters: Spring Y1 or Fall Y2 (Rolling)",
    brings: "Execution skills, complementary expertise",
    commitment: "2–3 semesters",
    description: "Joins existing team — enters at Validate or Build when execution resources needed",
    entryType: "solid",
  },
  {
    id: "accelerator", num: "03", label: "Accelerator", sub: "Transfer / Jr / Sr",
    color: "#f39c12",
    entryCol: 2,
    exitCol: 4,
    entryLabel: "Enters: Fall Y2",
    brings: "Existing venture or prior traction",
    commitment: "2 semesters",
    description: "Skips early phases — enters at Build with existing idea/prototype/research",
    entryType: "solid",
  },
  {
    id: "contributor", num: "04", label: "Contributor", sub: "Skills / Rolling",
    color: "#8A99AA",
    entryCol: 0,
    exitCol: 4,
    entryLabel: "Enters: Anytime (Rolling / Project-based)",
    brings: "Design, dev, marketing, storytelling skills",
    commitment: "Project-based / Part-time",
    description: "Agency model — supports multiple teams without full commitment; flexible in/out",
    entryType: "dashed",
  },
];

export const DiagramBBlueprint = () => {
  return (
    <div className="w-full h-full bg-[#0D2240] text-[#F7F5F0] font-sans relative overflow-hidden flex flex-col p-10">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247,245,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247,245,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>

      {/* Header */}
      <div className="mb-5 relative z-10 border-b border-[#D4882A] pb-3 flex justify-between items-end flex-shrink-0">
        <div>
          <h2 className="text-4xl font-display uppercase tracking-widest text-[#D4882A]">Student Entry Points</h2>
          <p className="text-sm uppercase tracking-[0.2em] opacity-70 mt-1 font-display">Four Tracks &bull; Multiple Vectors of Engagement &bull; Smith Center</p>
        </div>
        <div className="text-right text-xs opacity-50 font-mono">
          <p>TRACKS: 4 &bull; SEMESTERS: 4</p>
          <p>AUG Y1 → MAY Y2 &bull; REV: 2.1</p>
        </div>
      </div>

      {/* Main grid */}
      <div className="flex-1 flex relative z-10 min-h-0">

        {/* Track labels column */}
        <div className="w-52 flex-shrink-0 flex flex-col pr-3 border-r border-[#F7F5F0] border-opacity-15">
          {/* Spacer for column header */}
          <div className="flex-shrink-0" style={{ height: "72px" }}></div>
          {TRACKS.map((t) => (
            <div key={t.id} className="flex-1 flex flex-col justify-center py-2 border-t border-[#F7F5F0] border-opacity-10 first:border-t-0">
              <div className="text-[9px] font-mono mb-0.5" style={{ color: t.color }}>TRACK {t.num}</div>
              <div className="font-display text-lg uppercase tracking-wide leading-tight" style={{ color: t.color }}>{t.label}</div>
              <div className="text-[10px] opacity-50 uppercase tracking-wide">{t.sub}</div>
              <div className="text-[9px] font-mono mt-0.5 opacity-60" style={{ color: t.color }}>&#9654; {t.entryLabel}</div>
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div className="flex-1 flex flex-col pl-3 min-w-0">

          {/* Column headers */}
          <div className="flex flex-shrink-0 border-b border-[#F7F5F0] border-opacity-15" style={{ height: "72px" }}>
            {COLS.map((c) => (
              <div key={c.label} className="flex-1 flex flex-col justify-center text-center border-r border-[#F7F5F0] border-opacity-10 last:border-r-0 px-1">
                <div className="font-display text-xs uppercase tracking-widest font-bold" style={{ color: c.color }}>{c.label}</div>
                <div className="text-[9px] opacity-40 font-mono uppercase">{c.sub}</div>
                <div className="text-[9px] opacity-30 font-mono">{c.period}</div>
                <div className="text-[8px] opacity-40 mt-0.5" style={{ color: c.color }}>{c.eventDate}</div>
              </div>
            ))}
            {/* Sunstone column */}
            <div className="w-16 flex-shrink-0 flex flex-col justify-center items-center border-l border-[#D4882A] border-opacity-30 px-1">
              <div className="w-7 h-7 rotate-45 border-2 border-[#D4882A] bg-transparent flex items-center justify-center">
                <div className="-rotate-45 text-[7px] font-mono text-[#D4882A] leading-none text-center">&#9670;</div>
              </div>
              <div className="text-[8px] font-mono text-[#D4882A] opacity-70 text-center mt-1 leading-tight">Sun<br/>stone</div>
            </div>
          </div>

          {/* Track rows */}
          {TRACKS.map((t) => {
            const startPct = (t.entryCol / 4) * 100;
            const endPct = (t.exitCol / 4) * 100;
            const widthPct = endPct - startPct;
            return (
              <div key={t.id} className="flex-1 relative border-t border-[#F7F5F0] border-opacity-10 first:border-t-0">
                {/* Column dividers */}
                <div className="absolute inset-0 flex pointer-events-none">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="absolute top-0 bottom-0 border-r border-[#F7F5F0] border-opacity-10" style={{ left: `${(i / 4) * 88}%` }}></div>
                  ))}
                </div>

                {/* Track bar container (88% of width, leaving 12% for Sunstone column) */}
                <div className="absolute inset-y-0" style={{ left: 0, right: "12%" }}>
                  {/* Entry point vertical indicator */}
                  <div
                    className="absolute top-0 bottom-0 border-l-2 border-dashed opacity-40"
                    style={{ left: `${startPct}%`, borderColor: t.color }}
                  ></div>

                  {/* Entry label */}
                  <div
                    className="absolute top-1 text-[9px] font-mono font-bold px-1"
                    style={{ left: `calc(${startPct}% + 4px)`, color: t.color }}
                  >
                    &#9660; {t.entryLabel}
                  </div>

                  {/* Track bar (centered vertically) */}
                  <div
                    className="absolute"
                    style={{ left: `${startPct}%`, width: `${widthPct}%`, top: "50%", transform: "translateY(-50%)" }}
                  >
                    {t.entryType === "dashed" ? (
                      <div className="relative h-[3px] flex items-center">
                        <div className="w-full h-[2px]" style={{ background: `repeating-linear-gradient(to right, ${t.color} 0, ${t.color} 8px, transparent 8px, transparent 14px)` }}></div>
                        {/* Multi-entry dots */}
                        {[0.12, 0.35, 0.62, 0.85].map((pos, idx) => (
                          <div key={idx} className="absolute w-2.5 h-2.5 rounded-full border-2 bg-[#0D2240]" style={{ left: `${pos * 100}%`, transform: "translate(-50%, -50%)", borderColor: t.color }}></div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative h-[3px] flex items-center">
                        {/* Entry connection arrow (vertical down to bar) */}
                        <div className="absolute left-0 w-[2px] h-4 -top-4" style={{ backgroundColor: t.color }}></div>
                        <div className="w-full h-[3px]" style={{ backgroundColor: t.color }}></div>
                        {/* Entry dot */}
                        <div className="absolute left-0 w-3 h-3 rounded-full border-2 bg-[#0D2240]" style={{ transform: "translate(-50%, -50%)", borderColor: t.color }}></div>
                        {/* Arrowhead at end */}
                        <div className="absolute right-0" style={{ top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `10px solid ${t.color}` }}></div>
                      </div>
                    )}
                  </div>

                  {/* Detail info (bottom) */}
                  <div
                    className="absolute bottom-1 text-[8px] font-mono opacity-50"
                    style={{ left: `calc(${startPct}% + 4px)`, color: t.color }}
                  >
                    Brings: {t.brings} &bull; {t.commitment}
                  </div>
                </div>

                {/* Sunstone connection arrow (for non-contributor tracks) */}
                {t.entryType === "solid" && (
                  <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center">
                    <div className="w-5 h-[2px]" style={{ backgroundColor: t.color }}></div>
                    <div className="w-0 h-0" style={{ borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: `7px solid ${t.color}` }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 border border-[#D4882A] border-opacity-50 bg-[#071628] p-3 relative z-10 flex-shrink-0">
        <h4 className="font-display uppercase tracking-wider text-[#D4882A] text-xs border-b border-[#D4882A] border-opacity-40 pb-1 mb-2">Legend &amp; Track Details</h4>
        <div className="grid grid-cols-4 gap-3">
          {TRACKS.map((t) => (
            <div key={t.id} className="text-xs space-y-0.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="w-8 h-[2px]" style={{ backgroundColor: t.color }}></div>
                <span className="font-display uppercase text-sm font-bold" style={{ color: t.color }}>{t.label}</span>
              </div>
              <div className="opacity-60 text-[9px]"><span className="text-[#D4882A]">Entry:</span> {t.entryLabel}</div>
              <div className="opacity-60 text-[9px]"><span className="text-[#D4882A]">Brings:</span> {t.brings}</div>
              <div className="opacity-60 text-[9px]"><span className="text-[#D4882A]">Commitment:</span> {t.commitment}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-[#F7F5F0] border-opacity-10 flex items-center gap-6 text-[9px] opacity-50 font-mono flex-wrap">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full border border-[#D4882A]"></div>Entry point into program</div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-[2px] bg-[#D4882A]"></div><div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #D4882A" }}></div>
            Track progression bar (length = active semesters)
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-[2px]" style={{ background: "repeating-linear-gradient(to right, #8A99AA 0, #8A99AA 5px, transparent 5px, transparent 9px)" }}></div>
            Flexible / project-based (Contributor)
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rotate-45 border border-[#D4882A]"></div>
            Sunstone — Spring Y2 (Advanced venture competition)
          </div>
          {COLS.map(c => (
            <div key={c.label} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }}></div>
              <span>{c.label}: {c.eventDate} — {c.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
