import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';
import { Scene8 } from './video_scenes/Scene8';

export const SCENE_DURATIONS: Record<string, number> = {
  s1_opening: 7000,
  s2_discovery: 8000,
  s3_team: 7000,
  s4_customers: 8000,
  s5_prototype: 8000,
  s6_pitch: 7000,
  s7_sunstone: 8000,
  s8_cta: 7000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  s1_opening: Scene1,
  s2_discovery: Scene2,
  s3_team: Scene3,
  s4_customers: Scene4,
  s5_prototype: Scene5,
  s6_pitch: Scene6,
  s7_sunstone: Scene7,
  s8_cta: Scene8,
};

const captions: Record<string, string> = {
  s1_opening: "What if university was where you built your first real company?",
  s2_discovery: "Students from every major discover a problem worth solving.",
  s3_team: "Then they find their co-founders. Different skills. One mission.",
  s4_customers: "Before they build anything, they talk to real customers. 47 interviews minimum.",
  s5_prototype: "Then they build. Fast. Cheap. Real.",
  s6_pitch: "Pitch Night — student teams present to investors and industry mentors.",
  s7_sunstone: "The best teams earn a shot at Sunstone — Smith Center's flagship accelerator.",
  s8_cta: "Applications open. Smith Center for Entrepreneurship. startuplaunchpad.smith.edu",
};

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
  activeCaption,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
  /** When provided (non-null), overrides the scene-boundary caption with an audio-synced one */
  activeCaption?: string | null;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  // When activeCaption is provided (even null), use it as the audio-driven caption.
  // null  → between narration lines, show nothing
  // ''    → empty caption
  // When activeCaption is undefined (no narration wired), fall back to the scene-boundary map.
  const isNarrationMode = activeCaption !== undefined;
  const caption = isNarrationMode ? (activeCaption ?? '') : (captions[baseSceneKey] ?? '');
  // In narration mode, key captions by their text so AnimatePresence transitions
  // when the caption changes (audio-timestamp-driven), not just at scene boundaries.
  const captionKey = isNarrationMode ? (activeCaption ?? '__empty__') : baseSceneKey;

  return (
    <div
      className="w-full h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div
        className="relative overflow-hidden bg-[var(--color-brand-navy)]"
        style={{
          aspectRatio: '16/9',
          width: '100%',
          maxHeight: '100%',
          maxWidth: 'calc(100vh * 16 / 9)',
        }}
      >
        {/* Persistent background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-[80vw] h-[80vw] rounded-full opacity-30 blur-[120px]"
            style={{ background: 'radial-gradient(circle, var(--color-brand-dark), transparent)' }}
            animate={{
              x: ['-20%', '30%', '-10%'],
              y: ['-10%', '20%', '-20%'],
              scale: [1, 1.2, 0.9],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-[60vw] h-[60vw] rounded-full opacity-10 blur-[100px] right-0 bottom-0"
            style={{ background: 'radial-gradient(circle, var(--color-brand-gold), transparent)' }}
            animate={{
              x: ['10%', '-20%', '5%'],
              y: ['10%', '-30%', '-10%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <AnimatePresence mode="popLayout">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>

        {/* Caption layer — hidden when caption is empty (between narration lines) */}
        <div className="absolute bottom-[4vh] inset-x-0 flex justify-center z-50 pointer-events-none">
          <AnimatePresence mode="wait">
            {caption ? (
              <motion.div
                key={captionKey}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#071628]/90 backdrop-blur-xl px-10 py-4 rounded-full border border-white/10 shadow-2xl shadow-black/50"
              >
                <p className="text-[#F7F5F0] font-body text-[1.8vw] font-medium tracking-wide">
                  {caption}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
