import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 5500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-center overflow-hidden">
        <motion.div 
          className="text-[1.5vw] text-[var(--color-brand-gold)] font-display tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Smith Center for Entrepreneurship
        </motion.div>
        
        <h1 className="text-[10vw] font-black text-[var(--color-brand-offwhite)] font-display leading-[0.85] tracking-tight" style={{ perspective: '1000px' }}>
          {'STARTUP'.split('').map((char, i) => (
            <motion.span 
              key={`w1-${i}`} 
              className="inline-block origin-bottom"
              initial={{ opacity: 0, y: 100, rotateX: -60 }}
              animate={phase >= 1 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -60 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {char}
            </motion.span>
          ))}
          <br />
          {'LAUNCHPAD'.split('').map((char, i) => (
            <motion.span 
              key={`w2-${i}`} 
              className="inline-block origin-bottom text-[var(--color-brand-gold)]"
              initial={{ opacity: 0, y: 100, rotateX: -60 }}
              animate={phase >= 1 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -60 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-8 text-[3vw] text-[var(--color-brand-muted)] font-display tracking-tight"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Four semesters. One company.
        </motion.div>
      </div>

      <motion.div 
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-gold)] to-transparent top-1/2"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 0.3 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}