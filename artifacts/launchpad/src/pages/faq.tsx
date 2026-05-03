import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Program FAQ</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Common questions about Startup Launchpad structured by audience. 
          Use these answers for recruitment materials, mentor guides, and administrative briefs.
        </p>
      </div>

      <Tabs defaultValue="students" className="w-full">
        <div className="overflow-x-auto pb-2 mb-6">
          <TabsList className="inline-flex min-w-max w-full sm:w-auto h-auto p-1 bg-slate-100 rounded-xl justify-start">
            <TabsTrigger value="students" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">Students</TabsTrigger>
            <TabsTrigger value="teams" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">Teams</TabsTrigger>
            <TabsTrigger value="faculty" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">Faculty</TabsTrigger>
            <TabsTrigger value="mentors" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">Mentors</TabsTrigger>
            <TabsTrigger value="judges" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">Judges</TabsTrigger>
            <TabsTrigger value="sponsors" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">Sponsors</TabsTrigger>
            <TabsTrigger value="admin" className="rounded-lg py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">University Administrators</TabsTrigger>
          </TabsList>
        </div>

        {/* Students Tab */}
        <TabsContent value="students" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Student Information</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">Do I need an idea to join the program?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                No. The Explorer Track (starting Fall Y1) is designed specifically for students who want to learn the innovation mindset but do not yet have a startup idea. We provide problem prompts, market research opportunities, and team-matching events to help you discover a meaningful problem to solve.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium text-lg">When can I enter the program?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                There are multiple entry points. The main intake for the full four-semester experience is Fall Y1 (Explorer Track). If you already have a prototype or capstone project, you can enter in Fall Y2 (Accelerator Track). You can also join at any time on a rolling basis if you want to contribute a specific skill to an existing team (Joiner/Contributor Track).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium text-lg">What is the Launchpad tool and do I have to use it?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                The Launchpad tool is the required digital backbone of the program. It is where you record customer interviews, document evidence, track hypotheses, and build your pitch materials. Teams must maintain their Launchpad evidence records to qualify for advancement in the Spring Innovation Festivals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium text-lg">What are the expected outcomes for me?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                By the end of the program, you will have practical experience in customer discovery, prototyping, cross-functional teamwork, and pitching. Even if your venture doesn't launch as a legal company, you will have built a portfolio piece that demonstrates real-world problem-solving skills highly valued by employers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* Teams Tab */}
        <TabsContent value="teams" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Team Formation & Logistics</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">How do teams form?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Teams form primarily through the Fall Ideathon mixer events. Students pitch raw ideas, and others join based on interest and complementary skills. We also operate a "team marketplace" in the Launchpad tool where existing teams can post roles they need filled (e.g., "Need a UX designer" or "Need financial modeling help").
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium text-lg">Do we have to incorporate a company?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                No. Incorporation is an optional milestone, usually reserved for teams reaching the Spring Y2 Launch phase that are ready to accept external funding or sign commercial contracts. For the majority of the program, you operate as a student project team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium text-lg">What resources are available to our team?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Teams in good standing get access to the mentor pool, workshop facilitators, design labs and makerspaces, software credits, and the ability to apply for microgrants from the program fund for prototyping expenses and customer discovery travel.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* Other tabs with brief placeholders for completeness */}
        <TabsContent value="faculty" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Faculty Information</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">Can I integrate this with my capstone course?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Yes. Capstone teams are encouraged to enter via the Accelerator Track (Fall Y2) to get commercialization and validation support for projects they are building for academic credit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium text-lg">What is the time commitment if I advise a team?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Faculty advisors typically meet with teams for 1-2 hours per month. The heavy lifting of venture training is handled by the program structure and the Launchpad tool.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="mentors" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Mentor Guide</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">How are mentors matched with teams?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Matches happen primarily after the Spring Y1 Innovation Festival, once teams have validated a problem. Mentors are matched based on domain expertise (e.g., healthcare, B2B SaaS) or functional skill (e.g., engineering, legal, marketing).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="judges" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Judge Expectations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">How do judging criteria change over the four semesters?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Fall Y1 judges on problem clarity. Spring Y1 judges on customer evidence. Fall Y2 judges on MVP traction. Spring Y2 (Sunstone qualifier) judges on full launch readiness, execution, and viability. We deliberately penalize slick pitches that lack underlying evidence.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="sponsors" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Sponsor Information</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">What does sponsorship fund?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Sponsorships fund student microgrants, prototype materials, event production for the Ideathon and Innovation Festival, and programmatic prizes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="admin" className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">University Administrators</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium text-lg">How does this program demonstrate university value?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                Startup Launchpad provides a visible, measurable innovation pipeline. Success metrics include cross-disciplinary collaboration, alumni/mentor engagement, external competition placements, and ultimately, student ventures launched that reflect the university's academic strengths.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
