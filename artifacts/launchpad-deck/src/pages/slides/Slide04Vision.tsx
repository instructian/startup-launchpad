export default function Slide04Vision() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col justify-center items-center px-[12vw] text-center"
      style={{ background: "var(--slide-dark, #071628)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "0.5vh", background: "var(--slide-accent)" }}
      />

      <p
        className="font-body uppercase tracking-widest mb-[4vh]"
        style={{ fontSize: "1.5vw", color: "var(--slide-accent)", letterSpacing: "0.18em" }}
      >
        Program Vision
      </p>

      <p
        className="font-display text-white leading-tight mb-[5vh]"
        style={{ fontSize: "4.2vw", fontWeight: 700, maxWidth: "76vw", textWrap: "balance" }}
      >
        "Every student who arrives with a spark of curiosity should leave with the skills, the team, and the confidence to build something that matters."
      </p>

      <div
        style={{ height: "0.4vh", background: "var(--slide-accent)", width: "6vw" }}
        className="mb-[3vh]"
      />

      <p
        className="font-body"
        style={{ fontSize: "1.5vw", color: "var(--slide-muted)", fontWeight: 400 }}
      >
        Startup Launchpad — Smith Center for Innovation
      </p>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "0.5vh", background: "var(--slide-accent)" }}
      />
    </div>
  );
}
