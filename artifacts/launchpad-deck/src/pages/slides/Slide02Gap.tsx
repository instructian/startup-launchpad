export default function Slide02Gap() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-center px-[8vw]"
      style={{ background: "var(--slide-bg)" }}
    >
      <div className="mb-[3vh]">
        <h2
          className="font-display text-primary tracking-tight"
          style={{ fontSize: "4.2vw", fontWeight: 800 }}
        >
          The Student Innovation Gap
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-[6vw]">
        <div>
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.14em" }}
          >
            The Challenge
          </p>
          <div className="mb-[3vh]">
            <p
              className="font-display text-primary leading-none"
              style={{ fontSize: "4vw", fontWeight: 800 }}
            >
              76%
            </p>
            <p
              className="font-body text-text mt-[0.8vh]"
              style={{ fontSize: "1.65vw", lineHeight: 1.4 }}
            >
              of students want entrepreneurship experience but find no structured path
            </p>
          </div>
          <div className="mb-[3vh]">
            <p
              className="font-display text-primary leading-none"
              style={{ fontSize: "4vw", fontWeight: 800 }}
            >
              1 in 4
            </p>
            <p
              className="font-body text-text mt-[0.8vh]"
              style={{ fontSize: "1.65vw", lineHeight: 1.4 }}
            >
              student ventures fails to form a cross-functional team
            </p>
          </div>
          <div>
            <p
              className="font-display text-primary leading-none"
              style={{ fontSize: "4vw", fontWeight: 800 }}
            >
              Fragmented
            </p>
            <p
              className="font-body text-text mt-[0.8vh]"
              style={{ fontSize: "1.65vw", lineHeight: 1.4 }}
            >
              innovation programs rarely connect to academic credit or faculty advisors
            </p>
          </div>
        </div>

        <div
          style={{
            borderLeft: "0.2vw solid var(--slide-accent)",
            paddingLeft: "4vw",
          }}
        >
          <p
            className="font-body uppercase tracking-widest mb-[2.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)", letterSpacing: "0.14em" }}
          >
            The Opportunity
          </p>
          <p
            className="font-body text-text mb-[3vh]"
            style={{ fontSize: "1.8vw", lineHeight: 1.55 }}
          >
            A structured, semester-by-semester curriculum that meets students where they are — and builds toward real outcomes.
          </p>
          <p
            className="font-body text-text mb-[3vh]"
            style={{ fontSize: "1.8vw", lineHeight: 1.55 }}
          >
            Cross-disciplinary teams, faculty mentorship, and signature events create an innovation ecosystem rather than a standalone elective.
          </p>
          <p
            className="font-body text-text"
            style={{ fontSize: "1.8vw", lineHeight: 1.55 }}
          >
            The Smith Center is uniquely positioned to anchor this transformation across campus.
          </p>
        </div>
      </div>
    </div>
  );
}
