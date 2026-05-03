import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Scene7() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),  // Sem 1
      setTimeout(() => setPhase(2), 1200), // Sem 2
      setTimeout(() => setPhase(3), 1900), // Sem 3
      setTimeout(() => setPhase(4), 2600), // Sem 4
      setTimeout(() => setPhase(5), 4000), // Sunstone
      setTimeout(() => setPhase(6), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const semesters = [
    { num: 1, title: "DISCOVER", color: "var(--color-brand-muted)" },
    { num: 2, title: "VALIDATE", color: "var(--color-brand-offwhite)" },
    { num: 3, title: "BUILD", color: "var(--color-brand-offwhite)" },
    { num: 4, title: "LAUNCH", color: "var(--color-brand-gold)" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-brand-navy)]"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(5px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-[2vw]">
        {semesters.map((sem, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              className={`w-[12vw] h-[12vw] rounded-xl flex flex-col items-center justify-center border-2 border-white/10 ${
                phase > i ? 'bg-[var(--color-brand-dark)] shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-transparent'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={phase > i ? { opacity: 1, y: 0, borderColor: sem.color } : { opacity: 0.3, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-[1.5vw] font-body text-[var(--color-brand-muted)] mb-1">SEM {sem.num}</div>
              <div className="text-[2vw] font-display font-bold tracking-wider" style={{ color: phase > i ? sem.color : 'var(--color-brand-muted)' }}>
                {sem.title}
              </div>
            </motion.div>
            
            {i < 3 && (
              <motion.div 
                className="w-[3vw] h-[2px] bg-[var(--color-brand-muted)] mx-[1vw] origin-left"
                initial={{ scaleX: 0 }}
                animate={phase > i + 1 ? { scaleX: 1, backgroundColor: 'var(--color-brand-offwhite)' } : { scaleX: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </div>
        ))}
      </div>

      <motion.div
        className="mt-[6vw] flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <ArrowRight size="4vw" className="text-[var(--color-brand-gold)] mb-[2vw] animate-bounce" />
        <div className="px-[4vw] py-[2vw] bg-[var(--color-brand-gold)] rounded-2xl shadow-[0_0_40px_rgba(212,136,42,0.4)]">
          <h3 className="text-[4vw] font-display font-black text-[var(--color-brand-dark)] tracking-wide">
            SUNSTONE ACCELERATOR
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
}