import { ArrowRight, Compass, Database, Flag, Lightbulb, Users, Target, Rocket } from "lucide-react";

export default function DiagramPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Program Pathway</h1>
        <p className="text-lg text-muted-foreground">Interactive visualization of the four-semester Startup Launchpad progression.</p>
      </div>

      <div className="bg-white border rounded-xl shadow-sm p-8 overflow-x-auto" id="program-diagram" data-testid="diagram-container">
        
        <div className="min-w-[900px]">
          {/* Core Loop Header */}
          <div className="mb-10 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">The Core Iterative Loop</h3>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/20"><Lightbulb className="w-4 h-4"/> Provocation</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground"/>
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/20"><Users className="w-4 h-4"/> Team Formation</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground"/>
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/20"><Target className="w-4 h-4"/> Customer Evidence</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground"/>
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/20"><Database className="w-4 h-4"/> Build/Test</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground"/>
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/20"><Flag className="w-4 h-4"/> Pitch</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground"/>
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/20"><Compass className="w-4 h-4"/> Feedback</div>
              <ArrowRight className="w-4 h-4 text-muted-foreground"/>
              <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full border">Next Sprint</div>
            </div>
          </div>

          {/* Launchpad Tool Layer */}
          <div className="bg-slate-800 text-slate-100 rounded-lg p-3 text-center mb-6 border-b-4 border-slate-900 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            <span className="relative font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2">
              <Database className="w-4 h-4" />
              Supported continuously by the Launchpad Tool (Training & Evidence Record)
            </span>
          </div>

          {/* Semester Columns */}
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connection lines between columns */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -z-10 transform -translate-y-1/2 hidden md:block"></div>

            {/* Semester 1 */}
            <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm relative flex flex-col h-full">
              <div className="bg-blue-50 text-blue-800 font-bold uppercase text-xs tracking-wider py-1 px-3 rounded-full self-start mb-3">Level 1</div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Fall Y1</h4>
              <h5 className="text-blue-600 font-bold text-lg mb-4">Discover</h5>
              <div className="flex-1 space-y-3">
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Mission:</strong>
                  Find a meaningful problem & form team
                </div>
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Deliverables:</strong>
                  Problem brief, user segment, solution thesis
                </div>
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Event Ladder</span>
                <strong className="text-amber-900 block">Ideathon</strong>
                <span className="text-sm text-amber-700">90-second pitch</span>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="bg-white border-2 border-teal-100 rounded-xl p-5 shadow-sm relative flex flex-col h-full">
              <div className="bg-teal-50 text-teal-800 font-bold uppercase text-xs tracking-wider py-1 px-3 rounded-full self-start mb-3">Level 2</div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Spring Y1</h4>
              <h5 className="text-teal-600 font-bold text-lg mb-4">Validate</h5>
              <div className="flex-1 space-y-3">
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Mission:</strong>
                  Prove someone has the problem
                </div>
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Deliverables:</strong>
                  Interviews, early prototype, evidence record
                </div>
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Event Ladder</span>
                <strong className="text-amber-900 block">Innovation Festival</strong>
                <span className="text-sm text-amber-700">3-minute validation pitch</span>
              </div>
            </div>

            {/* Semester 3 */}
            <div className="bg-white border-2 border-indigo-100 rounded-xl p-5 shadow-sm relative flex flex-col h-full">
              <div className="bg-indigo-50 text-indigo-800 font-bold uppercase text-xs tracking-wider py-1 px-3 rounded-full self-start mb-3">Level 3</div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Fall Y2</h4>
              <h5 className="text-indigo-600 font-bold text-lg mb-4">Build</h5>
              <div className="flex-1 space-y-3">
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Mission:</strong>
                  Turn validation into MVP or pilot
                </div>
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Deliverables:</strong>
                  MVP/pilot, roles, business model, traction target
                </div>
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <span className="block text-xs font-bold text-amber-800 uppercase mb-1">Event Ladder</span>
                <strong className="text-amber-900 block">Advanced Ideathon</strong>
                <span className="text-sm text-amber-700">5-minute progress pitch</span>
              </div>
            </div>

            {/* Semester 4 */}
            <div className="bg-white border-2 border-violet-100 rounded-xl p-5 shadow-sm relative flex flex-col h-full">
              <div className="bg-violet-50 text-violet-800 font-bold uppercase text-xs tracking-wider py-1 px-3 rounded-full self-start mb-3">Level 4</div>
              <h4 className="text-xl font-serif font-bold text-slate-900">Spring Y2</h4>
              <h5 className="text-violet-600 font-bold text-lg mb-4">Launch</h5>
              <div className="flex-1 space-y-3">
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Mission:</strong>
                  Demonstrate Sunstone readiness
                </div>
                <div className="bg-slate-50 border rounded-md p-3 text-sm">
                  <strong className="block text-slate-700 mb-1">Deliverables:</strong>
                  Traction, business & go-to-market plan
                </div>
              </div>
              <div className="mt-4 bg-amber-100 border border-amber-300 rounded-lg p-4 text-center shadow-inner relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-amber-200/50"><Rocket className="w-16 h-16"/></div>
                <span className="block text-xs font-bold text-amber-800 uppercase mb-1 relative z-10">Event Ladder</span>
                <strong className="text-amber-900 block relative z-10">Innovation Festival <br/>&rarr; Sunstone</strong>
                <span className="text-sm text-amber-800 relative z-10">7-10m pitch / Investor-style</span>
              </div>
            </div>
          </div>

          {/* Entry Tracks */}
          <div className="mt-10 pt-8 border-t">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">Entry Tracks</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 bg-white border shadow-sm px-4 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div>
                  <div className="font-bold text-sm">Explorer</div>
                  <div className="text-xs text-muted-foreground">No idea yet (Fall Y1)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border shadow-sm px-4 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                <div>
                  <div className="font-bold text-sm">Joiner</div>
                  <div className="text-xs text-muted-foreground">Join a team (Rolling)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border shadow-sm px-4 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <div>
                  <div className="font-bold text-sm">Accelerator</div>
                  <div className="text-xs text-muted-foreground">Idea/prototype (Fall Y2)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border shadow-sm px-4 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                <div>
                  <div className="font-bold text-sm">Contributor</div>
                  <div className="text-xs text-muted-foreground">Specific skill (Any time)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Use browser or OS screenshot tools to capture the diagram area above for presentations.</p>
      </div>
    </div>
  );
}
