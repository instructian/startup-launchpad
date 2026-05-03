import React from "react";

export const DiagramBBlueprint = () => {
  return (
    <div className="w-full h-full bg-[#0D2240] text-[#F7F5F0] font-sans relative overflow-hidden flex flex-col p-12">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247, 245, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 245, 240, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247, 245, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 245, 240, 0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>

      {/* Header */}
      <div className="mb-8 relative z-10 border-b border-[#D4882A] pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-display uppercase tracking-widest text-[#D4882A]">Student Entry Points</h2>
          <p className="text-xl uppercase tracking-[0.2em] opacity-80 mt-2 font-display">Multiple Vectors of Engagement</p>
        </div>
        <div className="text-right text-sm opacity-60 font-mono">
          <p>TRACKS: 4</p>
          <p>REV: 2.1.0</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex relative z-10 pt-4">
        
        {/* Left labels */}
        <div className="w-48 flex flex-col justify-between py-12 pr-4 border-r border-[#F7F5F0] border-opacity-30">
           <div className="text-right">
             <div className="text-sm font-mono text-[#D4882A] mb-1">TRACK 01</div>
             <div className="font-display text-2xl uppercase tracking-wider">Explorer</div>
             <div className="text-xs opacity-60 uppercase">Freshman / Start</div>
           </div>
           <div className="text-right">
             <div className="text-sm font-mono text-[#D4882A] mb-1">TRACK 02</div>
             <div className="font-display text-2xl uppercase tracking-wider">Joiner</div>
             <div className="text-xs opacity-60 uppercase">Existing Team</div>
           </div>
           <div className="text-right">
             <div className="text-sm font-mono text-[#D4882A] mb-1">TRACK 03</div>
             <div className="font-display text-2xl uppercase tracking-wider">Accelerator</div>
             <div className="text-xs opacity-60 uppercase">Transfer / Jr / Sr</div>
           </div>
           <div className="text-right">
             <div className="text-sm font-mono text-[#D4882A] mb-1">TRACK 04</div>
             <div className="font-display text-2xl uppercase tracking-wider">Contributor</div>
             <div className="text-xs opacity-60 uppercase">Skills / Ad Hoc</div>
           </div>
        </div>

        {/* Timeline Area */}
        <div className="flex-1 relative flex flex-col pl-4">
          
          {/* Top Axis */}
          <div className="flex h-12 border-b border-[#F7F5F0] border-opacity-30 font-mono text-sm tracking-widest opacity-80 uppercase">
             <div className="flex-1 text-center border-r border-[#F7F5F0] border-opacity-30 pt-2">Fall Y1<br/>Discover</div>
             <div className="flex-1 text-center border-r border-[#F7F5F0] border-opacity-30 pt-2">Spring Y1<br/>Validate</div>
             <div className="flex-1 text-center border-r border-[#F7F5F0] border-opacity-30 pt-2">Fall Y2<br/>Build</div>
             <div className="flex-1 text-center pt-2">Spring Y2<br/>Launch</div>
          </div>

          {/* Grid lines */}
          <div className="absolute top-12 bottom-0 left-4 right-0 flex pointer-events-none opacity-20">
             <div className="flex-1 border-r border-[#F7F5F0]"></div>
             <div className="flex-1 border-r border-[#F7F5F0]"></div>
             <div className="flex-1 border-r border-[#F7F5F0]"></div>
             <div className="flex-1"></div>
          </div>

          {/* Tracks visualization */}
          <div className="flex-1 flex flex-col justify-between py-12 relative">
            
            {/* Track 1: Explorer */}
            <div className="h-8 relative flex items-center group">
               <div className="w-[95%] h-[2px] bg-[#9b8af0] relative">
                 {/* Entry */}
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0D2240] border-2 border-[#9b8af0] rounded-full"></div>
                 {/* Arrow */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#9b8af0] border-b-[6px] border-b-transparent"></div>
               </div>
               <div className="absolute top-full left-4 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-[#9b8af0]">START: 100% Commitment</div>
            </div>

            {/* Track 2: Joiner */}
            <div className="h-8 relative flex items-center group">
               <div className="w-[70%] h-[2px] bg-[#4ad7c1] relative ml-[25%]">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0D2240] border-2 border-[#4ad7c1] rounded-full"></div>
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#4ad7c1] border-b-[6px] border-b-transparent"></div>
                 <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-[2px] h-16 bg-[#4ad7c1] border-dashed border-opacity-50"></div>
               </div>
               <div className="absolute top-full left-[26%] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-[#4ad7c1]">START: Matches with existing team</div>
            </div>

            {/* Track 3: Accelerator */}
            <div className="h-8 relative flex items-center group">
               <div className="w-[45%] h-[2px] bg-[#f39c12] relative ml-[50%]">
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0D2240] border-2 border-[#f39c12] rounded-full"></div>
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#f39c12] border-b-[6px] border-b-transparent"></div>
               </div>
               <div className="absolute top-full left-[51%] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-[#f39c12]">START: Brings own idea/traction</div>
            </div>

            {/* Track 4: Contributor */}
            <div className="h-8 relative flex items-center group">
               <div className="w-[90%] h-[2px] bg-[#8A99AA] relative ml-[5%] border-dashed flex justify-around items-center">
                 <div className="w-2 h-2 bg-[#8A99AA] rounded-full"></div>
                 <div className="w-2 h-2 bg-[#8A99AA] rounded-full"></div>
                 <div className="w-2 h-2 bg-[#8A99AA] rounded-full"></div>
                 <div className="w-2 h-2 bg-[#8A99AA] rounded-full"></div>
               </div>
               <div className="absolute top-full left-[10%] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity text-[#8A99AA]">Floating resource, varying commitment</div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};