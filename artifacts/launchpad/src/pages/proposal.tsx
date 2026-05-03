import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";

export default function ProposalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl print:p-0 print:m-0 print:max-w-full">
      <div className="mb-12 print:mb-6">
        <h1 className="text-4xl font-serif font-black text-slate-900 tracking-tight mb-2">Startup Launchpad</h1>
        <h2 className="text-2xl font-serif text-slate-600 mb-6">A Four-Semester Innovation Mindset Program</h2>
        <div className="flex gap-4 text-sm font-medium text-slate-500 uppercase tracking-wider">
          <span>Smith Center</span>
          <span>&bull;</span>
          <span>Version 0.1</span>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12 print:mb-8 print:border-gray-300">
        <h3 className="font-bold text-primary uppercase tracking-wider text-sm mb-3">Executive Summary</h3>
        <p className="text-slate-800 leading-relaxed">
          Startup Launchpad is a four-semester extracurricular program that helps students build a startup and innovation mindset through repeated cycles of discovery, validation, building, pitching, feedback, and iteration. Students work in small cross-functional teams toward a venture, product, service, creative platform, research commercialization path, or community innovation project.
        </p>
      </div>

      <section className="mb-12 print:mb-8">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6">1. Problem and Opportunity</h3>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Many students are interested in innovation but do not know how to move from curiosity to a credible venture. They may lack a team, customer validation skills, technical capability, design support, storytelling practice, or confidence navigating entrepreneurship resources. Existing events can create excitement, but without a structured pathway students often lose momentum after a pitch night.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Startup Launchpad solves this by turning disconnected events into a progressive two-year experience with multiple entry points, visible milestones, team formation, skill-building, mentor feedback, and increasing standards of evidence.
        </p>
      </section>

      <section className="mb-12 print:mb-8">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6">2. Program Model & Entry Tracks</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">Explorer Track</h4>
              <p className="text-sm text-slate-600">For students with no idea yet, typically entering in Fall Year 1. Focuses on problem discovery and team formation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">Joiner Track</h4>
              <p className="text-sm text-slate-600">For students who want to join a team and contribute a skill, typically Spring Year 1 or any rolling entry point.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">Accelerator Track</h4>
              <p className="text-sm text-slate-600">For students with an idea, prototype, research project, capstone, or creative product, typically Fall Year 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2">Contributor Track</h4>
              <p className="text-sm text-slate-600">For students with useful capabilities in design, engineering, business, storytelling, content, or research.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12 print:mb-8">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6">3. Four-Semester Roadmap</h3>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[120px]">Level</TableHead>
                <TableHead>Mission</TableHead>
                <TableHead>Deliverables</TableHead>
                <TableHead>Event Pitch</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium"><span className="block font-bold">Fall Y1</span><span className="text-muted-foreground text-sm">Discover</span></TableCell>
                <TableCell>Find a meaningful problem and form a team</TableCell>
                <TableCell>Problem brief, user segment, rough solution thesis</TableCell>
                <TableCell>Ideathon: 90-second pitch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"><span className="block font-bold">Spring Y1</span><span className="text-muted-foreground text-sm">Validate</span></TableCell>
                <TableCell>Prove someone has the problem</TableCell>
                <TableCell>Customer interviews, early prototype, evidence record</TableCell>
                <TableCell>Innovation Festival: 3-minute validation pitch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"><span className="block font-bold">Fall Y2</span><span className="text-muted-foreground text-sm">Build</span></TableCell>
                <TableCell>Turn validation into MVP or pilot</TableCell>
                <TableCell>MVP/pilot, team roles, business model, traction target</TableCell>
                <TableCell>Advanced Ideathon: 5-minute progress pitch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"><span className="block font-bold">Spring Y2</span><span className="text-muted-foreground text-sm">Launch</span></TableCell>
                <TableCell>Demonstrate Sunstone readiness</TableCell>
                <TableCell>Traction, business plan, go-to-market plan, financial logic</TableCell>
                <TableCell>Innovation Festival: 7-10 minute Sunstone qualifier</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mb-12 print:mb-8">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6">4. Event Ladder</h3>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Pitch Standard</TableHead>
                <TableHead>Judging Emphasis</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Fall Ideathon Y1</TableCell>
                <TableCell>90-second pitch</TableCell>
                <TableCell>Problem clarity, urgency, originality, team potential</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Spring Innovation Festival Y1</TableCell>
                <TableCell>3-minute validation pitch</TableCell>
                <TableCell>Customer evidence, prototype learning</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Fall Ideathon Y2</TableCell>
                <TableCell>5-minute progress pitch</TableCell>
                <TableCell>MVP progress, traction, feasibility</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Spring Innovation Festival Y2</TableCell>
                <TableCell>7-10 minute venture pitch + Q&A</TableCell>
                <TableCell>Desirability, feasibility, viability, traction, readiness</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-primary">Sunstone (Finale)</TableCell>
                <TableCell>Business plan + investor-style pitch</TableCell>
                <TableCell>Launch readiness, evidence, market, execution, impact</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mb-12 print:mb-8">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6">5. Resource Map</h3>
        <p className="mb-4 text-slate-600 text-sm">Summary of essential operational requirements by category. See the Resources Manifest for the full inventory including Recommended and Stretch items.</p>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[140px]">Category</TableHead>
                <TableHead>Essential Requirement</TableHead>
                <TableHead className="w-[160px]">Owner</TableHead>
                <TableHead className="w-[140px]">Timing</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Staffing</TableCell>
                <TableCell>Program Director / Lead</TableCell>
                <TableCell>Smith Center</TableCell>
                <TableCell>Year-round</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Budget</TableCell>
                <TableCell>Pilot-year event operating budget</TableCell>
                <TableCell>Advancement / Center</TableCell>
                <TableCell>Before Fall Y1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Spaces</TableCell>
                <TableCell>Makerspace / Design Lab access</TableCell>
                <TableCell>Engineering / Art</TableCell>
                <TableCell>Spring Y1 onwards</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Technology</TableCell>
                <TableCell>Launchpad tool license and admin</TableCell>
                <TableCell>Program Director</TableCell>
                <TableCell>Year-round</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mentors</TableCell>
                <TableCell>Mentor pool — business, tech, design</TableCell>
                <TableCell>Alumni Affairs</TableCell>
                <TableCell>Year 2 primarily</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Judges</TableCell>
                <TableCell>Judge pool for all event tiers</TableCell>
                <TableCell>Program Director</TableCell>
                <TableCell>Event weeks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Events</TableCell>
                <TableCell>Ideathon, Innovation Festival, Sunstone production</TableCell>
                <TableCell>Smith Center</TableCell>
                <TableCell>Nov &amp; Apr each year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marketing</TableCell>
                <TableCell>Communications channels for student recruitment</TableCell>
                <TableCell>University Comms</TableCell>
                <TableCell>Year-round</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Workshops</TableCell>
                <TableCell>Workshop facilitators (faculty partners)</TableCell>
                <TableCell>Faculty Partners</TableCell>
                <TableCell>Monthly</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mb-12 print:mb-8">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6">6. Risks and Mitigations</h3>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-1/3">Identified Risk</TableHead>
                <TableHead>Mitigation Strategy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Students drop after one event</TableCell>
                <TableCell>Recurring sprints, mentor follow-ups</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Teams lack key skills</TableCell>
                <TableCell>Contributor track, team marketplace</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pitch polish outruns evidence</TableCell>
                <TableCell>Weight rubrics toward validation and evidence</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Late joiners feel behind</TableCell>
                <TableCell>Onboarding modules, placement tracks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Too many weak ideas advance</TableCell>
                <TableCell>Stage gates based on evidence</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Faculty/staff capacity too thin</TableCell>
                <TableCell>Mentor pods, student ambassadors, reusable templates</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mb-12 print:mb-8 print:break-inside-avoid">
        <h3 className="text-2xl font-serif font-bold border-b pb-2 mb-6 text-primary">7. University Approval Asks</h3>
        <div className="bg-slate-50 border rounded-xl p-6">
          <p className="mb-4 font-medium text-slate-700">To proceed with pilot year implementation, we request approval on the following items:</p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <strong className="block text-slate-900">Program Director Hire/Assignment</strong>
                <span className="text-sm text-slate-600">Dedicate faculty/staff lead capacity for program execution.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <strong className="block text-slate-900">Pilot-Year Event Budget Approval</strong>
                <span className="text-sm text-slate-600">Secure funding for Ideathons, Innovation Festivals, and operating materials.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <strong className="block text-slate-900">Makerspace/Design Lab Access Agreement</strong>
                <span className="text-sm text-slate-600">Establish pathways for student teams to build prototypes safely.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <strong className="block text-slate-900">Launchpad Tool Procurement</strong>
                <span className="text-sm text-slate-600">Approve budget for software platforms used to track evidence and train students.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <strong className="block text-slate-900">Mentor Pool Outreach Authorization</strong>
                <span className="text-sm text-slate-600">Coordinate with Advancement for alumni engagement as judges and mentors.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <div>
                <strong className="block text-slate-900">Communications Channel Access</strong>
                <span className="text-sm text-slate-600">Ability to message student populations regarding recruitment and events.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
