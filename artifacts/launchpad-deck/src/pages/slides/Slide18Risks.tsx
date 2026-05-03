export default function Slide18Risks() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col pt-[5vh] px-[8vw]"
      style={{ background: "var(--slide-bg)" }}
    >
      <div className="mb-[2.5vh]">
        <h2
          className="font-display text-primary tracking-tight"
          style={{ fontSize: "4vw", fontWeight: 800 }}
        >
          Risk Register
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.2vh" }}
        />
      </div>

      <div style={{ border: "0.15vw solid rgba(13,34,64,0.15)", borderRadius: "0.6vw", overflow: "hidden" }}>
        <div
          className="grid grid-cols-3"
          style={{ background: "var(--slide-primary)", padding: "1.5vh 2.5vw" }}
        >
          <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Risk</p>
          <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Likelihood</p>
          <p className="font-display text-accent" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Mitigation</p>
        </div>

        <div
          className="grid grid-cols-3"
          style={{ padding: "2vh 2.5vw", borderBottom: "0.15vw solid rgba(13,34,64,0.1)" }}
        >
          <div style={{ paddingRight: "2vw" }}>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "1.7vw", fontWeight: 700 }}>Low initial enrollment</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
              First-year cohort fails to reach 200 students without sufficient marketing
            </p>
          </div>
          <div style={{ paddingRight: "2vw" }}>
            <div
              style={{ display: "inline-block", background: "rgba(212,136,42,0.15)", border: "0.15vw solid var(--slide-accent)", borderRadius: "2vw", padding: "0.4vh 1.5vw" }}
            >
              <p className="font-body" style={{ fontSize: "1.5vw", color: "var(--slide-accent)", fontWeight: 600 }}>Medium</p>
            </div>
          </div>
          <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
            Partner with 4 departments for cohort seeding; offer course credit as an enrollment incentive
          </p>
        </div>

        <div
          className="grid grid-cols-3"
          style={{ padding: "2vh 2.5vw", borderBottom: "0.15vw solid rgba(13,34,64,0.1)", background: "rgba(13,34,64,0.03)" }}
        >
          <div style={{ paddingRight: "2vw" }}>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "1.7vw", fontWeight: 700 }}>Faculty bandwidth</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
              Advisor load too high for effective mentorship without dedicated release time
            </p>
          </div>
          <div style={{ paddingRight: "2vw" }}>
            <div
              style={{ display: "inline-block", background: "rgba(212,136,42,0.15)", border: "0.15vw solid var(--slide-accent)", borderRadius: "2vw", padding: "0.4vh 1.5vw" }}
            >
              <p className="font-body" style={{ fontSize: "1.5vw", color: "var(--slide-accent)", fontWeight: 600 }}>Medium</p>
            </div>
          </div>
          <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
            Cap faculty advising load at 4 teams; pair with industry mentors to share the load
          </p>
        </div>

        <div
          className="grid grid-cols-3"
          style={{ padding: "2vh 2.5vw", borderBottom: "0.15vw solid rgba(13,34,64,0.1)" }}
        >
          <div style={{ paddingRight: "2vw" }}>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "1.7vw", fontWeight: 700 }}>Platform adoption</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
              Students default to familiar tools and bypass the Launchpad platform
            </p>
          </div>
          <div style={{ paddingRight: "2vw" }}>
            <div
              style={{ display: "inline-block", background: "rgba(13,34,64,0.08)", border: "0.15vw solid rgba(13,34,64,0.3)", borderRadius: "2vw", padding: "0.4vh 1.5vw" }}
            >
              <p className="font-body" style={{ fontSize: "1.5vw", color: "var(--slide-text)", fontWeight: 600 }}>Low</p>
            </div>
          </div>
          <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
            Milestone submissions and advisor check-ins are platform-gated; UX pilot before launch
          </p>
        </div>

        <div
          className="grid grid-cols-3"
          style={{ padding: "2vh 2.5vw", background: "rgba(13,34,64,0.03)" }}
        >
          <div style={{ paddingRight: "2vw" }}>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "1.7vw", fontWeight: 700 }}>Funding gap in Year 2</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
              Pilot seed funding runs out before corporate sponsorship is secured
            </p>
          </div>
          <div style={{ paddingRight: "2vw" }}>
            <div
              style={{ display: "inline-block", background: "rgba(212,136,42,0.15)", border: "0.15vw solid var(--slide-accent)", borderRadius: "2vw", padding: "0.4vh 1.5vw" }}
            >
              <p className="font-body" style={{ fontSize: "1.5vw", color: "var(--slide-accent)", fontWeight: 600 }}>Medium</p>
            </div>
          </div>
          <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35 }}>
            Begin sponsorship outreach in Month 3; target 2 anchor sponsors before year end
          </p>
        </div>
      </div>
    </div>
  );
}
