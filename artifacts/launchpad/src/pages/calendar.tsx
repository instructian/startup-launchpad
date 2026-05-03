import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function CalendarPage() {
  const [view, setView] = useState("gantt");

  // Mock data for the timeline
  const phases = [
    { name: "Fall Y1: Discover", months: "Aug - Dec", bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-800" },
    { name: "Spring Y1: Validate", months: "Jan - May", bg: "bg-teal-100", border: "border-teal-300", text: "text-teal-800" },
    { name: "Summer Sprint", months: "Jun - Jul", bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-800" },
    { name: "Fall Y2: Build", months: "Aug - Dec", bg: "bg-indigo-100", border: "border-indigo-300", text: "text-indigo-800" },
    { name: "Spring Y2: Launch", months: "Jan - May", bg: "bg-violet-100", border: "border-violet-300", text: "text-violet-800" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Calendar & Timeline</h1>
          <p className="text-lg text-slate-600">Two-year program execution schedule.</p>
        </div>
        
        <Tabs value={view} onValueChange={setView} className="w-full md:w-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gantt" data-testid="tab-gantt">Gantt Timeline</TabsTrigger>
            <TabsTrigger value="monthly" data-testid="tab-monthly">Monthly Grid</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {view === "gantt" && (
        <div className="bg-white border rounded-xl p-6 shadow-sm overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Timeline Header */}
            <div className="flex mb-4">
              <div className="w-48 shrink-0"></div>
              <div className="flex-1 grid grid-cols-5 gap-2">
                {phases.map((phase) => (
                  <div key={phase.name} className={`text-center py-2 px-1 rounded-md border ${phase.bg} ${phase.border} ${phase.text}`}>
                    <div className="font-bold text-sm leading-tight">{phase.name}</div>
                    <div className="text-[10px] uppercase tracking-wider">{phase.months}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tracks / Streams */}
            <div className="space-y-4">
              {/* Student Recruitment */}
              <div className="flex items-center group">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Recruitment & Entry</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-8 relative">
                  <div className="col-start-1 bg-slate-200 rounded-sm flex items-center justify-center text-xs font-medium">Explorer Cohort</div>
                  <div className="col-start-4 bg-slate-200 rounded-sm flex items-center justify-center text-xs font-medium">Accelerator Cohort</div>
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300 -z-10"></div>
                  <div className="absolute top-0 bottom-0 left-1/4 right-0 flex items-center justify-center text-[10px] text-slate-500 font-bold bg-white/50 backdrop-blur-sm mx-4 pointer-events-none">Rolling Joiner/Contributor Entry</div>
                </div>
              </div>

              {/* Major Events */}
              <div className="flex items-center group">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Major Events</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-10 items-center">
                  <div className="col-start-1 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-4 bg-amber-400 rounded-sm"></div>
                    <div className="absolute right-8 top-1 text-xs font-bold text-amber-900">Fall Ideathon</div>
                  </div>
                  <div className="col-start-2 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-4 bg-amber-400 rounded-sm"></div>
                    <div className="absolute right-8 top-1 text-xs font-bold text-amber-900">Innovation Fest</div>
                  </div>
                  <div className="col-start-3"></div>
                  <div className="col-start-4 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-4 bg-amber-400 rounded-sm"></div>
                    <div className="absolute right-8 top-1 text-xs font-bold text-amber-900">Advanced Ideathon</div>
                  </div>
                  <div className="col-start-5 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-6 bg-primary rounded-sm shadow-md"></div>
                    <div className="absolute right-10 top-1 text-xs font-bold text-primary">Sunstone Qualifier</div>
                  </div>
                </div>
              </div>

              {/* Workshops */}
              <div className="flex items-center group">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Workshops & Support</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-8">
                  <div className="col-start-1 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Discovery Workshops</div>
                  <div className="col-start-2 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Validation Studio</div>
                  <div className="col-start-3"></div>
                  <div className="col-start-4 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Build/Legal Clinics</div>
                  <div className="col-start-5 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Pitch/Finance Prep</div>
                </div>
              </div>

              {/* Launchpad Tool */}
              <div className="flex items-center group">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Launchpad Tool</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-6">
                  <div className="col-span-5 bg-slate-800 rounded-sm flex items-center justify-center text-xs font-bold text-white tracking-widest uppercase">
                    Continuous Evidence Tracking & Sprint Planning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === "monthly" && (
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold font-serif mb-4 text-blue-900 border-b pb-2">Year 1: Discover & Validate</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-slate-500 uppercase text-xs pt-1">Aug</div>
                  <div>
                    <strong className="block text-sm">Explorer Intake</strong>
                    <span className="text-sm text-slate-600">Marketing push and info sessions</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-slate-500 uppercase text-xs pt-1">Sep</div>
                  <div>
                    <strong className="block text-sm">Problem Prompts Released</strong>
                    <span className="text-sm text-slate-600">Team formation mixers</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-amber-600 uppercase text-xs pt-1">Nov</div>
                  <div className="bg-amber-50 p-2 rounded border border-amber-100 w-full">
                    <strong className="block text-sm text-amber-900">Fall Ideathon Y1</strong>
                    <span className="text-sm text-amber-700">90-second pitch milestone</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-slate-500 uppercase text-xs pt-1">Feb</div>
                  <div>
                    <strong className="block text-sm">Prototype Studio</strong>
                    <span className="text-sm text-slate-600">Customer interview review</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-amber-600 uppercase text-xs pt-1">Apr</div>
                  <div className="bg-amber-50 p-2 rounded border border-amber-100 w-full">
                    <strong className="block text-sm text-amber-900">Spring Innovation Festival Y1</strong>
                    <span className="text-sm text-amber-700">3-minute validation pitch</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold font-serif mb-4 text-indigo-900 border-b pb-2">Year 2: Build & Launch</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-slate-500 uppercase text-xs pt-1">Aug</div>
                  <div>
                    <strong className="block text-sm">Accelerator Intake</strong>
                    <span className="text-sm text-slate-600">Onboard existing prototypes/capstones</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-slate-500 uppercase text-xs pt-1">Oct</div>
                  <div>
                    <strong className="block text-sm">Mentor Pods Assigned</strong>
                    <span className="text-sm text-slate-600">Business model and IP workshops</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-amber-600 uppercase text-xs pt-1">Nov</div>
                  <div className="bg-amber-50 p-2 rounded border border-amber-100 w-full">
                    <strong className="block text-sm text-amber-900">Advanced Ideathon Y2</strong>
                    <span className="text-sm text-amber-700">5-minute progress pitch</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-slate-500 uppercase text-xs pt-1">Mar</div>
                  <div>
                    <strong className="block text-sm">Financial Logic Clinic</strong>
                    <span className="text-sm text-slate-600">Sunstone readiness checks</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 font-bold text-primary uppercase text-xs pt-1">May</div>
                  <div className="bg-primary/10 p-2 rounded border border-primary/20 w-full">
                    <strong className="block text-sm text-primary">Sunstone Qualifier & Finale</strong>
                    <span className="text-sm text-primary/80">Investor-style venture pitch</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
