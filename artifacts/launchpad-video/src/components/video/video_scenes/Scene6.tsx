import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 5500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 bg-[var(--color-brand-dark)] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[120vh] opacity-20 pointer-events-none"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, var(--color-brand-gold) 180deg, transparent 360deg)',
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={phase >= 1 ? { opacity: 0.3, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Crowd dot pattern */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--color-brand-muted) 2px, transparent 2px)',
          backgroundSize: '20px 20px',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={phase >= 2 ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h2
          className="text-[12vw] font-black text-[var(--color-brand-offwhite)] font-display tracking-tight leading-none text-center drop-shadow-[0_0_30px_rgba(212,136,42,0.3)]"
          initial={{ opacity: 0, scale: 1.5, y: 50 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.5, y: 50 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          PITCH NIGHT
        </motion.h2>

        <div className="flex gap-[4vw] mt-[6vw]">
          {['INVESTORS', 'MENTORS', 'ALUMNI'].map((text, i) => (
            <motion.div
              key={i}
              className="px-[2vw] py-[1vw] border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] font-display text-[2vw] rounded-full tracking-widest bg-[var(--color-brand-dark)]/50 backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}