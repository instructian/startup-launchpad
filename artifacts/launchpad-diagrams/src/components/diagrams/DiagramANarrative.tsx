import React from "react";

export const DiagramANarrative = () => {
  return (
    <div className="w-full h-full bg-[#FDF8EE] text-[#4A3B32] font-sans relative overflow-hidden p-12 flex flex-col">
      {/* Paper texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 1 }}>
        <filter id="noise-a-narr">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-a-narr)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col min-h-0">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif text-[#7c4422] italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>The Startup Journey</h2>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8a7664]">Four Seasons of Growth &bull; Smith Center for Entrepreneurship</p>
          <div className="mx-auto mt-3 w-32 h-[1px] bg-[#7c4422] opacity-30 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FDF8EE] border border-[#7c4422] rotate-45"></div>
          </div>
        </div>

        {/* Main content — wavy path with nodes */}
        <div className="flex-1 relative min-h-0">
          {/* Wavy path */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none">
            <path
              d="M 60,55% C 220,35% 320,65% 480,50% C 640,35% 740,65% 900,50% C 1060,35% 1160,65% 1350,50%"
              fill="none"
              stroke="#D4882A"
              strokeWidth="3"
              strokeDasharray="10 6"
              opacity="0.45"
            />
          </svg>

          {/* Nodes — evenly spaced */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full flex justify-between items-center px-8 gap-4">

              {/* Discover */}
              <div className="flex flex-col items-center gap-3 -translate-y-12 flex-1">
                <div className="w-14 h-14 bg-[#eaddce] rounded-full border-2 border-[#7c4422] flex items-center justify-center shadow-md transform -rotate-6 flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c4422" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <div className="text-center max-w-[160px] bg-white/60 p-3 rounded border border-[#eaddce] shadow-sm transform rotate-1">
                  <h3 className="font-serif text-xl text-[#7c4422] mb-0.5">Discover</h3>
                  <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-2">Fall Year 1 &bull; S1</p>
                  <ul className="text-xs text-left space-y-0.5 text-[#4A3B32] mb-2">
                    <li>&#8226; Design thinking</li>
                    <li>&#8226; Guest speakers</li>
                    <li>&#8226; Team formation</li>
                  </ul>
                  <div className="pt-2 border-t border-dashed border-[#eaddce]">
                    <span className="text-xs font-bold text-[#7c4422]">Ideathon</span>
                    <span className="text-xs text-[#8a7664]"> &mdash; 90-sec pitch</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-[#D4882A] opacity-50 flex-shrink-0 text-xl font-bold">&#8594;</div>

              {/* Validate */}
              <div className="flex flex-col items-center gap-3 translate-y-12 flex-1">
                <div className="text-center max-w-[160px] bg-white/60 p-3 rounded border border-[#d8e2da] shadow-sm transform -rotate-1 mb-1">
                  <h3 className="font-serif text-xl text-[#5b7a61] mb-0.5">Validate</h3>
                  <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-2">Spring Year 1 &bull; S2</p>
                  <ul className="text-xs text-left space-y-0.5 text-[#4A3B32] mb-2">
                    <li>&#8226; Customer discovery</li>
                    <li>&#8226; Market research</li>
                    <li>&#8226; MVP prototyping</li>
                  </ul>
                  <div className="pt-2 border-t border-dashed border-[#d8e2da]">
                    <span className="text-xs font-bold text-[#5b7a61]">Innovation Festival</span>
                    <span className="text-xs text-[#8a7664]"> &mdash; 3-min pitch</span>
                  </div>
                </div>
                <div className="w-14 h-14 bg-[#d8e2da] rounded-full border-2 border-[#5b7a61] flex items-center justify-center shadow-md transform rotate-6 flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b7a61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-[#D4882A] opacity-50 flex-shrink-0 text-xl font-bold">&#8594;</div>

              {/* Build */}
              <div className="flex flex-col items-center gap-3 -translate-y-12 flex-1">
                <div className="w-14 h-14 bg-[#f4dcc2] rounded-full border-2 border-[#b5651d] flex items-center justify-center shadow-md transform -rotate-3 flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b5651d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div className="text-center max-w-[160px] bg-white/60 p-3 rounded border border-[#f4dcc2] shadow-sm transform rotate-1">
                  <h3 className="font-serif text-xl text-[#b5651d] mb-0.5">Build</h3>
                  <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-2">Fall Year 2 &bull; S3</p>
                  <ul className="text-xs text-left space-y-0.5 text-[#4A3B32] mb-2">
                    <li>&#8226; Product development</li>
                    <li>&#8226; Team formation</li>
                    <li>&#8226; Deep mentorship</li>
                  </ul>
                  <div className="pt-2 border-t border-dashed border-[#f4dcc2]">
                    <span className="text-xs font-bold text-[#b5651d]">Adv. Ideathon</span>
                    <span className="text-xs text-[#8a7664]"> &mdash; 5-min pitch</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-[#D4882A] opacity-50 flex-shrink-0 text-xl font-bold">&#8594;</div>

              {/* Launch */}
              <div className="flex flex-col items-center gap-3 translate-y-12 flex-1">
                <div className="text-center max-w-[160px] bg-white/60 p-3 rounded border border-[#ecd8d8] shadow-sm transform -rotate-2 mb-1">
                  <h3 className="font-serif text-xl text-[#9c3f3f] mb-0.5">Launch</h3>
                  <p className="text-xs uppercase tracking-widest text-[#8a7664] mb-2">Spring Year 2 &bull; S4</p>
                  <ul className="text-xs text-left space-y-0.5 text-[#4A3B32] mb-2">
                    <li>&#8226; Go-to-market</li>
                    <li>&#8226; Investment prep</li>
                    <li>&#8226; Pitch coaching</li>
                  </ul>
                  <div className="pt-2 border-t border-dashed border-[#ecd8d8]">
                    <span className="text-xs font-bold text-[#9c3f3f]">Innovation Festival</span>
                    <span className="text-xs text-[#8a7664]"> &mdash; 7–10 min</span>
                  </div>
                </div>
                <div className="w-14 h-14 bg-[#ecd8d8] rounded-full border-2 border-[#9c3f3f] flex items-center justify-center shadow-md transform rotate-3 flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9c3f3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 3.84-2.26C14.88 9 16 7 16 7s2.5 2.5 2.5 2.5c0 0-2 1.12-2.74 3.16A22 22 0 0 1 13.5 16Z"/><path d="m20 4-4 4"/></svg>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-[#D4882A] opacity-50 flex-shrink-0 text-xl font-bold">&#8594;</div>

              {/* Sunstone */}
              <div className="flex flex-col items-center -translate-y-4 flex-shrink-0">
                <div className="w-16 h-16 bg-[#D4882A] rotate-45 border-2 border-[#0D2240] flex items-center justify-center shadow-lg mb-2">
                  <div className="-rotate-45 text-[#0D2240] font-bold text-center leading-none text-xs font-display uppercase">Sun<br/>stone</div>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#7c4422] opacity-60">Graduation</span>
              </div>

            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 bg-white/50 border border-[#eaddce] rounded-xl px-5 py-3 flex items-center gap-5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7c4422] font-serif mr-1">Legend</span>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#eaddce] border border-[#7c4422]"></div><span className="text-xs text-[#4A3B32]">Discover</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#d8e2da] border border-[#5b7a61]"></div><span className="text-xs text-[#4A3B32]">Validate</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#f4dcc2] border border-[#b5651d]"></div><span className="text-xs text-[#4A3B32]">Build</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ecd8d8] border border-[#9c3f3f]"></div><span className="text-xs text-[#4A3B32]">Launch</span></div>
          <div className="border-l border-[#eaddce] pl-4 flex items-center gap-1.5"><span className="text-xs font-bold text-[#7c4422]">&#9670;</span><span className="text-xs text-[#4A3B32]">Pitch milestone at semester end</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#D4882A] rotate-45 border border-[#0D2240]"></div><span className="text-xs text-[#4A3B32]">Sunstone graduation &amp; venture recognition</span></div>
          <div className="flex items-center gap-1.5"><div className="w-6 h-0.5 border-t-2 border-dashed border-[#D4882A] opacity-50"></div><span className="text-xs text-[#4A3B32]">Progression pathway</span></div>
        </div>
      </div>
    </div>
  );
};
