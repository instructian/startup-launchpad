export default function Slide13Sunstone() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-center px-[8vw]"
      style={{ background: "var(--slide-bg)" }}
    >
      <div className="mb-[4vh]">
        <h2
          className="font-display text-primary tracking-tight"
          style={{ fontSize: "4.2vw", fontWeight: 800 }}
        >
          The Sunstone Validation Pathway
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
        <p
          className="font-body text-text mt-[1.5vh]"
          style={{ fontSize: "1.7vw", lineHeight: 1.4 }}
        >
          For teams ready to pursue serious market validation and external competition.
        </p>
      </div>

      <div className="flex items-stretch gap-[0] relative" style={{ height: "44vh" }}>
        <div
          className="flex-1 flex flex-col justify-between"
          style={{ background: "var(--slide-primary)", borderRadius: "0.5vw 0 0 0.5vw", padding: "3vh 2.5vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "4.5vw", fontWeight: 900, lineHeight: 1, opacity: 0.4 }}>I</p>
            <p className="font-display text-white mt-[1.5vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Qualification</p>
            <p className="font-body mt-[1.5vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.78)" }}>
              Team submits a proposal demonstrating market problem, early traction, and team coverage. Faculty panel reviews for Sunstone eligibility.
            </p>
          </div>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}>Semester 2 — End</p>
        </div>

        <div
          style={{ width: "0.4vw", background: "var(--slide-accent)", flexShrink: 0 }}
        />

        <div
          className="flex-1 flex flex-col justify-between"
          style={{ background: "var(--slide-primary)", padding: "3vh 2.5vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "4.5vw", fontWeight: 900, lineHeight: 1, opacity: 0.4 }}>II</p>
            <p className="font-display text-white mt-[1.5vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Customer Discovery</p>
            <p className="font-body mt-[1.5vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.78)" }}>
              50 structured customer interviews. Teams document findings using a standardized research template reviewed by assigned industry mentors.
            </p>
          </div>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}>Semester 3 — Early</p>
        </div>

        <div
          style={{ width: "0.4vw", background: "var(--slide-accent)", flexShrink: 0 }}
        />

        <div
          className="flex-1 flex flex-col justify-between"
          style={{ background: "var(--slide-primary)", padding: "3vh 2.5vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "4.5vw", fontWeight: 900, lineHeight: 1, opacity: 0.4 }}>III</p>
            <p className="font-display text-white mt-[1.5vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Prototype Validation</p>
            <p className="font-body mt-[1.5vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.78)" }}>
              Working MVP or testable prototype. Minimum 25 beta users or pilot participants. Results submitted to faculty panel.
            </p>
          </div>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}>Semester 3 — Mid</p>
        </div>

        <div
          style={{ width: "0.4vw", background: "var(--slide-accent)", flexShrink: 0 }}
        />

        <div
          className="flex-1 flex flex-col justify-between"
          style={{ background: "var(--slide-accent)", borderRadius: "0 0.5vw 0.5vw 0", padding: "3vh 2.5vw" }}
        >
          <div>
            <p className="font-display text-white" style={{ fontSize: "4.5vw", fontWeight: 900, lineHeight: 1, opacity: 0.4 }}>IV</p>
            <p className="font-display text-white mt-[1.5vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Festival Advancement</p>
            <p className="font-body mt-[1.5vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.88)" }}>
              Sunstone teams receive priority placement in Festival pitch finals and introductions to the Smith Center's external investor network.
            </p>
          </div>
          <p className="font-body uppercase text-white" style={{ fontSize: "1.5vw", opacity: 0.8, letterSpacing: "0.1em" }}>Spring Festival</p>
        </div>
      </div>
    </div>
  );
}
