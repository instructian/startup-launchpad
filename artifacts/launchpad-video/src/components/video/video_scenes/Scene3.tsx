import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => setPhase(5), 5500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  // Nodes for network
  const nodes = [
    { x: '30%', y: '30%' },
    { x: '70%', y: '20%' },
    { x: '80%', y: '60%' },
    { x: '20%', y: '70%' },
    { x: '50%', y: '80%' },
    { x: '10%', y: '40%' },
    { x: '90%', y: '40%' },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-brand-navy)]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 z-0">
        {/* Lines connecting center to nodes */}
        {nodes.map((node, i) => (
          <motion.svg key={`line-${i}`} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <motion.line
              x1="50%" y1="50%" x2={node.x} y2={node.y}
              stroke="var(--color-brand-muted)"
              strokeWidth="2"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={phase >= 2 ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeInOut" }}
            />
          </motion.svg>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-[3vw] h-[3vw] rounded-full border-2 border-[var(--color-brand-gold)] bg-[var(--color-brand-dark)] flex items-center justify-center"
            style={{ left: `calc(${node.x} - 1.5vw)`, top: `calc(${node.y} - 1.5vw)` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase >= 4 ? { scale: 0, opacity: 0 } :
              phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ 
              duration: phase >= 4 ? 0.5 : 0.6, 
              delay: phase >= 4 ? i * 0.05 : i * 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <div className="w-1/2 h-1/2 rounded-full bg-[var(--color-brand-gold)] opacity-50" />
          </motion.div>
        ))}

        {/* Center Node */}
        <motion.div
          className="absolute w-[15vw] h-[15vw] rounded-full bg-[var(--color-brand-gold)] flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_50px_rgba(212,136,42,0.3)] z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 3 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="text-[var(--color-brand-dark)] font-display font-bold text-[3vw] tracking-wider text-center leading-none">
            TEAM<br/>FORMED
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 pointer-events-none mt-[30vh]">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[5vw] font-display font-bold text-[var(--color-brand-offwhite)]">
            DIFFERENT SKILLS
          </h2>
          <h2 className="text-[5vw] font-display font-bold text-[var(--color-brand-gold)]">
            ONE MISSION
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}