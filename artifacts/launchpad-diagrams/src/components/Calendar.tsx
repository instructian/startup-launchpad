import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Lane = "students" | "program" | "events" | "challenges";
type Semester = "FY1" | "SY1" | "FY2" | "SY2";
type ViewMode = "gantt" | "cards" | "milestones" | "challenges";

interface TimelineBlock {
  lane: Lane;
  semester: Semester;
  weekStart: number;
  weekEnd: number;
  label: string;
  color: string;
}

interface Milestone {
  name: string;
  semester: Semester;
  week: string;
  format: string;
  judging: string;
  icon: string;
}

interface DesignChallenge {
  name: string;
  organizer: string;
  window: string;
  launchpadSemester: Semester[];
  alignment: string;
  howToUse: string;
  icon: string;
}

interface SemesterCard {
  id: Semester;
  label: string;
  theme: string;
  months: string;
  track: string;
  trackColor: string;
  activities: { week: string; title: string; type: "workshop" | "module" | "event" | "sprint" }[];
  deliverables: string[];
  challenges: string[];
  milestone: string;
}

// ── Colors ────────────────────────────────────────────────────────────────────

const LANE_COLORS: Record<Lane, string> = {
  students: "#2563EB",
  program: "#059669",
  events: "#D4882A",
  challenges: "#7C3AED",
};

const LANE_LABELS: Record<Lane, string> = {
  students: "Student Activity",
  program: "Program Operations",
  events: "Events & Milestones",
  challenges: "Design Challenges",
};

const SEM_LABELS: Record<Semester, string> = {
  FY1: "Fall Year 1",
  SY1: "Spring Year 1",
  FY2: "Fall Year 2",
  SY2: "Spring Year 2",
};

const SEM_MONTHS: Record<Semester, string> = {
  FY1: "Aug – Dec",
  SY1: "Jan – May",
  FY2: "Aug – Dec",
  SY2: "Jan – May",
};

// ── Data: Timeline Blocks ─────────────────────────────────────────────────────

const BLOCKS: TimelineBlock[] = [
  // Students lane
  { lane: "students", semester: "FY1", weekStart: 1, weekEnd: 4, label: "Recruitment & Onboarding", color: "#2563EB" },
  { lane: "students", semester: "FY1", weekStart: 2, weekEnd: 7, label: "Team Formation & Ideation", color: "#2563EB" },
  { lane: "students", semester: "FY1", weekStart: 5, weekEnd: 10, label: "Customer Discovery Sprints", color: "#1D4ED8" },
  { lane: "students", semester: "FY1", weekStart: 9, weekEnd: 11, label: "Ideathon Prep", color: "#1E40AF" },
  { lane: "students", semester: "SY1", weekStart: 1, weekEnd: 6, label: "Prototype & Experiment", color: "#2563EB" },
  { lane: "students", semester: "SY1", weekStart: 5, weekEnd: 10, label: "Validation Pitch Prep", color: "#1D4ED8" },
  { lane: "students", semester: "SY1", weekStart: 10, weekEnd: 14, label: "Innovation Festival Prep", color: "#1E40AF" },
  { lane: "students", semester: "FY2", weekStart: 1, weekEnd: 4, label: "Re-Entry & Accelerator Onboarding", color: "#2563EB" },
  { lane: "students", semester: "FY2", weekStart: 3, weekEnd: 9, label: "MVP Build Sprint", color: "#1D4ED8" },
  { lane: "students", semester: "FY2", weekStart: 8, weekEnd: 11, label: "Advanced Ideathon Prep", color: "#1E40AF" },
  { lane: "students", semester: "SY2", weekStart: 1, weekEnd: 7, label: "Go-to-Market & Traction", color: "#2563EB" },
  { lane: "students", semester: "SY2", weekStart: 6, weekEnd: 11, label: "Venture Pitch Prep", color: "#1D4ED8" },
  { lane: "students", semester: "SY2", weekStart: 11, weekEnd: 15, label: "Sunstone Application", color: "#1E40AF" },

  // Program ops lane
  { lane: "program", semester: "FY1", weekStart: 1, weekEnd: 2, label: "Launch & Setup", color: "#059669" },
  { lane: "program", semester: "FY1", weekStart: 1, weekEnd: 15, label: "Weekly Workshops", color: "#047857" },
  { lane: "program", semester: "FY1", weekStart: 2, weekEnd: 4, label: "Mentor Matching", color: "#065F46" },
  { lane: "program", semester: "SY1", weekStart: 1, weekEnd: 15, label: "Mentor Office Hours", color: "#059669" },
  { lane: "program", semester: "SY1", weekStart: 13, weekEnd: 15, label: "Year-End Retrospective", color: "#065F46" },
  { lane: "program", semester: "FY2", weekStart: 1, weekEnd: 3, label: "Cohort Refresh & New Intake", color: "#059669" },
  { lane: "program", semester: "FY2", weekStart: 1, weekEnd: 15, label: "Advanced Workshops", color: "#047857" },
  { lane: "program", semester: "SY2", weekStart: 1, weekEnd: 15, label: "Mentor Intensives & Pitch Coaching", color: "#059669" },
  { lane: "program", semester: "SY2", weekStart: 14, weekEnd: 15, label: "Annual Report", color: "#065F46" },

  // Events lane
  { lane: "events", semester: "FY1", weekStart: 10, weekEnd: 11, label: "Fall Ideathon Y1", color: "#D4882A" },
  { lane: "events", semester: "SY1", weekStart: 14, weekEnd: 15, label: "Spring Innovation Festival Y1", color: "#B45309" },
  { lane: "events", semester: "FY2", weekStart: 10, weekEnd: 11, label: "Fall Ideathon Y2", color: "#D4882A" },
  { lane: "events", semester: "SY2", weekStart: 14, weekEnd: 15, label: "Spring Innovation Festival Y2", color: "#B45309" },
  { lane: "events", semester: "SY2", weekStart: 15, weekEnd: 16, label: "Sunstone Competition", color: "#92400E" },

  // Challenges lane
  { lane: "challenges", semester: "FY1", weekStart: 1, weekEnd: 15, label: "NASA Space Apps (Oct)", color: "#7C3AED" },
  { lane: "challenges", semester: "FY1", weekStart: 8, weekEnd: 15, label: "Hult Prize (Nov–Jan)", color: "#6D28D9" },
  { lane: "challenges", semester: "SY1", weekStart: 1, weekEnd: 8, label: "Hult Prize Campus Round (Jan–Mar)", color: "#6D28D9" },
  { lane: "challenges", semester: "SY1", weekStart: 3, weekEnd: 12, label: "Stanford Longevity (Feb–Apr)", color: "#5B21B6" },
  { lane: "challenges", semester: "FY2", weekStart: 1, weekEnd: 15, label: "NASA Space Apps (Oct)", color: "#7C3AED" },
  { lane: "challenges", semester: "SY2", weekStart: 1, weekEnd: 10, label: "VentureWell E-Team (Jan–Mar)", color: "#4C1D95" },
];

// ── Data: Milestones ──────────────────────────────────────────────────────────

const MILESTONES: Milestone[] = [
  {
    name: "Fall Ideathon (Year 1)",
    semester: "FY1",
    week: "Week 10–11 of Fall",
    format: "90-second idea pitch to a 3-judge panel",
    judging: "Problem clarity, customer insight, team potential, feasibility signal",
    icon: "💡",
  },
  {
    name: "Spring Innovation Festival (Year 1)",
    semester: "SY1",
    week: "Week 14–15 of Spring",
    format: "3-minute validation pitch + 2-minute Q&A",
    judging: "Desirability, evidence quality, prototype progress, team execution",
    icon: "🌟",
  },
  {
    name: "Fall Ideathon (Year 2)",
    semester: "FY2",
    week: "Week 10–11 of Fall",
    format: "5-minute advanced pitch + 3-minute Q&A",
    judging: "Business model clarity, traction evidence, MVP quality, go-to-market logic",
    icon: "🚀",
  },
  {
    name: "Spring Innovation Festival (Year 2)",
    semester: "SY2",
    week: "Week 14–15 of Spring",
    format: "7–10 minute venture pitch + 5-minute Q&A",
    judging: "Desirability, feasibility, viability, traction, Sunstone readiness",
    icon: "🏆",
  },
  {
    name: "Sunstone Advanced Venture Competition",
    semester: "SY2",
    week: "End of Spring Year 2 (qualification from Innovation Festival)",
    format: "Full business plan + 10-minute investor pitch + deep Q&A",
    judging: "Market opportunity, team, business model, traction, financial logic, impact",
    icon: "💎",
  },
];

// ── Data: Design Challenges ───────────────────────────────────────────────────

const CHALLENGES: DesignChallenge[] = [
  {
    name: "Stanford Longevity Design Challenge",
    organizer: "Stanford Center on Longevity",
    window: "Submissions open February–April annually",
    launchpadSemester: ["SY1", "SY2"],
    alignment: "Spring Year 1 & 2 — teams with a health, aging, or wellbeing focus",
    howToUse: "Use as a portfolio milestone for teams addressing aging-related problems. Submit alongside Spring Innovation Festival prep. Provides external validation and judge exposure in a national context.",
    icon: "🧬",
  },
  {
    name: "NASA Space Apps Challenge",
    organizer: "NASA",
    window: "Annual hackathon — typically first weekend of October",
    launchpadSemester: ["FY1", "FY2"],
    alignment: "Fall Year 1 & 2 — any team; especially strong for science, data, and hardware teams",
    howToUse: "Participate as a team-building sprint in early fall. Excellent for cross-disciplinary collaboration, rapid prototyping practice, and NASA data exposure. Results feed directly into Ideathon pitch narrative.",
    icon: "🛸",
  },
  {
    name: "Hult Prize",
    organizer: "Hult Prize Foundation",
    window: "Campus rounds: November–January; Regional: February–March; Global: June",
    launchpadSemester: ["FY1", "SY1"],
    alignment: "Fall Year 1 through Spring Year 1 — teams with a social impact or sustainability focus",
    howToUse: "Submit to the campus round in November alongside Ideathon prep. Winning the campus round adds external credibility for Spring Innovation Festival. Regional and global rounds are stretch goals for advanced Year 2 teams.",
    icon: "🌍",
  },
  {
    name: "VentureWell E-Team Program",
    organizer: "VentureWell",
    window: "Stage 1 applications: rolling (January–March typical); Stage 2: by invitation",
    launchpadSemester: ["SY2"],
    alignment: "Spring Year 2 — technology-based ventures with clear societal benefit and prototype evidence",
    howToUse: "The highest-fit external program for Year 2 teams with a working prototype and user evidence. VentureWell Stage 1 grants ($5,000) can fund the final prototype sprint. Apply in January alongside Sunstone prep.",
    icon: "⚗️",
  },
];

// ── Data: Semester Cards ──────────────────────────────────────────────────────

const SEMESTER_CARDS: SemesterCard[] = [
  {
    id: "FY1",
    label: "Fall Year 1",
    theme: "Discover",
    months: "August – December",
    track: "Explorer Track",
    trackColor: "#2563EB",
    activities: [
      { week: "Wk 1–2", title: "Recruitment, orientation & program intro", type: "module" },
      { week: "Wk 2–3", title: "Team formation sessions & team marketplace", type: "sprint" },
      { week: "Wk 3", title: "Workshop: Design Thinking Fundamentals", type: "workshop" },
      { week: "Wk 4", title: "Workshop: Customer Interview Basics", type: "workshop" },
      { week: "Wk 4–5", title: "Mentor matching & first mentor meeting", type: "module" },
      { week: "Wk 5–6", title: "Problem brief submission (Launchpad tool)", type: "module" },
      { week: "Wk 5", title: "Workshop: How to Find Your Customer", type: "workshop" },
      { week: "Wk 5–9", title: "Customer discovery sprints (≥5 interviews/team)", type: "sprint" },
      { week: "Wk 7", title: "Workshop: Problem Framing & Ideation", type: "workshop" },
      { week: "Wk 8", title: "NASA Space Apps Challenge (October hackathon)", type: "event" },
      { week: "Wk 8", title: "Hult Prize — campus round opens (November)", type: "event" },
      { week: "Wk 9", title: "Workshop: Pitch Storytelling Basics", type: "workshop" },
      { week: "Wk 9–10", title: "Ideathon rehearsals & mentor feedback sessions", type: "sprint" },
      { week: "Wk 10–11", title: "⚡ FALL IDEATHON — 90-second idea pitch", type: "event" },
      { week: "Wk 12–15", title: "Post-Ideathon sprint planning & pivot decisions", type: "sprint" },
    ],
    deliverables: [
      "Problem brief (customer + problem + context)",
      "Team roster with role assignments",
      "Customer interview log (≥5 interviews)",
      "Hypothesis register (3+ assumptions documented)",
      "Ideathon pitch (90 seconds)",
    ],
    challenges: ["NASA Space Apps Challenge (Oct)", "Hult Prize campus round opens (Nov)"],
    milestone: "Fall Ideathon — Week 10–11",
  },
  {
    id: "SY1",
    label: "Spring Year 1",
    theme: "Validate",
    months: "January – May",
    track: "Explorer & Builder Track",
    trackColor: "#059669",
    activities: [
      { week: "Wk 1", title: "Hult Prize campus round (January deadline)", type: "event" },
      { week: "Wk 1–2", title: "Post-Ideathon pivot decisions & sprint reset", type: "sprint" },
      { week: "Wk 2", title: "Workshop: Prototype Design (Lo-Fi to Mid-Fi)", type: "workshop" },
      { week: "Wk 2–5", title: "Stanford Longevity Design Challenge window opens (Feb)", type: "event" },
      { week: "Wk 3", title: "Workshop: Business Model Canvas", type: "workshop" },
      { week: "Wk 3–7", title: "Prototype build + user testing sprints", type: "sprint" },
      { week: "Wk 5", title: "Workshop: Metrics, Evidence & Validation", type: "workshop" },
      { week: "Wk 6", title: "Microgrant applications open (qualifying teams)", type: "module" },
      { week: "Wk 7", title: "Workshop: Financial Logic Basics", type: "workshop" },
      { week: "Wk 7–10", title: "Stanford Longevity Design Challenge submissions (Apr)", type: "event" },
      { week: "Wk 8", title: "Workshop: Pitch Coaching — Validation Stage", type: "workshop" },
      { week: "Wk 8–13", title: "Validation pitch rehearsals & mentor critiques", type: "sprint" },
      { week: "Wk 14–15", title: "⚡ SPRING INNOVATION FESTIVAL Y1 — 3-min validation pitch", type: "event" },
      { week: "Wk 15", title: "Year-end retrospective + summer sprint planning", type: "module" },
    ],
    deliverables: [
      "Lo-fi prototype or pilot (minimum)",
      "Evidence log (user tests, feedback, data)",
      "Business model canvas (draft)",
      "Validation pitch (3 minutes + Q&A)",
      "Summer sprint plan (optional)",
    ],
    challenges: ["Hult Prize campus round (Jan)", "Stanford Longevity Design Challenge (Feb–Apr)"],
    milestone: "Spring Innovation Festival Y1 — Week 14–15",
  },
  {
    id: "FY2",
    label: "Fall Year 2",
    theme: "Build",
    months: "August – December (+ Optional Summer Sprint)",
    track: "Accelerator Track",
    trackColor: "#D4882A",
    activities: [
      { week: "Summer", title: "Optional summer sprint: mentor check-ins, microgrant planning, makerspace access", type: "sprint" },
      { week: "Wk 1–3", title: "Accelerator track onboarding & new-team intake", type: "module" },
      { week: "Wk 2", title: "Workshop: Advanced Business Modeling & Unit Economics", type: "workshop" },
      { week: "Wk 3", title: "Workshop: Legal Basics, IP, & Entity Formation", type: "workshop" },
      { week: "Wk 3–8", title: "MVP build sprint (working product / pilot deployment)", type: "sprint" },
      { week: "Wk 5", title: "Workshop: Pricing Strategy & Revenue Models", type: "workshop" },
      { week: "Wk 6", title: "Alumni Founder Panel: From Prototype to Product", type: "workshop" },
      { week: "Wk 6–9", title: "Sunstone orientation & eligibility check (Year 2 teams)", type: "module" },
      { week: "Wk 7", title: "Workshop: Go-to-Market Strategy", type: "workshop" },
      { week: "Wk 8", title: "NASA Space Apps Challenge (October hackathon)", type: "event" },
      { week: "Wk 9", title: "Workshop: Investor-Style Pitch Coaching", type: "workshop" },
      { week: "Wk 9–11", title: "Advanced Ideathon rehearsals + Sunstone mock pitches", type: "sprint" },
      { week: "Wk 10–11", title: "⚡ FALL IDEATHON Y2 — 5-min advanced pitch", type: "event" },
      { week: "Wk 12–15", title: "Post-Ideathon feedback integration & Q4 sprint", type: "sprint" },
    ],
    deliverables: [
      "MVP or working pilot with users",
      "Business model with revenue logic",
      "Traction evidence (users, revenue, LOIs, pilots)",
      "Investor-style pitch deck (Year 2)",
      "Sunstone eligibility assessment",
    ],
    challenges: ["NASA Space Apps Challenge (Oct)"],
    milestone: "Fall Ideathon Y2 — Week 10–11",
  },
  {
    id: "SY2",
    label: "Spring Year 2",
    theme: "Launch",
    months: "January – May",
    track: "Accelerator & Sunstone Track",
    trackColor: "#7C3AED",
    activities: [
      { week: "Wk 1–2", title: "VentureWell E-Team Stage 1 applications open (Jan)", type: "event" },
      { week: "Wk 1–3", title: "Go-to-market sprint: customer acquisition, partnerships, PR", type: "sprint" },
      { week: "Wk 2", title: "Workshop: Fundraising, Investors & Grant Landscape", type: "workshop" },
      { week: "Wk 3", title: "Workshop: Financial Projections & Cap Table Basics", type: "workshop" },
      { week: "Wk 3–6", title: "VentureWell E-Team applications close (Mar)", type: "event" },
      { week: "Wk 4", title: "Workshop: Storytelling for Investors & Stakeholders", type: "workshop" },
      { week: "Wk 4–9", title: "Sunstone prep: mock pitches, business plan review, mentor intensives", type: "sprint" },
      { week: "Wk 6", title: "Workshop: Go-to-Market Case Studies", type: "workshop" },
      { week: "Wk 7–10", title: "Traction sprint: user growth, revenue, or research milestones", type: "sprint" },
      { week: "Wk 9", title: "Workshop: Pitch Coaching — Sunstone Format", type: "workshop" },
      { week: "Wk 10–13", title: "Venture pitch rehearsals for Innovation Festival", type: "sprint" },
      { week: "Wk 14–15", title: "⚡ SPRING INNOVATION FESTIVAL Y2 — 7–10 min venture pitch", type: "event" },
      { week: "Wk 15+", title: "💎 SUNSTONE — qualification from Innovation Festival", type: "event" },
      { week: "Wk 15", title: "Program retrospective + Year 2 annual report", type: "module" },
    ],
    deliverables: [
      "Full venture pitch deck (10 slides)",
      "Financial model (3-year projection)",
      "Business plan or executive summary",
      "Traction evidence (users, revenue, LOIs, or impact data)",
      "Sunstone application (qualifying teams)",
    ],
    challenges: ["VentureWell E-Team (Jan–Mar)"],
    milestone: "Spring Innovation Festival Y2 — Week 14–15 → Sunstone",
  },
];

// ── Gantt View ────────────────────────────────────────────────────────────────

const WEEKS = 15;

function GanttRow({ lane, semBlocks }: { lane: Lane; semBlocks: TimelineBlock[] }) {
  const color = LANE_COLORS[lane];
  const sems: Semester[] = ["FY1", "SY1", "FY2", "SY2"];

  return (
    <div className="flex items-start gap-0 mb-1">
      <div className="w-28 flex-shrink-0 text-right pr-3 pt-1.5">
        <span className="text-[10px] font-display font-semibold uppercase tracking-wider" style={{ color }}>
          {LANE_LABELS[lane]}
        </span>
      </div>
      {sems.map((sem) => {
        const blocks = semBlocks.filter((b) => b.semester === sem);
        return (
          <div key={sem} className="flex-1 relative h-12 border-l border-[#0D2240]/10 px-0.5">
            {blocks.map((b, i) => {
              const left = ((b.weekStart - 1) / WEEKS) * 100;
              const width = ((b.weekEnd - b.weekStart + 1) / WEEKS) * 100;
              return (
                <div
                  key={i}
                  className="absolute top-1 h-4 rounded text-[8px] text-white font-display font-semibold px-1 flex items-center overflow-hidden"
                  style={{ left: `${left}%`, width: `${width}%`, background: b.color, top: `${(i % 3) * 14 + 4}px` }}
                  title={b.label}
                >
                  <span className="truncate">{b.label}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function GanttView() {
  const lanes: Lane[] = ["students", "program", "events", "challenges"];
  const sems: Semester[] = ["FY1", "SY1", "FY2", "SY2"];

  return (
    <div className="bg-white rounded-xl border border-[#0D2240]/10 overflow-x-auto p-6">
      {/* Header */}
      <div className="flex items-start gap-0 mb-4">
        <div className="w-28 flex-shrink-0" />
        {sems.map((sem) => (
          <div key={sem} className="flex-1 border-l border-[#0D2240]/10 pl-2">
            <div className="font-display font-bold text-[#0D2240] text-sm">{SEM_LABELS[sem]}</div>
            <div className="text-[10px] text-[#8A99AA]">{SEM_MONTHS[sem]}</div>
            <div className="flex mt-1.5 gap-px">
              {Array.from({ length: WEEKS }, (_, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center text-[7px] font-display font-bold ${
                    i + 1 === 10 || i + 1 === 11 ? "text-[#D4882A]" : "text-[#8A99AA]/60"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Rows */}
      {lanes.map((lane) => (
        <GanttRow key={lane} lane={lane} semBlocks={BLOCKS.filter((b) => b.lane === lane)} />
      ))}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4">
        {lanes.map((lane) => (
          <div key={lane} className="flex items-center gap-1.5 text-[11px] font-display text-[#0D2240]/70">
            <div className="w-4 h-2 rounded-sm" style={{ background: LANE_COLORS[lane] }} />
            {LANE_LABELS[lane]}
          </div>
        ))}
        <div className="flex items-center gap-1.5 text-[11px] font-display text-[#D4882A]">
          <span className="font-bold">Wk 10–11</span> = Ideathon windows
        </div>
      </div>
    </div>
  );
}

// ── Semester Cards View ───────────────────────────────────────────────────────

const ACTIVITY_COLORS = {
  workshop: { bg: "#2563EB15", text: "#1E40AF", label: "Workshop" },
  module: { bg: "#05966915", text: "#065F46", label: "Module" },
  event: { bg: "#D4882A15", text: "#92400E", label: "Event" },
  sprint: { bg: "#7C3AED15", text: "#4C1D95", label: "Sprint" },
};

function SemesterCardView() {
  const [active, setActive] = useState<Semester>("FY1");
  const card = SEMESTER_CARDS.find((c) => c.id === active)!;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex bg-white rounded-xl border border-[#0D2240]/10 overflow-hidden mb-6">
        {SEMESTER_CARDS.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`flex-1 py-3 px-2 text-center transition-colors ${
              active === c.id ? "bg-[#0D2240] text-white" : "text-[#0D2240]/60 hover:bg-[#0D2240]/5"
            }`}
          >
            <div className="font-display font-bold text-xs leading-tight">{c.label}</div>
            <div
              className={`font-display font-semibold text-[10px] mt-0.5 uppercase tracking-wider ${
                active === c.id ? "text-[#D4882A]" : ""
              }`}
              style={{ color: active === c.id ? "#D4882A" : c.trackColor }}
            >
              {c.theme}
            </div>
          </button>
        ))}
      </div>

      {/* Card detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity timeline */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#0D2240]/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-[#0D2240] text-lg">{card.label}</h3>
              <div className="text-xs text-[#8A99AA]">{card.months}</div>
            </div>
            <div
              className="px-3 py-1 rounded-full text-[11px] font-display font-bold uppercase tracking-wider text-white"
              style={{ background: card.trackColor }}
            >
              {card.track}
            </div>
          </div>

          <div className="space-y-1.5">
            {card.activities.map((act, i) => {
              const c = ACTIVITY_COLORS[act.type];
              return (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-14 flex-shrink-0 text-right">
                    <span className="text-[10px] font-display font-bold text-[#8A99AA]">{act.week}</span>
                  </div>
                  <div
                    className="flex-1 px-2.5 py-1.5 rounded text-[12px] font-display font-semibold leading-snug"
                    style={{ background: c.bg, color: c.text }}
                  >
                    {act.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Activity legend */}
          <div className="mt-4 flex flex-wrap gap-3">
            {(Object.entries(ACTIVITY_COLORS) as [keyof typeof ACTIVITY_COLORS, typeof ACTIVITY_COLORS[keyof typeof ACTIVITY_COLORS]][]).map(([key, val]) => (
              <div key={key} className="flex items-center gap-1 text-[10px] font-display font-semibold" style={{ color: val.text }}>
                <div className="w-3 h-3 rounded-sm" style={{ background: val.bg, border: `1px solid ${val.text}40` }} />
                {val.label}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: deliverables, challenges, milestone */}
        <div className="space-y-4">
          {/* Milestone */}
          <div className="bg-[#D4882A]/10 border border-[#D4882A]/30 rounded-xl p-4">
            <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#D4882A] mb-1.5">Semester Milestone</div>
            <div className="font-display font-bold text-[#0D2240] text-sm leading-snug">{card.milestone}</div>
          </div>

          {/* Deliverables */}
          <div className="bg-white rounded-xl border border-[#0D2240]/10 p-4">
            <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#8A99AA] mb-2">Team Deliverables</div>
            <ul className="space-y-1.5">
              {card.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-[#0D2240]/80 leading-snug">
                  <span className="text-[#D4882A] flex-shrink-0 mt-0.5">▸</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Design Challenges */}
          {card.challenges.length > 0 && (
            <div className="bg-[#7C3AED]/5 border border-[#7C3AED]/20 rounded-xl p-4">
              <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">Active Design Challenges</div>
              <ul className="space-y-1.5">
                {card.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-[#0D2240]/80 leading-snug">
                    <span className="text-[#7C3AED] flex-shrink-0 mt-0.5">◆</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Milestones View ───────────────────────────────────────────────────────────

const MILESTONE_SEM_COLORS: Record<Semester, string> = {
  FY1: "#2563EB",
  SY1: "#059669",
  FY2: "#D4882A",
  SY2: "#7C3AED",
};

function MilestonesView() {
  return (
    <div className="space-y-4">
      {MILESTONES.map((m, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-[#0D2240]/10 overflow-hidden"
        >
          <div className="flex items-stretch">
            <div
              className="w-1.5 flex-shrink-0"
              style={{ background: MILESTONE_SEM_COLORS[m.semester] }}
            />
            <div className="flex-1 p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-[#0D2240] text-base leading-tight">{m.name}</h3>
                    <div className="text-[11px] text-[#8A99AA] mt-0.5">{SEM_LABELS[m.semester]} · {m.week}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-[#F7F5F0] px-4 py-3">
                  <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#8A99AA] mb-1">Pitch Format</div>
                  <p className="text-[13px] text-[#0D2240]/80 leading-snug">{m.format}</p>
                </div>
                <div className="rounded-lg bg-[#0D2240]/[0.03] px-4 py-3">
                  <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#8A99AA] mb-1">Judging Focus</div>
                  <p className="text-[13px] text-[#0D2240]/80 leading-snug">{m.judging}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Design Challenges View ────────────────────────────────────────────────────

function ChallengesView() {
  return (
    <div className="space-y-5">
      <div className="bg-[#7C3AED]/5 border border-[#7C3AED]/20 rounded-xl p-5 text-[13px] text-[#0D2240]/75 leading-relaxed">
        The four design challenges below serve as external aspiration benchmarks and idea generators for Launchpad teams. Participation is optional but strongly encouraged — external competition experience strengthens pitches, builds resilience, and provides third-party validation beyond the program's own events.
      </div>
      {CHALLENGES.map((c, i) => (
        <div key={i} className="bg-white rounded-xl border border-[#0D2240]/10 overflow-hidden">
          <div className="px-6 py-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <h3 className="font-display font-bold text-[#0D2240] text-base">{c.name}</h3>
                <div className="text-[11px] text-[#8A99AA] font-display mt-0.5">{c.organizer}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="rounded-lg bg-[#F7F5F0] px-4 py-3">
                <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#8A99AA] mb-1">Submission Window</div>
                <p className="text-[13px] text-[#0D2240]/80 leading-snug">{c.window}</p>
              </div>
              <div className="rounded-lg bg-[#7C3AED]/5 border border-[#7C3AED]/15 px-4 py-3">
                <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#7C3AED] mb-1">Launchpad Alignment</div>
                <p className="text-[13px] text-[#0D2240]/80 leading-snug">{c.alignment}</p>
              </div>
              <div className="rounded-lg bg-[#D4882A]/5 border border-[#D4882A]/15 px-4 py-3">
                <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#D4882A] mb-1">Active Semesters</div>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {c.launchpadSemester.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-display font-bold px-2 py-0.5 rounded text-white"
                      style={{ background: MILESTONE_SEM_COLORS[s] }}
                    >
                      {SEM_LABELS[s]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-[#0D2240]/[0.03] border border-[#0D2240]/8 px-4 py-3">
              <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#8A99AA] mb-1">How Launchpad Teams Should Use It</div>
              <p className="text-[13px] text-[#0D2240]/75 leading-relaxed">{c.howToUse}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Calendar Component ───────────────────────────────────────────────────

const VIEW_TABS: { id: ViewMode; label: string; icon: string }[] = [
  { id: "gantt", label: "Timeline", icon: "📅" },
  { id: "cards", label: "Semester Cards", icon: "🗂" },
  { id: "milestones", label: "Event Milestones", icon: "🏆" },
  { id: "challenges", label: "Design Challenges", icon: "🌐" },
];

export function Calendar() {
  const [view, setView] = useState<ViewMode>("gantt");

  return (
    <div className="flex-1 flex flex-col bg-[#F7F5F0] min-h-0 overflow-y-auto">
      {/* Sub-nav */}
      <div className="bg-white border-b border-[#0D2240]/10 px-6 py-3 flex items-center gap-2 flex-wrap">
        {VIEW_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-display font-semibold transition-all ${
              view === tab.id
                ? "bg-[#0D2240] text-white"
                : "text-[#0D2240]/60 hover:text-[#0D2240] hover:bg-[#0D2240]/5"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
        <div className="ml-auto text-[11px] text-[#8A99AA] font-display">
          4 Semesters · 2 Academic Years · 4 Major Events
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {view === "gantt" && (
          <div>
            <div className="mb-5">
              <h2 className="font-display font-bold text-[#0D2240] text-xl mb-1">Two-Year Timeline</h2>
              <p className="text-sm text-[#8A99AA]">Swim-lane view of student activity, program operations, events, and external design challenges across all four semesters.</p>
            </div>
            <GanttView />
          </div>
        )}
        {view === "cards" && (
          <div>
            <div className="mb-5">
              <h2 className="font-display font-bold text-[#0D2240] text-xl mb-1">Semester-by-Semester Breakdown</h2>
              <p className="text-sm text-[#8A99AA]">Week-by-week activities, deliverables, design challenges, and milestones for each of the four semesters.</p>
            </div>
            <SemesterCardView />
          </div>
        )}
        {view === "milestones" && (
          <div>
            <div className="mb-5">
              <h2 className="font-display font-bold text-[#0D2240] text-xl mb-1">Event Milestones</h2>
              <p className="text-sm text-[#8A99AA]">All five major events in the Startup Launchpad pathway — pitch format, judging emphasis, and typical timing.</p>
            </div>
            <MilestonesView />
          </div>
        )}
        {view === "challenges" && (
          <div>
            <div className="mb-5">
              <h2 className="font-display font-bold text-[#0D2240] text-xl mb-1">External Design Challenges</h2>
              <p className="text-sm text-[#8A99AA]">Four external competitions that align with the Launchpad calendar — how to use each one and when to apply.</p>
            </div>
            <ChallengesView />
          </div>
        )}
      </div>
    </div>
  );
}
