import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Beaker, Palette, Briefcase, ChevronRight } from 'lucide-react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => setPhase(5), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const archetypes = [
    { icon: <Beaker size="4vw" />, title: "STEM", delay: 0, x: -300 },
    { icon: <Palette size="4vw" />, title: "ARTS", delay: 0.2, x: 0 },
    { icon: <Briefcase size="4vw" />, title: "BUSINESS", delay: 0.4, x: 300 }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-brand-dark)]"
      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background drift */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(var(--color-brand-muted) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        animate={{ y: [0, 40], x: [0, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 w-full max-w-[80vw] flex flex-col items-center">
        <motion.h2 
          className="text-[6vw] font-display font-bold text-[var(--color-brand-offwhite)] mb-20 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          FIND A <span className="text-[var(--color-brand-gold)]">PROBLEM</span> WORTH SOLVING
        </motion.h2>

        <div className="flex justify-center items-center gap-[10vw]">
          {archetypes.map((arch, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={
                phase >= 4 ? { opacity: 0, x: 0, scale: 0.5 } : 
                phase >= 2 ? { opacity: 1, y: 0, scale: 1 } : 
                { opacity: 0, y: 50, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: phase >= 4 ? 0 : arch.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-[10vw] h-[10vw] rounded-full border-2 border-[var(--color-brand-muted)] flex items-center justify-center text-[var(--color-brand-gold)] mb-4 bg-[var(--color-brand-navy)]">
                {arch.icon}
              </div>
              <div className="text-[2vw] font-display tracking-widest text-[var(--color-brand-offwhite)]">
                {arch.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Convergence explosion */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15vw] h-[15vw] rounded-full bg-[var(--color-brand-gold)] blur-[40px] mix-blend-screen"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 4 ? { scale: 3, opacity: 0.3 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-[60%] left-1/2 -translate-x-1/2 text-[4vw] font-display font-bold text-[var(--color-brand-offwhite)] tracking-widest"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={phase >= 5 ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          CONVERGE
        </motion.div>
      </div>
    </motion.div>
  );
}