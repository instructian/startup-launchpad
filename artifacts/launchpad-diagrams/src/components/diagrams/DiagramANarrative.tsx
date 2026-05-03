import React from "react";

export const DiagramANarrative = () => {
  return (
    <div className="w-full h-full bg-[#FDF8EE] text-[#4A3B32] font-sans relative overflow-hidden p-16 flex flex-col">
      {/* Hand-drawn paper texture effect via SVG filter overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 1 }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#7c4422] italic mb-4" style={{ fontFamily: 'Georgia, serif' }}>The Startup Journey</h2>
          <p className="text-lg uppercase tracking-[0.3em] text-[#8a7664]">Four Seasons of Growth</p>
          <div className="mx-auto mt-4 w-32 h-[1px] bg-[#7c4422] opacity-30 relative">
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FDF8EE] border border-[#7c4422] rotate-45"></div>
          </div>
        </div>

        {/* Wavy Timeline Path */}
        <div className="flex-1 relative">
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <path 
              d="M 50,150 C 250,50 350,250 550,150 C 750,50 850,250 1050,150 C 1250,50 1350,150 1450,150" 
              fill="none" 
              stroke="#D4882A" 
              strokeWidth="3" 
              strokeDasharray="8 8"
              className="opacity-50"
            />
          </svg>

          {/* Path Nodes */}
          <div className="absolute inset-0 w-full h-full flex justify-between items-center px-12">
            
            {/* Discover */}
            <div className="relative flex flex-col items-center -translate-y-16">
              <div className="w-16 h-16 bg-[#eaddce] rounded-full border-2 border-[#7c4422] flex items-center justify-center shadow-[4px_4px_0_rgba(124,68,34,0.2)] mb-6 transform -rotate-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c4422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div className="text-center max-w-[200px] bg-white/50 p-4 rounded border border-[#eaddce] shadow-sm transform rotate-2">
                <h3 className="font-serif text-2xl text-[#7c4422] mb-1">Discover</h3>
                <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-3">Fall Year 1</p>
                <p className="text-sm font-medium italic opacity-80">"Finding the right problem."</p>
                <div className="mt-3 pt-3 border-t border-[#eaddce] border-dashed text-xs">
                  <strong>Ideathon:</strong> 90s pitch
                </div>
              </div>
            </div>

            {/* Validate */}
            <div className="relative flex flex-col items-center translate-y-16">
              <div className="text-center max-w-[200px] bg-white/50 p-4 rounded border border-[#eaddce] shadow-sm transform -rotate-2 mb-6">
                <h3 className="font-serif text-2xl text-[#5b7a61] mb-1">Validate</h3>
                <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-3">Spring Year 1</p>
                <p className="text-sm font-medium italic opacity-80">"Talking to real customers."</p>
                <div className="mt-3 pt-3 border-t border-[#eaddce] border-dashed text-xs">
                  <strong>Innovation Fest:</strong> 3m pitch
                </div>
              </div>
              <div className="w-16 h-16 bg-[#d8e2da] rounded-full border-2 border-[#5b7a61] flex items-center justify-center shadow-[4px_4px_0_rgba(91,122,97,0.2)] transform rotate-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5b7a61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              </div>
            </div>

            {/* Build */}
            <div className="relative flex flex-col items-center -translate-y-16">
              <div className="w-16 h-16 bg-[#f4dcc2] rounded-full border-2 border-[#b5651d] flex items-center justify-center shadow-[4px_4px_0_rgba(181,101,29,0.2)] mb-6 transform -rotate-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5651d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div className="text-center max-w-[200px] bg-white/50 p-4 rounded border border-[#eaddce] shadow-sm transform rotate-1">
                <h3 className="font-serif text-2xl text-[#b5651d] mb-1">Build</h3>
                <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-3">Fall Year 2</p>
                <p className="text-sm font-medium italic opacity-80">"Creating the MVP."</p>
                <div className="mt-3 pt-3 border-t border-[#eaddce] border-dashed text-xs">
                  <strong>Adv. Ideathon:</strong> 5m pitch
                </div>
              </div>
            </div>

            {/* Launch */}
            <div className="relative flex flex-col items-center translate-y-16">
              <div className="text-center max-w-[200px] bg-white/50 p-4 rounded border border-[#eaddce] shadow-sm transform -rotate-3 mb-6">
                <h3 className="font-serif text-2xl text-[#9c3f3f] mb-1">Launch</h3>
                <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-3">Spring Year 2</p>
                <p className="text-sm font-medium italic opacity-80">"Going to market."</p>
                <div className="mt-3 pt-3 border-t border-[#eaddce] border-dashed text-xs">
                  <strong>Innovation Fest:</strong> 7-10m pitch
                </div>
              </div>
              <div className="w-16 h-16 bg-[#ecd8d8] rounded-full border-2 border-[#9c3f3f] flex items-center justify-center shadow-[4px_4px_0_rgba(156,63,63,0.2)] transform rotate-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9c3f3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.84-2.26C14.88 9 16 7 16 7s2.5 2.5 2.5 2.5c0 0-2 1.12-2.74 3.16A22 22 0 0 1 13.5 16Z"/><path d="m20 4-4 4"/></svg>
              </div>
            </div>

            {/* Sunstone */}
            <div className="relative flex flex-col items-center -translate-y-4">
              <div className="w-20 h-20 bg-[#D4882A] rotate-45 border-2 border-[#0D2240] flex items-center justify-center shadow-[6px_6px_0_rgba(13,34,64,0.2)] mb-8 hover:scale-110 transition-transform cursor-pointer">
                 <div className="-rotate-45 text-[#0D2240] font-serif font-bold text-center leading-none">
                    Sun<br/>stone
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};