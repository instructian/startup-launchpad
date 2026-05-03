import { useState } from "react";

type PhaseKey = "fall-y1" | "spring-y1" | "summer" | "fall-y2" | "spring-y2";

interface CalendarEvent {
  month: number;
  year: number;
  day: number;
  label: string;
  type: "event" | "deadline" | "workshop" | "recruitment" | "milestone";
}

const events: CalendarEvent[] = [
  { month: 8, year: 1, day: 15, label: "Explorer Recruitment Opens", type: "recruitment" },
  { month: 8, year: 1, day: 28, label: "Team Formation Mixer", type: "workshop" },
  { month: 9, year: 1, day: 10, label: "Problem Prompts Released", type: "milestone" },
  { month: 9, year: 1, day: 20, label: "Discovery Workshop Series Begins", type: "workshop" },
  { month: 9, year: 1, day: 30, label: "Launchpad Intake Deadline", type: "deadline" },
  { month: 10, year: 1, day: 8, label: "Design Thinking Workshop", type: "workshop" },
  { month: 10, year: 1, day: 20, label: "Mentor Mixer", type: "workshop" },
  { month: 10, year: 1, day: 31, label: "Ideathon Pitch Submission Deadline", type: "deadline" },
  { month: 11, year: 1, day: 15, label: "Fall Ideathon Y1", type: "event" },
  { month: 11, year: 1, day: 30, label: "Joiner Track Opens", type: "recruitment" },
  { month: 12, year: 1, day: 10, label: "Semester Retrospective", type: "milestone" },
  { month: 1, year: 1, day: 15, label: "Spring Launchpad Sprint Begins", type: "workshop" },
  { month: 1, year: 1, day: 20, label: "Customer Interview Workshop", type: "workshop" },
  { month: 2, year: 1, day: 5, label: "Prototype Studio", type: "workshop" },
  { month: 2, year: 1, day: 20, label: "Customer Discovery Office Hours", type: "workshop" },
  { month: 2, year: 1, day: 28, label: "Innovation Festival Registration Deadline", type: "deadline" },
  { month: 3, year: 1, day: 15, label: "Validation Pitch Coaching", type: "workshop" },
  { month: 4, year: 1, day: 5, label: "Pitch Practice Sessions", type: "workshop" },
  { month: 4, year: 1, day: 20, label: "Spring Innovation Festival Y1", type: "event" },
  { month: 5, year: 1, day: 10, label: "Summer Sprint Planning", type: "milestone" },
  { month: 6, year: 1, day: 1, label: "Summer Pilot Sprint Begins (Optional)", type: "workshop" },
  { month: 6, year: 1, day: 15, label: "Mentor Office Hours (Summer)", type: "workshop" },
  { month: 7, year: 1, day: 15, label: "Summer Experiment Log Due", type: "deadline" },
  { month: 8, year: 2, day: 10, label: "Accelerator Track Recruitment Opens", type: "recruitment" },
  { month: 8, year: 2, day: 25, label: "MVP Build Sprint Kickoff", type: "workshop" },
  { month: 9, year: 2, day: 10, label: "Technical Mentor Assignments", type: "milestone" },
  { month: 9, year: 2, day: 20, label: "Business Model Workshop", type: "workshop" },
  { month: 10, year: 2, day: 5, label: "IP/Legal Clinic", type: "workshop" },
  { month: 10, year: 2, day: 20, label: "Alumni Founder Panels", type: "workshop" },
  { month: 10, year: 2, day: 31, label: "Advanced Ideathon Submission Deadline", type: "deadline" },
  { month: 11, year: 2, day: 14, label: "Advanced Ideathon Y2", type: "event" },
  { month: 12, year: 2, day: 10, label: "Sunstone Readiness Assessment", type: "milestone" },
  { month: 1, year: 2, day: 15, label: "Financial Model Workshop", type: "workshop" },
  { month: 1, year: 2, day: 25, label: "Business Plan Writing Sprint", type: "workshop" },
  { month: 2, year: 2, day: 10, label: "Mock Judging Session", type: "workshop" },
  { month: 2, year: 2, day: 25, label: "Sunstone Clinic", type: "workshop" },
  { month: 3, year: 2, day: 10, label: "Innovation Festival Registration Deadline", type: "deadline" },
  { month: 3, year: 2, day: 20, label: "Sponsor Introductions", type: "milestone" },
  { month: 4, year: 2, day: 5, label: "Investor-Style Pitch Rehearsals", type: "workshop" },
  { month: 4, year: 2, day: 20, label: "Spring Innovation Festival Y2 / Sunstone Qualifier", type: "event" },
  { month: 5, year: 2, day: 10, label: "Sunstone Competition", type: "event" },
];

const MONTHS = [
  "August", "September", "October", "November", "December",
  "January", "February", "March", "April", "May"
];

const MONTH_NUMS = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

const phaseColors: Record<string, string> = {
  "fall-y1": "bg-blue-50 border-blue-200",
  "spring-y1": "bg-teal-50 border-teal-200",
  "summer": "bg-slate-50 border-slate-200",
  "fall-y2": "bg-indigo-50 border-indigo-200",
  "spring-y2": "bg-violet-50 border-violet-200",
};

function getMonthPhase(month: number, year: number): PhaseKey {
  if (year === 1 && month >= 8 && month <= 12) return "fall-y1";
  if (year === 1 && month >= 1 && month <= 5) return "spring-y1";
  if (year === 1 && (month === 6 || month === 7)) return "summer";
  if (year === 2 && month >= 8 && month <= 12) return "fall-y2";
  return "spring-y2";
}

const typeStyles: Record<string, string> = {
  event: "bg-amber-500 text-white",
  deadline: "bg-red-500 text-white",
  workshop: "bg-blue-500 text-white",
  recruitment: "bg-green-500 text-white",
  milestone: "bg-violet-500 text-white",
};

const typeDot: Record<string, string> = {
  event: "bg-amber-500",
  deadline: "bg-red-500",
  workshop: "bg-blue-500",
  recruitment: "bg-green-500",
  milestone: "bg-violet-500",
};

function getDaysInMonth(month: number): number {
  const days: Record<number, number> = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31,
  };
  return days[month] ?? 30;
}

function getStartDayOfMonth(month: number, year: number): number {
  const baseYear = year === 1 ? 2026 : 2027;
  const date = new Date(baseYear, month - 1, 1);
  return date.getDay();
}

function MonthGrid({ month, year, monthName }: { month: number; year: number; monthName: string }) {
  const phase = getMonthPhase(month, year);
  const phaseClass = phaseColors[phase];
  const daysInMonth = getDaysInMonth(month);
  const startDay = getStartDayOfMonth(month, year);
  const monthEvents = events.filter(e => e.month === month && e.year === year);

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div className={`border rounded-lg overflow-hidden ${phaseClass}`} data-testid={`month-grid-${month}-y${year}`}>
      <div className="px-3 py-2 bg-white/60 border-b">
        <span className="font-serif font-bold text-sm text-slate-800">{monthName}</span>
        <span className="text-xs text-slate-500 ml-2">Year {year}</span>
      </div>
      <div className="bg-white/40">
        <div className="grid grid-cols-7 border-b">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
            <div key={d} className="text-center text-[10px] font-bold text-slate-400 py-1">{d}</div>
          ))}
        </div>
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7">
            {week.map((day, di) => {
              const dayEvents = day ? monthEvents.filter(e => e.day === day) : [];
              return (
                <div
                  key={di}
                  className={`min-h-[44px] border-b border-r border-slate-100 p-0.5 ${day ? "bg-white/60 hover:bg-white/90 transition-colors" : "bg-transparent"}`}
                >
                  {day && (
                    <>
                      <span className={`text-[11px] font-medium block leading-none mb-0.5 ${dayEvents.some(e => e.type === "event") ? "text-amber-700 font-bold" : "text-slate-600"}`}>
                        {day}
                      </span>
                      {dayEvents.map((ev, ei) => (
                        <div
                          key={ei}
                          title={ev.label}
                          className={`text-[9px] leading-tight px-0.5 py-0.5 rounded mb-0.5 truncate cursor-default ${typeStyles[ev.type]}`}
                          data-testid={`event-${ev.label.replace(/\s+/g, '-').toLowerCase()}`}
                        >
                          {ev.label}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const phases = [
  { name: "Fall Y1: Discover", months: "Aug – Dec", bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-800" },
  { name: "Spring Y1: Validate", months: "Jan – May", bg: "bg-teal-100", border: "border-teal-300", text: "text-teal-800" },
  { name: "Summer Sprint", months: "Jun – Jul", bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-800" },
  { name: "Fall Y2: Build", months: "Aug – Dec", bg: "bg-indigo-100", border: "border-indigo-300", text: "text-indigo-800" },
  { name: "Spring Y2: Launch", months: "Jan – May", bg: "bg-violet-100", border: "border-violet-300", text: "text-violet-800" },
];

export default function CalendarPage() {
  const [view, setView] = useState<"gantt" | "monthly">("gantt");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Calendar & Timeline</h1>
          <p className="text-lg text-slate-600">Two-year program execution schedule.</p>
        </div>
        <div className="flex gap-2 border rounded-lg p-1 bg-white shadow-sm">
          <button
            onClick={() => setView("gantt")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${view === "gantt" ? "bg-primary text-white shadow" : "text-slate-600 hover:bg-slate-100"}`}
            data-testid="tab-gantt"
          >
            Gantt Timeline
          </button>
          <button
            onClick={() => setView("monthly")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${view === "monthly" ? "bg-primary text-white shadow" : "text-slate-600 hover:bg-slate-100"}`}
            data-testid="tab-monthly"
          >
            Monthly Grid
          </button>
        </div>
      </div>

      {view === "gantt" && (
        <div className="bg-white border rounded-xl p-6 shadow-sm overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex mb-4">
              <div className="w-48 shrink-0" />
              <div className="flex-1 grid grid-cols-5 gap-2">
                {phases.map((phase) => (
                  <div key={phase.name} className={`text-center py-2 px-1 rounded-md border ${phase.bg} ${phase.border} ${phase.text}`}>
                    <div className="font-bold text-sm leading-tight">{phase.name}</div>
                    <div className="text-[10px] uppercase tracking-wider">{phase.months}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Recruitment & Entry</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-8 relative">
                  <div className="col-start-1 bg-green-100 border border-green-300 rounded-sm flex items-center justify-center text-xs font-medium text-green-800">Explorer Cohort</div>
                  <div className="col-start-4 bg-green-100 border border-green-300 rounded-sm flex items-center justify-center text-xs font-medium text-green-800">Accelerator Cohort</div>
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300 -z-10" />
                  <div className="absolute top-0 bottom-0 left-1/5 right-0 flex items-center justify-center text-[10px] text-slate-500 font-bold pointer-events-none">Rolling Joiner/Contributor Entry</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Major Events</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-10 items-center">
                  <div className="col-start-1 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-4 bg-amber-400 rounded-sm" />
                    <div className="absolute right-8 top-1 text-xs font-bold text-amber-900">Fall Ideathon</div>
                  </div>
                  <div className="col-start-2 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-4 bg-amber-400 rounded-sm" />
                    <div className="absolute right-8 top-1 text-xs font-bold text-amber-900">Innovation Fest</div>
                  </div>
                  <div className="col-start-3" />
                  <div className="col-start-4 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-4 bg-amber-400 rounded-sm" />
                    <div className="absolute right-8 top-1 text-xs font-bold text-amber-900">Advanced Ideathon</div>
                  </div>
                  <div className="col-start-5 relative h-full">
                    <div className="absolute right-2 top-0 bottom-0 w-6 bg-primary rounded-sm shadow-md" />
                    <div className="absolute right-10 top-1 text-xs font-bold text-primary">Sunstone Qualifier</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Launchpad Deadlines</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-8 items-center">
                  <div className="col-start-1 relative h-full">
                    <div className="absolute right-4 top-0 bottom-0 w-2 bg-red-400 rounded-sm" />
                    <div className="absolute right-8 top-1.5 text-[10px] text-red-700">Intake</div>
                  </div>
                  <div className="col-start-2 relative h-full">
                    <div className="absolute right-4 top-0 bottom-0 w-2 bg-red-400 rounded-sm" />
                    <div className="absolute right-8 top-1.5 text-[10px] text-red-700">Festival Reg</div>
                  </div>
                  <div className="col-start-4 relative h-full">
                    <div className="absolute right-4 top-0 bottom-0 w-2 bg-red-400 rounded-sm" />
                    <div className="absolute right-8 top-1.5 text-[10px] text-red-700">Adv. Intake</div>
                  </div>
                  <div className="col-start-5 relative h-full">
                    <div className="absolute right-4 top-0 bottom-0 w-2 bg-red-400 rounded-sm" />
                    <div className="absolute right-8 top-1.5 text-[10px] text-red-700">Festival Reg</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-48 shrink-0 text-sm font-bold text-slate-700">Workshops & Support</div>
                <div className="flex-1 grid grid-cols-5 gap-2 h-8">
                  <div className="col-start-1 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Discovery</div>
                  <div className="col-start-2 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Validation Studio</div>
                  <div className="col-start-3 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Summer Sprint</div>
                  <div className="col-start-4 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Build/Legal Clinics</div>
                  <div className="col-start-5 bg-indigo-50 border border-indigo-200 rounded-sm flex items-center justify-center text-xs text-indigo-700">Pitch/Finance Prep</div>
                </div>
              </div>
              <div className="flex items-center">
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
        <div>
          <div className="flex flex-wrap gap-3 mb-6 bg-white border rounded-lg p-3 shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide self-center mr-1">Legend:</span>
            {Object.entries({ event: "Major Event", deadline: "Deadline", workshop: "Workshop", recruitment: "Recruitment", milestone: "Milestone" }).map(([type, label]) => (
              <span key={type} className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                <span className={`w-2.5 h-2.5 rounded-full ${typeDot[type]}`} />
                {label}
              </span>
            ))}
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-serif font-bold text-blue-900 mb-3 pb-2 border-b border-blue-200">Year 1: Discover & Validate (Aug 2026 – May 2027)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {MONTH_NUMS.slice(0, 5).map((month, i) => (
                <MonthGrid key={`y1-${month}`} month={month} year={1} monthName={MONTHS[i]} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-indigo-900 mb-3 pb-2 border-b border-indigo-200">Year 2: Build & Launch (Aug 2027 – May 2028)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {MONTH_NUMS.map((month, i) => (
                <MonthGrid key={`y2-${month}`} month={month} year={2} monthName={MONTHS[i]} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
