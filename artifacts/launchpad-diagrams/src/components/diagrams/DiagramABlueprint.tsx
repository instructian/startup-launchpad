import React from "react";

const SEMESTERS = [
  {
    id: "fall-y1",
    label: "Fall Y1",
    theme: "Discover",
    color: "#9b8af0",
    period: "Aug – Dec, Year 1",
    activities: ["Design Thinking workshops", "Guest speaker series", "Team formation", "Ideathon prep"],
    event: "Ideathon",
    pitch: "90-sec pitch",
    eventDate: "Late Nov, Year 1",
    judging: "Problem clarity, urgency, team potential",
    launchpadModules: ["Problem Framing", "Team Role Mapping"],
    deliverable: "Problem brief, user segment, solution thesis",
    milestoneNum: "M1",
  },
  {
    id: "spring-y1",
    label: "Spring Y1",
    theme: "Validate",
    color: "#4ad7c1",
    period: "Jan – May, Year 1",
    activities: ["Customer discovery", "Market research", "MVP prototyping", "Mentor sessions"],
    event: "Innovation Festival",
    pitch: "3-min pitch",
    eventDate: "Late Apr, Year 1",
    judging: "Customer evidence, prototype learning",
    launchpadModules: ["Customer Discovery", "Business Model Assumptions"],
    deliverable: "Customer interviews, early prototype, evidence record",
    milestoneNum: "M2",
  },
  {
    id: "fall-y2",
    label: "Fall Y2",
    theme: "Build",
    color: "#f39c12",
    period: "Aug – Dec, Year 2",
    activities: ["Product development", "Cross-major teams", "Deep mentorship", "Beta testing"],
    event: "Adv. Ideathon",
    pitch: "5-min pitch",
    eventDate: "Late Nov, Year 2",
    judging: "MVP progress, traction target, feasibility",
    launchpadModules: ["Prototype Planning", "Pitch Builder"],
    deliverable: "MVP/pilot, business model, traction target",
    milestoneNum: "M3",
  },
  {
    id: "spring-y2",
    label: "Spring Y2",
    theme: "Launch",
    color: "#e74c3c",
    period: "Jan – May, Year 2",
    activities: ["Go-to-market strategy", "Investment prep", "Pitch coaching", "Investor showcase"],
    event: "Innovation Festival",
    pitch: "7–10 min pitch",
    eventDate: "Late Apr, Year 2",
    judging: "Desirability, feasibility, viability, traction",
    launchpadModules: ["Pitch Builder", "Business Model Assumptions"],
    deliverable: "Traction, business plan, go-to-market, financials",
    milestoneNum: "M4",
  },
];

const LOOP_STEPS = ["Provocation", "Teams", "Evidence", "Build", "Pitch", "Feedback", "Next Sprint"];

export const DiagramABlueprint = () => {
  return (
    <div className="w-full h-full bg-[#0D2240] text-[#F7F5F0] font-sans relative overflow-hidden flex flex-col p-10">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247,245,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247,245,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>

      {/* Header */}
      <div className="mb-5 relative z-10 border-b border-[#D4882A] pb-3 flex justify-between items-end flex-shrink-0">
        <div>
          <h2 className="text-4xl font-display uppercase tracking-widest text-[#D4882A]">The Two-Year Journey</h2>
          <p className="text-sm uppercase tracking-[0.2em] opacity-70 mt-1 font-display">System Architecture &amp; Progression Flow &bull; Smith Center for Entrepreneurship</p>
        </div>
        <div className="text-right text-xs opacity-50 font-mono">
          <p>SCALE: 1:4 SEMESTERS &bull; 2 YEARS</p>
          <p>REV: 1.0.0 &bull; AUG Y1 → MAY Y2</p>
        </div>
      </div>

      {/* Year labels */}
      <div className="flex relative z-10 flex-shrink-0 mb-1">
        <div className="flex-1 text-center text-sm font-display uppercase tracking-widest text-[#D4882A] border-r border-dashed border-[#D4882A] border-opacity-40 pb-1">Year One &bull; Aug Y1 – May Y1</div>
        <div className="flex-1 text-center text-sm font-display uppercase tracking-widest text-[#D4882A] pb-1">Year Two &bull; Aug Y2 – May Y2</div>
      </div>

      {/* Four semester columns */}
      <div className="flex flex-1 gap-1 relative z-10 min-h-0">
        {SEMESTERS.map((s, i) => (
          <div key={s.id} className="flex-1 flex flex-col border border-[#F7F5F0] border-opacity-15 relative">
            {/* Milestone number badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-6 h-6 rounded-full border-2 border-[#D4882A] bg-[#0D2240] flex items-center justify-center">
              <span className="text-[8px] font-mono text-[#D4882A] font-bold">{s.milestoneNum}</span>
            </div>

            {/* Semester header */}
            <div className="px-3 py-2 border-b border-opacity-20 mt-2" style={{ borderColor: s.color }}>
              <div className="font-display text-lg uppercase tracking-wider" style={{ color: s.color }}>{s.label} <span className="opacity-50 text-base">{s.theme}</span></div>
              <div className="text-[10px] font-mono opacity-50 uppercase">{s.period}</div>
            </div>

            {/* Activities */}
            <div className="px-3 py-2 border-b border-[#F7F5F0] border-opacity-10 flex-1">
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#D4882A] mb-1">Activities</div>
              <ul className="space-y-0.5">
                {s.activities.map(a => (
                  <li key={a} className="text-xs flex items-start gap-1.5 opacity-80">
                    <span className="opacity-40 flex-shrink-0">&#9632;</span>{a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Loop annotation */}
            <div className="px-3 py-2 border-b border-[#F7F5F0] border-opacity-10">
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#D4882A] mb-1">Core Loop &#8635;</div>
              <div className="flex flex-wrap gap-0.5">
                {LOOP_STEPS.map((step, li) => (
                  <React.Fragment key={step}>
                    <span className="text-[8px] bg-[#F7F5F0] bg-opacity-10 px-1 py-0.5 font-mono uppercase">{step}</span>
                    {li < LOOP_STEPS.length - 1 && <span className="text-[8px] opacity-30">&#8594;</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Launchpad Tool layer */}
            <div className="px-3 py-2 border-b border-[#D4882A] border-opacity-20">
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#D4882A] mb-1">Launchpad Tool</div>
              <div className="flex flex-col gap-0.5">
                {s.launchpadModules.map(m => (
                  <div key={m} className="text-[9px] flex items-center gap-1 opacity-70">
                    <span className="w-1.5 h-1.5 bg-[#D4882A] opacity-60 flex-shrink-0"></span>{m}
                  </div>
                ))}
              </div>
              <div className="text-[9px] mt-1 opacity-50 font-mono">Deliverable: {s.deliverable}</div>
            </div>

            {/* Milestone badge / culminating event — enhanced */}
            <div className="px-3 py-2 relative" style={{ backgroundColor: "rgba(212,136,42,0.10)", borderTop: "2px solid #D4882A" }}>
              {/* Milestone badge pill */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-[8px] font-mono uppercase tracking-widest bg-[#D4882A] text-[#0D2240] px-1.5 py-0.5 font-bold">Pitch Milestone</span>
                <span className="text-[8px] font-mono opacity-40">{s.milestoneNum}</span>
              </div>
              <div className="font-display text-base uppercase tracking-wide">{s.event}</div>
              <div className="inline-block text-xs font-mono font-bold bg-[#F7F5F0] bg-opacity-15 px-2 py-0.5 mt-0.5 border border-[#D4882A] border-opacity-50">{s.pitch}</div>
              <div className="text-[9px] font-mono opacity-50 mt-1">{s.eventDate}</div>
              <div className="text-[8px] opacity-40 mt-0.5 italic">Judged on: {s.judging}</div>
            </div>

            {/* Arrow to next with label */}
            {i < SEMESTERS.length - 1 && (
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-0.5">
                <span className="text-[#D4882A] text-base leading-none">&#9658;</span>
                <span className="text-[7px] font-mono text-[#D4882A] opacity-50 uppercase whitespace-nowrap">Next Sem</span>
              </div>
            )}
          </div>
        ))}

        {/* Arrow to Sunstone */}
        <div className="flex items-center flex-shrink-0 ml-0.5">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[#D4882A] text-base leading-none">&#9658;</span>
            <span className="text-[7px] font-mono text-[#D4882A] opacity-50 uppercase whitespace-nowrap">Qualify</span>
          </div>
        </div>

        {/* Sunstone — enlarged and more prominent */}
        <div className="flex items-center justify-center flex-shrink-0 ml-1">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rotate-45 border-4 border-[#D4882A] bg-[#071628] z-30 flex items-center justify-center shadow-2xl" style={{ boxShadow: "0 0 24px rgba(212,136,42,0.4)" }}>
              <div className="-rotate-45 text-center leading-tight">
                <div className="font-display uppercase text-sm text-[#D4882A] leading-snug font-bold">Sun<br/>stone</div>
              </div>
            </div>
            <div className="text-[9px] font-mono uppercase text-[#D4882A] opacity-60 text-center font-bold">Graduation</div>
            <div className="text-[8px] font-mono uppercase opacity-40 text-center">Advanced<br/>Venture<br/>Competition</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 border border-[#D4882A] border-opacity-50 bg-[#071628] p-3 relative z-10 flex-shrink-0">
        <div className="flex items-start gap-6 flex-wrap">
          <div>
            <h4 className="font-display uppercase tracking-wider text-[#D4882A] text-xs border-b border-[#D4882A] border-opacity-40 pb-1 mb-2">Semester Colors</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {SEMESTERS.map(s => (
                <div key={s.id} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 border" style={{ borderColor: s.color }}></div>
                  <span className="text-xs opacity-70">{s.label} ({s.theme})</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display uppercase tracking-wider text-[#D4882A] text-xs border-b border-[#D4882A] border-opacity-40 pb-1 mb-2">Pitch Milestones &amp; Calendar</h4>
            <div className="space-y-1">
              {SEMESTERS.map(s => (
                <div key={s.id} className="flex items-center gap-2 text-xs opacity-70">
                  <span className="text-[8px] font-mono bg-[#D4882A] text-[#0D2240] px-1 font-bold">{s.milestoneNum}</span>
                  <span>{s.event}</span>
                  <span className="font-bold opacity-90 border border-[#D4882A] border-opacity-40 px-1 text-[10px] font-mono">{s.pitch}</span>
                  <span className="opacity-40 font-mono text-[10px]">— {s.eventDate}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-xs opacity-70 mt-1">
                <div className="w-4 h-4 rotate-45 border-2 border-[#D4882A]"></div>
                <span>Sunstone — Spring Y2 (Advanced venture competition, investor pitch)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display uppercase tracking-wider text-[#D4882A] text-xs border-b border-[#D4882A] border-opacity-40 pb-1 mb-2">Core Loop (repeats each semester)</h4>
            <div className="flex items-center gap-1 flex-wrap">
              {LOOP_STEPS.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="text-[9px] font-mono uppercase opacity-70 bg-white bg-opacity-5 px-1.5 py-0.5">{i + 1}. {step}</span>
                  {i < LOOP_STEPS.length - 1 && <span className="text-[#D4882A] opacity-40 text-xs">&#8594;</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display uppercase tracking-wider text-[#D4882A] text-xs border-b border-[#D4882A] border-opacity-40 pb-1 mb-2">Entry-Point Markers</h4>
            <div className="space-y-1 text-[9px] opacity-60">
              <div className="flex items-center gap-1.5"><span className="text-[8px] font-mono bg-[#D4882A] text-[#0D2240] px-1 font-bold">M#</span><span>Pitch milestone badge (semester end)</span></div>
              <div className="flex items-center gap-1.5"><span className="text-[#D4882A]">&#9658;</span><span className="text-[8px] font-mono uppercase">Next Sem</span><span>Progression arrow (semester to semester)</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rotate-45 border-2 border-[#D4882A]"></div><span>Sunstone — final destination (Spring Y2)</span></div>
              <div className="text-[8px] opacity-50 mt-1 italic">Diagram A models the full 4-semester journey.<br/>For student entry-track details, see Diagram B.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
