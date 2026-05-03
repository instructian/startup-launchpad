import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Dimension = {
  name: string;
  description: string;
  maxPoints: number;
  anchors: { score: number; label: string; description: string }[];
};

type Rubric = {
  event: string;
  pitchFormat: string;
  totalPoints: number;
  judgeGuidance: string;
  dimensions: Dimension[];
};

const rubrics: Rubric[] = [
  {
    event: "Ideathon — Year 1",
    pitchFormat: "90-second idea pitch",
    totalPoints: 25,
    judgeGuidance: "Focus on raw potential. Students are early-stage — reward clarity of thinking, urgency of the problem, and team energy over polish or completeness.",
    dimensions: [
      {
        name: "Problem Clarity",
        description: "Is the problem real, specific, and clearly articulated?",
        maxPoints: 8,
        anchors: [
          { score: 7, label: "Excellent", description: "Problem is vivid, specific, and feels urgent. Audience immediately understands who has the problem and why it matters." },
          { score: 5, label: "Good", description: "Problem is clear and relatable, but could be sharper or more specific." },
          { score: 3, label: "Developing", description: "Problem is stated but vague or too broad. Urgency is implied but not demonstrated." },
          { score: 1, label: "Beginning", description: "Problem is unclear, generic, or missing entirely." },
        ],
      },
      {
        name: "Idea Originality",
        description: "Does the solution show creative or novel thinking?",
        maxPoints: 7,
        anchors: [
          { score: 6, label: "Excellent", description: "Idea is unexpected or approaches the problem from a fresh angle. Shows independent thinking." },
          { score: 4, label: "Good", description: "Idea is reasonable and workable, shows some originality." },
          { score: 2, label: "Developing", description: "Idea is derivative or generic. Could apply to almost any problem." },
          { score: 1, label: "Beginning", description: "No discernible idea or idea is recycled without adaptation." },
        ],
      },
      {
        name: "Team Potential",
        description: "Does the team seem capable and motivated to pursue this?",
        maxPoints: 5,
        anchors: [
          { score: 5, label: "Excellent", description: "Team members communicate complementary roles or perspectives. Enthusiasm is genuine." },
          { score: 3, label: "Good", description: "Team seems engaged, but roles or motivations are unclear." },
          { score: 1, label: "Developing", description: "Presentation feels disconnected; unclear why this team chose this problem." },
        ],
      },
      {
        name: "Communication",
        description: "Was the pitch clear, concise, and within the time format?",
        maxPoints: 5,
        anchors: [
          { score: 5, label: "Excellent", description: "Well-paced, easy to follow, fits the time format. No key detail is wasted." },
          { score: 3, label: "Good", description: "Mostly clear with a few awkward moments or minor pacing issues." },
          { score: 1, label: "Beginning", description: "Difficult to follow, rushed, or significantly over/under time." },
        ],
      },
    ],
  },
  {
    event: "Innovation Festival — Year 1",
    pitchFormat: "3-minute validation pitch",
    totalPoints: 40,
    judgeGuidance: "Teams should have done real customer discovery. Weight evidence of testing over polish. A rough prototype with real user feedback is more valuable than a beautiful slide deck with no evidence.",
    dimensions: [
      {
        name: "Customer Evidence",
        description: "Has the team talked to real users or potential customers? What did they learn?",
        maxPoints: 12,
        anchors: [
          { score: 11, label: "Excellent", description: "Team conducted 5+ interviews or equivalent tests. Specific quotes, behaviors, or data points cited. Clear pivot or insight from evidence." },
          { score: 8, label: "Good", description: "Some interviews conducted. General findings mentioned, but not specific." },
          { score: 4, label: "Developing", description: "Limited user contact. Evidence is anecdotal or relies on surveys/secondary data only." },
          { score: 1, label: "Beginning", description: "No customer research evident. Team is still assuming." },
        ],
      },
      {
        name: "Prototype / Learning Artifact",
        description: "Did the team build and test something?",
        maxPoints: 10,
        anchors: [
          { score: 9, label: "Excellent", description: "Working prototype, landing page, mockup, or service pilot tested with real users. Learning from testing is specific." },
          { score: 6, label: "Good", description: "Prototype or mockup exists. Some user feedback gathered but not rigorous." },
          { score: 3, label: "Developing", description: "Prototype described but not demonstrated. No clear user feedback." },
          { score: 1, label: "Beginning", description: "No prototype or test artifact. Idea only." },
        ],
      },
      {
        name: "Assumption Identification",
        description: "Can the team name what they still need to prove?",
        maxPoints: 8,
        anchors: [
          { score: 7, label: "Excellent", description: "Team clearly names 2+ open assumptions and has a plan to test them next." },
          { score: 5, label: "Good", description: "Team acknowledges uncertainty but assumptions are vague." },
          { score: 2, label: "Developing", description: "Team presents idea as fact. No acknowledgment of risk or unknowns." },
        ],
      },
      {
        name: "Problem–Solution Fit",
        description: "Is there a coherent connection between the problem identified and the solution proposed?",
        maxPoints: 6,
        anchors: [
          { score: 6, label: "Excellent", description: "Solution clearly addresses the root cause of the problem. Logic is tight." },
          { score: 4, label: "Good", description: "Connection is clear but some gaps exist." },
          { score: 2, label: "Developing", description: "Solution feels disconnected from problem, or problem is poorly defined." },
        ],
      },
      {
        name: "Communication",
        description: "Was the pitch clear, structured, and within the time format?",
        maxPoints: 4,
        anchors: [
          { score: 4, label: "Excellent", description: "Well-organized, confident delivery. Fits 3-minute format." },
          { score: 2, label: "Good", description: "Mostly clear with some structural issues or time overruns." },
          { score: 1, label: "Beginning", description: "Difficult to follow or significantly off-time." },
        ],
      },
    ],
  },
  {
    event: "Ideathon — Year 2",
    pitchFormat: "5-minute progress pitch",
    totalPoints: 50,
    judgeGuidance: "Teams entering Year 2 should have working MVPs or pilots. Hold them to a higher evidence standard. Ask about traction, team capacity, and next milestones. Reward honesty about failures alongside progress.",
    dimensions: [
      {
        name: "MVP / Pilot Progress",
        description: "Has the team built and shipped something real?",
        maxPoints: 14,
        anchors: [
          { score: 13, label: "Excellent", description: "Working MVP or service pilot deployed. Has real users, transactions, or feedback cycles." },
          { score: 9, label: "Good", description: "MVP in progress with some early use or beta testing." },
          { score: 5, label: "Developing", description: "MVP described but not deployed. No user testing at MVP stage." },
          { score: 1, label: "Beginning", description: "Still at prototype stage. No MVP progress evident." },
        ],
      },
      {
        name: "Traction Target",
        description: "Does the team have a clear definition of success for Year 2?",
        maxPoints: 10,
        anchors: [
          { score: 9, label: "Excellent", description: "Specific traction target defined (users, revenue, pilots, LOIs, etc.) with timeline and current status." },
          { score: 6, label: "Good", description: "Goals are mentioned but not specific or measurable." },
          { score: 3, label: "Developing", description: "No clear traction goal. Team is building without a target." },
        ],
      },
      {
        name: "Business Model",
        description: "Is there a credible theory of how this creates and captures value?",
        maxPoints: 10,
        anchors: [
          { score: 9, label: "Excellent", description: "Business model is clear. Revenue mechanism, pricing logic, and customer segment are named. Assumptions are acknowledged." },
          { score: 6, label: "Good", description: "Business model is partially defined. Revenue logic exists but isn't fully tested." },
          { score: 3, label: "Developing", description: "Business model is vague. Team hasn't grappled with how they make money or sustain the venture." },
          { score: 1, label: "Beginning", description: "No business model discussion." },
        ],
      },
      {
        name: "Team Capability",
        description: "Does the team have the skills and roles needed to execute?",
        maxPoints: 8,
        anchors: [
          { score: 7, label: "Excellent", description: "Team has clear functional coverage (technical, business, design/storytelling). Gaps are named with a plan." },
          { score: 4, label: "Good", description: "Core team is in place but some skill gaps are unaddressed." },
          { score: 2, label: "Developing", description: "Team is incomplete or imbalanced. No plan to address gaps." },
        ],
      },
      {
        name: "Feasibility",
        description: "Is there a realistic path from current state to launch?",
        maxPoints: 4,
        anchors: [
          { score: 4, label: "Excellent", description: "Timeline and resources are grounded. Next steps are clear and realistic." },
          { score: 2, label: "Good", description: "Path is plausible but some assumptions are unrealistic." },
          { score: 1, label: "Developing", description: "Path to launch is unclear or overly optimistic." },
        ],
      },
      {
        name: "Communication",
        description: "Was the pitch clear, structured, and within the 5-minute format?",
        maxPoints: 4,
        anchors: [
          { score: 4, label: "Excellent", description: "Confident, well-organized, and within time." },
          { score: 2, label: "Good", description: "Generally clear with some pacing or structural issues." },
          { score: 1, label: "Beginning", description: "Difficult to follow or significantly off-time." },
        ],
      },
    ],
  },
  {
    event: "Innovation Festival — Year 2 (Sunstone Qualifier)",
    pitchFormat: "7–10 minute venture pitch with Q&A",
    totalPoints: 70,
    judgeGuidance: "This is the qualifying event for Sunstone. Evaluate teams as if they were applying to an early-stage accelerator. Hold evidence to a high standard. Reward desirability, feasibility, viability, and traction equally. Penalize pitch polish that substitutes for evidence.",
    dimensions: [
      {
        name: "Desirability",
        description: "Is there strong evidence that customers want this?",
        maxPoints: 18,
        anchors: [
          { score: 16, label: "Excellent", description: "Compelling customer evidence: interviews, usage data, revenue, waitlist, LOIs, or active users. Customer segment is well-defined." },
          { score: 12, label: "Good", description: "Clear evidence of interest. Some gaps in customer definition or evidence depth." },
          { score: 7, label: "Developing", description: "Limited evidence. Mostly qualitative and anecdotal." },
          { score: 2, label: "Beginning", description: "No meaningful customer evidence. Assumed demand." },
        ],
      },
      {
        name: "Feasibility",
        description: "Can the team actually build and deliver this?",
        maxPoints: 14,
        anchors: [
          { score: 13, label: "Excellent", description: "MVP or pilot is live. Technical, operational, or creative constraints are understood and addressed. Team has the skills or has identified resources." },
          { score: 9, label: "Good", description: "Build path is credible but some technical or operational risks remain unaddressed." },
          { score: 5, label: "Developing", description: "Build path is unclear or depends on unvalidated assumptions." },
          { score: 1, label: "Beginning", description: "No clear feasibility evidence." },
        ],
      },
      {
        name: "Viability",
        description: "Is there a sustainable business model?",
        maxPoints: 14,
        anchors: [
          { score: 13, label: "Excellent", description: "Revenue mechanism is tested or has early validation. Unit economics logic is present. Market sizing is grounded." },
          { score: 9, label: "Good", description: "Business model is clear but not tested. Financial logic exists." },
          { score: 5, label: "Developing", description: "Revenue plan is vague. Market sizing is hand-wavy." },
          { score: 1, label: "Beginning", description: "No business model or revenue logic." },
        ],
      },
      {
        name: "Traction",
        description: "What proof exists that the venture is moving?",
        maxPoints: 12,
        anchors: [
          { score: 11, label: "Excellent", description: "Revenue, active users, signed pilots, LOIs, or partnerships. Clear trajectory." },
          { score: 8, label: "Good", description: "Some traction signals: waitlist, user tests, beta installs, or early revenue." },
          { score: 4, label: "Developing", description: "Minimal traction. Team is at pre-traction stage." },
          { score: 1, label: "Beginning", description: "No traction evidence." },
        ],
      },
      {
        name: "Sunstone Readiness",
        description: "Is the team ready for an advanced competition or accelerator?",
        maxPoints: 8,
        anchors: [
          { score: 7, label: "Excellent", description: "Team is clearly ready: they have a business plan, financial model, and can handle rigorous Q&A. They know their risks." },
          { score: 5, label: "Good", description: "Team is mostly ready but has notable gaps in materials or self-awareness." },
          { score: 2, label: "Developing", description: "Team is not yet ready for Sunstone. Significant gaps remain." },
        ],
      },
      {
        name: "Communication & Storytelling",
        description: "Was the pitch compelling, clear, and professional?",
        maxPoints: 4,
        anchors: [
          { score: 4, label: "Excellent", description: "Polished, confident, and emotionally compelling. Q&A handled with grace and precision." },
          { score: 2, label: "Good", description: "Mostly professional with minor gaps in delivery or Q&A." },
          { score: 1, label: "Beginning", description: "Delivery needs significant improvement." },
        ],
      },
    ],
  },
];

const BADGE_COLORS: Record<string, string> = {
  "Ideathon — Year 1": "bg-sky-100 text-sky-800 border border-sky-200",
  "Innovation Festival — Year 1": "bg-emerald-100 text-emerald-800 border border-emerald-200",
  "Ideathon — Year 2": "bg-violet-100 text-violet-800 border border-violet-200",
  "Innovation Festival — Year 2 (Sunstone Qualifier)": "bg-amber-100 text-amber-800 border border-amber-200",
};

const SCORE_COLORS: Record<string, string> = {
  "Excellent": "bg-emerald-50 border-emerald-200",
  "Good": "bg-sky-50 border-sky-200",
  "Developing": "bg-amber-50 border-amber-200",
  "Beginning": "bg-rose-50 border-rose-200",
};

const SCORE_BADGE: Record<string, string> = {
  "Excellent": "bg-emerald-100 text-emerald-800",
  "Good": "bg-sky-100 text-sky-800",
  "Developing": "bg-amber-100 text-amber-800",
  "Beginning": "bg-rose-100 text-rose-800",
};

export default function RubricPage() {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Judge Scoring Rubric</h1>
        <p className="text-lg text-slate-600">
          Scoring dimensions, point weights, and anchor descriptions for each Startup Launchpad event tier.
          Judges use these rubrics to provide consistent, evidence-weighted evaluations.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-sm text-amber-900">
        <strong>Judging Philosophy:</strong> Reward evidence, learning, and honesty over polish. A team that conducted 10 customer interviews and pivoted is more valuable than a team with a beautiful slide deck and no user contact.
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap h-auto gap-1 mb-6 bg-slate-100 p-1 rounded-lg">
          {rubrics.map((r, i) => (
            <TabsTrigger
              key={i}
              value={String(i)}
              className="text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-3 py-2"
              data-testid={`tab-rubric-${i}`}
            >
              {r.event}
            </TabsTrigger>
          ))}
        </TabsList>

        {rubrics.map((rubric, i) => (
          <TabsContent key={i} value={String(i)}>
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${BADGE_COLORS[rubric.event]}`}>
                    {rubric.event}
                  </span>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-medium">
                    {rubric.pitchFormat}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full">
                    Total: {rubric.totalPoints} pts
                  </span>
                </div>
                <CardDescription className="text-slate-600 italic mt-2 text-sm leading-relaxed">
                  <span className="font-semibold not-italic text-slate-700">Judge Guidance: </span>
                  {rubric.judgeGuidance}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {rubric.dimensions.map((dim, di) => (
                  <div key={di} className="border rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-5 py-3 border-b flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-slate-900 text-base">{dim.name}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{dim.description}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-lg font-bold text-slate-900">{dim.maxPoints}</span>
                        <span className="text-xs text-slate-500 ml-1">pts</span>
                      </div>
                    </div>

                    <div className="divide-y">
                      {dim.anchors.map((anchor, ai) => (
                        <div key={ai} className={`px-5 py-3 flex items-start gap-4 ${SCORE_COLORS[anchor.label] || ""}`}>
                          <div className="shrink-0 w-28 flex flex-col items-center gap-1 pt-0.5">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${SCORE_BADGE[anchor.label] || "bg-slate-100 text-slate-700"}`}>
                              {anchor.label}
                            </span>
                            <span className="text-xs text-slate-600 font-medium">{anchor.score} pts</span>
                          </div>
                          <p className="text-sm text-slate-700 leading-relaxed">{anchor.description}</p>
                          <div className="shrink-0 ml-auto hidden sm:flex flex-col items-end gap-1">
                            <span className="text-xs text-slate-400">Score</span>
                            <div className="w-12 h-6 border-2 border-slate-300 rounded bg-white" aria-label={`Score field for ${dim.name} ${anchor.label}`} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white px-5 py-3 border-t flex items-center justify-between">
                      <span className="text-sm text-slate-500">Score for <span className="font-medium text-slate-700">{dim.name}</span></span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-8 border-2 border-slate-400 rounded bg-white" aria-label={`Final score for ${dim.name}`} />
                        <span className="text-xs text-slate-400">/ {dim.maxPoints}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-2 border-slate-300 rounded-xl bg-slate-50 px-5 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-base">Total Score</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-9 border-2 border-slate-500 rounded-lg bg-white" aria-label="Total score field" />
                      <span className="text-base font-bold text-slate-500">/ {rubric.totalPoints}</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-slate-600 mb-1.5">Overall Comments / Key Feedback for Team:</p>
                    <div className="w-full h-20 border-2 border-slate-300 rounded-lg bg-white" aria-label="Comments field" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 mb-1">Recommend for Advancement?</p>
                      <div className="flex items-center gap-4 text-sm text-slate-700">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <div className="w-4 h-4 border-2 border-slate-400 rounded bg-white" />
                          Yes
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <div className="w-4 h-4 border-2 border-slate-400 rounded bg-white" />
                          No
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <div className="w-4 h-4 border-2 border-slate-400 rounded bg-white" />
                          Borderline
                        </label>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-slate-600 mb-1">Judge Name</p>
                      <div className="w-36 h-7 border-2 border-slate-300 rounded bg-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
