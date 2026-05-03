import { TableOfContents } from "@/components/TableOfContents";
import { Printer } from "lucide-react";
import { Link } from "wouter";

function SectionHeading({ num, id, title }: { num: number; id: string; title: string }) {
  return (
    <div id={id} className="doc-section flex items-center gap-3 mb-6 mt-14 first:mt-0">
      <span className="section-badge">{num}</span>
      <h2 className="text-2xl font-display font-bold text-[#0D2240] tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[#D4882A]/40 to-transparent" />
    </div>
  );
}

function Table({
  headers,
  rows,
  colWidths,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  colWidths?: string[];
}) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="doc-table">
        <colgroup>
          {colWidths?.map((w, i) => <col key={i} style={{ width: w }} />)}
        </colgroup>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#D4882A]/30 bg-[#D4882A]/5 px-5 py-4 my-6 text-sm leading-relaxed text-[#0D2240]">
      {children}
    </div>
  );
}

function Tag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-2 py-0.5 text-xs font-semibold font-display tracking-wide"
      style={{ background: color + "22", color }}
    >
      {children}
    </span>
  );
}

export default function Proposal() {
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* Header bar */}
      <header className="no-print sticky top-0 z-40 bg-[#0D2240] text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#D4882A] flex items-center justify-center">
              <span className="font-display font-black text-white text-xs">SL</span>
            </div>
            <div>
              <div className="font-display font-bold text-base leading-none tracking-wide">Startup Launchpad</div>
              <div className="text-[10px] text-[#8A99AA] tracking-widest uppercase mt-0.5">Smith Center for Entrepreneurship · Program Proposal</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/resources"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white/40 rounded text-sm font-display font-semibold text-white/80 hover:text-white transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/faq"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white/40 rounded text-sm font-display font-semibold text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#D4882A] hover:bg-[#c07820] rounded text-sm font-display font-semibold transition-colors"
          >
            <Printer size={14} />
            Print
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 doc-layout flex gap-12">
        {/* Sidebar TOC */}
        <TableOfContents />

        {/* Main document */}
        <main className="doc-content flex-1 min-w-0">

          {/* ── EXECUTIVE SUMMARY ── */}
          <section id="exec-summary" className="doc-section exec-summary">
            {/* Cover block */}
            <div className="rounded-2xl bg-[#0D2240] text-white p-8 mb-8 print:rounded-none print:p-0 print:bg-white print:text-[#071628]">
              <div className="text-[#D4882A] font-display text-sm font-semibold tracking-[0.2em] uppercase mb-2">
                Smith Center for Entrepreneurship
              </div>
              <h1 className="font-display font-black text-4xl leading-tight tracking-tight mb-1">
                Startup Launchpad
              </h1>
              <p className="text-[#8A99AA] text-base font-display mb-6">
                A Four-Semester University Innovation Program — Program Proposal
              </p>

              {/* Key stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Semesters", value: "4" },
                  { label: "Entry Points", value: "4 Tracks" },
                  { label: "Annual Events", value: "2 Milestone" },
                  { label: "Destination", value: "Sunstone" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/10 rounded-lg p-3 print:border print:border-gray-300 print:bg-white print:text-[#0D2240]">
                    <div className="text-2xl font-display font-black text-[#D4882A]">{value}</div>
                    <div className="text-xs text-[#8A99AA] uppercase tracking-wider mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Outcome bullets */}
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "A repeatable extracurricular pathway from idea discovery to venture readiness",
                  "Cross-functional student teams with business, technical, design, and storytelling coverage",
                  "Progressive evidence standards enforced at Ideathon, Innovation Festival, and Sunstone",
                  "A visible, measurable innovation pipeline for the university",
                  "Sunstone-ready ventures with traction, pilots, users, revenue, or letters of intent",
                  "Alumni, sponsor, and industry mentor engagement through program events",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2.5 text-sm">
                    <div className="w-4 h-4 rounded-full bg-[#D4882A] flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-white/85 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* One-page summary prose */}
            <h3 className="font-display font-bold text-lg text-[#0D2240] mb-3">Summary</h3>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              Startup Launchpad is a four-semester, extracurricular innovation program designed to help students build
              a startup and entrepreneurial mindset through repeated cycles of discovery, validation, building, pitching,
              feedback, and iteration. Students work in small cross-functional teams toward a venture, product, service,
              creative platform, research commercialization path, or community innovation project.
            </p>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              The program is structured around four progressive stages — Discover, Validate, Build, and Launch — aligned
              to the academic year. Two recurring annual events serve as milestone checkpoints: a fall Ideathon and a
              spring Innovation Festival. Advanced teams use the spring Innovation Festival of Year 2 to qualify for
              Sunstone, the Smith Center's flagship accelerator program.
            </p>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85">
              The Launchpad tool is used as both a training and a project-development system, helping teams define
              problems, document evidence, track hypotheses, prepare pitches, and convert judge feedback into sprint
              plans. This proposal outlines the program model, resource requirements, budget framework, success metrics,
              and the specific approvals and commitments needed to launch a pilot cohort.
            </p>
          </section>

          {/* ── PROBLEM & RATIONALE ── */}
          <section className="doc-section">
            <SectionHeading num={1} id="problem" title="Problem & Rationale" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              Many students arrive at university curious about entrepreneurship, innovation, and creative ventures, but
              lack a structured pathway to move from curiosity to a credible, evidence-based project. The specific gaps
              are well-documented: students may lack a co-founder or team, customer validation skills, technical
              capability, design support, storytelling practice, or confidence navigating the university's
              entrepreneurship resources.
            </p>
            <div className="pull-quote">
              "Existing events can create excitement, but without a structured pathway, students often lose momentum
              after a single pitch night. Startup Launchpad turns disconnected events into a progressive two-year
              experience."
            </div>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              The current ecosystem offers workshops, speaker events, and one-time competitions that activate interest
              but do not sustain it. Students who attend an Ideathon but receive no follow-through, team formation
              support, or skill-building programming rarely translate that excitement into measurable progress.
            </p>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-6">
              Startup Launchpad addresses this by introducing multiple entry points, visible milestones, team formation
              infrastructure, mentor feedback, and increasing standards of evidence — converting the university's
              existing event infrastructure into a coherent, multi-year developmental experience.
            </p>
            <Callout>
              <strong>Strategic rationale:</strong> Universities with visible, measurable innovation pipelines attract
              entrepreneurially-minded students, engage alumni donors and industry sponsors, and produce outcomes —
              startups, patents, social ventures, community projects — that advance institutional reputation. Startup
              Launchpad provides the structure that makes those outcomes repeatable.
            </Callout>
          </section>

          {/* ── PROGRAM MODEL ── */}
          <section className="doc-section">
            <SectionHeading num={2} id="program-model" title="Program Model" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              Startup Launchpad is an extracurricular co-curricular program — not a for-credit course replacement —
              that runs alongside regular academic coursework across four semesters. Students may enter at multiple
              points and pursue one of four tracks depending on their experience level and what they bring to the program.
            </p>

            <h3 className="font-display font-bold text-base text-[#0D2240] mb-3 mt-6">Program Vision</h3>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              Students should experience entrepreneurship as a learnable practice rather than a personality trait. By
              completing the pathway, students should understand how to find meaningful problems, test assumptions, work
              across disciplines, build prototypes, gather evidence, tell a compelling story, and make an informed
              decision about whether an idea deserves to become a venture.
            </p>

            <h3 className="font-display font-bold text-base text-[#0D2240] mb-3 mt-6">Core Experience Loop</h3>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              Every semester repeats the same seven-step core loop, ensuring students develop rhythmic entrepreneurial
              habits rather than treating each event as isolated:
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                ["1. Provocation", "Challenge prompts, market needs, research opportunities, or community problems surface possible directions."],
                ["2. Team Formation", "Students find collaborators with complementary skills across disciplines."],
                ["3. Customer Evidence", "Teams test assumptions through interviews, observation, surveys, pilots, and market research."],
                ["4. Build / Test", "Teams create prototypes, landing pages, service pilots, demos, content experiments, or technical proofs."],
                ["5. Pitch", "Teams present to judges at the appropriate stage event in a format matched to their progress."],
                ["6. Feedback", "Judges, mentors, peers, and users identify the next highest-risk assumption."],
                ["7. Next Sprint", "Teams return to the Launchpad tool and workshops with a concrete plan to improve their project."],
              ].map(([step, desc]) => (
                <div key={step} className="bg-white rounded-lg border border-[#0D2240]/10 p-3.5 text-sm">
                  <div className="font-display font-semibold text-[#0D2240] mb-1">{step}</div>
                  <div className="text-[#0D2240]/70 leading-snug text-xs">{desc}</div>
                </div>
              ))}
            </div>

            <h3 className="font-display font-bold text-base text-[#0D2240] mb-3 mt-6">Target Student Profiles</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { profile: "First-Year Explorer", desc: "Curious student with no idea yet. Needs exposure, confidence, team formation, and early wins." },
                { profile: "Builder with Prototype", desc: "Student with a prototype, capstone, creative project, or research result. Needs validation, commercialization support, and pitch readiness." },
                { profile: "Business or Strategy Lead", desc: "Student who can contribute customer discovery, market sizing, financial models, partnerships, and operations." },
                { profile: "Designer / Storytelling Lead", desc: "Student who can contribute user experience, brand, demos, media, narrative, and campaign development." },
                { profile: "Advanced Venture Team", desc: "Team with validation, product progress, and early traction. Needs funding, mentor access, and Sunstone preparation." },
              ].map(({ profile, desc }) => (
                <div key={profile} className="bg-white rounded-lg border-l-4 border-[#D4882A] border border-[#0D2240]/10 p-3.5 text-sm">
                  <div className="font-display font-semibold text-[#0D2240] mb-1">{profile}</div>
                  <div className="text-[#0D2240]/70 leading-snug text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOUR-SEMESTER ROADMAP ── */}
          <section className="doc-section">
            <SectionHeading num={3} id="roadmap" title="Four-Semester Roadmap" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              The program progresses across four semesters with an escalating standard of evidence, team capability,
              and pitch rigor at each stage. The roadmap table below shows the theme, student mission, main deliverable,
              and corresponding event pitch format for each level.
            </p>
            <Table
              headers={["Stage", "Semester", "Theme", "Student Mission", "Main Deliverable", "Event Pitch"]}
              rows={[
                [
                  <Tag color="#9b8af0">Level 1</Tag>,
                  "Fall Year 1",
                  <strong>Discover</strong>,
                  "Find a meaningful problem and form a team",
                  "Problem brief, user segment, rough solution thesis",
                  "Ideathon · 90-sec idea pitch",
                ],
                [
                  <Tag color="#4ad7c1">Level 2</Tag>,
                  "Spring Year 1",
                  <strong>Validate</strong>,
                  "Prove someone has the problem and wants a solution",
                  "Customer interviews, early prototype, Launchpad evidence record",
                  "Innovation Festival · 3-min validation pitch",
                ],
                [
                  <Tag color="#f39c12">Level 3</Tag>,
                  "Fall Year 2",
                  <strong>Build</strong>,
                  "Turn validation into a venture-shaped MVP or pilot",
                  "MVP/pilot, team roles, business model, traction target",
                  "Advanced Ideathon · 5-min progress pitch",
                ],
                [
                  <Tag color="#e74c3c">Level 4</Tag>,
                  "Spring Year 2",
                  <strong>Launch</strong>,
                  "Demonstrate readiness for Sunstone and external support",
                  "Traction, business plan, go-to-market plan, financial logic",
                  "Innovation Festival · 7–10 min Sunstone qualifier",
                ],
              ]}
              colWidths={["8%", "12%", "10%", "22%", "26%", "22%"]}
            />
            <Callout>
              <strong>Summer optional period:</strong> Teams may continue through the summer with mentor office hours,
              microgrant planning, customer access support, and makerspace resources. This is not required but strongly
              encouraged for teams targeting Sunstone qualification the following spring.
            </Callout>
          </section>

          {/* ── ENTRY & PLACEMENT MODEL ── */}
          <section className="doc-section">
            <SectionHeading num={4} id="entry-model" title="Entry & Placement Model" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              Startup Launchpad uses a flexible entry model to ensure students can join at the point most appropriate
              to their experience, skills, and availability. There is no single "right" starting point — the program
              is designed to accommodate the full range of student readiness.
            </p>
            <Table
              headers={["Track", "Typical Entry", "Student Profile", "First Milestone"]}
              rows={[
                [
                  <strong>Explorer Track</strong>,
                  "Fall Year 1",
                  "No idea yet; seeking exposure, team, and early problem clarity",
                  "Fall Ideathon 90-second pitch",
                ],
                [
                  <strong>Joiner Track</strong>,
                  "Spring Year 1 or rolling",
                  "Has useful skills (design, engineering, business, content, research); wants to contribute to an existing team",
                  "Join a team and contribute to Innovation Festival deliverable",
                ],
                [
                  <strong>Accelerator Track</strong>,
                  "Fall Year 2",
                  "Has an idea, prototype, research project, capstone, or creative product with some customer evidence",
                  "Advanced Ideathon 5-minute progress pitch",
                ],
                [
                  <strong>Contributor Track</strong>,
                  "Any point",
                  "Specialist in design, engineering, business, storytelling, content, community, or operations",
                  "Team-matching and project onboarding session",
                ],
              ]}
              colWidths={["18%", "18%", "40%", "24%"]}
            />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mt-4">
              All new students complete a brief intake capturing interests, skills, availability, preferred problem
              areas, and whether they want to found, join, advise, or explore. The program then recommends a track,
              suitable team opportunities, relevant workshops, and target events.
            </p>
          </section>

          {/* ── EVENT LADDER ── */}
          <section className="doc-section">
            <SectionHeading num={5} id="event-ladder" title="Event Ladder" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              The Launchpad program uses two recurring annual events — Ideathon (fall) and Innovation Festival (spring)
              — as stage gates. Each event has a defined pitch format, judging emphasis, and advancement criterion.
              Sunstone is the terminal destination for the most advanced qualifying teams.
            </p>
            <Table
              headers={["Event", "Purpose", "Pitch Format", "Judging Emphasis"]}
              rows={[
                [
                  "Fall Ideathon, Year 1",
                  "Spark ideas and teams",
                  "90-second problem and idea pitch",
                  "Problem clarity, urgency, originality, team potential",
                ],
                [
                  "Spring Innovation Festival, Year 1",
                  "Validate early concepts",
                  "3-minute validation pitch",
                  "Customer evidence, prototype learning, next assumptions",
                ],
                [
                  "Fall Ideathon, Year 2",
                  "Accelerate advanced teams",
                  "5-minute progress pitch",
                  "MVP progress, traction target, team capability, feasibility",
                ],
                [
                  "Spring Innovation Festival, Year 2",
                  "Select Sunstone-ready ventures",
                  "7–10 minute venture pitch with Q&A",
                  "Desirability, feasibility, viability, traction, readiness",
                ],
                [
                  "Sunstone (Smith Center)",
                  "Advanced venture competition",
                  "Business plan and investor-style pitch",
                  "Launch readiness, evidence, market, execution, impact",
                ],
              ]}
              colWidths={["22%", "18%", "22%", "38%"]}
            />
            <div className="pull-quote">
              Judging rubrics are explicitly weighted toward validation, learning, and traction — not pitch polish.
              This prevents performative presentation from displacing genuine evidence of customer need and product
              progress.
            </div>
          </section>

          {/* ── LAUNCHPAD TOOL ── */}
          <section className="doc-section">
            <SectionHeading num={6} id="launchpad-tool" title="Launchpad Tool Role" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              The Launchpad tool is a required training and project-development layer that operates throughout the
              program. It is not an optional add-on; it is the central system through which teams document evidence,
              track hypotheses, prepare pitches, and build from feedback to sprint plan.
            </p>
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              By requiring tool use, the program ensures that student progress is documented, mentors have visibility
              into team state, judges can assess evidence quality, and program administrators can track outcomes
              across the cohort.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                { module: "Problem & Opportunity Framing", desc: "Define the customer segment, the specific problem, and the initial solution thesis with evidence." },
                { module: "Customer Discovery", desc: "Log interview findings, observations, and survey results. Track interview count toward 47+ minimum." },
                { module: "Prototype Planning", desc: "Specify what is being tested, at what fidelity, and what evidence will confirm or challenge the hypothesis." },
                { module: "Business Model Assumptions", desc: "Map revenue streams, cost drivers, key partnerships, and key resources in a structured assumption register." },
                { module: "Team Role Mapping", desc: "Document team member roles, skill gaps, and plans to fill missing capability." },
                { module: "Pitch Builder", desc: "Assemble and refine pitch materials for each event stage. Output formats are calibrated to event requirements." },
                { module: "Traction Dashboard", desc: "Track users, revenue, pilots, letters of intent, waitlists, or other traction signals appropriate to stage." },
                { module: "Sunstone Readiness Checklist", desc: "Self-assessment and program review against Sunstone eligibility criteria for qualifying teams." },
              ].map(({ module, desc }) => (
                <div key={module} className="bg-white rounded-lg border border-[#0D2240]/10 p-3.5">
                  <div className="text-xs font-display font-semibold tracking-wide text-[#D4882A] uppercase mb-1">{module}</div>
                  <div className="text-xs text-[#0D2240]/70 leading-snug">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── RESOURCE REQUIREMENTS ── */}
          <section className="doc-section">
            <SectionHeading num={7} id="resources" title="Resource Requirements" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              The following resources are required to run Startup Launchpad at the pilot scale. Resources are
              categorized as Essential (required to launch), Recommended (strongly advised for quality), or
              Stretch (aspirational enhancements).
            </p>
            <Table
              headers={["Resource", "Category", "Notes"]}
              rows={[
                ["Program Director or Faculty/Staff Lead (0.5–1.0 FTE)", <Tag color="#e74c3c">Essential</Tag>, "Responsible for program coordination, mentor management, student tracking, and event execution"],
                ["Student Program Ambassadors (2–4)", <Tag color="#e74c3c">Essential</Tag>, "Peer recruiters and workshop facilitators; can be part-time or stipended"],
                ["Mentor Pool (15–25 mentors)", <Tag color="#e74c3c">Essential</Tag>, "Covering business, product, engineering, design, law/IP, finance, storytelling, and domain expertise"],
                ["Workshop Facilitators", <Tag color="#e74c3c">Essential</Tag>, "For design thinking, customer discovery, prototyping, and pitch coaching sessions"],
                ["Judge Pool for All Events", <Tag color="#e74c3c">Essential</Tag>, "Alumni founders, industry practitioners, investors, and faculty partners"],
                ["Event Budget (food, prizes, production)", <Tag color="#e74c3c">Essential</Tag>, "Per-event budget for Ideathon and Innovation Festival"],
                ["Microgrant or Prototype Fund", <Tag color="#f39c12">Recommended</Tag>, "Small grants ($250–$2,000) for teams to build prototypes or run customer pilots"],
                ["Makerspace / Design Lab Access", <Tag color="#f39c12">Recommended</Tag>, "Prototyping materials, design software, hardware components"],
                ["Launchpad Tool Administration", <Tag color="#e74c3c">Essential</Tag>, "Tool setup, student onboarding, data reporting, and cohort tracking"],
                ["Communications Channels", <Tag color="#e74c3c">Essential</Tag>, "For recruitment, team matching, event promotion, and alumni updates"],
                ["Legal / IP Clinic Access", <Tag color="#f39c12">Recommended</Tag>, "Patent basics, entity formation, and non-disclosure agreements for advanced teams"],
                ["Sponsor Relationships", <Tag color="#9b8af0">Stretch</Tag>, "Named prizes, challenge tracks, mentor matching, and placement introductions"],
              ]}
              colWidths={["45%", "18%", "37%"]}
            />
          </section>

          {/* ── BUDGET FRAMEWORK ── */}
          <section className="doc-section">
            <SectionHeading num={8} id="budget" title="Budget Framework" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-4">
              The table below presents budget categories and illustrative pilot-year estimates. These are not final
              line-item budgets; they are framework estimates to support resource allocation conversations. Actual
              figures will depend on headcount model, existing infrastructure, and sponsor contributions.
            </p>
            <Table
              headers={["Budget Category", "Pilot Estimate (Annual)", "Notes"]}
              rows={[
                ["Program Director / Staff Lead (partial FTE)", "$40,000–$70,000", "Depending on existing staff capacity and whether this is a new hire"],
                ["Student Ambassador Stipends (2–4)", "$4,000–$10,000", "Per-semester stipends or hourly pay for 2–4 ambassadors"],
                ["Workshop Facilitation", "$3,000–$8,000", "External facilitators or internal overload compensation"],
                ["Mentor Program (coordination, events)", "$2,000–$5,000", "Mixers, thank-you events, recognition, and coordination overhead"],
                ["Ideathon Event (×1/year)", "$3,000–$8,000", "Venue (if external), food, prizes, production, marketing"],
                ["Innovation Festival Event (×1/year)", "$5,000–$15,000", "Larger-scale event; investor and mentor attendance"],
                ["Microgrant / Prototype Fund", "$5,000–$20,000", "$250–$2,000 per qualifying team; 5–10 teams in pilot year"],
                ["Launchpad Tool Licensing / Admin", "$2,000–$6,000", "Depends on existing tool licenses and configuration needs"],
                ["Communications and Marketing", "$1,500–$4,000", "Recruitment, event promotion, social media, signage"],
                ["Contingency (10%)", "~$6,500–$14,600", ""],
                [<strong>Total Pilot Year Estimate</strong>, <strong>$72,000–$160,600</strong>, "Wide range reflects staffing model decisions; sponsorship can offset $20,000–$40,000"],
              ]}
              colWidths={["38%", "22%", "40%"]}
            />
            <Callout>
              <strong>Cost reduction opportunities:</strong> Integrating program coordination into an existing staff
              role, using alumni volunteers as mentors and judges, and securing a named-prize sponsor can reduce the
              out-of-pocket pilot cost by 30–40%. A lean pilot cohort of 30–50 students with one Ideathon and one
              Innovation Festival can be run for approximately $45,000–$75,000 if staffing is partially absorbed.
            </Callout>
          </section>

          {/* ── ASSESSMENT PLAN ── */}
          <section className="doc-section">
            <SectionHeading num={9} id="assessment" title="Assessment Plan & Success Metrics" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              Success will be measured across four dimensions: participation and retention, team formation quality,
              venture progress, and university value creation. The following metrics are proposed for the pilot year,
              with baselines to be established in semester one.
            </p>
            <Table
              headers={["Metric Category", "Specific Metric", "Pilot Year Target"]}
              rows={[
                ["Participation", "Total students enrolled", "50–80 students across all tracks"],
                ["Participation", "New students per track", "Tracked by Explorer / Joiner / Accelerator / Contributor"],
                ["Participation", "Event-to-event retention", "≥60% retention from Ideathon to Innovation Festival"],
                ["Participation", "Rolling-entry joiners", "≥10 students joining teams mid-year"],
                ["Team Formation", "Cross-disciplinary teams", "≥80% of teams span 2+ academic departments"],
                ["Team Formation", "Mentor matches completed", "≥1 mentor match per active team"],
                ["Venture Progress", "Customer interviews completed", "47 interviews minimum per qualifying team"],
                ["Venture Progress", "Prototypes / MVPs / pilots created", "≥15 teams with a testable artifact by end of Year 1"],
                ["Venture Progress", "Teams with external traction", "≥5 teams with users, revenue, LOIs, or waitlists by Spring Y2"],
                ["Venture Progress", "Teams qualifying for Sunstone", "≥2 teams applying or qualifying in pilot year"],
                ["University Value", "Alumni and mentor engagements", "≥100 hours of mentor contact time per year"],
                ["University Value", "Sponsor or industry participants", "≥2 sponsors or challenge-track partners"],
                ["University Value", "External competition participation", "≥3 teams entering external competitions"],
                ["University Value", "Ventures, pilots, or projects launched", "≥3 ventures or social projects with measurable impact by Year 2"],
              ]}
              colWidths={["22%", "40%", "38%"]}
            />
          </section>

          {/* ── RISKS & MITIGATIONS ── */}
          <section className="doc-section">
            <SectionHeading num={10} id="risks" title="Risks & Mitigations" />
            <p className="text-[15px] leading-relaxed text-[#0D2240]/85 mb-5">
              The following risk register identifies the primary operational and structural risks for the pilot year
              and the mitigation strategies built into the program design.
            </p>
            <Table
              headers={["Risk", "Likelihood", "Impact", "Mitigation"]}
              rows={[
                [
                  "Students drop after one event",
                  <Tag color="#f39c12">Medium</Tag>,
                  <Tag color="#e74c3c">High</Tag>,
                  "Recurring sprints, mentor follow-ups, visible next milestones, and team accountability structures",
                ],
                [
                  "Teams lack key functional skills",
                  <Tag color="#f39c12">Medium</Tag>,
                  <Tag color="#f39c12">Medium</Tag>,
                  "Contributor track, team marketplace, skill-specific workshops, and open team-join windows",
                ],
                [
                  "Pitch polish outruns evidence",
                  <Tag color="#4ad7c1">Low</Tag>,
                  <Tag color="#f39c12">Medium</Tag>,
                  "Judging rubrics explicitly weighted toward validation, learning, and traction; not presentation quality",
                ],
                [
                  "Late joiners feel behind or excluded",
                  <Tag color="#f39c12">Medium</Tag>,
                  <Tag color="#f39c12">Medium</Tag>,
                  "Onboarding modules, placement tracks, team-join pathways, and ambassador peer support",
                ],
                [
                  "Too many weak ideas advance past early stages",
                  <Tag color="#4ad7c1">Low</Tag>,
                  <Tag color="#f39c12">Medium</Tag>,
                  "Evidence-based stage gates at each event; advancement based on validated learning, not enthusiasm",
                ],
                [
                  "Faculty/staff capacity insufficient",
                  <Tag color="#f39c12">Medium</Tag>,
                  <Tag color="#e74c3c">High</Tag>,
                  "Mentor pods, student ambassadors, reusable workshop templates, and office-hour block scheduling",
                ],
                [
                  "Low recruitment in pilot year",
                  <Tag color="#4ad7c1">Low</Tag>,
                  <Tag color="#e74c3c">High</Tag>,
                  "Multi-channel outreach via faculty referrals, student orgs, academic departments, and ambassador networks",
                ],
                [
                  "Sponsor or funding shortfall",
                  <Tag color="#4ad7c1">Low</Tag>,
                  <Tag color="#f39c12">Medium</Tag>,
                  "Lean pilot design that can run at reduced cost; sponsor outreach begins 6+ months before launch",
                ],
              ]}
              colWidths={["30%", "12%", "10%", "48%"]}
            />
          </section>

          {/* ── APPROVAL ASK ── */}
          <section className="doc-section">
            <SectionHeading num={11} id="approval" title="Approval Ask & Next Steps" />

            <div className="bg-[#0D2240] text-white rounded-xl p-7 mb-6 print:border-2 print:border-[#0D2240] print:bg-white print:text-[#0D2240]">
              <h3 className="font-display font-bold text-xl mb-4 text-[#D4882A]">What We Are Asking</h3>
              <div className="space-y-4">
                {[
                  {
                    ask: "Staffing Commitment",
                    detail: "Approval to assign or hire a Program Director or Faculty/Staff Lead at 0.5–1.0 FTE to coordinate and run the pilot-year program.",
                  },
                  {
                    ask: "Budget Authorization",
                    detail: "Authorization of a pilot-year operating budget in the range of $45,000–$160,000 depending on staffing model, with a recommendation to start at the lean end and scale based on outcomes.",
                  },
                  {
                    ask: "Launchpad Tool Access",
                    detail: "Approval to procure, configure, and deploy the Launchpad tool for student and mentor use across the pilot cohort.",
                  },
                  {
                    ask: "Institutional Endorsement",
                    detail: "A letter of support or formal endorsement from the Dean's office or Center Director enabling outreach to faculty partners, sponsors, and industry mentors.",
                  },
                  {
                    ask: "Pilot Launch Timeline",
                    detail: "Authorization to begin recruitment and onboarding in the semester preceding the pilot Fall Ideathon, with an 8-week pre-launch period for tool setup and mentor recruitment.",
                  },
                ].map(({ ask, detail }, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <div className="w-5 h-5 rounded bg-[#D4882A] flex-shrink-0 mt-0.5 flex items-center justify-center text-white font-bold text-xs">{i + 1}</div>
                    <div>
                      <span className="font-display font-semibold text-[#D4882A] print:text-[#0D2240]">{ask}: </span>
                      <span className="text-white/85 print:text-[#0D2240]/80">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="font-display font-bold text-base text-[#0D2240] mb-3">Pilot Timeline</h3>
            <Table
              headers={["Milestone", "Target Date", "Owner"]}
              rows={[
                ["Proposal review and approval decision", "Within 30 days of submission", "Dean / Center Director"],
                ["Program Director hired or assigned", "8–12 weeks before pilot Fall", "HR / Department Head"],
                ["Launchpad tool configured and tested", "6 weeks before pilot Fall", "Program Director"],
                ["Mentor and judge pool recruited (15+ mentors)", "6 weeks before pilot Fall", "Program Director"],
                ["Student recruitment campaign launched", "4 weeks before pilot Fall", "Program Director + Ambassadors"],
                ["Fall Ideathon (pilot Year 1, Semester 1)", "Week 8 of Fall semester", "Program Director + Events"],
                ["Spring Innovation Festival (pilot Year 1, Semester 2)", "Week 12 of Spring semester", "Program Director + Events"],
                ["Pilot-year retrospective and reporting", "End of Spring semester", "Program Director + Center Leadership"],
                ["Decision to expand, modify, or discontinue", "Within 60 days of retrospective", "Center Director + Dean"],
              ]}
              colWidths={["48%", "27%", "25%"]}
            />

            <h3 className="font-display font-bold text-base text-[#0D2240] mb-3 mt-6">Open Decisions for University Review</h3>
            <ul className="space-y-2 text-[14px] text-[#0D2240]/80 list-none">
              {[
                "Final program name and brand identity.",
                "Whether the program is housed inside one center, one college, or structured as a cross-campus initiative.",
                "Prize budget scale and microgrant policy for prototype funding.",
                "Criteria for Innovation Festival to Sunstone qualification and advancement.",
                "Whether students can receive transcript recognition, digital badges, certificates, or co-curricular credit.",
                "Data and privacy policy for Launchpad tool evidence, mentor notes, and student venture records.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#D4882A] font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-xl border-2 border-[#D4882A] bg-[#D4882A]/5 text-center">
              <div className="font-display font-black text-2xl text-[#0D2240] mb-2">Ready to Launch</div>
              <p className="text-[14px] text-[#0D2240]/75 max-w-md mx-auto">
                Startup Launchpad is designed to launch in a single academic year and scale based on demonstrated
                outcomes. The program's modular structure means it can start lean and grow. We are ready to begin
                as soon as we have staff, a budget line, and your endorsement.
              </p>
              <div className="mt-4 text-[13px] text-[#8A99AA] font-display tracking-wide uppercase">
                Smith Center for Entrepreneurship · launchpad.ixdia.org
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-6 border-t border-[#0D2240]/15 text-xs text-[#8A99AA] flex flex-col sm:flex-row gap-2 justify-between no-print">
            <span>Startup Launchpad Program Proposal · Smith Center for Entrepreneurship · Version 0.1 · 2026</span>
            <span>Status: Draft for University Review</span>
          </footer>
        </main>
      </div>

      {/* Floating print button (mobile) */}
      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 lg:hidden z-50 flex items-center gap-2 px-4 py-3 bg-[#0D2240] text-white rounded-full shadow-xl font-display font-semibold text-sm hover:bg-[#162e52] transition-colors"
      >
        <Printer size={16} />
        Print
      </button>
    </div>
  );
}
