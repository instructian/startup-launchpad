import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(0);
  const counterControls = useAnimation();

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500), // Start counting
      setTimeout(() => setPhase(3), 3500), // Quotes appear
      setTimeout(() => setPhase(4), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  useEffect(() => {
    if (phase === 2) {
      // Animate counter from 0 to 47
      let startTimestamp: number;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * 47));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [phase]);

  const quotes = [
    { text: "I'd pay for this.", x: "15%", y: "20%", delay: 0 },
    { text: "This solves my exact problem.", x: "65%", y: "15%", delay: 0.3 },
    { text: "When can I use it?", x: "10%", y: "70%", delay: 0.6 },
    { text: "We lose hours on this every week.", x: "60%", y: "75%", delay: 0.9 },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-brand-dark)]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {quotes.map((quote, i) => (
          <motion.div
            key={i}
            className="absolute max-w-[20vw] bg-[var(--color-brand-navy)] border border-[var(--color-brand-muted)]/30 rounded-2xl p-[1.5vw] text-[1.5vw] text-[var(--color-brand-offwhite)]/80 font-body shadow-xl"
            style={{ left: quote.x, top: quote.y }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25, delay: quote.delay }}
          >
            "{quote.text}"
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3vw] font-display text-[var(--color-brand-muted)] tracking-widest uppercase mb-4"
        >
          Talk to customers
        </motion.div>
        
        <div className="flex items-baseline">
          <motion.div 
            className="text-[18vw] font-black text-[var(--color-brand-gold)] font-display leading-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {count}
          </motion.div>
          <motion.div 
            className="text-[8vw] font-black text-[var(--color-brand-gold)] font-display ml-2"
            initial={{ opacity: 0 }}
            animate={phase >= 2 && count === 47 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            +
          </motion.div>
        </div>
        
        <motion.div
          className="text-[4vw] font-display text-[var(--color-brand-offwhite)] font-bold mt-4 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          INTERVIEWS MINIMUM
        </motion.div>
      </div>
    </motion.div>
  );
}