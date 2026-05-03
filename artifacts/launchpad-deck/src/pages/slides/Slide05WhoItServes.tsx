export default function Slide05WhoItServes() {
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
          Who the Program Serves
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-4 gap-[2vw]">
        <div
          style={{
            borderTop: "0.4vh solid var(--slide-accent)",
            paddingTop: "2.5vh",
          }}
        >
          <p
            className="font-display text-accent mb-[1vh]"
            style={{ fontSize: "2.8vw", fontWeight: 900 }}
          >
            Explorer
          </p>
          <p
            className="font-body uppercase tracking-widest mb-[1.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}
          >
            Semester 1
          </p>
          <p
            className="font-body text-text"
            style={{ fontSize: "1.6vw", lineHeight: 1.5 }}
          >
            Curious about entrepreneurship. No prior experience required. Seeks a low-stakes entry point with real community.
          </p>
        </div>

        <div
          style={{
            borderTop: "0.4vh solid var(--slide-accent)",
            paddingTop: "2.5vh",
          }}
        >
          <p
            className="font-display text-accent mb-[1vh]"
            style={{ fontSize: "2.8vw", fontWeight: 900 }}
          >
            Builder
          </p>
          <p
            className="font-body uppercase tracking-widest mb-[1.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}
          >
            Semesters 1–2
          </p>
          <p
            className="font-body text-text"
            style={{ fontSize: "1.6vw", lineHeight: 1.5 }}
          >
            Has an idea or a skill. Ready to collaborate, form a cross-functional team, and ship a first prototype.
          </p>
        </div>

        <div
          style={{
            borderTop: "0.4vh solid var(--slide-accent)",
            paddingTop: "2.5vh",
          }}
        >
          <p
            className="font-display text-accent mb-[1vh]"
            style={{ fontSize: "2.8vw", fontWeight: 900 }}
          >
            Accelerator
          </p>
          <p
            className="font-body uppercase tracking-widest mb-[1.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}
          >
            Semesters 2–3
          </p>
          <p
            className="font-body text-text"
            style={{ fontSize: "1.6vw", lineHeight: 1.5 }}
          >
            Pursuing the Sunstone validation pathway. Market-testing a venture with faculty and industry mentor support.
          </p>
        </div>

        <div
          style={{
            borderTop: "0.4vh solid var(--slide-accent)",
            paddingTop: "2.5vh",
          }}
        >
          <p
            className="font-display text-accent mb-[1vh]"
            style={{ fontSize: "2.8vw", fontWeight: 900 }}
          >
            Contributor
          </p>
          <p
            className="font-body uppercase tracking-widest mb-[1.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.1em" }}
          >
            Semester 4
          </p>
          <p
            className="font-body text-text"
            style={{ fontSize: "1.6vw", lineHeight: 1.5 }}
          >
            Alumni of the program. Mentors incoming cohorts, judges at events, and represents Launchpad externally.
          </p>
        </div>
      </div>

      <p
        className="font-body mt-[4vh]"
        style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}
      >
        Students may enter at any stage — the program meets them where they are.
      </p>
    </div>
  );
}
