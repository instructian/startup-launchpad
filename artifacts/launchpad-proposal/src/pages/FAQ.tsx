import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown, Search, X, Printer, ArrowLeft } from "lucide-react";

// ── Data ────────────────────────────────────────────────────────────────────

type FAQ = { q: string; a: string };

type Section = {
  id: string;
  label: string;
  icon: string;
  color: string;
  faqs: FAQ[];
};

const SECTIONS: Section[] = [
  {
    id: "students",
    label: "For Students",
    icon: "🎓",
    color: "#0D2240",
    faqs: [
      {
        q: "Do I need to have an idea to join Startup Launchpad?",
        a: "Not at all. Many of our most successful participants start with no idea. The Explorer Track is specifically designed for students who are curious about entrepreneurship but don't yet have a concept. You'll encounter challenge prompts, real-world problems, and potential teammates during the first semester that will help you find a direction worth pursuing.",
      },
      {
        q: "When is the best time to join?",
        a: "The primary entry points are Fall of Year 1 (the full four-semester pathway) and Fall of Year 2 (for students with an existing idea, prototype, or capstone project). However, rolling entry is always open for students who want to join an existing team as a business, engineering, design, content, or operations contributor. There is no wrong time to start.",
      },
      {
        q: "How much time does the program require each week?",
        a: "Most active participants spend three to six hours per week across team meetings, workshops, and Launchpad tool work. The commitment varies by stage — it's lighter in early discovery weeks and heavier in the two to three weeks before each event. The program is designed to coexist with a full course load.",
      },
      {
        q: "Is Startup Launchpad a for-credit course?",
        a: "No — it is an extracurricular co-curricular program that runs alongside your regular coursework. You participate outside of class time. The university is evaluating whether to offer transcript recognition, digital badges, or certificates in future semesters, but credit is not awarded by default.",
      },
      {
        q: "What if I don't have a business or engineering background?",
        a: "Startup Launchpad is built for students from all majors and disciplines — arts, sciences, health, education, social sciences, and humanities are all welcome. The program values diverse skills: designers, researchers, storytellers, community organizers, and domain experts are just as important as business or engineering students. Strong teams require all of these roles.",
      },
      {
        q: "What is the Ideathon and do I have to compete?",
        a: "The Ideathon is a fall event where teams present a 90-second idea pitch to judges and peers. Participating is strongly encouraged — the pitch experience, judge feedback, and peer networking are core to the program's learning model. It is not a competition with winners and losers; it is a milestone checkpoint where you get structured feedback to improve your project.",
      },
      {
        q: "What is the Innovation Festival and who can attend?",
        a: "The Innovation Festival is a spring showcase where teams present at a more developed stage — either a 3-minute validation pitch (Year 1) or a 7–10 minute venture pitch with Q&A (Year 2). It is open to the public and attended by students, faculty, alumni, mentors, and industry guests. Year 2 Innovation Festival presentations serve as the qualifier for Sunstone.",
      },
      {
        q: "What is Sunstone and how do I get there?",
        a: "Sunstone is the Smith Center's flagship advanced venture competition. Teams that demonstrate venture readiness — traction, a business plan, a go-to-market strategy, and financial logic — at the Spring Year 2 Innovation Festival are invited to apply. Qualifying for Sunstone is the highest milestone within the Launchpad pathway, but it is not required for all participants.",
      },
      {
        q: "What happens if my idea doesn't work out?",
        a: "Pivoting, pausing, or abandoning an idea is a completely normal and expected part of the program. The core experience loop is designed to surface problems early and cheaply through customer evidence. If your idea doesn't hold up to scrutiny, that's the system working correctly. You'll be encouraged to redirect your energy toward a stronger problem or join another team.",
      },
      {
        q: "Can I participate if I already have a startup in progress?",
        a: "Yes. If you have an existing venture with early traction, you would likely enter through the Accelerator Track in Fall Year 2 and focus on the Build and Launch stages. The program can help you develop your business model, validate assumptions more rigorously, prepare investor-style pitches, and connect with mentors and judges relevant to your domain.",
      },
    ],
  },
  {
    id: "teams",
    label: "For Teams",
    icon: "🤝",
    color: "#2563EB",
    faqs: [
      {
        q: "How big should our team be?",
        a: "Most effective Launchpad teams are three to five people. Smaller teams struggle with workload and skill gaps; larger teams often have coordination overhead that slows progress. The program encourages teams to identify functional coverage across business, technical, design, and storytelling roles — not to fill all four from day one, but to actively recruit missing capability.",
      },
      {
        q: "How do we find teammates?",
        a: "The program runs structured team formation sessions early in Fall semester and maintains a team marketplace throughout the year. You can post the skills you need, browse profiles of students looking to join teams, and flag yourself as open to joining an existing project. Student ambassadors facilitate introductions and help match compatible founders with contributors.",
      },
      {
        q: "What if a teammate stops contributing?",
        a: "This happens. Talk to your program director or a mentor early rather than letting it fester. The program has processes for renegotiating team agreements, redistributing roles, and in persistent cases, formally documenting contributions for the record. Prevention is better than cure — use the Launchpad tool's team role mapping module to establish clear expectations from the start.",
      },
      {
        q: "Does our team need to be cross-disciplinary?",
        a: "It is strongly encouraged. Teams that span academic departments consistently produce more durable projects, because they have built-in customer, technical, and communication diversity. More than 80% of active Launchpad teams should span at least two departments — this is tracked as a success metric. However, strong single-discipline teams with a deliberate plan to fill skill gaps are also supported.",
      },
      {
        q: "Do we need to form a legal entity to participate?",
        a: "No. The program does not require every team to form a company. Many successful outcomes are products, services, creative ventures, research commercialization paths, nonprofit projects, or community initiatives that never involve a legal entity during the program. Teams that want to explore entity formation can access the legal/IP clinic resource as an optional service.",
      },
      {
        q: "Can we participate in external competitions while in Launchpad?",
        a: "Yes, and we encourage it. Participating in competitions like the Hult Prize, VentureWell E-Team, NASA Space Apps, or your institution's other competitions strengthens your team's pitch experience and external credibility. Notify your program director so they can help with preparation and resource access.",
      },
      {
        q: "What is the Launchpad tool and how does my team use it?",
        a: "The Launchpad tool is the program's central training and project-development system. Your team uses it to define your problem and customer, log customer interview evidence, track hypotheses and experiments, document your business model assumptions, map team roles, build pitch materials, and plan your next sprint based on judge feedback. It's not optional — consistent tool use is part of what makes evidence visible to mentors and judges.",
      },
      {
        q: "How does judging work at each event?",
        a: "Judging rubrics are explicitly weighted toward evidence, validation, learning, and traction — not pitch polish or presentation quality. At early stages, judges reward problem clarity, customer insight, and team potential. At later stages, they look for desirability (does a customer want this?), feasibility (can you build it?), viability (does the business make sense?), and traction (can you prove it?). Judges are instructed to identify your next highest-risk assumption, not just score you.",
      },
      {
        q: "What happens between events? Is there anything to do?",
        a: "The program runs workshops, mentor office hours, and sprint sessions throughout the semester between events. Teams are expected to continue customer discovery, prototyping, and tool updates on their own sprint schedule. The program also facilitates a summer optional period with mentor check-ins, microgrant planning, and makerspace access for teams that want to maintain momentum before Year 2.",
      },
    ],
  },
  {
    id: "faculty",
    label: "For Faculty & Mentors",
    icon: "📚",
    color: "#059669",
    faqs: [
      {
        q: "What does a faculty partner role look like?",
        a: "Faculty partners typically refer students who would benefit from the program, co-facilitate workshops in their area of expertise, serve as domain mentors for teams in their field, and attend Innovation Festival events as judges or guests. The time commitment is flexible — faculty can engage as lightly as one event appearance per semester or as deeply as regular mentor pod leadership.",
      },
      {
        q: "How does mentoring work? What is the time commitment?",
        a: "Mentors are matched to teams based on domain expertise, industry experience, and availability. The expected base commitment is one hour per month of structured office-hour contact with assigned teams, plus event attendance (Ideathon and Innovation Festival). Many mentors find they naturally engage more when they see strong teams making progress — but the formal minimum is modest to keep participation accessible.",
      },
      {
        q: "What areas of expertise do you need most?",
        a: "The highest-demand mentor categories are: customer discovery and market research, product and engineering, business model and financial logic, design and user experience, IP and legal basics, fundraising and investor readiness, storytelling and communications, and domain-specific expertise (health, education, sustainability, AI, creative industries, etc.). Mentors with practitioner backgrounds are especially valued over academic-only profiles.",
      },
      {
        q: "Will I be asked to make funding decisions or investment recommendations?",
        a: "No. Mentor and judge roles in Launchpad are advisory and educational, not investment decisions. Judges score teams and provide structured feedback — they are not making funding commitments. Any conversation about investment that happens between a mentor and a team is entirely personal and outside the program's scope.",
      },
      {
        q: "How are judging rubrics designed?",
        a: "Rubrics are stage-matched and evidence-weighted. Early-stage rubrics reward problem clarity, customer insight, and team potential. Advanced rubrics add desirability, feasibility, viability, and traction dimensions. All rubrics explicitly downweight presentation polish and upweight actual evidence of learning. Judges are briefed before each event and given scoring guides and example responses.",
      },
      {
        q: "Can I suggest a workshop topic or run one myself?",
        a: "Absolutely. The program actively recruits workshop facilitators with practitioner experience in design thinking, customer discovery, prototyping, business modeling, IP basics, financial modeling, pitch coaching, and go-to-market strategy. If you have expertise in one of these areas and want to contribute a workshop, reach out to the Program Director to discuss format, scheduling, and any compensation arrangements.",
      },
      {
        q: "How will I know what teams I'm working with and what they need?",
        a: "Mentors receive access to the Launchpad tool at a read-only level for their assigned teams. This means you can see the team's problem brief, customer evidence log, hypothesis register, and last sprint plan before each office hour. You're not going in blind — you can prepare targeted questions and feedback based on what the team has actually done.",
      },
      {
        q: "How does the program handle student IP and confidentiality?",
        a: "The program maintains a data and privacy policy covering student venture records, mentor notes, and Launchpad tool evidence. Student teams retain ownership of their intellectual property. Mentors and judges are expected to treat shared materials confidentially and are not permitted to use student ideas, evidence, or materials for their own purposes. Full policy details are available from the Program Director.",
      },
    ],
  },
  {
    id: "judges",
    label: "For Judges",
    icon: "⚖️",
    color: "#7C3AED",
    faqs: [
      {
        q: "What is expected of me as a judge?",
        a: "Judges attend one event session (typically two to four hours), evaluate three to eight teams using a structured rubric, provide one paragraph of written feedback per team identifying their next highest-risk assumption, and participate in a brief debrief with program staff. You'll be given a rubric, briefing materials, and example scores in advance.",
      },
      {
        q: "How are teams scored?",
        a: "Each team is scored on four to six rubric dimensions depending on the event stage. Early-stage dimensions include problem clarity, customer insight, solution potential, and team credibility. Advanced stages add desirability, feasibility, viability, traction, and Sunstone readiness. Scores are combined across judges, normalized, and used to rank teams and identify those eligible for advancement or Sunstone qualification.",
      },
      {
        q: "What if two judges strongly disagree on a score?",
        a: "Score variance is expected and healthy. After individual scoring, judges participate in a calibration discussion where they briefly share their reasoning for any score more than two points apart. The goal is not forced consensus but shared understanding of what the evidence shows and what feedback is most useful for the team.",
      },
      {
        q: "Can I speak to a team privately after the event?",
        a: "Yes. Post-event conversations between judges and student teams are encouraged, especially when a judge has specific domain expertise, connections, or follow-up resources to offer. The only request is that you don't make investment offers or commitments during or immediately after a judging session, as this can create confusion about the program's role.",
      },
      {
        q: "How many events per year am I committing to?",
        a: "The base commitment is one event appearance per academic year — either the fall Ideathon or the spring Innovation Festival. Many judges find they enjoy both once they experience the quality of student work. There is no pressure to commit beyond your initial agreement, and the program will always confirm availability well in advance of each event.",
      },
      {
        q: "What if I know one of the student teams personally?",
        a: "Declare it to the Program Director before the event. You will either be recused from scoring that team or asked to score them last with your conflict noted in the record, depending on the degree of the relationship. The program takes judging integrity seriously because student teams deserve fair and unbiased feedback.",
      },
    ],
  },
  {
    id: "sponsors",
    label: "For Sponsors & Administrators",
    icon: "🏛️",
    color: "#D4882A",
    faqs: [
      {
        q: "What sponsorship opportunities exist?",
        a: "Sponsors can participate as named-prize providers (e.g., 'The [Company] Innovation Award'), challenge-track hosts (posing a real industry problem for teams to solve), mentor contributors (matching your professionals to student teams in your industry), event underwriters (food, production, or AV for Ideathon or Innovation Festival), or microgrant donors (funding prototype budgets for qualifying teams). Recognition varies by contribution level and is formalized in a sponsor agreement.",
      },
      {
        q: "How does the program benefit sponsors?",
        a: "Sponsors gain early access to entrepreneurially-minded student talent, a structured pathway to recruit interns and full-time hires from the program's strongest participants, brand visibility across university audiences, and a meaningful community engagement story. Challenge-track sponsors also get the benefit of student teams generating novel solutions to real problems in their industry — often yielding genuinely useful insights.",
      },
      {
        q: "What is the minimum contribution to become a sponsor?",
        a: "There is no single minimum — contribution levels range from in-kind mentor time (no cash required) to named-prize packages ($2,500–$10,000+) to full event underwriting. The Program Director will work with you to find a participation level aligned with your organization's capacity, goals, and brand positioning.",
      },
      {
        q: "How do we evaluate the program's outcomes and return on investment?",
        a: "The program publishes a pilot-year retrospective report covering participation, retention, cross-disciplinary team rates, customer interviews completed, prototypes built, teams with external traction, alumni engagement hours, external competition participation, and ventures or projects launched. Sponsors receive a copy of this report and a named recognition in the acknowledgments.",
      },
      {
        q: "What is the governance and oversight structure for the program?",
        a: "Startup Launchpad operates under the Smith Center for Entrepreneurship, with a Program Director responsible for day-to-day coordination. Center leadership and the Dean's office provide strategic oversight. An advisory group of faculty, mentor, and alumni representatives is convened at least once per academic year to review outcomes and program direction. Sponsors do not have governance authority but may participate in the advisory group by invitation.",
      },
      {
        q: "How does the budget work and who controls spending?",
        a: "The program operates under a university-managed budget controlled by the Program Director and Center leadership. Sponsor contributions are received through the university's standard gift or sponsorship agreement process. Microgrant disbursements are governed by a written policy covering eligibility, amounts, and reporting requirements. Full financial reporting is available to institutional stakeholders on request.",
      },
      {
        q: "Can the program accommodate a custom challenge track for our industry?",
        a: "Yes. Challenge tracks are one of the most popular sponsor participation models. Your organization poses a real problem (e.g., 'How might we reduce food waste in campus dining?'), and student teams who choose to tackle that track have access to industry mentors, relevant data, and a named prize if they produce the top solution in that track. The Program Director manages the challenge brief, judging coordination, and event logistics.",
      },
      {
        q: "What happens if the pilot year results are below expectations?",
        a: "The program is explicitly designed with a pilot-year retrospective and decision point built in. At the end of the first academic year, program leadership and key stakeholders review outcomes against the defined success metrics and make one of three decisions: expand (scale cohort, add resources, broaden scope), modify (adjust model, change tracks or events, rebalance resources), or discontinue (conclude the program with documented learnings). Sponsors are informed of this decision point before they commit.",
      },
      {
        q: "How does the program handle equity and access for underrepresented students?",
        a: "The program uses a multi-track entry model and rolling open enrollment specifically to lower barriers to participation. There are no application fees, no GPA requirements, and no prerequisite courses. Workshop facilitation and mentor matching are available in multiple formats (in-person, virtual, asynchronous). The program tracks demographic participation data and reports on it in the annual retrospective to identify and address access gaps.",
      },
      {
        q: "Who do I contact to start a conversation about involvement?",
        a: "Reach out to the Program Director at the Smith Center for Entrepreneurship. For urgent or senior-level conversations, the Center Director is the appropriate contact. All initial inquiries — whether about sponsorship, mentoring, judging, faculty partnership, or administrative coordination — can begin with the Program Director, who will route them appropriately.",
      },
    ],
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-[#D4882A]/25 text-[#0D2240] rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// ── Accordion item ───────────────────────────────────────────────────────────

function AccordionItem({
  faq,
  query,
  forceOpen,
}: {
  faq: FAQ;
  query: string;
  forceOpen: boolean;
}) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;

  return (
    <div className="faq-item border border-[#0D2240]/10 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left hover:bg-[#0D2240]/[0.02] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-[#0D2240] text-[15px] leading-snug">
          {highlight(faq.q, query)}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 mt-0.5 text-[#D4882A] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="faq-answer px-5 pb-5 text-[14px] leading-relaxed text-[#0D2240]/75 border-t border-[#0D2240]/8"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <p className="pt-4">{highlight(faq.a, query)}</p>
      </div>
    </div>
  );
}

// ── Section TOC sidebar ──────────────────────────────────────────────────────

function SectionTOC({
  active,
  totalResults,
}: {
  active: string;
  totalResults: number;
}) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="no-print sticky top-8 self-start w-52 flex-shrink-0 hidden lg:block">
      <div className="text-[10px] font-display font-semibold tracking-[0.15em] uppercase text-[#8A99AA] mb-3 px-3">
        Sections
      </div>
      <ul className="space-y-0.5">
        {SECTIONS.map(({ id, label, icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`w-full text-left px-3 py-1.5 rounded text-sm transition-all duration-150 leading-snug flex items-center gap-2 ${
                  isActive
                    ? "bg-[#0D2240] text-white font-semibold"
                    : "text-[#0D2240]/70 hover:text-[#0D2240] hover:bg-[#0D2240]/5"
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 px-3 text-xs text-[#8A99AA]">
        {totalResults} question{totalResults !== 1 ? "s" : ""} shown
      </div>

      <button
        onClick={() => window.print()}
        className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#D4882A] text-white rounded font-display font-semibold text-sm tracking-wide hover:bg-[#c07820] transition-colors"
      >
        <Printer size={14} />
        Print / Download
      </button>
    </nav>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("students");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // real-time filter
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return SECTIONS;
    return SECTIONS.map((section) => ({
      ...section,
      faqs: section.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)
      ),
    })).filter((s) => s.faqs.length > 0);
  }, [query]);

  const totalResults = filtered.reduce((sum, s) => sum + s.faqs.length, 0);
  const isFiltering = query.trim().length > 0;

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* ── Header ── */}
      <header className="no-print sticky top-0 z-40 bg-[#0D2240] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#D4882A] flex items-center justify-center flex-shrink-0">
              <span className="font-display font-black text-white text-xs">SL</span>
            </div>
            <div>
              <div className="font-display font-bold text-base leading-none tracking-wide">
                Startup Launchpad
              </div>
              <div className="text-[10px] text-[#8A99AA] tracking-widest uppercase mt-0.5">
                Frequently Asked Questions
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/proposal"
              className="hidden sm:flex items-center gap-1.5 text-[#8A99AA] hover:text-white text-xs font-display transition-colors"
            >
              <ArrowLeft size={13} />
              Proposal
            </Link>
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

      {/* ── Hero ── */}
      <div className="bg-[#0D2240] text-white pt-10 pb-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 items-start sm:items-end justify-between">
          <div>
            <div className="text-[#D4882A] font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              Smith Center for Entrepreneurship
            </div>
            <h1 className="font-display font-black text-4xl leading-tight tracking-tight mb-2">
              Frequently Asked Questions
            </h1>
            <p className="text-[#8A99AA] text-base max-w-xl leading-relaxed">
              Answers for students, teams, faculty, mentors, judges, sponsors,
              and administrators. Can't find what you're looking for? Contact the
              Program Director.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2 flex-shrink-0">
            {SECTIONS.map((s) => (
              <div
                key={s.id}
                className="flex flex-col items-center bg-white/10 rounded-lg px-2 py-2 text-center"
              >
                <span className="text-xl mb-1">{s.icon}</span>
                <span className="text-[9px] text-[#8A99AA] leading-tight text-center">
                  {s.label.replace("For ", "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Search bar ── */}
      <div className="no-print bg-white border-b border-[#0D2240]/10 sticky top-[57px] z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A99AA]"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions and answers…"
              className="w-full pl-9 pr-8 py-2 text-sm border border-[#0D2240]/15 rounded-lg bg-[#F7F5F0] text-[#0D2240] placeholder:text-[#8A99AA] focus:outline-none focus:ring-2 focus:ring-[#D4882A]/40 focus:border-[#D4882A]/50 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A99AA] hover:text-[#0D2240]"
              >
                <X size={13} />
              </button>
            )}
          </div>
          {isFiltering && (
            <span className="text-sm text-[#8A99AA] font-display">
              {totalResults} result{totalResults !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-12">
        <SectionTOC active={activeSection} totalResults={totalResults} />

        <main className="flex-1 min-w-0 space-y-14">
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#8A99AA]">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-display font-semibold text-lg text-[#0D2240] mb-1">
                No results for "{query}"
              </p>
              <p className="text-sm">Try different keywords or browse all sections.</p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 px-4 py-2 bg-[#D4882A] text-white rounded font-display font-semibold text-sm hover:bg-[#c07820] transition-colors"
              >
                Clear search
              </button>
            </div>
          )}

          {filtered.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="scroll-mt-36"
            >
              {/* Section heading */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: section.color + "18" }}
                >
                  {section.icon}
                </div>
                <h2
                  className="font-display font-bold text-2xl tracking-tight"
                  style={{ color: section.color }}
                >
                  {section.label}
                </h2>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(to right, ${section.color}44, transparent)`,
                  }}
                />
                <span
                  className="text-xs font-display font-semibold tracking-wide rounded-full px-2.5 py-0.5"
                  style={{
                    background: section.color + "15",
                    color: section.color,
                  }}
                >
                  {section.faqs.length} Q
                </span>
              </div>

              {/* Accordion list */}
              <div className="space-y-2.5">
                {section.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    faq={faq}
                    query={isFiltering ? query : ""}
                    forceOpen={isFiltering}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Footer contact block */}
          {!isFiltering && (
            <div className="mt-8 p-6 rounded-xl border border-[#D4882A]/30 bg-[#D4882A]/5 text-center">
              <div className="font-display font-bold text-xl text-[#0D2240] mb-2">
                Still have questions?
              </div>
              <p className="text-sm text-[#0D2240]/70 max-w-sm mx-auto">
                Reach out to the Program Director at the Smith Center for
                Entrepreneurship. For senior-level conversations, the Center
                Director is the appropriate contact.
              </p>
              <div className="mt-4 text-[12px] text-[#8A99AA] font-display tracking-wide uppercase">
                Smith Center for Entrepreneurship · launchpad.ixdia.org
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile floating print */}
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 lg:hidden z-50 flex items-center gap-2 px-4 py-3 bg-[#0D2240] text-white rounded-full shadow-xl font-display font-semibold text-sm hover:bg-[#162e52] transition-colors"
      >
        <Printer size={16} />
        Print
      </button>

      {/* Print styles: expand all, remove chrome */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .faq-answer { display: block !important; }
          body { background: white; font-size: 10pt; }
          .faq-item { break-inside: avoid; page-break-inside: avoid; border: 1pt solid #e2e8f0; }
          section { page-break-inside: avoid; margin-bottom: 2em; }
          h2 { page-break-after: avoid; }
        }
      `}</style>
    </div>
  );
}
