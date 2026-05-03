import React from "react";

export const DiagramBInfographic = () => {
  return (
    <div className="w-full h-full bg-[#F7F5F0] text-[#071628] font-sans relative overflow-hidden flex flex-col p-12">
      
      {/* Header */}
      <div className="mb-8 text-center relative z-10">
        <h2 className="text-5xl font-display font-bold uppercase tracking-tight text-[#0D2240]">Student Entry Points</h2>
        <p className="text-xl uppercase tracking-widest text-[#D4882A] font-display font-semibold mt-2">Not everyone starts at the beginning.</p>
      </div>

      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E5E0D8]">
        
        {/* Timeline Header */}
        <div className="flex bg-[#0D2240] text-white p-4 font-display uppercase tracking-widest font-bold">
           <div className="w-64 border-r border-white/20 px-4 flex items-center">Track / Persona</div>
           <div className="flex-1 flex">
              <div className="flex-1 text-center bg-[#4B3B8B]/50 py-2 rounded mx-1">Fall Y1</div>
              <div className="flex-1 text-center bg-[#238B7A]/50 py-2 rounded mx-1">Spring Y1</div>
              <div className="flex-1 text-center bg-[#D35400]/50 py-2 rounded mx-1">Fall Y2</div>
              <div className="flex-1 text-center bg-[#C0392B]/50 py-2 rounded mx-1">Spring Y2</div>
           </div>
        </div>

        {/* Tracks Content */}
        <div className="flex-1 flex flex-col divide-y divide-[#E5E0D8]">
          
          {/* Explorer */}
          <div className="flex-1 flex group hover:bg-[#FDFDFD] transition-colors">
            <div className="w-64 p-6 flex flex-col justify-center border-r border-[#E5E0D8]">
              <div className="w-12 h-12 bg-[#0D2240] rounded-lg text-white flex items-center justify-center mb-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-[#0D2240]">Explorer</h3>
              <p className="text-sm text-gray-500 font-medium">Traditional Freshman</p>
            </div>
            <div className="flex-1 relative p-6 flex items-center">
              <div className="w-[95%] h-8 bg-gradient-to-r from-[#4B3B8B] via-[#238B7A] to-[#C0392B] rounded-full relative flex items-center px-4 text-white font-bold text-sm shadow-md">
                 Full 4-Semester Commitment
                 <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/20 rounded-r-full"></div>
              </div>
            </div>
          </div>

          {/* Joiner */}
          <div className="flex-1 flex group hover:bg-[#FDFDFD] transition-colors">
            <div className="w-64 p-6 flex flex-col justify-center border-r border-[#E5E0D8]">
              <div className="w-12 h-12 bg-[#238B7A] rounded-lg text-white flex items-center justify-center mb-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-[#0D2240]">Joiner</h3>
              <p className="text-sm text-gray-500 font-medium">Joins Existing Team</p>
            </div>
            <div className="flex-1 relative p-6 flex items-center">
              {/* Offset to start in Spring Y1 */}
              <div className="w-[70%] ml-[25%] h-8 bg-gradient-to-r from-[#238B7A] to-[#C0392B] rounded-full relative flex items-center px-4 text-white font-bold text-sm shadow-md">
                 Joins at Validation Stage
                 <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/20 rounded-r-full"></div>
              </div>
            </div>
          </div>

          {/* Accelerator */}
          <div className="flex-1 flex group hover:bg-[#FDFDFD] transition-colors">
            <div className="w-64 p-6 flex flex-col justify-center border-r border-[#E5E0D8]">
              <div className="w-12 h-12 bg-[#D35400] rounded-lg text-white flex items-center justify-center mb-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-[#0D2240]">Accelerator</h3>
              <p className="text-sm text-gray-500 font-medium">Transfer / Upperclassman</p>
            </div>
            <div className="flex-1 relative p-6 flex items-center">
              {/* Offset to start in Fall Y2 */}
              <div className="w-[45%] ml-[50%] h-8 bg-gradient-to-r from-[#D35400] to-[#C0392B] rounded-full relative flex items-center px-4 text-white font-bold text-sm shadow-md">
                 Direct to Build Phase
                 <div className="absolute right-0 top-0 bottom-0 w-8 bg-white/20 rounded-r-full"></div>
              </div>
            </div>
          </div>

          {/* Contributor */}
          <div className="flex-1 flex group hover:bg-[#FDFDFD] transition-colors">
            <div className="w-64 p-6 flex flex-col justify-center border-r border-[#E5E0D8]">
              <div className="w-12 h-12 bg-[#8A99AA] rounded-lg text-white flex items-center justify-center mb-3">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-[#0D2240]">Contributor</h3>
              <p className="text-sm text-gray-500 font-medium">Specialized Skills</p>
            </div>
            <div className="flex-1 relative p-6 flex items-center">
              <div className="w-full flex justify-around px-8">
                 <div className="bg-[#8A99AA] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">Design</div>
                 <div className="bg-[#8A99AA] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">Code</div>
                 <div className="bg-[#8A99AA] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">Marketing</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};