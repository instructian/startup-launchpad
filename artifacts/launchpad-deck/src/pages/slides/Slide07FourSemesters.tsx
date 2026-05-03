export default function Slide07FourSemesters() {
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
          Four-Semester Roadmap
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-4 gap-[2vw]">
        <div>
          <div
            style={{ background: "var(--slide-primary)", borderRadius: "0.4vw 0.4vw 0 0", padding: "1.8vh 2vw" }}
          >
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Semester 1</p>
            <p className="font-display text-white" style={{ fontSize: "2.4vw", fontWeight: 800 }}>Exploration</p>
          </div>
          <div
            style={{ border: "0.15vw solid rgba(13,34,64,0.15)", borderTop: "none", borderRadius: "0 0 0.4vw 0.4vw", padding: "2vh 2vw" }}
          >
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Theme</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Build curiosity and community; find your innovation interest</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Deliverable</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Innovation Interest Profile and team wishlist</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Signature Event</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "var(--slide-accent)", fontWeight: 600 }}>Fall Ideathon</p>
          </div>
        </div>

        <div>
          <div
            style={{ background: "var(--slide-primary)", borderRadius: "0.4vw 0.4vw 0 0", padding: "1.8vh 2vw" }}
          >
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Semester 2</p>
            <p className="font-display text-white" style={{ fontSize: "2.4vw", fontWeight: 800 }}>Collaboration</p>
          </div>
          <div
            style={{ border: "0.15vw solid rgba(13,34,64,0.15)", borderTop: "none", borderRadius: "0 0 0.4vw 0.4vw", padding: "2vh 2vw" }}
          >
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Theme</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Form cross-functional teams; build and test a prototype</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Deliverable</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Working prototype and initial user feedback report</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Signature Event</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "var(--slide-accent)", fontWeight: 600 }}>Spring Innovation Festival</p>
          </div>
        </div>

        <div>
          <div
            style={{ background: "var(--slide-primary)", borderRadius: "0.4vw 0.4vw 0 0", padding: "1.8vh 2vw" }}
          >
            <p className="font-display text-accent" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Semester 3</p>
            <p className="font-display text-white" style={{ fontSize: "2.4vw", fontWeight: 800 }}>Acceleration</p>
          </div>
          <div
            style={{ border: "0.15vw solid rgba(13,34,64,0.15)", borderTop: "none", borderRadius: "0 0 0.4vw 0.4vw", padding: "2vh 2vw" }}
          >
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Theme</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Pursue Sunstone path; validate market and business model</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Deliverable</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Market validation report and investor-ready pitch deck</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Signature Event</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "var(--slide-accent)", fontWeight: 600 }}>External Challenge Competitions</p>
          </div>
        </div>

        <div>
          <div
            style={{ background: "var(--slide-accent)", borderRadius: "0.4vw 0.4vw 0 0", padding: "1.8vh 2vw" }}
          >
            <p className="font-display text-white" style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.8 }}>Semester 4</p>
            <p className="font-display text-white" style={{ fontSize: "2.4vw", fontWeight: 800 }}>Contribution</p>
          </div>
          <div
            style={{ border: "0.15vw solid rgba(13,34,64,0.15)", borderTop: "none", borderRadius: "0 0 0.4vw 0.4vw", padding: "2vh 2vw" }}
          >
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Theme</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Mentor juniors, lead events, and give back to the ecosystem</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Deliverable</p>
            <p className="font-body text-text mb-[2vh]" style={{ fontSize: "1.5vw", lineHeight: 1.4 }}>Mentorship portfolio and program retrospective</p>
            <p className="font-body text-text mb-[1.5vh]" style={{ fontSize: "1.55vw", fontWeight: 600 }}>Signature Event</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.4, color: "var(--slide-accent)", fontWeight: 600 }}>Capstone Showcase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
