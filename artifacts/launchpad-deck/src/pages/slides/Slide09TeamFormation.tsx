export default function Slide09TeamFormation() {
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
          Team Formation Model
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-[6vw]">
        <div>
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.12em" }}
          >
            How Teams Form
          </p>

          <div
            className="flex gap-[1.5vw] items-start mb-[2.8vh]"
          >
            <div
              style={{ width: "0.4vw", background: "var(--slide-accent)", borderRadius: "0.2vw", flexShrink: 0, marginTop: "0.4vh", height: "100%" }}
            />
            <div>
              <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 700 }}>Platform Matching</p>
              <p className="font-body text-text" style={{ fontSize: "1.6vw", lineHeight: 1.5 }}>
                The Launchpad tool matches students by skill, interest, and availability — reducing friction in the team discovery process.
              </p>
            </div>
          </div>

          <div className="flex gap-[1.5vw] items-start mb-[2.8vh]">
            <div
              style={{ width: "0.4vw", background: "var(--slide-accent)", borderRadius: "0.2vw", flexShrink: 0, marginTop: "0.4vh" }}
            />
            <div>
              <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 700 }}>Facilitated Speed Teaming</p>
              <p className="font-body text-text" style={{ fontSize: "1.6vw", lineHeight: 1.5 }}>
                Structured in-person sessions at the start of Semester 2 let students pitch ideas and form coalitions with guided facilitation.
              </p>
            </div>
          </div>

          <div className="flex gap-[1.5vw] items-start">
            <div
              style={{ width: "0.4vw", background: "var(--slide-accent)", borderRadius: "0.2vw", flexShrink: 0, marginTop: "0.4vh" }}
            />
            <div>
              <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 700 }}>Advisor Oversight</p>
              <p className="font-body text-text" style={{ fontSize: "1.6vw", lineHeight: 1.5 }}>
                Faculty advisors review team composition and flag gaps in coverage before teams lock in for the semester.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ borderLeft: "0.2vw solid var(--slide-accent)", paddingLeft: "4vw" }}
        >
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.12em" }}
          >
            Required Roles per Team
          </p>

          <div className="grid grid-cols-2 gap-[2vw]">
            <div
              style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 1.8vw" }}
            >
              <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Builder</p>
              <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "rgba(255,255,255,0.8)", marginTop: "0.6vh" }}>
                Engineering, CS, or product development
              </p>
            </div>
            <div
              style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 1.8vw" }}
            >
              <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Designer</p>
              <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "rgba(255,255,255,0.8)", marginTop: "0.6vh" }}>
                UX, visual, industrial, or service design
              </p>
            </div>
            <div
              style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 1.8vw" }}
            >
              <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Strategist</p>
              <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "rgba(255,255,255,0.8)", marginTop: "0.6vh" }}>
                Business, economics, or policy
              </p>
            </div>
            <div
              style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 1.8vw" }}
            >
              <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Domain Expert</p>
              <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "rgba(255,255,255,0.8)", marginTop: "0.6vh" }}>
                Subject-matter depth in the problem space
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
