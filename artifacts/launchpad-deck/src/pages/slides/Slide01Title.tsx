const base = import.meta.env.BASE_URL;

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={`${base}hero.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Innovation lab"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(7,22,40,0.93) 0%, rgba(13,34,64,0.86) 55%, rgba(7,22,40,0.72) 100%)" }}
      />
      <div className="relative flex flex-col justify-center h-full px-[8vw]">
        <div className="mb-[3vh]">
          <span
            className="font-body text-accent tracking-widest uppercase"
            style={{ fontSize: "1.5vw", letterSpacing: "0.2em" }}
          >
            Smith Center for Innovation
          </span>
        </div>
        <h1
          className="font-display text-white leading-none tracking-tight"
          style={{ fontSize: "10vw", fontWeight: 900, lineHeight: 0.9 }}
        >
          STARTUP
        </h1>
        <h1
          className="font-display text-accent leading-none tracking-tight mb-[4vh]"
          style={{ fontSize: "10vw", fontWeight: 900, lineHeight: 0.9 }}
        >
          LAUNCHPAD
        </h1>
        <div
          style={{ height: "0.45vh", background: "var(--slide-accent)", width: "10vw" }}
          className="mb-[3vh]"
        />
        <p
          className="font-body text-white"
          style={{ fontSize: "2.2vw", fontWeight: 400, maxWidth: "48vw", lineHeight: 1.4, opacity: 0.92 }}
        >
          A Four-Semester University Innovation Program
        </p>
        <p
          className="font-body mt-[2vh]"
          style={{ fontSize: "1.6vw", color: "var(--slide-muted)" }}
        >
          Academic Year 2025–2026
        </p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "0.6vh", background: "var(--slide-accent)" }}
      />
    </div>
  );
}
