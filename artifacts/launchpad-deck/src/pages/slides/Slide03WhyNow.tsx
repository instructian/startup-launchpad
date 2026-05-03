export default function Slide03WhyNow() {
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
          Why the Time Is Right
        </h2>
        <div
          style={{ height: "0.4vh", background: "var(--slide-accent)", width: "8vw", marginTop: "1.5vh" }}
        />
      </div>

      <div className="grid grid-cols-3 gap-[3vw]">
        <div
          style={{
            background: "var(--slide-primary)",
            borderRadius: "0.6vw",
            padding: "3.5vh 2.5vw",
          }}
        >
          <p
            className="font-display text-accent leading-none mb-[2vh]"
            style={{ fontSize: "5vw", fontWeight: 900 }}
          >
            01
          </p>
          <h3
            className="font-display text-white mb-[1.5vh]"
            style={{ fontSize: "2.2vw", fontWeight: 700 }}
          >
            Institutional Momentum
          </h3>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}
          >
            University leadership has signaled innovation as a strategic priority. The Smith Center has the mandate, the network, and the space to act.
          </p>
        </div>

        <div
          style={{
            background: "var(--slide-primary)",
            borderRadius: "0.6vw",
            padding: "3.5vh 2.5vw",
          }}
        >
          <p
            className="font-display text-accent leading-none mb-[2vh]"
            style={{ fontSize: "5vw", fontWeight: 900 }}
          >
            02
          </p>
          <h3
            className="font-display text-white mb-[1.5vh]"
            style={{ fontSize: "2.2vw", fontWeight: 700 }}
          >
            Student Demand
          </h3>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}
          >
            Applications to entrepreneurship electives have grown by 40% in three years. Students are ready; structured programming is not.
          </p>
        </div>

        <div
          style={{
            background: "var(--slide-primary)",
            borderRadius: "0.6vw",
            padding: "3.5vh 2.5vw",
          }}
        >
          <p
            className="font-display text-accent leading-none mb-[2vh]"
            style={{ fontSize: "5vw", fontWeight: 900 }}
          >
            03
          </p>
          <h3
            className="font-display text-white mb-[1.5vh]"
            style={{ fontSize: "2.2vw", fontWeight: 700 }}
          >
            Peer Benchmarks
          </h3>
          <p
            className="font-body"
            style={{ fontSize: "1.6vw", lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}
          >
            Peer institutions with structured innovation programs report stronger alumni giving, national press, and industry partnership growth.
          </p>
        </div>
      </div>
    </div>
  );
}
