export default function Slide19Ask() {
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
          University Approval Requested
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
        <p className="font-body text-text mt-[1.5vh]" style={{ fontSize: "1.6vw" }}>
          Six approvals required to launch the pilot year in Fall 2025.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[2.5vw]">
        <div
          className="flex gap-[2vw] items-start"
          style={{ borderLeft: "0.4vh solid var(--slide-accent)", paddingLeft: "2vw", paddingTop: "0.5vh", paddingBottom: "0.5vh" }}
        >
          <div>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Curricular Integration</p>
            <p className="font-body text-text" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
              Establish 1–3 credit Innovation Practicum course designation in the undergraduate catalog, with cross-departmental acceptance
            </p>
          </div>
        </div>

        <div
          className="flex gap-[2vw] items-start"
          style={{ borderLeft: "0.4vh solid var(--slide-accent)", paddingLeft: "2vw", paddingTop: "0.5vh", paddingBottom: "0.5vh" }}
        >
          <div>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Physical Space Allocation</p>
            <p className="font-body text-text" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
              Assign 2,000 sq ft of Innovation Lab space and 4 reservable meeting suites to the program for the pilot year
            </p>
          </div>
        </div>

        <div
          className="flex gap-[2vw] items-start"
          style={{ borderLeft: "0.4vh solid rgba(212,136,42,0.4)", paddingLeft: "2vw", paddingTop: "0.5vh", paddingBottom: "0.5vh" }}
        >
          <div>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Seed Funding Budget</p>
            <p className="font-body text-text" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
              Approve $85,000 pilot-year operating budget covering staff, micro-grants, event costs, and platform infrastructure
            </p>
          </div>
        </div>

        <div
          className="flex gap-[2vw] items-start"
          style={{ borderLeft: "0.4vh solid rgba(212,136,42,0.4)", paddingLeft: "2vw", paddingTop: "0.5vh", paddingBottom: "0.5vh" }}
        >
          <div>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>Faculty Coordinator Role</p>
            <p className="font-body text-text" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
              Authorize one 0.5 FTE faculty coordinator position and a stipend structure for participating advisors at 4+ teams
            </p>
          </div>
        </div>

        <div
          className="flex gap-[2vw] items-start"
          style={{ borderLeft: "0.4vh solid rgba(212,136,42,0.25)", paddingLeft: "2vw", paddingTop: "0.5vh", paddingBottom: "0.5vh" }}
        >
          <div>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>IT Infrastructure Access</p>
            <p className="font-body text-text" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
              Provision Launchpad platform under university SSO, with integration into the student information and advising systems
            </p>
          </div>
        </div>

        <div
          className="flex gap-[2vw] items-start"
          style={{ borderLeft: "0.4vh solid rgba(212,136,42,0.25)", paddingLeft: "2vw", paddingTop: "0.5vh", paddingBottom: "0.5vh" }}
        >
          <div>
            <p className="font-display text-primary mb-[0.6vh]" style={{ fontSize: "2vw", fontWeight: 800 }}>External Partnership Endorsement</p>
            <p className="font-body text-text" style={{ fontSize: "1.55vw", lineHeight: 1.4 }}>
              University co-sign on industry challenge briefs and competition endorsement letters sent on behalf of Launchpad teams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
