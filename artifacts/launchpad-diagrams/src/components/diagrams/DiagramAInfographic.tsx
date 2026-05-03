import React from "react";

export const DiagramAInfographic = () => {
  return (
    <div className="w-full h-full bg-[#F7F5F0] text-[#071628] font-sans relative overflow-hidden flex flex-col p-12">
      
      {/* Header */}
      <div className="mb-8 relative z-10">
        <h2 className="text-6xl font-display font-bold uppercase tracking-tight text-[#0D2240]">The Two-Year Journey</h2>
        <p className="text-2xl uppercase tracking-widest text-[#D4882A] font-display font-semibold mt-1">Four Semesters. Zero to Launch.</p>
      </div>

      {/* Main Blocks */}
      <div className="flex-1 flex gap-4 w-full h-full relative z-10">
        
        {/* YEAR ONE */}
        <div className="flex-1 flex flex-col">
          <div className="text-center py-2 bg-[#0D2240] text-[#F7F5F0] font-display text-2xl font-bold uppercase tracking-widest mb-4 rounded-t-xl">Year One</div>
          <div className="flex flex-1 gap-4">
            
            {/* Fall Y1 */}
            <div className="flex-1 bg-[#4B3B8B] rounded-xl shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-black/20 text-white p-6 text-center">
                <h3 className="text-4xl font-display font-bold uppercase tracking-wide">Discover</h3>
                <p className="font-mono text-sm opacity-80 mt-1">FALL Y1</p>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Design Thinking workshops
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Guest speakers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Ideathon prep
                  </li>
                </ul>
                <div className="mt-8 bg-black/30 p-6 rounded-lg border-l-4 border-[#D4882A]">
                  <p className="text-xs uppercase tracking-widest text-[#D4882A] font-bold mb-1">Culminating Event</p>
                  <p className="text-3xl font-display font-bold uppercase">Ideathon</p>
                  <p className="text-sm font-mono mt-1 opacity-80">90-second pitch</p>
                </div>
              </div>
            </div>

            {/* Spring Y1 */}
            <div className="flex-1 bg-[#238B7A] rounded-xl shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-black/20 text-white p-6 text-center">
                <h3 className="text-4xl font-display font-bold uppercase tracking-wide">Validate</h3>
                <p className="font-mono text-sm opacity-80 mt-1">SPRING Y1</p>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Customer discovery
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Market research
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    MVPs
                  </li>
                </ul>
                <div className="mt-8 bg-black/30 p-6 rounded-lg border-l-4 border-[#D4882A]">
                  <p className="text-xs uppercase tracking-widest text-[#D4882A] font-bold mb-1">Culminating Event</p>
                  <p className="text-3xl font-display font-bold uppercase">Innovation Fest</p>
                  <p className="text-sm font-mono mt-1 opacity-80">3-minute pitch</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* YEAR TWO */}
        <div className="flex-1 flex flex-col">
          <div className="text-center py-2 bg-[#0D2240] text-[#F7F5F0] font-display text-2xl font-bold uppercase tracking-widest mb-4 rounded-t-xl">Year Two</div>
          <div className="flex flex-1 gap-4">
            
            {/* Fall Y2 */}
            <div className="flex-1 bg-[#D35400] rounded-xl shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-black/20 text-white p-6 text-center">
                <h3 className="text-4xl font-display font-bold uppercase tracking-wide">Build</h3>
                <p className="font-mono text-sm opacity-80 mt-1">FALL Y2</p>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-white/90">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Product development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Team formation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Deep mentorship
                  </li>
                </ul>
                <div className="mt-8 bg-black/30 p-6 rounded-lg border-l-4 border-[#0D2240]">
                  <p className="text-xs uppercase tracking-widest text-[#0D2240] font-bold mb-1">Culminating Event</p>
                  <p className="text-3xl font-display font-bold uppercase">Adv. Ideathon</p>
                  <p className="text-sm font-mono mt-1 opacity-80">5-minute pitch</p>
                </div>
              </div>
            </div>

            {/* Spring Y2 */}
            <div className="flex-1 bg-[#C0392B] rounded-xl shadow-lg flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="bg-black/20 text-white p-6 text-center relative z-10">
                <h3 className="text-4xl font-display font-bold uppercase tracking-wide">Launch</h3>
                <p className="font-mono text-sm opacity-80 mt-1">SPRING Y2</p>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between text-white/90 relative z-10">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Go-to-market
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Investment prep
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
                    Pitch coaching
                  </li>
                </ul>
                <div className="mt-8 bg-[#D4882A] text-[#0D2240] p-6 rounded-lg border-l-4 border-[#0D2240] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 relative z-10">Final Culminating Event</p>
                  <p className="text-3xl font-display font-bold uppercase relative z-10">Innovation Fest</p>
                  <p className="text-sm font-mono mt-1 opacity-80 font-bold relative z-10">7-10 MINUTE PITCH</p>
                </div>
              </div>
              
              {/* Sunstone Overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-[#0D2240] z-0 flex items-center justify-center rounded-r-xl">
                 <div className="text-white transform -rotate-90 whitespace-nowrap font-display uppercase tracking-widest text-sm translate-x-2">Sunstone Graduation</div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* Arrow connecting the blocks */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0D2240] rounded-full z-20 flex items-center justify-center shadow-xl border-4 border-[#F7F5F0]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F7F5F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>

    </div>
  );
};