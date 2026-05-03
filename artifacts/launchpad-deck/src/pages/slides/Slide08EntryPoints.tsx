export default function Slide08EntryPoints() {
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
          Flexible Entry Points
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-[2.5vw]" style={{ height: "55vh" }}>
        <div
          className="flex flex-col justify-between"
          style={{ background: "var(--slide-primary)", borderRadius: "0.6vw", padding: "3vh 3vw" }}
        >
          <div>
            <p
              className="font-display text-accent uppercase tracking-widest mb-[1.2vh]"
              style={{ fontSize: "1.5vw", letterSpacing: "0.12em" }}
            >
              Track A
            </p>
            <p
              className="font-display text-white mb-[2vh]"
              style={{ fontSize: "2.6vw", fontWeight: 800 }}
            >
              Fresh Start
            </p>
            <p
              className="font-body"
              style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}
            >
              New students or those with no prior innovation experience. Begin in Semester 1 with the full exploration curriculum and community onboarding.
            </p>
          </div>
          <p
            className="font-body uppercase tracking-widest"
            style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}
          >
            Entry: Semester 1
          </p>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{ background: "var(--slide-primary)", borderRadius: "0.6vw", padding: "3vh 3vw" }}
        >
          <div>
            <p
              className="font-display text-accent uppercase tracking-widest mb-[1.2vh]"
              style={{ fontSize: "1.5vw", letterSpacing: "0.12em" }}
            >
              Track B
            </p>
            <p
              className="font-display text-white mb-[2vh]"
              style={{ fontSize: "2.6vw", fontWeight: 800 }}
            >
              Idea-First
            </p>
            <p
              className="font-body"
              style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}
            >
              Students with an existing concept. Assessed and placed directly into Semester 2 team formation and prototype phase with advisor guidance.
            </p>
          </div>
          <p
            className="font-body uppercase tracking-widest"
            style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}
          >
            Entry: Semester 2
          </p>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{ background: "rgba(13,34,64,0.08)", borderRadius: "0.6vw", padding: "3vh 3vw", border: "0.15vw solid rgba(13,34,64,0.18)" }}
        >
          <div>
            <p
              className="font-display text-accent uppercase tracking-widest mb-[1.2vh]"
              style={{ fontSize: "1.5vw", letterSpacing: "0.12em" }}
            >
              Track C
            </p>
            <p
              className="font-display text-primary mb-[2vh]"
              style={{ fontSize: "2.6vw", fontWeight: 800 }}
            >
              Transfer-In
            </p>
            <p
              className="font-body text-text"
              style={{ fontSize: "1.6vw", lineHeight: 1.5 }}
            >
              Students from other universities or accelerators. Recognized experience maps to Semester 3 acceleration and Sunstone eligibility.
            </p>
          </div>
          <p
            className="font-body uppercase tracking-widest"
            style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}
          >
            Entry: Semester 3
          </p>
        </div>

        <div
          className="flex flex-col justify-between"
          style={{ background: "rgba(13,34,64,0.08)", borderRadius: "0.6vw", padding: "3vh 3vw", border: "0.15vw solid rgba(13,34,64,0.18)" }}
        >
          <div>
            <p
              className="font-display text-accent uppercase tracking-widest mb-[1.2vh]"
              style={{ fontSize: "1.5vw", letterSpacing: "0.12em" }}
            >
              Track D
            </p>
            <p
              className="font-display text-primary mb-[2vh]"
              style={{ fontSize: "2.6vw", fontWeight: 800 }}
            >
              Alumni Return
            </p>
            <p
              className="font-body text-text"
              style={{ fontSize: "1.6vw", lineHeight: 1.5 }}
            >
              Program graduates who wish to mentor, judge, or advise. Enters directly at Semester 4 as a Contributor with formal recognition.
            </p>
          </div>
          <p
            className="font-body uppercase tracking-widest"
            style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.1em" }}
          >
            Entry: Semester 4
          </p>
        </div>
      </div>
    </div>
  );
}
