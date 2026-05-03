import React from "react";

const TRACKS = [
  {
    id: "explorer",
    num: "01",
    label: "Explorer",
    sub: "Freshman / New Student",
    color: "#9b8af0",
    startCol: 0,
    endCol: 4,
    entryLabel: "Fall Y1",
    entryNote: "Begins at Discover",
    brings: "Curiosity, no prior idea required",
    commitment: "Full 4 semesters",
    description: "Traditional path — starts from zero and progresses through all phases",
  },
  {
    id: "joiner",
    num: "02",
    label: "Joiner",
    sub: "Rolling Entry",
    color: "#4ad7c1",
    startCol: 1,
    endCol: 4,
    entryLabel: "Spring Y1 or Fall Y2",
    entryNote: "Joins an existing team",
    brings: "Execution energy, complementary skills",
    commitment: "2–3 semesters",
    description: "Matches with a team post-Discover when execution resources are needed",
  },
  {
    id: "accelerator",
    num: "03",
    label: "Accelerator",
    sub: "Transfer / Jr / Sr",
    color: "#f39c12",
    startCol: 2,
    endCol: 4,
    entryLabel: "Fall Y2",
    entryNote: "Enters at Build phase",
    brings: "Existing venture or traction",
    commitment: "2 semesters",
    description: "Skips early phases — brings prior startup experience directly to Build",
  },
  {
    id: "contributor",
    num: "04",
    label: "Contributor",
    sub: "Skills / Rolling",
    color: "#8A99AA",
    startCol: 0,
    endCol: 4,
    entryLabel: "Anytime (Rolling)",
    entryNote: "Flexible project-based",
    brings: "Design, dev, marketing skills",
    commitment: "Project-based / Part-time",
    description: "Acts as agency resource — supports multiple teams without full commitment",
  },
];

const COLS = [
  { label: "Fall Y1", sub: "Discover", color: "#9b8af0" },
  { label: "Spring Y1", sub: "Validate", color: "#4ad7c1" },
  { label: "Fall Y2", sub: "Build", color: "#f39c12" },
  { label: "Spring Y2", sub: "Launch", color: "#e74c3c" },
];

export const DiagramBBlueprint = () => {
  return (
    <div className="w-full h-full bg-[#0D2240] text-[#F7F5F0] font-sans relative overflow-hidden flex flex-col p-10">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247, 245, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 245, 240, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247, 245, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 245, 240, 0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>

      {/* Header */}
      <div className="mb-6 relative z-10 border-b border-[#D4882A] pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-display uppercase tracking-widest text-[#D4882A]">Student Entry Points</h2>
          <p className="text-base uppercase tracking-[0.2em] opacity-70 mt-1 font-display">Four Tracks &bull; Multiple Vectors of Engagement</p>
        </div>
        <div className="text-right text-xs opacity-50 font-mono">
          <p>TRACKS: 4 &bull; SEMESTERS: 4</p>
          <p>REV: 2.1.0 &bull; Smith Center</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 flex relative z-10 min-h-0">

        {/* Left track labels */}
        <div className="w-52 flex-shrink-0 flex flex-col pr-4 border-r border-[#F7F5F0] border-opacity-20">
          {/* spacer for col header */}
          <div className="h-14 border-b border-[#F7F5F0] border-opacity-15 mb-1"></div>
          {TRACKS.map((t) => (
            <div key={t.id} className="flex-1 flex flex-col justify-center py-2 border-b border-[#F7F5F0] border-opacity-10 last:border-b-0">
              <div className="text-xs font-mono text-[#D4882A] mb-0.5">TRACK {t.num}</div>
              <div className="font-display text-xl uppercase tracking-wide" style={{ color: t.color }}>{t.label}</div>
              <div className="text-xs opacity-50 uppercase tracking-wide">{t.sub}</div>
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div className="flex-1 flex flex-col pl-4 min-w-0">

          {/* Column headers */}
          <div className="flex h-14 border-b border-[#F7F5F0] border-opacity-15 mb-1">
            {COLS.map((c) => (
              <div key={c.label} className="flex-1 text-center flex flex-col justify-center border-r border-[#F7F5F0] border-opacity-10 last:border-r-0">
                <div className="font-display text-xs uppercase tracking-widest" style={{ color: c.color }}>{c.label}</div>
                <div className="text-xs opacity-50 font-mono uppercase">{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Track rows */}
          {TRACKS.map((t) => {
            const startPct = (t.startCol / 4) * 100;
            const widthPct = ((t.endCol - t.startCol) / 4) * 100;
            const isDashed = t.id === "contributor";
            return (
              <div key={t.id} className="flex-1 relative border-b border-[#F7F5F0] border-opacity-10 last:border-b-0 flex items-center py-2">
                {/* Col grid lines */}
                <div className="absolute inset-0 flex pointer-events-none">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="absolute top-0 bottom-0 border-r border-[#F7F5F0] border-opacity-10" style={{ left: `${(i / 4) * 100}%` }}></div>
                  ))}
                </div>

                {/* Track bar */}
                <div className="absolute" style={{ left: `${startPct}%`, width: `${widthPct}%`, top: '50%', transform: 'translateY(-50%)' }}>
                  {isDashed ? (
                    <div className="relative flex items-center">
                      <div className="w-full h-[2px]" style={{ background: `repeating-linear-gradient(to right, ${t.color} 0, ${t.color} 8px, transparent 8px, transparent 14px)` }}></div>
                      {/* Dots across */}
                      {[0.15, 0.38, 0.62, 0.85].map((pos, i) => (
                        <div key={i} className="absolute w-2 h-2 rounded-full border-2" style={{ backgroundColor: '#0D2240', borderColor: t.color, left: `${pos * 100}%`, top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative flex items-center">
                      <div className="w-full h-[2px]" style={{ backgroundColor: t.color }}></div>
                      {/* Entry dot */}
                      <div className="absolute left-0 w-3 h-3 rounded-full border-2" style={{ backgroundColor: '#0D2240', borderColor: t.color, top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                      {/* Exit arrowhead */}
                      <div className="absolute right-0 w-0 h-0" style={{
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent',
                        borderLeft: `9px solid ${t.color}`,
                        top: '50%',
                        transform: 'translateY(-50%)'
                      }}></div>
                    </div>
                  )}
                </div>

                {/* Entry label (above bar) */}
                <div className="absolute text-[10px] font-mono uppercase tracking-wider" style={{ left: `calc(${startPct}% + 4px)`, top: '18%', color: t.color }}>
                  &#9654; {t.entryLabel}
                </div>

                {/* Detail info (below bar) */}
                <div className="absolute text-[9px] font-mono opacity-50" style={{ left: `calc(${startPct}% + 4px)`, bottom: '10%', color: t.color }}>
                  Brings: {t.brings} &bull; {t.commitment}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 border border-[#D4882A] bg-[#071628] p-4 relative z-10">
        <h4 className="font-display uppercase tracking-wider mb-3 text-[#D4882A] border-b border-[#D4882A] pb-1 text-sm">Legend &amp; Track Details</h4>
        <div className="grid grid-cols-4 gap-3">
          {TRACKS.map((t) => (
            <div key={t.id} className="text-xs space-y-1">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-[2px]" style={{ backgroundColor: t.color }}></div>
                <span className="font-display uppercase text-sm" style={{ color: t.color }}>{t.label}</span>
              </div>
              <div className="opacity-60"><span className="text-[#D4882A]">Entry:</span> {t.entryLabel}</div>
              <div className="opacity-60"><span className="text-[#D4882A]">Note:</span> {t.entryNote}</div>
              <div className="opacity-60"><span className="text-[#D4882A]">Brings:</span> {t.brings}</div>
              <div className="opacity-60"><span className="text-[#D4882A]">Commitment:</span> {t.commitment}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2 border-t border-[#F7F5F0] border-opacity-10 flex items-center gap-6 text-xs opacity-60 font-mono">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full border border-[#D4882A]"></div><span>Entry point</span></div>
          <div className="flex items-center gap-1.5">
            <svg width="18" height="6" viewBox="0 0 18 6"><path d="M0 3 L12 3" stroke="#D4882A" strokeWidth="2"/><path d="M10 0 L18 3 L10 6" fill="#D4882A"/></svg>
            <span>Track progression</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-[2px]" style={{ background: `repeating-linear-gradient(to right, #8A99AA 0, #8A99AA 6px, transparent 6px, transparent 10px)` }}></div>
            <span>Flexible / project-based (Contributor)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
