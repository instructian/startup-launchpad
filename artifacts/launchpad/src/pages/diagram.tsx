import { useState } from "react";
import { ArrowRight, Compass, Database, Flag, Lightbulb, Users, Target, Rocket, Info } from "lucide-react";

interface LoopStep {
  icon: React.ReactNode;
  label: string;
  description: string;
}

const loopSteps: LoopStep[] = [
  { icon: <Lightbulb className="w-4 h-4" />, label: "Provocation", description: "A prompt, challenge, or emerging problem is introduced. Students explore the space without forcing a solution." },
  { icon: <Users className="w-4 h-4" />, label: "Team Formation", description: "Students assemble cross-functional teams matching skills (design, tech, business, storytelling) to the problem domain." },
  { icon: <Target className="w-4 h-4" />, label: "Customer Evidence", description: "Teams conduct structured interviews and research to validate that real people have the problem and want a solution." },
  { icon: <Database className="w-4 h-4" />, label: "Build / Test", description: "Rapid prototyping and testing cycles. Minimum viable experiments are designed to learn as quickly as possible." },
  { icon: <Flag className="w-4 h-4" />, label: "Pitch", description: "Teams present their learning and progress to judges, mentors, and peers at structured milestone events." },
  { icon: <Compass className="w-4 h-4" />, label: "Feedback", description: "Judges, mentors, and peers provide structured critique. Teams document insights in their Launchpad evidence record." },
  { icon: null, label: "Next Sprint", description: "Teams apply feedback and begin the next iteration cycle with a refined hypothesis and higher standards of evidence." },
];

interface SemesterCard {
  level: string;
  season: string;
  phase: string;
  color: string;
  bg: string;
  textColor: string;
  borderColor: string;
  mission: string;
  deliverables: string[];
  event: string;
  eventPitch: string;
  details: string;
}

const semesters: SemesterCard[] = [
  {
    level: "Level 1", season: "Fall Y1", phase: "Discover",
    color: "blue", bg: "bg-blue-50", textColor: "text-blue-800", borderColor: "border-blue-100",
    mission: "Find a meaningful problem & form a team",
    deliverables: ["Problem brief", "User segment map", "Solution thesis", "Team charter"],
    event: "Ideathon", eventPitch: "90-second pitch",
    details: "Students enter as Explorers with no idea required. Problem prompts are released, team formation mixers are held, and workshops cover design thinking and user research. By November, teams pitch a problem framing — not a solution."
  },
  {
    level: "Level 2", season: "Spring Y1", phase: "Validate",
    color: "teal", bg: "bg-teal-50", textColor: "text-teal-800", borderColor: "border-teal-100",
    mission: "Prove someone has the problem",
    deliverables: ["5+ customer interviews", "Early prototype", "Evidence record", "Validation deck"],
    event: "Innovation Festival", eventPitch: "3-minute validation pitch",
    details: "Teams shift from problem definition to evidence gathering. Customer discovery office hours, prototype studios, and validation coaching run throughout the semester. The spring Innovation Festival requires demonstrated evidence of demand — not just an idea."
  },
  {
    level: "Level 3", season: "Fall Y2", phase: "Build",
    color: "indigo", bg: "bg-indigo-50", textColor: "text-indigo-800", borderColor: "border-indigo-100",
    mission: "Turn validation into MVP or pilot",
    deliverables: ["Working MVP or pilot", "Team role definitions", "Business model canvas", "Traction target"],
    event: "Advanced Ideathon", eventPitch: "5-minute progress pitch",
    details: "Accelerator-track students enter with ideas, prototypes, or capstone projects. Mentor pods are assigned. IP/legal clinics, alumni founder panels, and build workshops support execution. The fall Advanced Ideathon requires a working product or pilot."
  },
  {
    level: "Level 4", season: "Spring Y2", phase: "Launch",
    color: "violet", bg: "bg-violet-50", textColor: "text-violet-800", borderColor: "border-violet-100",
    mission: "Demonstrate Sunstone readiness",
    deliverables: ["Traction data", "Business plan", "Go-to-market plan", "Financial model"],
    event: "Innovation Festival → Sunstone", eventPitch: "7-10 min investor-style pitch",
    details: "Teams prepare for the Sunstone competition — the university's premier venture showcase. Financial model workshops, mock judging sessions, and sponsor introductions build readiness. The best teams advance from the Innovation Festival qualifier to the Sunstone finale."
  },
];

export default function DiagramPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Program Pathway</h1>
        <p className="text-lg text-muted-foreground">Interactive visualization of the four-semester Startup Launchpad progression.</p>
      </div>

      <div className="bg-white border rounded-xl shadow-sm p-8 overflow-x-auto" id="program-diagram" data-testid="diagram-container">
        <div className="min-w-[900px]">

          {/* Core Loop */}
          <div className="mb-10 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
              The Core Iterative Loop
              <span className="ml-2 text-xs text-muted-foreground/60 normal-case font-normal">(hover each step for detail)</span>
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm font-medium flex-wrap">
              {loopSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border cursor-pointer transition-all duration-200 ${
                      step.icon
                        ? hoveredStep === i
                          ? "bg-primary text-white border-primary shadow-md scale-105"
                          : "bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                        : hoveredStep === i
                          ? "bg-slate-700 text-white border-slate-700 shadow-md scale-105"
                          : "bg-secondary text-secondary-foreground border-slate-200 hover:bg-slate-100"
                    }`}
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    data-testid={`loop-step-${i}`}
                  >
                    {step.icon}
                    {step.label}
                  </div>
                  {i < loopSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Tooltip panel */}
            <div
              className={`mt-4 mx-auto max-w-lg bg-slate-900 text-white text-sm px-5 py-3 rounded-lg shadow-lg text-left transition-all duration-200 ${
                hoveredStep !== null ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              {hoveredStep !== null && (
                <>
                  <div className="font-bold mb-1">{loopSteps[hoveredStep].label}</div>
                  <div className="text-slate-300 leading-relaxed">{loopSteps[hoveredStep].description}</div>
                </>
              )}
            </div>
          </div>

          {/* Launchpad Tool Layer */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-3 text-center mb-6 border-b-4 border-slate-900 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            <span className="relative font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2">
              <Database className="w-4 h-4" />
              Supported continuously by the Launchpad Tool (Training & Evidence Record)
            </span>
          </div>

          {/* Semester Columns */}
          <div className="grid grid-cols-4 gap-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -z-10 transform -translate-y-1/2 hidden md:block" />

            {semesters.map((sem, i) => {
              const isActive = activeCard === i;
              const colorMap: Record<string, { badge: string; heading: string; border: string }> = {
                blue:   { badge: "bg-blue-50 text-blue-800",   heading: "text-blue-600",   border: "border-blue-300" },
                teal:   { badge: "bg-teal-50 text-teal-800",   heading: "text-teal-600",   border: "border-teal-300" },
                indigo: { badge: "bg-indigo-50 text-indigo-800", heading: "text-indigo-600", border: "border-indigo-300" },
                violet: { badge: "bg-violet-50 text-violet-800", heading: "text-violet-600", border: "border-violet-300" },
              };
              const c = colorMap[sem.color];

              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-5 shadow-sm relative flex flex-col h-full cursor-pointer transition-all duration-200 border-2 ${
                    isActive ? `${sem.borderColor.replace("border-", "border-").replace("100", "400")} shadow-lg -translate-y-1` : `${sem.borderColor} hover:shadow-md hover:-translate-y-0.5`
                  }`}
                  onClick={() => setActiveCard(isActive ? null : i)}
                  data-testid={`semester-card-${i}`}
                >
                  <div className={`${c.badge} font-bold uppercase text-xs tracking-wider py-1 px-3 rounded-full self-start mb-3`}>{sem.level}</div>
                  <h4 className="text-xl font-serif font-bold text-slate-900">{sem.season}</h4>
                  <h5 className={`${c.heading} font-bold text-lg mb-3`}>{sem.phase}</h5>

                  {!isActive ? (
                    <>
                      <div className="flex-1 space-y-3">
                        <div className="bg-slate-50 border rounded-md p-3 text-sm">
                          <strong className="block text-slate-700 mb-1">Mission:</strong>
                          {sem.mission}
                        </div>
                        <div className="bg-slate-50 border rounded-md p-3 text-sm">
                          <strong className="block text-slate-700 mb-1">Deliverables:</strong>
                          {sem.deliverables.slice(0, 2).join(", ")}…
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-center text-slate-400 flex items-center justify-center gap-1">
                        <Info className="w-3 h-3" /> Click to expand
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 space-y-3">
                      <div className="bg-slate-50 border rounded-md p-3 text-sm">
                        <strong className="block text-slate-700 mb-1">Mission:</strong>
                        {sem.mission}
                      </div>
                      <div className="bg-slate-50 border rounded-md p-3 text-sm">
                        <strong className="block text-slate-700 mb-2">Deliverables:</strong>
                        <ul className="space-y-1">
                          {sem.deliverables.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 border border-blue-100 rounded-md p-3 text-sm text-slate-700 leading-relaxed">
                        {sem.details}
                      </div>
                      <div className="text-xs text-center text-slate-400">Click to collapse</div>
                    </div>
                  )}

                  <div className={`mt-4 ${i === 3 ? "bg-amber-100 border-amber-300 shadow-inner" : "bg-amber-50 border-amber-200"} border rounded-lg p-4 text-center relative overflow-hidden`}>
                    {i === 3 && <div className="absolute -right-4 -top-4 text-amber-200/50"><Rocket className="w-16 h-16" /></div>}
                    <span className="block text-xs font-bold text-amber-800 uppercase mb-1 relative z-10">Event Ladder</span>
                    <strong className="text-amber-900 block relative z-10">{sem.event}</strong>
                    <span className="text-sm text-amber-700 relative z-10">{sem.eventPitch}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Entry Tracks */}
          <div className="mt-10 pt-8 border-t">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">Entry Tracks</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { color: "bg-blue-500", label: "Explorer", sub: "No idea yet (Fall Y1)" },
                { color: "bg-teal-500", label: "Joiner", sub: "Join a team (Rolling)" },
                { color: "bg-indigo-500", label: "Accelerator", sub: "Idea/prototype (Fall Y2)" },
                { color: "bg-violet-500", label: "Contributor", sub: "Specific skill (Any time)" },
              ].map((track) => (
                <div key={track.label} className="flex items-center gap-3 bg-white border shadow-sm px-4 py-2 rounded-lg hover:shadow-md transition-shadow">
                  <div className={`w-3 h-3 rounded-full ${track.color}`} />
                  <div>
                    <div className="font-bold text-sm">{track.label}</div>
                    <div className="text-xs text-muted-foreground">{track.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
