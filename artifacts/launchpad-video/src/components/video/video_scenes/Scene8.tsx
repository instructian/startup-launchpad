import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene8() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-brand-dark)]"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-[2.5vw] text-[var(--color-brand-muted)] font-display tracking-[0.2em] uppercase mb-4">
          Applications Open
        </h2>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-[8vw] font-black text-[var(--color-brand-offwhite)] font-display leading-[0.85] tracking-tight text-center">
          STARTUP<br />
          <span className="text-[var(--color-brand-gold)]">LAUNCHPAD</span>
        </h1>

        {/* Animated Gold Underline */}
        <motion.div
          className="absolute -bottom-[2vw] left-0 right-0 h-[0.5vw] bg-[var(--color-brand-gold)] origin-center"
          initial={{ scaleX: 0 }}
          animate={phase >= 3 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="mt-[6vw] text-[2vw] text-[var(--color-brand-offwhite)] font-body opacity-80"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        launchpad.ixdia.org
      </motion.div>
    </motion.div>
  );
}
