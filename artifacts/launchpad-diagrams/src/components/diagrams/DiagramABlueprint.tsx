import React from "react";
import { motion } from "framer-motion";

export const DiagramABlueprint = () => {
  return (
    <div className="w-full h-full bg-[#0D2240] text-[#F7F5F0] font-sans relative overflow-hidden flex flex-col p-12">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247, 245, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 245, 240, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(247, 245, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 245, 240, 0.5) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>

      {/* Header */}
      <div className="mb-12 relative z-10 border-b border-[#D4882A] pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-display uppercase tracking-widest text-[#D4882A]">The Two-Year Journey</h2>
          <p className="text-xl uppercase tracking-[0.2em] opacity-80 mt-2 font-display">System Architecture & Progression Flow</p>
        </div>
        <div className="text-right text-sm opacity-60 font-mono">
          <p>SCALE: 1:4 SEMESTERS</p>
          <p>REV: 1.0.0</p>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="flex-1 flex flex-col relative z-10 justify-center">
        {/* Timeline backbone */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#D4882A] -translate-y-1/2"></div>
        
        {/* Years container */}
        <div className="flex w-full h-full relative">
          
          {/* Year 1 */}
          <div className="flex-1 border-r border-[#D4882A] border-dashed relative flex flex-col pt-8">
            <div className="absolute -top-6 left-0 right-0 text-center text-2xl font-display tracking-widest text-[#D4882A] bg-[#0D2240] px-4 mx-auto w-max">YEAR ONE</div>
            
            <div className="flex flex-1 h-full">
              {/* Fall Y1 */}
              <div className="flex-1 relative flex flex-col items-center justify-between py-12">
                <div className="w-[1px] h-full absolute left-1/2 top-0 bg-[#F7F5F0] opacity-20"></div>
                
                <div className="text-center w-full px-6 mb-auto border border-[#F7F5F0] border-opacity-30 bg-[#0D2240] py-4 shadow-lg backdrop-blur-sm">
                  <h3 className="text-3xl font-display uppercase tracking-wider mb-2 text-[#9b8af0]">Fall Y1 <span className="opacity-50">Discover</span></h3>
                  <ul className="text-sm space-y-2 opacity-80 text-left list-disc list-inside px-4">
                    <li>Design Thinking workshops</li>
                    <li>Guest speakers</li>
                    <li>Ideathon prep</li>
                  </ul>
                </div>

                <div className="w-4 h-4 rounded-full border-2 border-[#D4882A] bg-[#0D2240] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
                
                <div className="mt-auto border-t border-[#D4882A] pt-4 w-full text-center">
                  <div className="text-xs uppercase tracking-widest text-[#D4882A] mb-1">Culminating Event</div>
                  <div className="font-display text-2xl uppercase tracking-wider">Ideathon</div>
                  <div className="text-sm font-mono opacity-60">90-SEC PITCH</div>
                </div>
              </div>

              {/* Spring Y1 */}
              <div className="flex-1 relative flex flex-col items-center justify-between py-12">
                <div className="w-[1px] h-full absolute left-1/2 top-0 bg-[#F7F5F0] opacity-20"></div>
                
                <div className="text-center w-full px-6 mb-auto border border-[#F7F5F0] border-opacity-30 bg-[#0D2240] py-4 shadow-lg backdrop-blur-sm">
                  <h3 className="text-3xl font-display uppercase tracking-wider mb-2 text-[#4ad7c1]">Spring Y1 <span className="opacity-50">Validate</span></h3>
                  <ul className="text-sm space-y-2 opacity-80 text-left list-disc list-inside px-4">
                    <li>Customer discovery</li>
                    <li>Market research</li>
                    <li>MVPs</li>
                  </ul>
                </div>

                <div className="w-4 h-4 rounded-full border-2 border-[#D4882A] bg-[#0D2240] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
                
                <div className="mt-auto border-t border-[#D4882A] pt-4 w-full text-center">
                  <div className="text-xs uppercase tracking-widest text-[#D4882A] mb-1">Culminating Event</div>
                  <div className="font-display text-2xl uppercase tracking-wider">Innovation Fest</div>
                  <div className="text-sm font-mono opacity-60">3-MIN PITCH</div>
                </div>
              </div>
            </div>
          </div>

          {/* Year 2 */}
          <div className="flex-1 relative flex flex-col pt-8">
            <div className="absolute -top-6 left-0 right-0 text-center text-2xl font-display tracking-widest text-[#D4882A] bg-[#0D2240] px-4 mx-auto w-max">YEAR TWO</div>
            
            <div className="flex flex-1 h-full">
              {/* Fall Y2 */}
              <div className="flex-1 relative flex flex-col items-center justify-between py-12">
                <div className="w-[1px] h-full absolute left-1/2 top-0 bg-[#F7F5F0] opacity-20"></div>
                
                <div className="text-center w-full px-6 mb-auto border border-[#F7F5F0] border-opacity-30 bg-[#0D2240] py-4 shadow-lg backdrop-blur-sm">
                  <h3 className="text-3xl font-display uppercase tracking-wider mb-2 text-[#f39c12]">Fall Y2 <span className="opacity-50">Build</span></h3>
                  <ul className="text-sm space-y-2 opacity-80 text-left list-disc list-inside px-4">
                    <li>Product development</li>
                    <li>Team formation</li>
                    <li>Deep mentorship</li>
                  </ul>
                </div>

                <div className="w-4 h-4 rounded-full border-2 border-[#D4882A] bg-[#0D2240] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
                
                <div className="mt-auto border-t border-[#D4882A] pt-4 w-full text-center">
                  <div className="text-xs uppercase tracking-widest text-[#D4882A] mb-1">Culminating Event</div>
                  <div className="font-display text-2xl uppercase tracking-wider">Adv. Ideathon</div>
                  <div className="text-sm font-mono opacity-60">5-MIN PITCH</div>
                </div>
              </div>

              {/* Spring Y2 */}
              <div className="flex-1 relative flex flex-col items-center justify-between py-12">
                <div className="w-[1px] h-full absolute left-1/2 top-0 bg-[#F7F5F0] opacity-20"></div>
                
                <div className="text-center w-full px-6 mb-auto border border-[#F7F5F0] border-opacity-30 bg-[#0D2240] py-4 shadow-lg backdrop-blur-sm">
                  <h3 className="text-3xl font-display uppercase tracking-wider mb-2 text-[#e74c3c]">Spring Y2 <span className="opacity-50">Launch</span></h3>
                  <ul className="text-sm space-y-2 opacity-80 text-left list-disc list-inside px-4">
                    <li>Go-to-market</li>
                    <li>Investment prep</li>
                    <li>Pitch coaching</li>
                  </ul>
                </div>

                <div className="w-4 h-4 rounded-full border-2 border-[#D4882A] bg-[#0D2240] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
                
                <div className="mt-auto border-t border-[#D4882A] pt-4 w-full text-center">
                  <div className="text-xs uppercase tracking-widest text-[#D4882A] mb-1">Culminating Event</div>
                  <div className="font-display text-2xl uppercase tracking-wider">Innovation Fest</div>
                  <div className="text-sm font-mono opacity-60">7-10 MIN PITCH</div>
                </div>
              </div>
            </div>
            
            {/* Graduation */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border-4 border-[#D4882A] bg-[#0D2240] z-30 flex items-center justify-center">
              <div className="-rotate-45 text-center leading-tight">
                <div className="font-display uppercase text-xs text-[#D4882A]">Sunstone</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-12 right-12 border border-[#D4882A] bg-[#0D2240] p-4 text-sm z-40 max-w-xs shadow-2xl backdrop-blur-md">
        <h4 className="font-display uppercase tracking-wider mb-2 text-[#D4882A] border-b border-[#D4882A] pb-1">Legend</h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#9b8af0] border border-[#F7F5F0]"></div><span className="opacity-80">Discover</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#4ad7c1] border border-[#F7F5F0]"></div><span className="opacity-80">Validate</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#f39c12] border border-[#F7F5F0]"></div><span className="opacity-80">Build</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#e74c3c] border border-[#F7F5F0]"></div><span className="opacity-80">Launch</span></div>
          <div className="flex items-center gap-2 mt-2 col-span-2"><div className="w-3 h-3 border border-[#D4882A] rounded-full"></div><span className="opacity-80">Milestone / Pitch</span></div>
          <div className="flex items-center gap-2 col-span-2"><div className="w-3 h-3 border border-[#D4882A] rotate-45"></div><span className="opacity-80">Graduation (Sunstone)</span></div>
        </div>
      </div>
    </div>
  );
};