import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Smartphone, Zap } from 'lucide-react';

const LOOP_NODES = [
  { label: 'IDEA', angle: -90, color: '#9b8af0', sub: 'provocation' },
  { label: 'CUSTOMER', angle: 0, color: '#4ad7c1', sub: 'discovery' },
  { label: 'PROTOTYPE', angle: 90, color: '#f39c12', sub: 'build & test' },
  { label: 'PITCH', angle: 180, color: '#e74c3c', sub: 'evidence' },
];

// Returns SVG arc path between two angles on a circle of radius r
function arcPath(fromAngle: number, toAngle: number, r: number, cx: number, cy: number) {
  const toRad = (a: number) => (a * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(fromAngle));
  const y1 = cy + r * Math.sin(toRad(fromAngle));
  const x2 = cx + r * Math.cos(toRad(toAngle));
  const y2 = cy + r * Math.sin(toRad(toAngle));
  const largeArc = Math.abs(toAngle - fromAngle) > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}

// Node position on circle
function nodePos(angle: number, r: number, cx: number, cy: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),   // Phone wireframe
      setTimeout(() => setPhase(2), 1600),  // Phone mockup
      setTimeout(() => setPhase(3), 2900),  // Phone live
      setTimeout(() => setPhase(4), 4000),  // Loop node 1
      setTimeout(() => setPhase(5), 4600),  // Loop node 2 + arc
      setTimeout(() => setPhase(6), 5200),  // Loop node 3 + arc
      setTimeout(() => setPhase(7), 5800),  // Loop node 4 + arc
      setTimeout(() => setPhase(8), 6400),  // Closing arc + tagline
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const CX = 100, CY = 100, R = 68, NODE_R = 18;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-[var(--color-brand-navy)]"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-[6vw]">

        {/* Phone mockup */}
        <div className="relative w-[22vw] h-[32vw] border-4 border-[var(--color-brand-muted)] rounded-[3vw] flex flex-col overflow-hidden bg-[var(--color-brand-dark)]">
          {/* Wireframe Phase */}
          <motion.div
            className="absolute inset-0 p-[2vw] flex flex-col gap-[1.5vw]"
            initial={{ opacity: 0 }}
            animate={phase === 1 ? { opacity: 1 } : { opacity: 0 }}
          >
            <div className="w-full h-[5vw] bg-[var(--color-brand-muted)]/20 rounded-xl" />
            <div className="w-2/3 h-[1.5vw] bg-[var(--color-brand-muted)]/20 rounded-md" />
            <div className="flex gap-[1vw] mt-[1.5vw]">
              <div className="w-1/2 h-[6vw] bg-[var(--color-brand-muted)]/20 rounded-xl" />
              <div className="w-1/2 h-[6vw] bg-[var(--color-brand-muted)]/20 rounded-xl" />
            </div>
            <div className="w-full h-[6vw] bg-[var(--color-brand-muted)]/20 rounded-xl mt-auto" />
          </motion.div>

          {/* Mockup Phase */}
          <motion.div
            className="absolute inset-0 p-[2vw] flex flex-col gap-[1.5vw] bg-[var(--color-brand-navy)]"
            initial={{ opacity: 0, x: '100%' }}
            animate={phase === 2 ? { opacity: 1, x: 0 } : phase > 2 ? { opacity: 0, x: '-100%' } : { opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="w-full h-[5vw] bg-[var(--color-brand-gold)]/40 rounded-xl border border-[var(--color-brand-gold)]" />
            <div className="w-2/3 h-[1.5vw] bg-[var(--color-brand-offwhite)]/60 rounded-md" />
            <div className="flex gap-[1vw] mt-[1.5vw]">
              <div className="w-1/2 h-[6vw] bg-[var(--color-brand-offwhite)]/20 rounded-xl border border-[var(--color-brand-offwhite)]/40" />
              <div className="w-1/2 h-[6vw] bg-[var(--color-brand-offwhite)]/20 rounded-xl border border-[var(--color-brand-offwhite)]/40" />
            </div>
            <div className="w-full h-[6vw] bg-[var(--color-brand-gold)] rounded-xl mt-auto" />
          </motion.div>

          {/* Live Phase */}
          <motion.div
            className="absolute inset-0 p-[2vw] flex flex-col gap-[1.5vw] bg-gradient-to-b from-[var(--color-brand-navy)] to-[var(--color-brand-dark)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <div className="w-full h-[5vw] bg-gradient-to-r from-[var(--color-brand-gold)] to-yellow-400 rounded-xl shadow-[0_0_20px_rgba(212,136,42,0.4)]" />
            <div className="w-2/3 h-[1.5vw] bg-[var(--color-brand-offwhite)] rounded-md shadow-sm" />
            <div className="flex gap-[1vw] mt-[1.5vw]">
              <div className="w-1/2 h-[6vw] bg-[var(--color-brand-offwhite)]/10 rounded-xl border border-[var(--color-brand-offwhite)]/20 backdrop-blur-sm flex items-center justify-center">
                <Zap className="text-[var(--color-brand-gold)]" size="2vw" />
              </div>
              <div className="w-1/2 h-[6vw] bg-[var(--color-brand-offwhite)]/10 rounded-xl border border-[var(--color-brand-offwhite)]/20 backdrop-blur-sm" />
            </div>
            <div className="w-full h-[6vw] bg-[var(--color-brand-gold)] rounded-xl mt-auto shadow-[0_0_30px_rgba(212,136,42,0.6)] flex items-center justify-center text-[var(--color-brand-dark)]">
              <Smartphone size="2.5vw" className="mr-2" />
              <span className="font-bold text-[1.8vw]">LIVE</span>
            </div>
          </motion.div>
        </div>

        {/* Core loop circular diagram */}
        <div className="flex flex-col items-center gap-[1.5vw]">
          <motion.div
            className="text-[1.1vw] font-display tracking-[0.2em] uppercase text-[var(--color-brand-muted)]"
            initial={{ opacity: 0 }}
            animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Core Loop
          </motion.div>

          {/* SVG circular diagram */}
          <div style={{ width: '20vw', height: '20vw' }}>
            <svg viewBox="0 0 200 200" width="100%" height="100%">
              {/* Track ring (background) */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(247,245,240,0.06)" strokeWidth="3" />

              {/* Arcs between nodes */}
              {[
                { from: -90, to: 0, color: '#9b8af0', activePhase: 5 },
                { from: 0, to: 90, color: '#4ad7c1', activePhase: 6 },
                { from: 90, to: 180, color: '#f39c12', activePhase: 7 },
                { from: 180, to: 270, color: '#e74c3c', activePhase: 8 },
              ].map((arc, i) => (
                <motion.path
                  key={i}
                  d={arcPath(arc.from, arc.to, R, CX, CY)}
                  fill="none"
                  stroke={arc.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={phase >= arc.activePhase ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              ))}

              {/* Nodes */}
              {LOOP_NODES.map((node, i) => {
                const pos = nodePos(node.angle, R, CX, CY);
                const isActive = phase >= i + 4;
                return (
                  <g key={i}>
                    {/* Glow */}
                    {isActive && (
                      <motion.circle
                        cx={pos.x} cy={pos.y} r={NODE_R + 6}
                        fill={node.color}
                        opacity={0}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.25, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                      />
                    )}
                    {/* Node circle */}
                    <motion.circle
                      cx={pos.x} cy={pos.y} r={NODE_R}
                      fill={isActive ? node.color : 'rgba(7,22,40,0.8)'}
                      stroke={isActive ? node.color : 'rgba(247,245,240,0.1)'}
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                    />
                    {/* Label */}
                    <motion.text
                      x={pos.x} y={pos.y - 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="7"
                      fontWeight="900"
                      fill={isActive ? '#071628' : 'rgba(247,245,240,0.2)'}
                      fontFamily="var(--font-display)"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      {node.label}
                    </motion.text>
                    {/* Sub label (outside circle) */}
                    {(() => {
                      const offset = NODE_R + 14;
                      const rad = (node.angle * Math.PI) / 180;
                      const tx = CX + (R + offset) * Math.cos(rad);
                      const ty = CY + (R + offset) * Math.sin(rad);
                      return (
                        <motion.text
                          x={tx} y={ty}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="5.5"
                          fill={node.color}
                          opacity={0.7}
                          fontFamily="var(--font-body)"
                          initial={{ opacity: 0 }}
                          animate={isActive ? { opacity: 0.7 } : { opacity: 0 }}
                          transition={{ duration: 0.4, delay: 0.25 }}
                        >
                          {node.sub}
                        </motion.text>
                      );
                    })()}
                    {/* Arrowhead on each arc */}
                    {i < LOOP_NODES.length - 1 && (() => {
                      // Arrowhead at start of next node
                      const nextAngle = LOOP_NODES[(i + 1) % LOOP_NODES.length].angle;
                      const midAngle = (node.angle + nextAngle) / 2;
                      const rad = (midAngle * Math.PI) / 180;
                      const ax = CX + R * Math.cos(rad);
                      const ay = CY + R * Math.sin(rad);
                      return null; // Arrow handled by arc path animation
                    })()}
                  </g>
                );
              })}

              {/* Center label */}
              <motion.text
                x={CX} y={CY - 5}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fontWeight="700"
                fill="rgba(247,245,240,0.5)"
                fontFamily="var(--font-display)"
                initial={{ opacity: 0 }}
                animate={phase >= 8 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                REPEAT
              </motion.text>
              <motion.text
                x={CX} y={CY + 8}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6.5"
                fill="rgba(247,245,240,0.3)"
                fontFamily="var(--font-body)"
                initial={{ opacity: 0 }}
                animate={phase >= 8 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                each semester
              </motion.text>
            </svg>
          </div>

          {/* FAST. CHEAP. REAL. */}
          <div className="flex gap-[1.5vw] text-[2.8vw] font-display font-bold">
            {[
              { word: 'FAST.', color: 'var(--color-brand-muted)', delay: 0 },
              { word: 'CHEAP.', color: 'var(--color-brand-offwhite)', delay: 0.12 },
              { word: 'REAL.', color: 'var(--color-brand-gold)', delay: 0.24 },
            ].map(({ word, color, delay }) => (
              <motion.span
                key={word}
                style={{ color }}
                initial={{ opacity: 0, y: 16 }}
                animate={phase >= 8 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
