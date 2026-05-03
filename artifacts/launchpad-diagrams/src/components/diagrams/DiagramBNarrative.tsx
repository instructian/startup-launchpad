import React from "react";

export const DiagramBNarrative = () => {
  return (
    <div className="w-full h-full bg-[#FDF8EE] text-[#4A3B32] font-sans relative overflow-hidden p-16 flex flex-col">
      {/* Hand-drawn paper texture effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 1 }}>
        <filter id="noise2">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise2)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-[#7c4422] italic mb-2" style={{ fontFamily: 'Georgia, serif' }}>Four Paths to the Summit</h2>
          <p className="text-lg uppercase tracking-[0.2em] text-[#8a7664]">Where will you begin?</p>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex gap-8">
          
          {/* Timeline backbone visualization - Mountain/Path metaphor */}
          <div className="w-32 flex flex-col justify-between py-8 items-center border-r-2 border-dashed border-[#d8cbb8]">
             <div className="text-center">
               <div className="w-4 h-4 rounded-full bg-[#eaddce] border border-[#7c4422] mx-auto mb-2"></div>
               <span className="text-xs uppercase tracking-widest font-bold text-[#7c4422]">Discover</span>
             </div>
             <div className="w-1 h-12 bg-gradient-to-b from-[#eaddce] to-[#d8e2da]"></div>
             <div className="text-center">
               <div className="w-4 h-4 rounded-full bg-[#d8e2da] border border-[#5b7a61] mx-auto mb-2"></div>
               <span className="text-xs uppercase tracking-widest font-bold text-[#5b7a61]">Validate</span>
             </div>
             <div className="w-1 h-12 bg-gradient-to-b from-[#d8e2da] to-[#f4dcc2]"></div>
             <div className="text-center">
               <div className="w-4 h-4 rounded-full bg-[#f4dcc2] border border-[#b5651d] mx-auto mb-2"></div>
               <span className="text-xs uppercase tracking-widest font-bold text-[#b5651d]">Build</span>
             </div>
             <div className="w-1 h-12 bg-gradient-to-b from-[#f4dcc2] to-[#ecd8d8]"></div>
             <div className="text-center">
               <div className="w-6 h-6 rounded-full bg-[#ecd8d8] border-2 border-[#9c3f3f] mx-auto mb-2"></div>
               <span className="text-xs uppercase tracking-widest font-bold text-[#9c3f3f]">Launch</span>
             </div>
          </div>

          {/* Cards for each track */}
          <div className="flex-1 grid grid-cols-2 gap-8">
            
            {/* Explorer */}
            <div className="bg-white/60 p-8 rounded-xl border border-[#eaddce] shadow-[8px_8px_0_rgba(234,221,206,0.5)] transform -rotate-1 hover:rotate-0 transition-transform">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-[#0D2240] rounded-full flex items-center justify-center text-[#FDF8EE]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                 </div>
                 <div>
                   <h3 className="font-serif text-3xl text-[#0D2240]">The Explorer</h3>
                   <span className="text-xs uppercase tracking-widest font-bold text-[#8a7664] bg-[#eaddce] px-2 py-1 rounded">Starts at Discover</span>
                 </div>
               </div>
               <p className="italic text-[#7c4422] mb-4">"I have a passion for solving problems, but I don't have an idea or a team yet."</p>
               <p className="text-sm">The traditional four-semester path. You'll learn the fundamentals of design thinking, form a team organically, and build from the ground up.</p>
            </div>

            {/* Joiner */}
            <div className="bg-white/60 p-8 rounded-xl border border-[#d8e2da] shadow-[8px_8px_0_rgba(216,226,218,0.5)] transform rotate-1 hover:rotate-0 transition-transform">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-[#5b7a61] rounded-full flex items-center justify-center text-[#FDF8EE]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                 </div>
                 <div>
                   <h3 className="font-serif text-3xl text-[#5b7a61]">The Joiner</h3>
                   <span className="text-xs uppercase tracking-widest font-bold text-[#8a7664] bg-[#d8e2da] px-2 py-1 rounded">Starts at Validate</span>
                 </div>
               </div>
               <p className="italic text-[#5b7a61] mb-4">"I want to help build something real, but I'd rather join an existing vision."</p>
               <p className="text-sm">You hop onto a team that formed during the Discover phase. You bring execution energy right when the team needs to validate their MVP with real customers.</p>
            </div>

            {/* Accelerator */}
            <div className="bg-white/60 p-8 rounded-xl border border-[#f4dcc2] shadow-[8px_8px_0_rgba(244,220,194,0.5)] transform -rotate-1 hover:rotate-0 transition-transform">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-[#b5651d] rounded-full flex items-center justify-center text-[#FDF8EE]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                 </div>
                 <div>
                   <h3 className="font-serif text-3xl text-[#b5651d]">The Accelerator</h3>
                   <span className="text-xs uppercase tracking-widest font-bold text-[#8a7664] bg-[#f4dcc2] px-2 py-1 rounded">Starts at Build</span>
                 </div>
               </div>
               <p className="italic text-[#b5651d] mb-4">"We already have a prototype and traction. We need resources to scale."</p>
               <p className="text-sm">Perfect for transfer students or upperclassmen who have already started a venture. You skip the early phases and get direct access to deep mentorship and funding prep.</p>
            </div>

            {/* Contributor */}
            <div className="bg-white/60 p-8 rounded-xl border border-[#d3c8d1] shadow-[8px_8px_0_rgba(211,200,209,0.5)] transform rotate-1 hover:rotate-0 transition-transform">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-[#6b5b68] rounded-full flex items-center justify-center text-[#FDF8EE]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                 </div>
                 <div>
                   <h3 className="font-serif text-3xl text-[#6b5b68]">The Contributor</h3>
                   <span className="text-xs uppercase tracking-widest font-bold text-[#8a7664] bg-[#d3c8d1] px-2 py-1 rounded">Anytime Entry</span>
                 </div>
               </div>
               <p className="italic text-[#6b5b68] mb-4">"I have a specific skill (design, code, video) and want to do freelance-style work for startups."</p>
               <p className="text-sm">You don't commit to a single team. Instead, you act as an agency resource for the cohort, building your portfolio while helping multiple startups launch.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};