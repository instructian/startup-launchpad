export default function Slide20Close() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-between px-[8vw] py-[6vh]"
      style={{ background: "var(--slide-dark, #071628)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "0.5vh", background: "var(--slide-accent)" }}
      />

      <div>
        <p
          className="font-body uppercase tracking-widest"
          style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.18em" }}
        >
          Smith Center for Innovation
        </p>
      </div>

      <div>
        <h2
          className="font-display text-white tracking-tight leading-tight mb-[3vh]"
          style={{ fontSize: "5.5vw", fontWeight: 900, maxWidth: "72vw", textWrap: "balance" }}
        >
          The Next Generation of University Innovation Starts Here.
        </h2>
        <div
          style={{ height: "0.45vh", background: "var(--slide-accent)", width: "10vw" }}
          className="mb-[4vh]"
        />
        <p
          className="font-body"
          style={{ fontSize: "1.8vw", lineHeight: 1.5, color: "rgba(255,255,255,0.82)", maxWidth: "56vw" }}
        >
          Startup Launchpad is ready to launch in Fall 2025. With university approval, the Smith Center will build an innovation ecosystem that serves students across every discipline — and positions this institution as a national leader in student entrepreneurship.
        </p>
      </div>

      <div className="flex gap-[6vw] items-end justify-between">
        <div>
          <p
            className="font-body uppercase tracking-widest mb-[1.5vh]"
            style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.14em" }}
          >
            Next Steps
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}
          >
            Review and vote on the six approval items
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}
          >
            Designate a Faculty Coordinator for Spring recruitment
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}
          >
            Set a launch date for the platform and onboarding
          </p>
        </div>

        <div className="text-right">
          <p
            className="font-display text-white"
            style={{ fontSize: "2.2vw", fontWeight: 700 }}
          >
            Startup Launchpad
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "var(--slide-muted)" }}
          >
            smithcenter.university.edu/launchpad
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "0.5vh", background: "var(--slide-accent)" }}
      />
    </div>
  );
}
