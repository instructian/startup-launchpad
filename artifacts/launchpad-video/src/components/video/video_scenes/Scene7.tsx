import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SEMESTERS = [
  {
    num: 1, label: "DISCOVER", sub: "Find your problem",
    event: "Ideathon", pitch: "90 sec", color: "#9b8af0",
    glow: "rgba(155,138,240,0.35)",
  },
  {
    num: 2, label: "VALIDATE", sub: "Talk to customers",
    event: "Innovation Fest", pitch: "3 min", color: "#4ad7c1",
    glow: "rgba(74,215,193,0.35)",
  },
  {
    num: 3, label: "BUILD", sub: "MVP to market",
    event: "Adv. Ideathon", pitch: "5 min", color: "#f39c12",
    glow: "rgba(243,156,18,0.35)",
  },
  {
    num: 4, label: "LAUNCH", sub: "Venture ready",
    event: "Innovation Fest", pitch: "7–10 min", color: "#e74c3c",
    glow: "rgba(231,76,60,0.35)",
  },
];

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2500),
      setTimeout(() => setPhase(5), 3800),
      setTimeout(() => setPhase(6), 5500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  // Arrow connector SVG drawn between cards
  const ArrowConnector = ({ active }: { active: boolean }) => (
    <div className="flex items-center justify-center w-[4vw] flex-shrink-0 relative">
      <svg width="100%" height="24" viewBox="0 0 60 24" fill="none" className="overflow-visible">
        <motion.line
          x1="0" y1="12" x2="50" y2="12"
          stroke="rgba(247,245,240,0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.path
          d="M44 6 L56 12 L44 18"
          stroke="rgba(247,245,240,0.4)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
      </svg>
    </div>
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-brand-navy)] overflow-hidden"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ambient background pulse when Sunstone appears */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,136,42,0.12) 0%, transparent 70%)' }}
        initial={{ opacity: 0 }}
        animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Header label */}
      <motion.div
        className="text-[1.4vw] font-display tracking-[0.25em] uppercase text-[var(--color-brand-muted)] mb-[3vw]"
        initial={{ opacity: 0, y: -20 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        The Four-Semester Pathway
      </motion.div>

      {/* Semester cards + arrows */}
      <div className="flex items-center justify-center gap-0">
        {SEMESTERS.map((sem, i) => {
          const isActive = phase > i;
          return (
            <div key={i} className="flex items-center">
              {/* Card */}
              <motion.div
                className="relative flex flex-col items-center justify-center rounded-2xl border-2 overflow-hidden"
                style={{
                  width: '13vw',
                  height: '16vw',
                  borderColor: isActive ? sem.color : 'rgba(247,245,240,0.1)',
                  background: isActive
                    ? `radial-gradient(ellipse at top, ${sem.color}22 0%, var(--color-brand-dark) 70%)`
                    : 'rgba(7,22,40,0.6)',
                  boxShadow: isActive ? `0 0 30px ${sem.glow}, 0 0 60px ${sem.glow}40` : 'none',
                }}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                animate={isActive
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0.25, y: 30, scale: 0.85 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Color top bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[0.5vw]"
                  style={{ backgroundColor: sem.color }}
                  initial={{ scaleX: 0 }}
                  animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Sem number */}
                <div
                  className="text-[0.9vw] font-display tracking-[0.2em] uppercase mb-[0.8vw] font-medium"
                  style={{ color: isActive ? sem.color : 'rgba(247,245,240,0.2)' }}
                >
                  SEM {sem.num}
                </div>

                {/* Theme */}
                <div
                  className="text-[2.2vw] font-display font-black tracking-widest leading-none mb-[0.8vw]"
                  style={{ color: isActive ? '#F7F5F0' : 'rgba(247,245,240,0.15)' }}
                >
                  {sem.label}
                </div>

                {/* Sub */}
                <div
                  className="text-[0.9vw] font-body text-center px-[1vw] leading-snug mb-[1.2vw]"
                  style={{ color: isActive ? 'rgba(247,245,240,0.6)' : 'rgba(247,245,240,0.1)' }}
                >
                  {sem.sub}
                </div>

                {/* Divider */}
                <div
                  className="w-[60%] h-[1px] mb-[1vw]"
                  style={{ backgroundColor: isActive ? `${sem.color}50` : 'rgba(247,245,240,0.05)' }}
                />

                {/* Event */}
                <div
                  className="text-[0.8vw] font-display tracking-wider uppercase mb-[0.3vw]"
                  style={{ color: isActive ? sem.color : 'rgba(247,245,240,0.15)' }}
                >
                  {sem.event}
                </div>
                <div
                  className="text-[0.8vw] font-body"
                  style={{ color: isActive ? 'rgba(247,245,240,0.5)' : 'rgba(247,245,240,0.1)' }}
                >
                  {sem.pitch} pitch
                </div>
              </motion.div>

              {/* Arrow connector */}
              {i < SEMESTERS.length - 1 && (
                <ArrowConnector active={phase > i + 1} />
              )}
            </div>
          );
        })}

        {/* Final arrow to Sunstone */}
        <ArrowConnector active={phase >= 5} />

        {/* Sunstone badge */}
        <motion.div
          className="flex flex-col items-center justify-center relative"
          style={{ width: '13vw', height: '16vw' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={phase >= 5 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.1 }}
        >
          {/* Glow pulse */}
          <motion.div
            className="absolute w-full h-full rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,136,42,0.4) 0%, transparent 70%)' }}
            animate={phase >= 5 ? {
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.2, 0.6],
            } : { opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div
            className="relative rounded-2xl border-2 border-[var(--color-brand-gold)] flex flex-col items-center justify-center text-center"
            style={{
              width: '13vw',
              height: '16vw',
              background: 'radial-gradient(ellipse at top, rgba(212,136,42,0.3) 0%, var(--color-brand-dark) 70%)',
              boxShadow: '0 0 40px rgba(212,136,42,0.5), 0 0 80px rgba(212,136,42,0.2)',
            }}
          >
            <div className="text-[0.9vw] font-display tracking-[0.2em] uppercase mb-[0.8vw] text-[var(--color-brand-gold)]">SMITH CENTER</div>
            <div className="text-[2vw] font-display font-black tracking-wide text-[var(--color-brand-gold)] leading-tight">SUN<br/>STONE</div>
            <div className="mt-[1vw] text-[0.75vw] text-[var(--color-brand-offwhite)] opacity-60 font-body">ACCELERATOR</div>
          </div>
        </motion.div>
      </div>

      {/* Footer tagline */}
      <motion.div
        className="mt-[3.5vw] text-[1.8vw] font-display font-bold tracking-wider text-[var(--color-brand-offwhite)]"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        The best teams earn a shot at{' '}
        <span className="text-[var(--color-brand-gold)]">Sunstone</span>
      </motion.div>
    </motion.div>
  );
}
