export default function Slide11Ideathon() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-center px-[8vw]"
      style={{ background: "var(--slide-dark, #071628)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "0.5vh", background: "var(--slide-accent)" }}
      />

      <p
        className="font-body uppercase tracking-widest mb-[2vh]"
        style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.18em" }}
      >
        Signature Event — Fall Semester
      </p>

      <h2
        className="font-display text-white tracking-tight mb-[1.5vh]"
        style={{ fontSize: "6vw", fontWeight: 900 }}
      >
        Fall Ideathon
      </h2>

      <div
        style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw" }}
        className="mb-[4vh]"
      />

      <div className="grid grid-cols-3 gap-[3vw]">
        <div
          style={{ borderTop: "0.4vh solid rgba(212,136,42,0.4)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-accent mb-[1.5vh]"
            style={{ fontSize: "1.8vw", fontWeight: 700 }}
          >
            Format
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}
          >
            90-second pitch followed by a 3-minute Q&amp;A with judges. Teams present an idea, not a finished product.
          </p>
        </div>

        <div
          style={{ borderTop: "0.4vh solid rgba(212,136,42,0.4)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-accent mb-[1.5vh]"
            style={{ fontSize: "1.8vw", fontWeight: 700 }}
          >
            Who Competes
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}
          >
            Open to all Semester 1–2 students. Teams of 2–5. Solo entries may pitch to attract co-founders on the day.
          </p>
        </div>

        <div
          style={{ borderTop: "0.4vh solid rgba(212,136,42,0.4)", paddingTop: "2.5vh" }}
        >
          <p
            className="font-display text-accent mb-[1.5vh]"
            style={{ fontSize: "1.8vw", fontWeight: 700 }}
          >
            Judging Criteria
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.82)" }}
          >
            Problem clarity · Market insight · Team composition · Feasibility · Communication impact
          </p>
        </div>
      </div>

      <div
        className="mt-[4vh] flex gap-[4vw]"
      >
        <div>
          <p
            className="font-display text-accent leading-none"
            style={{ fontSize: "5vw", fontWeight: 900 }}
          >
            150+
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.7)" }}
          >
            projected student participants
          </p>
        </div>
        <div>
          <p
            className="font-display text-accent leading-none"
            style={{ fontSize: "5vw", fontWeight: 900 }}
          >
            30+
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.7)" }}
          >
            faculty and industry judges
          </p>
        </div>
        <div>
          <p
            className="font-display text-accent leading-none"
            style={{ fontSize: "5vw", fontWeight: 900 }}
          >
            Oct
          </p>
          <p
            className="font-body"
            style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.7)" }}
          >
            mid-semester timing
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
