import React from "react";

export const DiagramAInfographic = () => {
  return (
    <div className="w-full h-full bg-[#F7F5F0] text-[#071628] font-sans relative overflow-hidden flex flex-col p-10">

      {/* Header */}
      <div className="mb-6 relative z-10">
        <h2 className="text-5xl font-display font-bold uppercase tracking-tight text-[#0D2240]">The Two-Year Journey</h2>
        <p className="text-xl uppercase tracking-widest text-[#D4882A] font-display font-semibold mt-1">Four Semesters. Zero to Launch.</p>
      </div>

      {/* Main Blocks */}
      <div className="flex-1 flex gap-3 w-full relative z-10 min-h-0">

        {/* YEAR ONE */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="text-center py-2 bg-[#0D2240] text-[#F7F5F0] font-display text-lg font-bold uppercase tracking-widest mb-3 rounded-t-xl">Year One</div>
          <div className="flex flex-1 gap-3 min-h-0">

            {/* Fall Y1 */}
            <div className="flex-1 bg-[#4B3B8B] rounded-xl shadow-lg flex flex-col overflow-hidden">
              <div className="bg-black/20 text-white px-5 py-4 text-center">
                <p className="font-mono text-xs opacity-70 uppercase tracking-widest mb-1">Fall Y1 &bull; Semester 1</p>
                <h3 className="text-3xl font-display font-bold uppercase tracking-wide">Discover</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Design Thinking workshops</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Guest speaker series</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Team formation</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Ideathon prep</li>
                </ul>
                <div className="mt-4 bg-black/30 p-4 rounded-lg border-l-4 border-[#D4882A]">
                  <p className="text-xs uppercase tracking-widest text-[#D4882A] font-bold mb-1">Culminating Event</p>
                  <p className="text-2xl font-display font-bold uppercase">Ideathon</p>
                  <p className="text-xs font-mono mt-1 opacity-80 bg-white/10 inline-block px-2 py-0.5 rounded">90-second pitch</p>
                </div>
              </div>
            </div>

            {/* Spring Y1 */}
            <div className="flex-1 bg-[#238B7A] rounded-xl shadow-lg flex flex-col overflow-hidden">
              <div className="bg-black/20 text-white px-5 py-4 text-center">
                <p className="font-mono text-xs opacity-70 uppercase tracking-widest mb-1">Spring Y1 &bull; Semester 2</p>
                <h3 className="text-3xl font-display font-bold uppercase tracking-wide">Validate</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Customer discovery</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Market research</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>MVP prototyping</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Mentor sessions</li>
                </ul>
                <div className="mt-4 bg-black/30 p-4 rounded-lg border-l-4 border-[#D4882A]">
                  <p className="text-xs uppercase tracking-widest text-[#D4882A] font-bold mb-1">Culminating Event</p>
                  <p className="text-2xl font-display font-bold uppercase">Innovation Festival</p>
                  <p className="text-xs font-mono mt-1 opacity-80 bg-white/10 inline-block px-2 py-0.5 rounded">3-minute pitch</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Year divider arrow */}
        <div className="flex items-center justify-center flex-shrink-0 self-center">
          <div className="w-10 h-10 bg-[#0D2240] rounded-full z-20 flex items-center justify-center shadow-xl border-2 border-[#D4882A]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4882A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        {/* YEAR TWO */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="text-center py-2 bg-[#0D2240] text-[#F7F5F0] font-display text-lg font-bold uppercase tracking-widest mb-3 rounded-t-xl">Year Two</div>
          <div className="flex flex-1 gap-3 min-h-0">

            {/* Fall Y2 */}
            <div className="flex-1 bg-[#D35400] rounded-xl shadow-lg flex flex-col overflow-hidden">
              <div className="bg-black/20 text-white px-5 py-4 text-center">
                <p className="font-mono text-xs opacity-70 uppercase tracking-widest mb-1">Fall Y2 &bull; Semester 3</p>
                <h3 className="text-3xl font-display font-bold uppercase tracking-wide">Build</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Product development</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Team formation (cross-major)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Deep mentor partnerships</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Beta user testing</li>
                </ul>
                <div className="mt-4 bg-black/30 p-4 rounded-lg border-l-4 border-[#F7F5F0]">
                  <p className="text-xs uppercase tracking-widest text-[#F7F5F0] font-bold mb-1 opacity-70">Culminating Event</p>
                  <p className="text-2xl font-display font-bold uppercase">Adv. Ideathon</p>
                  <p className="text-xs font-mono mt-1 opacity-80 bg-white/10 inline-block px-2 py-0.5 rounded">5-minute pitch</p>
                </div>
              </div>
            </div>

            {/* Spring Y2 */}
            <div className="flex-1 bg-[#C0392B] rounded-xl shadow-lg flex flex-col overflow-hidden relative">
              <div className="bg-black/20 text-white px-5 py-4 text-center">
                <p className="font-mono text-xs opacity-70 uppercase tracking-widest mb-1">Spring Y2 &bull; Semester 4</p>
                <h3 className="text-3xl font-display font-bold uppercase tracking-wide">Launch</h3>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Go-to-market strategy</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Investment preparation</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Pitch coaching</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50 block flex-shrink-0"></span>Investor showcase</li>
                </ul>
                <div className="mt-4 bg-[#D4882A] text-[#0D2240] p-4 rounded-lg border-l-4 border-[#0D2240]">
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-80">Final Culminating Event</p>
                  <p className="text-2xl font-display font-bold uppercase">Innovation Festival</p>
                  <p className="text-xs font-mono mt-1 font-bold bg-black/10 inline-block px-2 py-0.5 rounded">7–10 minute pitch</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sunstone badge */}
        <div className="flex items-center justify-center flex-shrink-0 self-center flex-col gap-1">
          <div className="w-14 h-14 rotate-45 bg-[#D4882A] border-4 border-[#0D2240] flex items-center justify-center shadow-xl">
            <div className="-rotate-45 text-center leading-none">
              <div className="font-display font-bold text-[#0D2240] text-xs uppercase">Sun<br/>stone</div>
            </div>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#0D2240] opacity-50 mt-1">Grad.</div>
        </div>

      </div>

      {/* Legend */}
      <div className="mt-4 relative z-10 flex items-center gap-6 bg-white/60 border border-[#E5E0D8] rounded-xl px-6 py-3">
        <span className="text-xs font-display uppercase tracking-widest text-[#0D2240] font-bold mr-2">Legend</span>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#4B3B8B] rounded"></div><span className="text-xs font-medium">Discover (Fall Y1)</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#238B7A] rounded"></div><span className="text-xs font-medium">Validate (Spring Y1)</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#D35400] rounded"></div><span className="text-xs font-medium">Build (Fall Y2)</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#C0392B] rounded"></div><span className="text-xs font-medium">Launch (Spring Y2)</span></div>
        <div className="flex items-center gap-2 border-l border-[#E5E0D8] pl-4"><div className="w-4 h-4 bg-[#D4882A] border border-[#0D2240]"></div><span className="text-xs font-medium">Pitch Milestone</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#D4882A] rotate-45 border border-[#0D2240]"></div><span className="text-xs font-medium">Sunstone Graduation</span></div>
      </div>
    </div>
  );
};
