export default function Slide16Calendar() {
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
          Pilot-Year Calendar
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="flex items-stretch gap-[0]" style={{ height: "52vh" }}>
        <div
          className="flex flex-col justify-between flex-1"
          style={{ background: "var(--slide-primary)", borderRadius: "0.5vw 0 0 0.5vw", padding: "3vh 2vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Phase 1</p>
            <p className="font-display text-white mt-[1vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Launch</p>
            <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginTop: "0.8vh" }}>Aug – Sep</p>
            <p className="font-body mt-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
              Program kickoff, student recruitment, faculty onboarding, platform launch
            </p>
          </div>
          <div
            style={{ height: "0.4vh", background: "rgba(212,136,42,0.5)", borderRadius: "0.2vw" }}
          />
        </div>

        <div
          style={{ width: "0.3vw", background: "var(--slide-accent)", flexShrink: 0 }}
        />

        <div
          className="flex flex-col justify-between flex-1"
          style={{ background: "var(--slide-primary)", padding: "3vh 2vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Phase 2</p>
            <p className="font-display text-white mt-[1vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Fall Ideathon</p>
            <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginTop: "0.8vh" }}>Oct</p>
            <p className="font-body mt-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
              90-second pitch event; 150+ students, 30 judges; team formation begins
            </p>
          </div>
          <div
            style={{ height: "0.4vh", background: "rgba(212,136,42,0.5)", borderRadius: "0.2vw" }}
          />
        </div>

        <div
          style={{ width: "0.3vw", background: "var(--slide-accent)", flexShrink: 0 }}
        />

        <div
          className="flex flex-col justify-between flex-1"
          style={{ background: "var(--slide-primary)", padding: "3vh 2vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Phase 3</p>
            <p className="font-display text-white mt-[1vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Spring Build</p>
            <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginTop: "0.8vh" }}>Jan – Feb</p>
            <p className="font-body mt-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
              Prototype development sprints; Sunstone qualification; industry mentor sessions
            </p>
          </div>
          <div
            style={{ height: "0.4vh", background: "rgba(212,136,42,0.5)", borderRadius: "0.2vw" }}
          />
        </div>

        <div
          style={{ width: "0.3vw", background: "var(--slide-accent)", flexShrink: 0 }}
        />

        <div
          className="flex flex-col justify-between flex-1"
          style={{ background: "var(--slide-accent)", padding: "3vh 2vw" }}
        >
          <div>
            <p className="font-display text-white" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>Phase 4</p>
            <p className="font-display text-white mt-[1vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Innovation Festival</p>
            <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.65)", letterSpacing: "0.08em", marginTop: "0.8vh" }}>Mar</p>
            <p className="font-body mt-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.9)" }}>
              Public showcase; 200+ attendees; pitch finals; awards ceremony
            </p>
          </div>
          <div
            style={{ height: "0.4vh", background: "rgba(255,255,255,0.5)", borderRadius: "0.2vw" }}
          />
        </div>

        <div
          style={{ width: "0.3vw", background: "rgba(255,255,255,0.6)", flexShrink: 0 }}
        />

        <div
          className="flex flex-col justify-between flex-1"
          style={{ background: "var(--slide-primary)", borderRadius: "0 0.5vw 0.5vw 0", padding: "3vh 2vw" }}
        >
          <div>
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Phase 5</p>
            <p className="font-display text-white mt-[1vh]" style={{ fontSize: "2.2vw", fontWeight: 800 }}>Capstone</p>
            <p className="font-body uppercase" style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", marginTop: "0.8vh" }}>Apr – May</p>
            <p className="font-body mt-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
              Year-end retrospective; Contributor onboarding; program refinement for Year 2
            </p>
          </div>
          <div
            style={{ height: "0.4vh", background: "rgba(212,136,42,0.5)", borderRadius: "0.2vw" }}
          />
        </div>
      </div>
    </div>
  );
}
