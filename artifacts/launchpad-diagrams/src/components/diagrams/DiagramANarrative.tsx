import React from "react";

const NODES = [
  {
    id: "discover", label: "Discover", season: "Fall Year 1 (Aug–Dec)",
    color: "#7c4422", dotBg: "#eaddce", dotBorder: "#7c4422",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c4422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    activities: ["Design thinking", "Team formation", "Speaker series"],
    event: "Ideathon", pitch: "90-sec pitch", eventDate: "Late Nov, Y1",
    launchpad: ["Problem Framing", "Team Role Mapping"],
    deliverable: "Problem brief, user segment",
    tilt: "-rotate-1",
    translate: "-translate-y-10",
    iconTilt: "-rotate-6",
  },
  {
    id: "validate", label: "Validate", season: "Spring Year 1 (Jan–May)",
    color: "#5b7a61", dotBg: "#d8e2da", dotBorder: "#5b7a61",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b7a61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
      </svg>
    ),
    activities: ["Customer discovery", "Market research", "MVP prototyping"],
    event: "Innovation Festival", pitch: "3-min pitch", eventDate: "Late Apr, Y1",
    launchpad: ["Customer Discovery", "Business Model Assumptions"],
    deliverable: "Customer interviews, prototype",
    tilt: "rotate-1",
    translate: "translate-y-10",
    iconTilt: "rotate-6",
  },
  {
    id: "build", label: "Build", season: "Fall Year 2 (Aug–Dec)",
    color: "#b5651d", dotBg: "#f4dcc2", dotBorder: "#b5651d",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b5651d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    activities: ["Product development", "Deep mentorship", "Beta testing"],
    event: "Adv. Ideathon", pitch: "5-min pitch", eventDate: "Late Nov, Y2",
    launchpad: ["Prototype Planning", "Pitch Builder"],
    deliverable: "MVP/pilot, business model",
    tilt: "-rotate-1",
    translate: "-translate-y-10",
    iconTilt: "-rotate-3",
  },
  {
    id: "launch", label: "Launch", season: "Spring Year 2 (Jan–May)",
    color: "#9c3f3f", dotBg: "#ecd8d8", dotBorder: "#9c3f3f",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9c3f3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 3.84-2.26C14.88 9 16 7 16 7s2.5 2.5 2.5 2.5c0 0-2 1.12-2.74 3.16A22 22 0 0 1 13.5 16Z"/>
        <path d="m20 4-4 4"/>
      </svg>
    ),
    activities: ["Go-to-market", "Investment prep", "Pitch coaching"],
    event: "Innovation Festival", pitch: "7–10 min pitch", eventDate: "Late Apr, Y2",
    launchpad: ["Pitch Builder", "Business Model Assumptions"],
    deliverable: "Business plan, traction, go-to-market",
    tilt: "rotate-1",
    translate: "translate-y-10",
    iconTilt: "rotate-3",
  },
];

const LOOP_STEPS = ["Provocation", "Teams", "Evidence", "Build", "Pitch", "Feedback", "Next Sprint"];

export const DiagramANarrative = () => {
  return (
    <div className="w-full h-full bg-[#FDF8EE] text-[#4A3B32] font-sans relative overflow-hidden p-10 flex flex-col">
      {/* Paper texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" style={{ zIndex: 1 }}>
        <filter id="noise-a-narr2">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.08 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-a-narr2)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col min-h-0">
        {/* Title */}
        <div className="text-center mb-3 flex-shrink-0">
          <h2 className="text-4xl font-serif text-[#7c4422] italic mb-1" style={{ fontFamily: 'Georgia, serif' }}>The Startup Journey</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a7664]">Four Seasons of Growth &bull; Smith Center for Entrepreneurship &bull; 2-Year Program</p>
        </div>

        {/* Core loop strip */}
        <div className="flex-shrink-0 mb-4 bg-white/50 rounded-xl border border-[#eaddce] px-4 py-2 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-serif text-[#7c4422] italic flex-shrink-0">Core Loop &#8635;</span>
          {LOOP_STEPS.map((step, i) => (
            <React.Fragment key={step}>
              <span className="text-[9px] bg-[#eaddce] text-[#7c4422] px-1.5 py-0.5 rounded font-serif italic">{step}</span>
              {i < LOOP_STEPS.length - 1 && <span className="text-[#D4882A] opacity-40 text-xs">&#8594;</span>}
            </React.Fragment>
          ))}
          <span className="text-[9px] text-[#8a7664] italic ml-1">repeats each semester</span>
        </div>

        {/* Journey nodes */}
        <div className="flex-1 flex items-center min-h-0">
          <div className="w-full flex items-center justify-between gap-2 px-4">

            {NODES.map((n, i) => (
              <React.Fragment key={n.id}>
                <div className={`flex flex-col items-center gap-2 flex-1 ${n.translate}`}>
                  {/* Icon bubble (top for odd, bottom for even) */}
                  {i % 2 === 0 && (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${n.iconTilt} flex-shrink-0`} style={{ backgroundColor: n.dotBg, border: `2px solid ${n.dotBorder}` }}>
                      {n.icon}
                    </div>
                  )}

                  {/* Card */}
                  <div className={`text-center max-w-[155px] bg-white/60 p-3 rounded border shadow-sm ${n.tilt}`} style={{ borderColor: n.dotBg }}>
                    <h3 className="font-serif text-lg mb-0.5" style={{ color: n.color, fontFamily: 'Georgia, serif' }}>{n.label}</h3>
                    <p className="text-[9px] uppercase tracking-widest mb-2" style={{ color: n.color }}>
                      {n.season}
                    </p>
                    <ul className="text-[10px] text-left space-y-0.5 text-[#4A3B32] mb-2">
                      {n.activities.map(a => <li key={a} className="flex items-center gap-1">&#8226; {a}</li>)}
                    </ul>
                    <div className="text-[9px] mb-1 opacity-60 italic">Launchpad: {n.launchpad.join(", ")}</div>
                    <div className="pt-1.5 border-t border-dashed" style={{ borderColor: n.dotBorder + "50" }}>
                      <div className="text-[10px] font-bold" style={{ color: n.color }}>{n.event}</div>
                      <div className="text-[9px] text-[#8a7664]">{n.pitch} &bull; {n.eventDate}</div>
                    </div>
                  </div>

                  {/* Icon bubble (bottom for even) */}
                  {i % 2 === 1 && (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${n.iconTilt} flex-shrink-0`} style={{ backgroundColor: n.dotBg, border: `2px solid ${n.dotBorder}` }}>
                      {n.icon}
                    </div>
                  )}
                </div>

                {/* Arrow between nodes */}
                {i < NODES.length - 1 && (
                  <div className="flex-shrink-0 text-[#D4882A] opacity-40 text-lg">&#8594;</div>
                )}
              </React.Fragment>
            ))}

            {/* Arrow + Sunstone */}
            <div className="flex-shrink-0 text-[#D4882A] opacity-40 text-lg">&#8594;</div>
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-14 h-14 bg-[#D4882A] rotate-45 border-2 border-[#0D2240] flex items-center justify-center shadow-lg">
                <div className="-rotate-45 text-[#0D2240] font-bold text-center leading-none text-xs font-display uppercase">Sun<br/>stone</div>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#7c4422] opacity-50 text-center">Advanced<br/>Venture</span>
            </div>
          </div>
        </div>

        {/* Wavy background path decoration */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none" style={{ zIndex: 0 }}>
          <path
            d="M 40,52% C 200,38% 300,66% 480,52% C 660,38% 760,66% 940,52% C 1120,38% 1220,60% 1400,52%"
            fill="none" stroke="#D4882A" strokeWidth="2" strokeDasharray="10 7" opacity="0.2"
          />
        </svg>

        {/* Legend */}
        <div className="mt-3 flex-shrink-0 bg-white/50 border border-[#eaddce] rounded-xl px-4 py-2.5 flex items-center gap-4 flex-wrap">
          <span className="text-xs font-bold text-[#7c4422] font-serif italic">Legend</span>
          {NODES.map(n => (
            <div key={n.id} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: n.dotBg, borderColor: n.dotBorder }}></div>
              <span className="text-xs text-[#4A3B32]">{n.label} ({n.season.split(" (")[0]})</span>
            </div>
          ))}
          <div className="border-l border-[#eaddce] pl-3 flex items-center gap-1.5">
            <div className="w-4 h-4 rotate-45 border-2 bg-[#D4882A]" style={{ borderColor: "#0D2240" }}></div>
            <span className="text-xs text-[#4A3B32]">Sunstone — Spring Y2</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] bg-[#eaddce] text-[#7c4422] px-1.5 py-0.5 rounded font-serif italic">Module</span>
            <span className="text-xs text-[#4A3B32]">Launchpad tool module</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-0.5 border-t-2 border-dashed border-[#D4882A] opacity-30"></div>
            <span className="text-xs text-[#4A3B32]">Progression pathway</span>
          </div>
          {[
            { event: "Ideathon", pitch: "90 sec", date: "Late Nov, Y1" },
            { event: "Innovation Festival", pitch: "3 min", date: "Late Apr, Y1" },
            { event: "Adv. Ideathon", pitch: "5 min", date: "Late Nov, Y2" },
            { event: "Innovation Festival", pitch: "7–10 min", date: "Late Apr, Y2 (Sunstone qualifier)" },
          ].map(e => (
            <div key={e.event + e.pitch} className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4882A] opacity-60 flex-shrink-0"></span>
              <span className="text-[9px] text-[#4A3B32]">{e.event} ({e.pitch}) — {e.date}</span>
            </div>
          ))}
          <div className="w-full border-t border-dashed border-[#eaddce] pt-1.5 mt-0.5 flex items-center gap-4 flex-wrap">
            <span className="text-[9px] font-bold text-[#7c4422] italic">Entry-Point Markers:</span>
            <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#D4882A] opacity-60"></span><span className="text-[9px] text-[#4A3B32]">Pitch milestone dot = semester-end event</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 rotate-45 border bg-[#D4882A]" style={{ borderColor: "#0D2240" }}></div><span className="text-[9px] text-[#4A3B32]">Sunstone = final destination (Spring Y2)</span></div>
            <span className="text-[9px] italic text-[#8a7664]">Diagram A = the full 4-semester journey. For student entry tracks, see Diagram B.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
