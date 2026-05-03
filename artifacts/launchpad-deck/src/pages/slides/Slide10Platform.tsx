export default function Slide10Platform() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-center px-[8vw]"
      style={{ background: "var(--slide-bg)" }}
    >
      <div className="mb-[3.5vh]">
        <h2
          className="font-display text-primary tracking-tight"
          style={{ fontSize: "4.2vw", fontWeight: 800 }}
        >
          The Launchpad Platform
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-[5vw]">
        <div>
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.12em" }}
          >
            Core Modules
          </p>

          <div className="mb-[2.5vh] flex gap-[2vw] items-start">
            <p
              className="font-display text-accent"
              style={{ fontSize: "2.8vw", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}
            >
              01
            </p>
            <div>
              <p className="font-display text-primary" style={{ fontSize: "2vw", fontWeight: 700 }}>Proposal Builder</p>
              <p className="font-body text-text mt-[0.5vh]" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
                Structured templates for project proposals aligned to academic submission standards
              </p>
            </div>
          </div>

          <div className="mb-[2.5vh] flex gap-[2vw] items-start">
            <p
              className="font-display text-accent"
              style={{ fontSize: "2.8vw", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}
            >
              02
            </p>
            <div>
              <p className="font-display text-primary" style={{ fontSize: "2vw", fontWeight: 700 }}>Team Matcher</p>
              <p className="font-body text-text mt-[0.5vh]" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
                Skill-based discovery and cross-functional team formation with compatibility scoring
              </p>
            </div>
          </div>

          <div className="flex gap-[2vw] items-start">
            <p
              className="font-display text-accent"
              style={{ fontSize: "2.8vw", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}
            >
              03
            </p>
            <div>
              <p className="font-display text-primary" style={{ fontSize: "2vw", fontWeight: 700 }}>Progress Tracker</p>
              <p className="font-body text-text mt-[0.5vh]" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
                Milestone dashboards visible to students, advisors, and program staff
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderLeft: "0.2vw solid var(--slide-accent)", paddingLeft: "4vw" }}>
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.12em" }}
          >
            Supporting Modules
          </p>

          <div className="mb-[2.5vh] flex gap-[2vw] items-start">
            <p
              className="font-display text-accent"
              style={{ fontSize: "2.8vw", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}
            >
              04
            </p>
            <div>
              <p className="font-display text-primary" style={{ fontSize: "2vw", fontWeight: 700 }}>Resource Map</p>
              <p className="font-body text-text mt-[0.5vh]" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
                Curated directory of funding, tools, mentors, and lab spaces
              </p>
            </div>
          </div>

          <div className="mb-[2.5vh] flex gap-[2vw] items-start">
            <p
              className="font-display text-accent"
              style={{ fontSize: "2.8vw", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}
            >
              05
            </p>
            <div>
              <p className="font-display text-primary" style={{ fontSize: "2vw", fontWeight: 700 }}>Event Hub</p>
              <p className="font-body text-text mt-[0.5vh]" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
                Calendar, registration, and submission portal for Ideathons, Festivals, and external challenges
              </p>
            </div>
          </div>

          <div className="flex gap-[2vw] items-start">
            <p
              className="font-display text-accent"
              style={{ fontSize: "2.8vw", fontWeight: 900, lineHeight: 1, flexShrink: 0 }}
            >
              06
            </p>
            <div>
              <p className="font-display text-primary" style={{ fontSize: "2vw", fontWeight: 700 }}>Portfolio Archive</p>
              <p className="font-body text-text mt-[0.5vh]" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
                Persistent student innovation records spanning all four semesters
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
