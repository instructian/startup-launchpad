export default function Slide17Metrics() {
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
          Measuring Success
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-4 gap-[2vw]">
        <div
          style={{ borderTop: "0.4vh solid var(--slide-primary)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-primary mb-[1vh]"
            style={{ fontSize: "2vw", fontWeight: 800 }}
          >
            Participation
          </p>
          <p
            className="font-display text-accent leading-none mb-[1.5vh]"
            style={{ fontSize: "6vw", fontWeight: 900 }}
          >
            200
          </p>
          <p
            className="font-body text-text mb-[1.5vh]"
            style={{ fontSize: "1.5vw", lineHeight: 1.4 }}
          >
            enrolled students in pilot year across all four semesters
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}
          >
            Also tracked: retention rate semester-to-semester
          </p>
        </div>

        <div
          style={{ borderTop: "0.4vh solid var(--slide-primary)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-primary mb-[1vh]"
            style={{ fontSize: "2vw", fontWeight: 800 }}
          >
            Teams
          </p>
          <p
            className="font-display text-accent leading-none mb-[1.5vh]"
            style={{ fontSize: "6vw", fontWeight: 900 }}
          >
            40
          </p>
          <p
            className="font-body text-text mb-[1.5vh]"
            style={{ fontSize: "1.5vw", lineHeight: 1.4 }}
          >
            cross-functional teams formed by end of pilot year
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}
          >
            Also tracked: avg. team size; disciplines represented per team
          </p>
        </div>

        <div
          style={{ borderTop: "0.4vh solid var(--slide-primary)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-primary mb-[1vh]"
            style={{ fontSize: "2vw", fontWeight: 800 }}
          >
            Validation
          </p>
          <p
            className="font-display text-accent leading-none mb-[1.5vh]"
            style={{ fontSize: "6vw", fontWeight: 900 }}
          >
            10
          </p>
          <p
            className="font-body text-text mb-[1.5vh]"
            style={{ fontSize: "1.5vw", lineHeight: 1.4 }}
          >
            teams reaching Sunstone status in the pilot year
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}
          >
            Also tracked: external competition placements; industry meetings secured
          </p>
        </div>

        <div
          style={{ borderTop: "0.4vh solid var(--slide-accent)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-primary mb-[1vh]"
            style={{ fontSize: "2vw", fontWeight: 800 }}
          >
            Impact
          </p>
          <p
            className="font-display text-accent leading-none mb-[1.5vh]"
            style={{ fontSize: "6vw", fontWeight: 900 }}
          >
            3+
          </p>
          <p
            className="font-body text-text mb-[1.5vh]"
            style={{ fontSize: "1.5vw", lineHeight: 1.4 }}
          >
            ventures continuing beyond the program post-graduation
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}
          >
            Also tracked: alumni giving rate; press coverage; industry sponsor growth
          </p>
        </div>
      </div>
    </div>
  );
}
