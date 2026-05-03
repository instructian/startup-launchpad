import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Smartphone, Layout, Zap } from 'lucide-react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),  // Wireframe
      setTimeout(() => setPhase(2), 2000), // Mockup
      setTimeout(() => setPhase(3), 3500), // Live
      setTimeout(() => setPhase(4), 5000), // Text appears
      setTimeout(() => setPhase(5), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-brand-navy)]"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-[30vw] h-[40vw] border-4 border-[var(--color-brand-muted)] rounded-[3vw] flex flex-col overflow-hidden bg-[var(--color-brand-dark)]">
        {/* Wireframe Phase */}
        <motion.div 
          className="absolute inset-0 p-[2vw] flex flex-col gap-[1.5vw]"
          initial={{ opacity: 0 }}
          animate={phase === 1 ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="w-full h-[6vw] bg-[var(--color-brand-muted)]/20 rounded-xl" />
          <div className="w-2/3 h-[2vw] bg-[var(--color-brand-muted)]/20 rounded-md" />
          <div className="flex gap-[1vw] mt-[2vw]">
            <div className="w-1/2 h-[8vw] bg-[var(--color-brand-muted)]/20 rounded-xl" />
            <div className="w-1/2 h-[8vw] bg-[var(--color-brand-muted)]/20 rounded-xl" />
          </div>
          <div className="w-full h-[8vw] bg-[var(--color-brand-muted)]/20 rounded-xl mt-auto" />
        </motion.div>

        {/* Mockup Phase */}
        <motion.div 
          className="absolute inset-0 p-[2vw] flex flex-col gap-[1.5vw] bg-[var(--color-brand-navy)]"
          initial={{ opacity: 0, x: '100%' }}
          animate={phase === 2 ? { opacity: 1, x: 0 } : phase > 2 ? { opacity: 0, x: '-100%' } : { opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="w-full h-[6vw] bg-[var(--color-brand-gold)]/40 rounded-xl border border-[var(--color-brand-gold)]" />
          <div className="w-2/3 h-[2vw] bg-[var(--color-brand-offwhite)]/60 rounded-md" />
          <div className="flex gap-[1vw] mt-[2vw]">
            <div className="w-1/2 h-[8vw] bg-[var(--color-brand-offwhite)]/20 rounded-xl border border-[var(--color-brand-offwhite)]/40" />
            <div className="w-1/2 h-[8vw] bg-[var(--color-brand-offwhite)]/20 rounded-xl border border-[var(--color-brand-offwhite)]/40" />
          </div>
          <div className="w-full h-[8vw] bg-[var(--color-brand-gold)] rounded-xl mt-auto flex items-center justify-center text-[var(--color-brand-dark)] font-bold">
            <Layout size="2vw" />
          </div>
        </motion.div>

        {/* Live Phase */}
        <motion.div 
          className="absolute inset-0 p-[2vw] flex flex-col gap-[1.5vw] bg-gradient-to-b from-[var(--color-brand-navy)] to-[var(--color-brand-dark)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="w-full h-[6vw] bg-gradient-to-r from-[var(--color-brand-gold)] to-yellow-400 rounded-xl shadow-[0_0_20px_rgba(212,136,42,0.4)]" />
          <div className="w-2/3 h-[2vw] bg-[var(--color-brand-offwhite)] rounded-md shadow-sm" />
          <div className="flex gap-[1vw] mt-[2vw]">
            <div className="w-1/2 h-[8vw] bg-[var(--color-brand-offwhite)]/10 rounded-xl border border-[var(--color-brand-offwhite)]/20 backdrop-blur-sm flex items-center justify-center">
              <Zap className="text-[var(--color-brand-gold)]" size="2.5vw" />
            </div>
            <div className="w-1/2 h-[8vw] bg-[var(--color-brand-offwhite)]/10 rounded-xl border border-[var(--color-brand-offwhite)]/20 backdrop-blur-sm" />
          </div>
          <div className="w-full h-[8vw] bg-[var(--color-brand-gold)] rounded-xl mt-auto shadow-[0_0_30px_rgba(212,136,42,0.6)] flex items-center justify-center text-[var(--color-brand-dark)]">
            <Smartphone size="3vw" className="mr-2" /> <span className="font-bold text-[2vw]">LIVE</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-[4vw] flex gap-[2vw] text-[4vw] font-display font-bold">
        <motion.span 
          className="text-[var(--color-brand-muted)]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          FAST.
        </motion.span>
        <motion.span 
          className="text-[var(--color-brand-offwhite)]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          CHEAP.
        </motion.span>
        <motion.span 
          className="text-[var(--color-brand-gold)]"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          REAL.
        </motion.span>
      </div>
    </motion.div>
  );
}