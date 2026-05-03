import { useState, useMemo, useCallback } from "react";
import { Printer, ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

type Classification = "Essential" | "Recommended" | "Stretch";
type Category =
  | "Staffing & People"
  | "Space & Facilities"
  | "Budget & Funding"
  | "Mentor & Expert Network"
  | "Technology & Tools"
  | "Events & Production"
  | "Marketing & Communications"
  | "Assessment & Reporting";

interface Resource {
  name: string;
  description: string;
  classification: Classification;
  owner: string;
  timing: string;
  riskIfMissing: string;
  pilotNote: string;
  category: Category;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const RESOURCES: Resource[] = [
  // Staffing & People
  {
    category: "Staffing & People",
    name: "Program Director",
    description: "Full or part-time staff lead responsible for all program coordination, mentor relationships, event logistics, and stakeholder reporting.",
    classification: "Essential",
    owner: "Center Leadership / Dean's Office",
    timing: "Pre-launch (minimum 6 weeks)",
    riskIfMissing: "Program cannot operate; no single owner for coordination, quality, or accountability.",
    pilotNote: "0.5 FTE minimum; can be a senior staff member with administrative support.",
  },
  {
    category: "Staffing & People",
    name: "Student Program Ambassadors (2–4)",
    description: "Student leaders who drive peer recruitment, facilitate team formation sessions, assist with event logistics, and serve as first-point contacts.",
    classification: "Essential",
    owner: "Program Director",
    timing: "Fall Year 1 — 4 weeks before launch",
    riskIfMissing: "Recruitment falls short; team formation is unstructured; peer credibility is absent.",
    pilotNote: "2 ambassadors minimum; honoraria or course credit strongly recommended to sustain engagement.",
  },
  {
    category: "Staffing & People",
    name: "Faculty Champion / Partner",
    description: "At least one faculty member who co-sponsors the program academically, refers students, co-facilitates workshops, and lends institutional credibility.",
    classification: "Essential",
    owner: "Department Chairs / Dean's Office",
    timing: "Pre-launch",
    riskIfMissing: "Program lacks academic legitimacy and cross-departmental reach.",
    pilotNote: "One committed faculty champion is the minimum; ideally spans business and a STEM or design department.",
  },
  {
    category: "Staffing & People",
    name: "Workshop Facilitators (6–8 per semester)",
    description: "Practitioners or faculty who deliver skills workshops on design thinking, customer discovery, business modeling, prototyping, pitch coaching, and go-to-market strategy.",
    classification: "Recommended",
    owner: "Program Director (recruited)",
    timing: "Semester planning (8 weeks before each semester)",
    riskIfMissing: "Skill-building gaps emerge; teams plateau without structured learning interventions.",
    pilotNote: "Leverage mentor pool to co-facilitate; reduce to 4 workshops per semester in pilot.",
  },
  {
    category: "Staffing & People",
    name: "Administrative Support",
    description: "Part-time support for scheduling, communications, venue booking, budget tracking, and ambassador coordination.",
    classification: "Recommended",
    owner: "Center Leadership / Operations",
    timing: "Pre-launch",
    riskIfMissing: "Program Director becomes a bottleneck; coordination quality suffers.",
    pilotNote: "Director absorbs admin tasks in pilot; flag for Year 2 budget if program scales.",
  },

  // Space & Facilities
  {
    category: "Space & Facilities",
    name: "Ideathon Event Venue",
    description: "A space capable of hosting 50–150 attendees for pitch presentations, judge panels, and breakout feedback. Needs AV, tables, and flexible seating.",
    classification: "Essential",
    owner: "Program Director + Facilities Management",
    timing: "Reserved by Week 4 of each fall semester",
    riskIfMissing: "Ideathon event cannot proceed; fall milestone is eliminated.",
    pilotNote: "Book a large classroom or departmental seminar room; informal setup acceptable in Year 1.",
  },
  {
    category: "Space & Facilities",
    name: "Innovation Festival Venue",
    description: "A larger venue suitable for a public-facing showcase with 100–300 attendees, multiple team stations, a main stage, and guest reception area.",
    classification: "Essential",
    owner: "Program Director + Facilities Management",
    timing: "Reserved by Week 4 of each spring semester",
    riskIfMissing: "Spring milestone eliminated; public showcase and investor attendance impossible.",
    pilotNote: "University student union, library atrium, or event hall; partner with existing spring events if available.",
  },
  {
    category: "Space & Facilities",
    name: "Weekly Workshop & Meeting Space",
    description: "Recurring access to a classroom or collaboration room for workshops, team working sessions, and mentor office hours throughout each semester.",
    classification: "Essential",
    owner: "Program Director + Registrar / Facilities",
    timing: "Reserved before semester start",
    riskIfMissing: "Program lacks a physical home; workshops are ad hoc and poorly attended.",
    pilotNote: "One standing weekly block in a medium classroom is sufficient; shared with existing student orgs if needed.",
  },
  {
    category: "Space & Facilities",
    name: "Makerspace / Prototyping Lab Access",
    description: "Access to university or community makerspace with 3D printing, laser cutting, electronics workbenches, or basic fabrication tools for hardware and product teams.",
    classification: "Recommended",
    owner: "Facilities / Library / Engineering School",
    timing: "Negotiated before Year 1",
    riskIfMissing: "Hardware and product teams cannot prototype affordably or quickly.",
    pilotNote: "Negotiate an access agreement with an existing university makerspace; no new equipment required.",
  },
  {
    category: "Space & Facilities",
    name: "Design Lab / Media Production Space",
    description: "Access to design workstations, cameras, recording booths, or media production tools for teams creating digital products, content, or media.",
    classification: "Stretch",
    owner: "Facilities / Communications / Arts School",
    timing: "Year 2+",
    riskIfMissing: "Teams producing media or design-heavy prototypes lack appropriate tools.",
    pilotNote: "Direct teams to existing university resources; not required for pilot success.",
  },

  // Budget & Funding
  {
    category: "Budget & Funding",
    name: "Event Production Budget",
    description: "Covers catering, printed materials, signage, AV rental, prizes, and event staffing for two Ideathons and two Innovation Festivals.",
    classification: "Essential",
    owner: "Program Director + Finance Office",
    timing: "Committed before program launch",
    riskIfMissing: "Events cannot be produced at a quality level that attracts sponsors, judges, or student participation.",
    pilotNote: "Minimum $3,000–$5,000 for a two-event pilot year; scale by 40–60% per additional cohort.",
  },
  {
    category: "Budget & Funding",
    name: "Microgrant / Prototype Fund",
    description: "A pooled fund disbursed to qualifying teams in small grants ($250–$1,000) to cover prototyping materials, user research costs, or pilot expenses.",
    classification: "Essential",
    owner: "Center Leadership / Development Office",
    timing: "Available beginning of Spring Year 1",
    riskIfMissing: "Teams with limited personal resources cannot prototype; equity gaps widen.",
    pilotNote: "Minimum $5,000 total; governed by written eligibility and reporting policy.",
  },
  {
    category: "Budget & Funding",
    name: "Operational Budget",
    description: "Covers printing, workshop materials, platform subscriptions, communication tools, travel for key events, and contingency.",
    classification: "Essential",
    owner: "Program Director + Finance Office",
    timing: "Pre-launch",
    riskIfMissing: "Day-to-day operations stall; tool and material costs fall on the director personally.",
    pilotNote: "$1,500–$3,000 for a pilot year; prioritize tool subscriptions and printing.",
  },
  {
    category: "Budget & Funding",
    name: "Sponsor Prize Budget",
    description: "Named prizes from sponsors or the center for top teams at Ideathon and Innovation Festival (cash, services, or in-kind resources).",
    classification: "Recommended",
    owner: "Program Director + Sponsors",
    timing: "Confirmed 6 weeks before each event",
    riskIfMissing: "Reduced competitive motivation; sponsors have less incentive to engage.",
    pilotNote: "Seek in-kind prizes first (software, coworking access, mentoring hours) before committing cash.",
  },
  {
    category: "Budget & Funding",
    name: "Staff Compensation / Stipends",
    description: "Fair compensation for the Program Director (salary or stipend), ambassador honoraria, and workshop facilitator fees.",
    classification: "Recommended",
    owner: "Center Leadership / HR",
    timing: "Pre-launch",
    riskIfMissing: "Volunteer-only model creates burnout risk and unsustainable turnover.",
    pilotNote: "Director stipend is highest priority; ambassador honoraria ($500–$1,000/semester) improve retention.",
  },
  {
    category: "Budget & Funding",
    name: "Year 2 Scaling Reserve",
    description: "Budget allocation for cohort expansion, additional staffing, and infrastructure improvements based on Year 1 retrospective outcomes.",
    classification: "Stretch",
    owner: "Center Leadership / Budget Committee",
    timing: "Committed by end of Spring Year 1",
    riskIfMissing: "Successful pilot cannot scale; momentum is lost between Year 1 and Year 2.",
    pilotNote: "Identify this reserve in the initial budget request even if unfunded; gives leadership a decision point.",
  },

  // Mentor & Expert Network
  {
    category: "Mentor & Expert Network",
    name: "Business & Finance Mentors (3–5)",
    description: "Practitioners with experience in business modeling, financial projections, market sizing, pricing, and early-stage venture economics.",
    classification: "Essential",
    owner: "Program Director (recruited)",
    timing: "Confirmed before Fall Year 1",
    riskIfMissing: "Teams build impractical business models with no external validation.",
    pilotNote: "3 mentors covering fundamentals; alumni network is the fastest recruitment source.",
  },
  {
    category: "Mentor & Expert Network",
    name: "Technical / Engineering Mentors (2–4)",
    description: "Software engineers, hardware engineers, or product managers who can advise on technical feasibility, build approach, and prototype validation.",
    classification: "Essential",
    owner: "Program Director (recruited)",
    timing: "Confirmed before Fall Year 1",
    riskIfMissing: "Technical teams receive no external reality-check on feasibility or build strategy.",
    pilotNote: "2 mentors covering software basics; hardware expertise added as team demand appears.",
  },
  {
    category: "Mentor & Expert Network",
    name: "Judge Pool (10+ across events)",
    description: "A rotating pool of practitioners, faculty, investors, and alumni who score teams at Ideathon, Innovation Festival, and Sunstone prep. Minimum 5–6 judges per event panel.",
    classification: "Essential",
    owner: "Program Director (recruited)",
    timing: "Confirmed 4 weeks before each event",
    riskIfMissing: "Judging is understaffed, scores are inconsistent, or events are delayed.",
    pilotNote: "Recruit from mentor pool first; expand with alumni and local ecosystem contacts.",
  },
  {
    category: "Mentor & Expert Network",
    name: "Design / UX Mentors (1–3)",
    description: "Designers or design researchers who advise on user experience, product design, brand identity, and customer research methods.",
    classification: "Recommended",
    owner: "Program Director (recruited)",
    timing: "Confirmed before Fall Year 1",
    riskIfMissing: "Teams produce technically functional but poorly designed products; early user feedback is weak.",
    pilotNote: "Use design-focused workshop facilitators to double as mentors in pilot year.",
  },
  {
    category: "Mentor & Expert Network",
    name: "Legal / IP Mentors (1–2)",
    description: "Attorneys or paralegals who provide basic guidance on IP protection, entity formation, contract basics, and student venture confidentiality.",
    classification: "Recommended",
    owner: "Program Director (recruited)",
    timing: "Available from Fall Year 1",
    riskIfMissing: "Teams make avoidable IP mistakes; confidentiality concerns go unaddressed.",
    pilotNote: "Partner with university legal clinic or law school practicum for no-cost access.",
  },
  {
    category: "Mentor & Expert Network",
    name: "Domain Expert Mentors (5+ rotating)",
    description: "Subject matter experts in health, education, sustainability, AI, creative industries, agriculture, civic tech, and other areas matching team focus areas.",
    classification: "Recommended",
    owner: "Program Director (recruited by domain)",
    timing: "Matched by team demand each semester",
    riskIfMissing: "Teams in specialized domains receive generic advice not calibrated to industry dynamics.",
    pilotNote: "Recruit on demand as team domains emerge; don't over-recruit before team composition is known.",
  },

  // Technology & Tools
  {
    category: "Technology & Tools",
    name: "Launchpad Digital Platform",
    description: "A structured digital workspace where teams document their problem brief, customer evidence, hypothesis log, business model, team roles, and sprint plans — visible to mentors and judges.",
    classification: "Essential",
    owner: "Program Director + IT / Platform Team",
    timing: "Pre-launch",
    riskIfMissing: "Evidence is invisible; mentors and judges cannot track team progress between events; learning is undocumented.",
    pilotNote: "Minimum viable: shared Notion workspace or Airtable base with structured templates. Custom tool adds value in Year 2.",
  },
  {
    category: "Technology & Tools",
    name: "Communication Channel (Slack / Discord)",
    description: "A real-time messaging platform for program announcements, team channels, mentor coordination, and community building.",
    classification: "Essential",
    owner: "Program Director",
    timing: "Pre-launch",
    riskIfMissing: "Coordination is fragmented across email; community cohesion fails.",
    pilotNote: "Free Slack workspace is sufficient for pilot; Discord is a viable alternative for student audiences.",
  },
  {
    category: "Technology & Tools",
    name: "Program Website / Landing Page",
    description: "A public-facing web presence with program overview, application form, event calendar, and contact information for prospective students and partners.",
    classification: "Essential",
    owner: "Program Director + Marketing / IT",
    timing: "Live 6 weeks before launch",
    riskIfMissing: "Recruitment has no digital destination; sponsors and mentors cannot find credible program information.",
    pilotNote: "A single-page site with embedded form (Typeform, Google Form) is sufficient for pilot.",
  },
  {
    category: "Technology & Tools",
    name: "AV / Recording Equipment",
    description: "Camera, microphone, and editing resources to record pitches at events for review, team self-assessment, and program marketing.",
    classification: "Recommended",
    owner: "Program Director + University AV Services",
    timing: "Each event",
    riskIfMissing: "Teams cannot review their own pitches; program cannot create marketing content.",
    pilotNote: "Use university AV department; smartphone recording is acceptable minimum for pilot.",
  },
  {
    category: "Technology & Tools",
    name: "Event Registration / Survey Tools",
    description: "Tools for managing event RSVPs, collecting participant surveys, and gathering post-event feedback from students, mentors, and judges.",
    classification: "Recommended",
    owner: "Program Director",
    timing: "Pre-launch",
    riskIfMissing: "Event headcounts are unreliable; no systematic feedback loop from participants.",
    pilotNote: "Google Forms or Typeform are no-cost options adequate for a pilot cohort.",
  },

  // Events & Production
  {
    category: "Events & Production",
    name: "Fall Ideathon (×2 over two years)",
    description: "A structured 90-second idea pitch event with judge panels, structured feedback, and peer networking. Primary fall milestone for all tracks.",
    classification: "Essential",
    owner: "Program Director + Student Ambassadors",
    timing: "Week 10–11 of each fall semester",
    riskIfMissing: "Teams have no external milestone; momentum stalls; the program's core event loop breaks down.",
    pilotNote: "Simplified in-class pitch round with 3 external judges is the minimum viable Ideathon.",
  },
  {
    category: "Events & Production",
    name: "Spring Innovation Festival (×2 over two years)",
    description: "A public-facing showcase where teams present at a more developed stage. Year 1 teams deliver 3-minute validation pitches; Year 2 teams deliver 7–10 minute venture pitches.",
    classification: "Essential",
    owner: "Program Director + Student Ambassadors + Facilities",
    timing: "Week 14–15 of each spring semester",
    riskIfMissing: "Spring milestone eliminated; public showcase and sponsor visibility impossible.",
    pilotNote: "A smaller departmental showcase is acceptable for Year 1 pilot; scale for Year 2 with confirmed sponsors.",
  },
  {
    category: "Events & Production",
    name: "Sunstone Qualification Prep Sessions",
    description: "Structured preparation sessions (mock pitches, business plan reviews, mentor intensives) for Year 2 teams qualifying for the Sunstone advanced venture competition.",
    classification: "Recommended",
    owner: "Program Director + Sunstone Committee",
    timing: "Fall Year 2 (Weeks 6–10)",
    riskIfMissing: "Launchpad teams are underprepared for Sunstone; bridge to advanced competition is lost.",
    pilotNote: "Partner with existing Sunstone program for prep resources; 2–3 mock pitch sessions minimum.",
  },
  {
    category: "Events & Production",
    name: "Optional Summer Sprint",
    description: "An optional between-years period with mentor check-ins, microgrant planning support, makerspace access, and customer discovery support for teams maintaining momentum.",
    classification: "Stretch",
    owner: "Program Director (async)",
    timing: "May–August between Year 1 and Year 2",
    riskIfMissing: "Momentum gap between academic years; teams restart cold in Fall Year 2.",
    pilotNote: "Optional async check-ins only in pilot year; in-person sessions added if demand warrants.",
  },

  // Marketing & Communications
  {
    category: "Marketing & Communications",
    name: "Student Recruitment Campaign",
    description: "A multi-channel outreach effort targeting prospective students via email, social media, classroom visits, club partnerships, and orientation tables.",
    classification: "Essential",
    owner: "Program Director + Ambassadors + Marketing",
    timing: "6–8 weeks before each fall launch",
    riskIfMissing: "Enrollment targets are missed; cohort is too small to form cross-disciplinary teams.",
    pilotNote: "Email blast + two classroom visits + ambassador word-of-mouth is a no-cost minimum.",
  },
  {
    category: "Marketing & Communications",
    name: "Mentor & Sponsor Outreach Materials",
    description: "A one-page sponsor brief, mentor invitation packet, and judge recruitment email explaining program value, commitment expectations, and recognition.",
    classification: "Essential",
    owner: "Program Director",
    timing: "Pre-launch",
    riskIfMissing: "Recruitment of mentors and sponsors is ad hoc; professional credibility is low.",
    pilotNote: "PDF one-pager and email template are sufficient; use existing pitch deck assets.",
  },
  {
    category: "Marketing & Communications",
    name: "Brand / Print Materials",
    description: "Program logo, visual identity system, poster templates, event banners, and digital graphic templates for social media and newsletters.",
    classification: "Recommended",
    owner: "Program Director + University Marketing",
    timing: "Pre-launch",
    riskIfMissing: "Program appears inconsistent or unprofessional across touchpoints.",
    pilotNote: "Use university brand templates with a program-specific color palette and name; minimal custom design required.",
  },
  {
    category: "Marketing & Communications",
    name: "Alumni & Mentor Newsletter",
    description: "A regular (monthly or quarterly) email update to mentors, judges, alumni, and sponsors highlighting team progress, upcoming events, and program news.",
    classification: "Stretch",
    owner: "Program Director",
    timing: "Ongoing (monthly from launch)",
    riskIfMissing: "Mentor community loses engagement between events; sponsors don't feel connected.",
    pilotNote: "Occasional email update via Mailchimp or institutional email is sufficient for pilot.",
  },

  // Assessment & Reporting
  {
    category: "Assessment & Reporting",
    name: "Judging Rubric System",
    description: "Stage-matched scoring rubrics for Ideathon, Innovation Festival, and Sunstone prep — weighted toward evidence, validation, learning, and traction rather than pitch polish.",
    classification: "Essential",
    owner: "Program Director + Faculty Partner",
    timing: "Finalized 3 weeks before first event",
    riskIfMissing: "Judging is inconsistent and unfair; teams cannot calibrate to clear standards.",
    pilotNote: "Adapt an existing open-source rubric framework (e.g., VentureWell, NCIIA) with stage-matched edits.",
  },
  {
    category: "Assessment & Reporting",
    name: "Annual Retrospective Report",
    description: "An end-of-year report documenting participation, team formation, customer evidence, prototypes built, event outcomes, external competition participation, and stakeholder satisfaction.",
    classification: "Essential",
    owner: "Program Director",
    timing: "Completed within 30 days of Spring Innovation Festival",
    riskIfMissing: "Stakeholders cannot evaluate program success; the expand/modify/discontinue decision lacks data.",
    pilotNote: "Spreadsheet-based data collection throughout the year; one-page executive summary minimum.",
  },
  {
    category: "Assessment & Reporting",
    name: "Data & Privacy Policy",
    description: "A written policy covering student venture data, mentor notes, Launchpad tool evidence storage, and confidentiality expectations for all participants.",
    classification: "Essential",
    owner: "Program Director + University Legal / Compliance",
    timing: "Pre-launch",
    riskIfMissing: "Compliance risk with student data; mentors and judges unsure of confidentiality obligations.",
    pilotNote: "Use university data governance policy as the base; add program-specific provisions for venture evidence.",
  },
  {
    category: "Assessment & Reporting",
    name: "Student Progress Tracking",
    description: "A lightweight system for monitoring team activity, workshop attendance, Launchpad tool engagement, and milestone completion throughout each semester.",
    classification: "Recommended",
    owner: "Program Director + Ambassadors",
    timing: "Available from Week 1 of each semester",
    riskIfMissing: "Struggling or disengaged teams are not identified until it's too late to intervene.",
    pilotNote: "Spreadsheet or Airtable tracker updated weekly by ambassadors is sufficient.",
  },
  {
    category: "Assessment & Reporting",
    name: "Participant Survey System",
    description: "Pre/post event surveys and end-of-semester feedback forms measuring student learning outcomes, mentor satisfaction, and program NPS.",
    classification: "Recommended",
    owner: "Program Director",
    timing: "Each event + end of semester",
    riskIfMissing: "No systematic feedback loop; program improvements are based on anecdote rather than evidence.",
    pilotNote: "Google Form or Typeform; 3–5 targeted questions per survey to maximize response rates.",
  },
];

// ── Constants ─────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  "Staffing & People",
  "Space & Facilities",
  "Budget & Funding",
  "Mentor & Expert Network",
  "Technology & Tools",
  "Events & Production",
  "Marketing & Communications",
  "Assessment & Reporting",
];

const CATEGORY_ICONS: Record<Category, string> = {
  "Staffing & People": "👥",
  "Space & Facilities": "🏛️",
  "Budget & Funding": "💰",
  "Mentor & Expert Network": "🤝",
  "Technology & Tools": "⚙️",
  "Events & Production": "🎤",
  "Marketing & Communications": "📣",
  "Assessment & Reporting": "📊",
};

const CLASS_COLORS: Record<Classification, { bg: string; text: string; border: string }> = {
  Essential: { bg: "#0D2240", text: "white", border: "#0D2240" },
  Recommended: { bg: "#D4882A", text: "white", border: "#D4882A" },
  Stretch: { bg: "transparent", text: "#8A99AA", border: "#8A99AA" },
};

// ── Pilot Budget Data ─────────────────────────────────────────────────────────

const BUDGET_ROWS = [
  { category: "Staffing & People", low: "$0", high: "$15,000+", note: "Director stipend; ambassador honoraria; volunteer-only model possible in pilot" },
  { category: "Space & Facilities", low: "$0", high: "$3,000", note: "University venue waived in most cases; some AV and facilities fees may apply" },
  { category: "Budget & Funding (Events + Microgrants)", low: "$8,000", high: "$20,000+", note: "Events ($3–5K), microgrant pool ($5K min), operational ($1.5–3K)" },
  { category: "Mentor & Expert Network", low: "$0", high: "$5,000", note: "Mentors typically volunteer; stipends or honoraria optional; judge appreciation gifts" },
  { category: "Technology & Tools", low: "$0", high: "$3,600/yr", note: "Free tools adequate for pilot; custom Launchpad tool adds cost in Year 2+" },
  { category: "Events & Production", low: "$3,000", high: "$8,000", note: "Two Ideathons + two Innovation Festivals; scales with cohort size and sponsor support" },
  { category: "Marketing & Communications", low: "$500", high: "$3,000", note: "Print materials, digital ads, email tools; much can be done in-house" },
  { category: "Assessment & Reporting", low: "$0", high: "$1,500", note: "Free survey tools; retrospective is staff time; data policy uses legal clinic" },
];

// ── Resource Card ─────────────────────────────────────────────────────────────

function ResourceCard({
  resource,
  expanded,
  onToggle,
}: {
  resource: Resource;
  expanded: boolean;
  onToggle: () => void;
}) {
  const c = CLASS_COLORS[resource.classification];

  return (
    <div className="resource-card bg-white rounded-lg border border-[#0D2240]/10 overflow-hidden break-inside-avoid">
      <div className="px-5 py-4">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display font-bold text-[#0D2240] text-[15px] leading-snug">
            {resource.name}
          </h3>
          <span
            className="flex-shrink-0 text-[11px] font-display font-semibold px-2.5 py-0.5 rounded-full border whitespace-nowrap"
            style={{ background: c.bg, color: c.text, borderColor: c.border }}
          >
            {resource.classification}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-[#8A99AA] font-display mb-2">
          <span>👤 {resource.owner}</span>
          <span>·</span>
          <span>⏱ {resource.timing}</span>
        </div>
        <p className="text-[13px] text-[#0D2240]/70 leading-relaxed">{resource.description}</p>

        <div
          className="resource-details"
          style={{ display: expanded ? "block" : "none" }}
        >
          <div className="mt-3 space-y-2.5">
            <div className="rounded bg-red-50 border border-red-100 px-3 py-2">
              <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-red-600 mb-0.5">Risk if Missing</div>
              <p className="text-[12px] text-red-800 leading-snug">{resource.riskIfMissing}</p>
            </div>
            <div className="rounded bg-[#D4882A]/5 border border-[#D4882A]/20 px-3 py-2">
              <div className="text-[10px] font-display font-semibold uppercase tracking-wider text-[#D4882A] mb-0.5">Minimum Viable Pilot</div>
              <p className="text-[12px] text-[#0D2240]/75 leading-snug">{resource.pilotNote}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="no-print w-full flex items-center justify-center gap-1 py-2 text-[11px] font-display font-semibold text-[#8A99AA] hover:text-[#0D2240] hover:bg-[#0D2240]/[0.02] transition-colors border-t border-[#0D2240]/8"
      >
        {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        {expanded ? "Less" : "Risk & Pilot Details"}
      </button>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Resources() {
  const [classFilter, setClassFilter] = useState<Classification | "All">("All");
  const [catFilter, setCatFilter] = useState<Category | "All">("All");
  const [expandedNames, setExpandedNames] = useState<Set<string>>(new Set());

  const filtered = useMemo(() =>
    RESOURCES.filter(
      (r) =>
        (classFilter === "All" || r.classification === classFilter) &&
        (catFilter === "All" || r.category === catFilter)
    ),
    [classFilter, catFilter]
  );

  const allVisibleExpanded = filtered.length > 0 && filtered.every((r) => expandedNames.has(r.name));

  const handleExpandAll = useCallback(() => {
    if (allVisibleExpanded) {
      setExpandedNames((prev) => {
        const next = new Set(prev);
        filtered.forEach((r) => next.delete(r.name));
        return next;
      });
    } else {
      setExpandedNames((prev) => {
        const next = new Set(prev);
        filtered.forEach((r) => next.add(r.name));
        return next;
      });
    }
  }, [allVisibleExpanded, filtered]);

  const handleToggle = useCallback((name: string) => {
    setExpandedNames((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }, []);

  const counts = useMemo(() => ({
    Essential: RESOURCES.filter((r) => r.classification === "Essential").length,
    Recommended: RESOURCES.filter((r) => r.classification === "Recommended").length,
    Stretch: RESOURCES.filter((r) => r.classification === "Stretch").length,
  }), []);

  const grouped = useMemo(() => {
    const map: Record<string, Resource[]> = {};
    filtered.forEach((r) => {
      if (!map[r.category]) map[r.category] = [];
      map[r.category].push(r);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* Header */}
      <header className="no-print sticky top-0 z-40 bg-[#0D2240] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#D4882A] flex items-center justify-center flex-shrink-0">
              <span className="font-display font-black text-white text-xs">SL</span>
            </div>
            <div>
              <div className="font-display font-bold text-base leading-none tracking-wide">Startup Launchpad</div>
              <div className="text-[10px] text-[#8A99AA] tracking-widest uppercase mt-0.5">Required Resources Manifest</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/launchpad-proposal/" className="hidden sm:flex items-center gap-1.5 text-[#8A99AA] hover:text-white text-xs font-display transition-colors">
              ← Proposal
            </a>
            <a href="/launchpad-proposal/faq" className="hidden sm:flex items-center gap-1.5 text-[#8A99AA] hover:text-white text-xs font-display transition-colors">
              FAQ
            </a>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D4882A] hover:bg-[#c07820] rounded text-sm font-display font-semibold transition-colors"
            >
              <Printer size={14} />
              Print
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#0D2240] text-white pt-10 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-[#D4882A] font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Smith Center for Entrepreneurship
          </div>
          <h1 className="font-display font-black text-4xl leading-tight tracking-tight mb-3">
            Required Resources Manifest
          </h1>
          <p className="text-[#8A99AA] text-base max-w-2xl leading-relaxed mb-8">
            A complete inventory of every resource needed to operate the Startup Launchpad program — classified by priority, annotated with owner, timing, risk, and minimum viable pilot guidance.
          </p>

          {/* Summary Counts */}
          <div className="flex flex-wrap gap-4">
            {(["Essential", "Recommended", "Stretch"] as Classification[]).map((cls) => {
              const c = CLASS_COLORS[cls];
              return (
                <button
                  key={cls}
                  onClick={() => setClassFilter(classFilter === cls ? "All" : cls)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all"
                  style={{
                    borderColor: classFilter === cls || classFilter === "All" ? c.border : "#ffffff22",
                    background: classFilter === cls ? c.bg : "rgba(255,255,255,0.07)",
                    color: classFilter === cls ? c.text : "#F7F5F0",
                  }}
                >
                  <span className="font-display font-black text-2xl leading-none">{counts[cls]}</span>
                  <span className="font-display font-semibold text-sm">{cls}</span>
                </button>
              );
            })}
            <div className="flex items-center px-4 py-2.5 bg-white/5 rounded-lg border-2 border-white/10 gap-2">
              <span className="font-display font-black text-2xl leading-none">{RESOURCES.length}</span>
              <span className="font-display font-semibold text-sm text-[#8A99AA]">Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="no-print bg-white border-b border-[#0D2240]/10 sticky top-[57px] z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#8A99AA]">Priority:</span>
            {(["All", "Essential", "Recommended", "Stretch"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setClassFilter(f)}
                className={`px-3 py-1 rounded-full text-xs font-display font-semibold transition-colors border ${
                  classFilter === f
                    ? "bg-[#0D2240] text-white border-[#0D2240]"
                    : "text-[#0D2240]/60 border-[#0D2240]/15 hover:border-[#0D2240]/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-[#0D2240]/10 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#8A99AA]">Category:</span>
            <select
              value={catFilter}
              onChange={(e) => setCatFilter(e.target.value as Category | "All")}
              className="text-xs font-display text-[#0D2240] border border-[#0D2240]/15 rounded px-2 py-1 bg-[#F7F5F0] focus:outline-none focus:border-[#D4882A]"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-[#8A99AA] font-display">
              {filtered.length} of {RESOURCES.length} resources
            </span>
            <button
              onClick={handleExpandAll}
              className="no-print flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-semibold transition-colors border border-[#D4882A]/40 text-[#D4882A] hover:bg-[#D4882A] hover:text-white"
            >
              <ChevronsUpDown size={12} />
              {allVisibleExpanded ? "Collapse All" : "Expand All"}
            </button>
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#8A99AA]">
            <div className="text-4xl mb-3">🔍</div>
            <p className="font-display font-semibold text-lg text-[#0D2240]">No resources match this filter</p>
            <button
              onClick={() => { setClassFilter("All"); setCatFilter("All"); }}
              className="mt-4 px-4 py-2 bg-[#D4882A] text-white rounded font-display font-semibold text-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {CATEGORIES.filter((cat) => grouped[cat]?.length > 0).map((cat) => (
              <section key={cat}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{CATEGORY_ICONS[cat]}</span>
                  <h2 className="font-display font-bold text-xl text-[#0D2240]">{cat}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#0D2240]/20 to-transparent" />
                  <span className="text-xs font-display font-semibold text-[#8A99AA]">
                    {grouped[cat].length} resource{grouped[cat].length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {grouped[cat].map((r, i) => (
                    <ResourceCard
                      key={i}
                      resource={r}
                      expanded={expandedNames.has(r.name)}
                      onToggle={() => handleToggle(r.name)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Pilot Budget Estimate */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💼</span>
            <h2 className="font-display font-bold text-xl text-[#0D2240]">Pilot Budget Estimate</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4882A]/40 to-transparent" />
          </div>
          <div className="bg-white rounded-xl border border-[#0D2240]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0D2240] text-white">
                    <th className="text-left px-5 py-3 font-display font-semibold text-[12px] uppercase tracking-wider">Category</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-[12px] uppercase tracking-wider whitespace-nowrap">Pilot Low</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-[12px] uppercase tracking-wider whitespace-nowrap">Pilot High</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-[12px] uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {BUDGET_ROWS.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F5F0]/60"}>
                      <td className="px-5 py-3 font-display font-semibold text-[#0D2240] text-[13px]">{row.category}</td>
                      <td className="px-4 py-3 text-[#059669] font-display font-bold text-[13px] whitespace-nowrap">{row.low}</td>
                      <td className="px-4 py-3 text-[#D4882A] font-display font-bold text-[13px] whitespace-nowrap">{row.high}</td>
                      <td className="px-4 py-3 text-[#0D2240]/65 text-[12px] leading-relaxed">{row.note}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#0D2240] text-white">
                    <td className="px-5 py-3 font-display font-bold text-[13px]">Total Pilot Year Estimate</td>
                    <td className="px-4 py-3 font-display font-bold text-[13px] whitespace-nowrap text-[#6ee7b7]">~$11,500</td>
                    <td className="px-4 py-3 font-display font-bold text-[13px] whitespace-nowrap text-[#D4882A]">~$59,100+</td>
                    <td className="px-4 py-3 text-[#8A99AA] text-[12px]">Range reflects volunteer-heavy vs. compensated model; excludes Director salary if staff role</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-[#8A99AA] leading-relaxed">
            * Cost ranges are illustrative estimates for planning purposes only. Actual costs depend on institution size, existing infrastructure, sponsor support, and compensation model. Director salary/stipend is the largest variable and most institutions will fund this separately from program operating budget.
          </p>
        </section>

        {/* Footer note */}
        <div className="mt-12 p-6 rounded-xl border border-[#D4882A]/30 bg-[#D4882A]/5 text-center">
          <div className="font-display font-bold text-xl text-[#0D2240] mb-2">Program Director Contact</div>
          <p className="text-sm text-[#0D2240]/70 max-w-md mx-auto">
            For questions about resource planning, sponsorship, or partnership, contact the Program Director at the Smith Center for Entrepreneurship.
          </p>
          <div className="mt-3 text-[12px] text-[#8A99AA] font-display tracking-wide uppercase">
            Smith Center for Entrepreneurship · launchpad.ixdia.org
          </div>
        </div>
      </main>

      {/* Mobile print button */}
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 lg:hidden z-50 flex items-center gap-2 px-4 py-3 bg-[#0D2240] text-white rounded-full shadow-xl font-display font-semibold text-sm"
      >
        <Printer size={16} />
        Print
      </button>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { font-size: 9pt; background: white; color: #071628; }
          .resource-details { display: block !important; }
          .resource-card { border: 0.5pt solid #e2e8f0; margin-bottom: 6pt; }
          @page { margin: 1.5cm 2cm; size: letter; }
        }
      `}</style>
    </div>
  );
}
