import { X } from 'lucide-react';

const SCRIPT = [
  {
    scene: 1,
    title: 'Opening Hook',
    timestamp: '0:00 – 0:07',
    duration: '7s',
    voiceover: 'What if university was where you built your first real company?',
    onScreen: '"Startup Launchpad" wordmark reveal + tagline "Four semesters. One company."',
    pacing: 'Measured, documentary opener — hold each word.',
    music: 'Low, sustained strings — quiet and expectant.',
  },
  {
    scene: 2,
    title: 'Student Discovery',
    timestamp: '0:07 – 0:15',
    duration: '8s',
    voiceover: 'Students from every major discover a problem worth solving.',
    onScreen: 'Animated icons for STEM, Arts, Business converging to a centre point.',
    pacing: 'Slow reveal, deliberate — one archetype at a time.',
    music: 'Strings continue, a second instrument (piano) enters softly.',
  },
  {
    scene: 3,
    title: 'Team Formation',
    timestamp: '0:15 – 0:22',
    duration: '7s',
    voiceover: 'Then they find their co-founders. Different skills. One mission.',
    onScreen: 'Node-graph animation — three nodes connect with glowing edges.',
    pacing: 'Slightly faster — short punchy lines.',
    music: 'Energy rising; rhythm element enters under the melody.',
  },
  {
    scene: 4,
    title: 'Customer Evidence',
    timestamp: '0:22 – 0:30',
    duration: '8s',
    voiceover: 'Before they build anything, they talk to real customers. 47 interviews minimum.',
    onScreen: 'Counter animates 0 → 47+; quote bubbles appear and stack.',
    pacing: 'Editorial cut pace — stat lands on "47".',
    music: 'Full rhythm section now; momentum is clear.',
  },
  {
    scene: 5,
    title: 'Prototype',
    timestamp: '0:30 – 0:38',
    duration: '8s',
    voiceover: 'Then they build. Fast. Cheap. Real.',
    onScreen: 'Wireframe → mockup → live product glyph progression.',
    pacing: 'Punchy, fast — each word gets its own beat.',
    music: 'Driving rhythm; slight urgency without chaos.',
  },
  {
    scene: 6,
    title: 'Pitch Night',
    timestamp: '0:38 – 0:45',
    duration: '7s',
    voiceover: 'Pitch Night — student teams present to investors and industry mentors.',
    onScreen: 'Spotlight effect, judges panel graphic, crowd dot-pattern fills screen.',
    pacing: 'Climactic — one long breath before the resolution.',
    music: 'Full orchestral swell; highest energy point of the trailer.',
  },
  {
    scene: 7,
    title: 'Sunstone Stage',
    timestamp: '0:45 – 0:53',
    duration: '8s',
    voiceover: "The best teams earn a shot at Sunstone — Smith Center's flagship accelerator.",
    onScreen: 'Four semester boxes light up sequentially: Discover → Validate → Build → Launch, arrow points to "Sunstone Accelerator".',
    pacing: 'Triumphant, slight slowdown — let the pathway breathe.',
    music: 'Resolved, warm tone; swell drops to a confident landing note.',
  },
  {
    scene: 8,
    title: 'Call to Action',
    timestamp: '0:53 – 1:00',
    duration: '7s',
    voiceover: 'Applications open. Smith Center for Entrepreneurship. startuplaunchpad.smith.edu',
    onScreen: 'Bold CTA text reveals line-by-line; program wordmark fades in; gold underline animates.',
    pacing: 'Deliberate, resolving — URL is the last thing on screen.',
    music: 'Gentle fade out; ends on a held piano note.',
  },
];

interface StoryboardProps {
  onClose: () => void;
}

export default function Storyboard({ onClose }: StoryboardProps) {
  return (
    <div className="absolute inset-0 z-[100] flex flex-col bg-[#071628]/97 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 shrink-0">
        <div>
          <h2 className="text-[#F7F5F0] text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Script &amp; Storyboard
          </h2>
          <p className="text-[#8A99AA] text-sm mt-0.5">
            Startup Launchpad — 60-second trailer &nbsp;·&nbsp; 8 scenes
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close storyboard"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Scene cards */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
        {SCRIPT.map((s) => (
          <div
            key={s.scene}
            className="rounded-xl border border-white/10 bg-white/5 p-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1"
          >
            {/* Scene number */}
            <div className="row-span-5 flex flex-col items-center pt-0.5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: '#D4882A', color: '#071628' }}
              >
                {s.scene}
              </div>
              <div className="flex-1 w-px bg-white/10 mt-2" />
            </div>

            {/* Title + timestamp */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-[#F7F5F0] font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
                {s.title}
              </span>
              <span className="text-[#D4882A] text-xs font-mono">{s.timestamp}</span>
              <span className="text-[#8A99AA] text-xs">({s.duration})</span>
            </div>

            {/* Voiceover */}
            <div className="flex gap-2 items-start">
              <span className="text-[#8A99AA] text-xs uppercase tracking-widest shrink-0 w-20 pt-0.5">Voiceover</span>
              <p className="text-[#F7F5F0] text-sm italic leading-snug">"{s.voiceover}"</p>
            </div>

            {/* On-screen */}
            <div className="flex gap-2 items-start">
              <span className="text-[#8A99AA] text-xs uppercase tracking-widest shrink-0 w-20 pt-0.5">On screen</span>
              <p className="text-[#8A99AA] text-sm leading-snug">{s.onScreen}</p>
            </div>

            {/* Pacing */}
            <div className="flex gap-2 items-start">
              <span className="text-[#8A99AA] text-xs uppercase tracking-widest shrink-0 w-20 pt-0.5">Pacing</span>
              <p className="text-[#8A99AA] text-sm leading-snug">{s.pacing}</p>
            </div>

            {/* Music */}
            <div className="flex gap-2 items-start">
              <span className="text-[#8A99AA] text-xs uppercase tracking-widest shrink-0 w-20 pt-0.5">Music</span>
              <p className="text-[#8A99AA] text-sm leading-snug">{s.music}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
