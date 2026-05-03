export default function Slide12Festival() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-center px-[8vw]"
      style={{ background: "var(--slide-bg)" }}
    >
      <div className="mb-[3.5vh]">
        <p
          className="font-body uppercase tracking-widest mb-[1.5vh]"
          style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.18em" }}
        >
          Signature Event — Spring Semester
        </p>
        <h2
          className="font-display text-primary tracking-tight"
          style={{ fontSize: "5vw", fontWeight: 900 }}
        >
          Spring Innovation Festival
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
            Event Structure
          </p>
          <div className="mb-[2.5vh]">
            <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 700 }}>Morning: Open Exhibition</p>
            <p className="font-body text-text" style={{ fontSize: "1.6vw", lineHeight: 1.4 }}>
              All teams display prototype demos, posters, and validation data. Open to the university and invited industry guests.
            </p>
          </div>
          <div className="mb-[2.5vh]">
            <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 700 }}>Afternoon: Pitch Finals</p>
            <p className="font-body text-text" style={{ fontSize: "1.6vw", lineHeight: 1.4 }}>
              Top 10 teams selected by judges present 3-minute pitches to a panel of faculty, alumni investors, and industry partners.
            </p>
          </div>
          <div>
            <p className="font-display text-primary mb-[0.8vh]" style={{ fontSize: "2vw", fontWeight: 700 }}>Evening: Awards Ceremony</p>
            <p className="font-body text-text" style={{ fontSize: "1.6vw", lineHeight: 1.4 }}>
              Best Concept, Best Prototype, Best Market Case, and the Sunstone Advancement Award presented publicly.
            </p>
          </div>
        </div>

        <div style={{ borderLeft: "0.2vw solid var(--slide-accent)", paddingLeft: "4vw" }}>
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.12em" }}
          >
            Why It Matters
          </p>
          <p
            className="font-body text-text mb-[2.5vh]"
            style={{ fontSize: "1.8vw", lineHeight: 1.55 }}
          >
            The Festival is the program's most visible public moment — the proof point that Launchpad produces tangible, presentation-ready ventures.
          </p>
          <p
            className="font-body text-text mb-[2.5vh]"
            style={{ fontSize: "1.8vw", lineHeight: 1.55 }}
          >
            Industry attendance creates direct recruiting, mentorship, and sponsorship pathways for teams.
          </p>

          <div className="flex gap-[4vw]">
            <div>
              <p className="font-display text-primary leading-none" style={{ fontSize: "4vw", fontWeight: 900 }}>200+</p>
              <p className="font-body" style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}>attendees projected</p>
            </div>
            <div>
              <p className="font-display text-primary leading-none" style={{ fontSize: "4vw", fontWeight: 900 }}>Mar</p>
              <p className="font-body" style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}>spring semester</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
