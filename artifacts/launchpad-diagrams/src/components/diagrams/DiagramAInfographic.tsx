import React from "react";

const SEMESTERS = [
  {
    id: "fall-y1", label: "Fall Y1", semester: "Semester 1", theme: "Discover",
    bg: "#4B3B8B", period: "Aug – Dec, Year 1",
    activities: ["Design Thinking workshops", "Guest speakers", "Team formation", "Ideathon prep"],
    event: "Ideathon", pitch: "90-sec pitch", eventDate: "Late Nov, Year 1",
    launchpad: ["Problem Framing", "Team Role Mapping"],
    deliverable: "Problem brief + user segment",
  },
  {
    id: "spring-y1", label: "Spring Y1", semester: "Semester 2", theme: "Validate",
    bg: "#238B7A", period: "Jan – May, Year 1",
    activities: ["Customer discovery", "Market research", "MVP prototyping", "Mentor sessions"],
    event: "Innovation Festival", pitch: "3-min pitch", eventDate: "Late Apr, Year 1",
    launchpad: ["Customer Discovery", "Business Model Assumptions"],
    deliverable: "Customer interviews + early prototype",
  },
  {
    id: "fall-y2", label: "Fall Y2", semester: "Semester 3", theme: "Build",
    bg: "#D35400", period: "Aug – Dec, Year 2",
    activities: ["Product development", "Cross-major teams", "Deep mentorship", "Beta testing"],
    event: "Adv. Ideathon", pitch: "5-min pitch", eventDate: "Late Nov, Year 2",
    launchpad: ["Prototype Planning", "Pitch Builder"],
    deliverable: "MVP/pilot + traction target",
  },
  {
    id: "spring-y2", label: "Spring Y2", semester: "Semester 4", theme: "Launch",
    bg: "#C0392B", period: "Jan – May, Year 2",
    activities: ["Go-to-market strategy", "Investment prep", "Pitch coaching", "Investor showcase"],
    event: "Innovation Festival", pitch: "7–10 min pitch", eventDate: "Late Apr, Year 2",
    launchpad: ["Pitch Builder", "Business Model Assumptions"],
    deliverable: "Traction + business plan + go-to-market",
  },
];

const LOOP_STEPS = ["Provocation", "Team Formation", "Evidence", "Build/Test", "Pitch", "Feedback", "Next Sprint"];

export const DiagramAInfographic = () => {
  return (
    <div className="w-full h-full bg-[#F7F5F0] text-[#071628] font-sans relative overflow-hidden flex flex-col p-8">

      {/* Header */}
      <div className="mb-5 relative z-10 flex-shrink-0">
        <h2 className="text-4xl font-display font-bold uppercase tracking-tight text-[#0D2240]">The Two-Year Journey</h2>
        <p className="text-base uppercase tracking-widest text-[#D4882A] font-display font-semibold mt-0.5">Four Semesters. Zero to Launch. &bull; Smith Center for Entrepreneurship</p>
      </div>

      {/* Core loop strip */}
      <div className="flex-shrink-0 mb-4 bg-[#0D2240] rounded-xl px-4 py-2.5 flex items-center gap-3 relative z-10">
        <span className="text-xs font-display uppercase tracking-widest text-[#D4882A] flex-shrink-0">Core Loop &#8635;</span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {LOOP_STEPS.map((step, i) => (
            <React.Fragment key={step}>
              <span className="text-xs text-[#F7F5F0] bg-white/10 px-2 py-0.5 rounded font-mono">{i + 1}. {step}</span>
              {i < LOOP_STEPS.length - 1 && <span className="text-[#D4882A] opacity-60 text-xs">&#8594;</span>}
            </React.Fragment>
          ))}
          <span className="text-[#D4882A] text-xs opacity-60 ml-1">&#8635; repeats each semester</span>
        </div>
      </div>

      {/* Semester blocks */}
      <div className="flex gap-3 relative z-10 min-h-0 flex-1">
        {/* Year 1 block */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="text-center py-1.5 bg-[#0D2240] text-[#F7F5F0] font-display text-sm font-bold uppercase tracking-widest mb-2 rounded-t-xl">Year One &bull; Aug Y1 – May Y1</div>
          <div className="flex flex-1 gap-2 min-h-0">
            {SEMESTERS.slice(0, 2).map(s => (
              <div key={s.id} className="flex-1 rounded-xl shadow-lg flex flex-col overflow-hidden min-h-0" style={{ backgroundColor: s.bg }}>
                <div className="bg-black/20 text-white px-4 py-3 text-center flex-shrink-0">
                  <p className="font-mono text-[10px] opacity-60 uppercase tracking-widest mb-0.5">{s.label} &bull; {s.semester} &bull; {s.period}</p>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide">{s.theme}</h3>
                </div>
                <div className="px-4 py-3 flex-1 flex flex-col justify-between text-white/90 min-h-0">
                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-widest opacity-50 mb-1">Activities</div>
                    <ul className="space-y-1 text-xs font-medium mb-3">
                      {s.activities.map(a => <li key={a} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0"></span>{a}</li>)}
                    </ul>
                    <div className="text-[9px] font-mono uppercase tracking-widest opacity-50 mb-1">Launchpad Tool</div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {s.launchpad.map(m => <span key={m} className="text-[9px] bg-black/25 px-1.5 py-0.5 rounded text-white/80">{m}</span>)}
                    </div>
                    <div className="text-[9px] opacity-40 italic mb-2">Deliverable: {s.deliverable}</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border-l-4 border-[#D4882A] flex-shrink-0">
                    <p className="text-[9px] uppercase tracking-widest text-[#D4882A] font-bold mb-0.5">Culminating Event &bull; {s.eventDate}</p>
                    <p className="text-lg font-display font-bold uppercase">{s.event}</p>
                    <p className="text-[10px] font-mono opacity-80">{s.pitch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center flex-shrink-0 self-center">
          <div className="w-10 h-10 bg-[#0D2240] rounded-full flex items-center justify-center shadow-xl border-2 border-[#D4882A]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4882A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        {/* Year 2 block */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="text-center py-1.5 bg-[#0D2240] text-[#F7F5F0] font-display text-sm font-bold uppercase tracking-widest mb-2 rounded-t-xl">Year Two &bull; Aug Y2 – May Y2</div>
          <div className="flex flex-1 gap-2 min-h-0">
            {SEMESTERS.slice(2).map(s => (
              <div key={s.id} className="flex-1 rounded-xl shadow-lg flex flex-col overflow-hidden min-h-0" style={{ backgroundColor: s.bg }}>
                <div className="bg-black/20 text-white px-4 py-3 text-center flex-shrink-0">
                  <p className="font-mono text-[10px] opacity-60 uppercase tracking-widest mb-0.5">{s.label} &bull; {s.semester} &bull; {s.period}</p>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide">{s.theme}</h3>
                </div>
                <div className="px-4 py-3 flex-1 flex flex-col justify-between text-white/90 min-h-0">
                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-widest opacity-50 mb-1">Activities</div>
                    <ul className="space-y-1 text-xs font-medium mb-3">
                      {s.activities.map(a => <li key={a} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0"></span>{a}</li>)}
                    </ul>
                    <div className="text-[9px] font-mono uppercase tracking-widest opacity-50 mb-1">Launchpad Tool</div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {s.launchpad.map(m => <span key={m} className="text-[9px] bg-black/25 px-1.5 py-0.5 rounded text-white/80">{m}</span>)}
                    </div>
                    <div className="text-[9px] opacity-40 italic mb-2">Deliverable: {s.deliverable}</div>
                  </div>
                  <div className={`p-3 rounded-lg border-l-4 flex-shrink-0 ${s.id === "spring-y2" ? "bg-[#D4882A] text-[#0D2240] border-[#0D2240]" : "bg-black/30 border-[#D4882A]"}`}>
                    <p className={`text-[9px] uppercase tracking-widest font-bold mb-0.5 ${s.id === "spring-y2" ? "text-[#0D2240] opacity-70" : "text-[#D4882A]"}`}>Culminating Event &bull; {s.eventDate}</p>
                    <p className="text-lg font-display font-bold uppercase">{s.event}</p>
                    <p className="text-[10px] font-mono opacity-80">{s.pitch}</p>
                    {s.id === "spring-y2" && <p className="text-[9px] font-bold mt-0.5">&#9670; Sunstone qualifier</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sunstone */}
        <div className="flex items-center justify-center flex-shrink-0 self-center flex-col gap-1.5 ml-1">
          <div className="w-14 h-14 rotate-45 bg-[#D4882A] border-4 border-[#0D2240] flex items-center justify-center shadow-xl">
            <div className="-rotate-45 text-center leading-none">
              <div className="font-display font-bold text-[#0D2240] text-xs uppercase">Sun<br/>stone</div>
            </div>
          </div>
          <div className="text-[9px] font-mono uppercase text-[#0D2240] opacity-40 text-center">Advanced<br/>Venture<br/>Comp.</div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex-shrink-0 flex items-center gap-5 bg-white/60 border border-[#E5E0D8] rounded-xl px-5 py-2.5 flex-wrap relative z-10">
        <span className="text-xs font-display uppercase tracking-widest text-[#0D2240] font-bold">Legend</span>
        {SEMESTERS.map(s => (
          <div key={s.id} className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded flex-shrink-0" style={{ backgroundColor: s.bg }}></div>
            <span className="text-xs font-medium">{s.label} – {s.theme} ({s.period})</span>
          </div>
        ))}
        <div className="border-l border-[#E5E0D8] pl-4 flex items-center gap-1.5">
          <div className="w-4 h-4 bg-[#D4882A] border border-[#0D2240] rotate-45 flex-shrink-0"></div>
          <span className="text-xs font-medium">Sunstone graduation &amp; advanced venture competition</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] bg-[#0D2240] text-[#F7F5F0] px-1.5 py-0.5 rounded font-mono">Module</span>
          <span className="text-xs font-medium">Launchpad tool module (active during semester)</span>
        </div>
        <div className="border-l border-[#E5E0D8] pl-4 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full border-2 border-[#D4882A] bg-[#F7F5F0] flex-shrink-0"></div>
            <span className="text-xs font-medium">Pitch milestone (semester end event)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-[#D4882A] border border-[#0D2240] rotate-45 flex-shrink-0"></div>
            <span className="text-xs font-medium">Sunstone — final destination (Spring Y2)</span>
          </div>
          <span className="text-[10px] text-[#8A99AA] italic">Diagram A = full journey. For student entry tracks, see Diagram B.</span>
        </div>
      </div>
    </div>
  );
};
