export default function Slide14Benchmarks() {
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
          External Challenge Benchmarks
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
        <p className="font-body text-text mt-[1.5vh]" style={{ fontSize: "1.6vw" }}>
          Competitions our students will be prepared to enter by Semester 3.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[2vw]">
        <div style={{ borderTop: "0.35vh solid var(--slide-accent)", paddingTop: "2.5vh" }}>
          <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Harvard New Venture Competition</p>
          <p className="font-body text-text mb-[1vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>
            National student startup competition open to any university. Launchpad teams eligible starting Semester 3.
          </p>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}>National · Annual</p>
        </div>

        <div style={{ borderTop: "0.35vh solid var(--slide-accent)", paddingTop: "2.5vh" }}>
          <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>MIT $100K Entrepreneurship Competition</p>
          <p className="font-body text-text mb-[1vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>
            One of the longest-running student startup competitions. High visibility for Sunstone-track teams.
          </p>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}>National · Annual</p>
        </div>

        <div style={{ borderTop: "0.35vh solid var(--slide-accent)", paddingTop: "2.5vh" }}>
          <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Collegiate Inventors Competition</p>
          <p className="font-body text-text mb-[1vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>
            USPTO-recognized competition for student innovation with clear IP development requirements — strong fit for Semester 3 prototype teams.
          </p>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}>National · Annual</p>
        </div>

        <div style={{ borderTop: "0.35vh solid rgba(212,136,42,0.4)", paddingTop: "2.5vh" }}>
          <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Google for Startups Accelerator</p>
          <p className="font-body text-text mb-[1vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>
            Mentorship and cloud credit program. Post-Festival teams may apply directly with Smith Center endorsement letters.
          </p>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}>National · Rolling</p>
        </div>

        <div style={{ borderTop: "0.35vh solid rgba(212,136,42,0.4)", paddingTop: "2.5vh" }}>
          <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Regional Pitch Circuits</p>
          <p className="font-body text-text mb-[1vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>
            State and metro-level competitions provide lower-stakes experience for Semester 2 teams preparing for national events.
          </p>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}>Regional · Ongoing</p>
        </div>

        <div style={{ borderTop: "0.35vh solid rgba(212,136,42,0.4)", paddingTop: "2.5vh" }}>
          <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Industry-Sponsored Challenges</p>
          <p className="font-body text-text mb-[1vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>
            Corporate partners co-create challenge briefs. Teams that place receive direct recruiting consideration and potential licensing discussions.
          </p>
          <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}>Partner-Driven · Semester</p>
        </div>
      </div>
    </div>
  );
}
