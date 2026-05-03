export default function Slide15Resources() {
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
          Resource Infrastructure
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.2vh" }}
        />
      </div>

      <div className="grid grid-cols-3 gap-[2vw]">
        <div
          style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 2vw" }}
        >
          <p className="font-display text-accent mb-[1vh]" style={{ fontSize: "1.9vw", fontWeight: 800 }}>Space</p>
          <div className="mb-[1vh]">
            <p className="font-display text-white" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Innovation Lab</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginTop: "0.4vh" }}>Open-access collaboration and prototyping space with equipment booking</p>
          </div>
          <div>
            <p className="font-display text-white" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Meeting Suites</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginTop: "0.4vh" }}>Reservable team rooms with screens for weekly advisor meetings</p>
          </div>
        </div>

        <div
          style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 2vw" }}
        >
          <p className="font-display text-accent mb-[1vh]" style={{ fontSize: "1.9vw", fontWeight: 800 }}>People</p>
          <div className="mb-[1vh]">
            <p className="font-display text-white" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Faculty Advisors</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginTop: "0.4vh" }}>Assigned per team, drawn from 6 participating departments across campus</p>
          </div>
          <div>
            <p className="font-display text-white" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Industry Mentors</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginTop: "0.4vh" }}>Network of 40+ practitioners available for monthly office hours</p>
          </div>
        </div>

        <div
          style={{ background: "var(--slide-primary)", borderRadius: "0.5vw", padding: "2vh 2vw" }}
        >
          <p className="font-display text-accent mb-[1vh]" style={{ fontSize: "1.9vw", fontWeight: 800 }}>Funding</p>
          <div className="mb-[1vh]">
            <p className="font-display text-white" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Micro-Grants</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginTop: "0.4vh" }}>Up to $500 per team for materials, user research, and event fees</p>
          </div>
          <div>
            <p className="font-display text-white" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Competition Prizes</p>
            <p className="font-body" style={{ fontSize: "1.5vw", lineHeight: 1.35, color: "rgba(255,255,255,0.78)", marginTop: "0.4vh" }}>Ideathon and Festival award pools totaling $12,000 annually</p>
          </div>
        </div>

        <div
          style={{ background: "rgba(13,34,64,0.07)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "0.15vw solid rgba(13,34,64,0.15)" }}
        >
          <p className="font-display text-primary mb-[1vh]" style={{ fontSize: "1.9vw", fontWeight: 800 }}>Tools</p>
          <div className="mb-[1vh]">
            <p className="font-display text-primary" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Launchpad Platform</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35, marginTop: "0.4vh" }}>Proposal builder, team matcher, progress tracker, and portfolio archive</p>
          </div>
          <div>
            <p className="font-display text-primary" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Fabrication Access</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35, marginTop: "0.4vh" }}>3D printers, laser cutters, and electronics kits in the Innovation Lab</p>
          </div>
        </div>

        <div
          style={{ background: "rgba(13,34,64,0.07)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "0.15vw solid rgba(13,34,64,0.15)" }}
        >
          <p className="font-display text-primary mb-[1vh]" style={{ fontSize: "1.9vw", fontWeight: 800 }}>Curriculum</p>
          <div className="mb-[1vh]">
            <p className="font-display text-primary" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Academic Credit</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35, marginTop: "0.4vh" }}>1–3 credit hours per semester via designated Innovation Practicum courses</p>
          </div>
          <div>
            <p className="font-display text-primary" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Workshop Series</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35, marginTop: "0.4vh" }}>Monthly workshops: pitching, financial modeling, design thinking, IP basics</p>
          </div>
        </div>

        <div
          style={{ background: "rgba(13,34,64,0.07)", borderRadius: "0.5vw", padding: "2vh 2vw", border: "0.15vw solid rgba(13,34,64,0.15)" }}
        >
          <p className="font-display text-primary mb-[1vh]" style={{ fontSize: "1.9vw", fontWeight: 800 }}>Events</p>
          <div className="mb-[1vh]">
            <p className="font-display text-primary" style={{ fontSize: "1.6vw", fontWeight: 700 }}>Signature Events</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35, marginTop: "0.4vh" }}>Fall Ideathon and Spring Innovation Festival as semester anchors</p>
          </div>
          <div>
            <p className="font-display text-primary" style={{ fontSize: "1.6vw", fontWeight: 700 }}>External Challenges</p>
            <p className="font-body text-text" style={{ fontSize: "1.5vw", lineHeight: 1.35, marginTop: "0.4vh" }}>Regional and national competitions curated by semester stage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
