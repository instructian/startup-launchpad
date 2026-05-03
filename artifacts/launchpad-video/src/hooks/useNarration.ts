/**
 * useNarration
 *
 * Renders a 60-second ambient backing track into an AudioBuffer via
 * OfflineAudioContext, then plays it through an <audio> element with
 * muted=true + autoplay. Because <audio muted autoplay> is permitted by
 * browser autoplay policy, the track — and therefore audio.currentTime —
 * advances from page load without any user gesture.
 *
 * Captions are driven by a monotonic wall-clock that is reset on seekTo(),
 * so they stay in sync with the audio even after scene jumps or loops.
 * Muting/unmuting never disrupts the clock — it only toggles audio.muted.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// ---------------------------------------------------------------------------
// Narration cues — voiceover text per scene + intra-scene delay
// ---------------------------------------------------------------------------

export interface NarrationCue {
  sceneKey: string;
  text: string;
  /** Milliseconds after the scene boundary before this caption appears */
  delayMs: number;
}

export const NARRATION_CUES: NarrationCue[] = [
  { sceneKey: 's1_opening',   text: 'What if university was where you built your first real company?',        delayMs: 700 },
  { sceneKey: 's2_discovery', text: 'Students from every major discover a problem worth solving.',            delayMs: 700 },
  { sceneKey: 's3_team',      text: 'Then they find their co-founders. Different skills. One mission.',       delayMs: 700 },
  { sceneKey: 's4_customers', text: 'Before they build anything, they talk to real customers. 47 interviews minimum.', delayMs: 700 },
  { sceneKey: 's5_prototype', text: 'Then they build. Fast. Cheap. Real.',                                    delayMs: 700 },
  { sceneKey: 's6_pitch',     text: 'Pitch Night. Student teams present to investors and industry mentors.',  delayMs: 700 },
  { sceneKey: 's7_sunstone',  text: "The best teams earn a shot at Sunstone — Smith Center's flagship accelerator.", delayMs: 700 },
  { sceneKey: 's8_cta',       text: 'Applications open. Smith Center for Entrepreneurship.',                  delayMs: 700 },
];

// ---------------------------------------------------------------------------
// Caption timeline — absolute ms timestamps derived from scene durations
// ---------------------------------------------------------------------------

export interface TimedCaption {
  startMs: number;
  endMs: number;
  text: string;
}

export function buildCaptionTimeline(durations: Record<string, number>): TimedCaption[] {
  let elapsed = 0;
  const result: TimedCaption[] = [];

  for (const key of Object.keys(durations)) {
    const dur = durations[key];
    const baseKey = key.replace(/_r[12]$/, '');
    const cue = NARRATION_CUES.find((c) => c.sceneKey === baseKey);
    if (cue) {
      const startMs = elapsed + cue.delayMs;
      const endMs = elapsed + dur - 400;
      if (endMs > startMs) {
        result.push({ startMs, endMs, text: cue.text });
      }
    }
    elapsed += dur;
  }

  return result;
}

/** Cumulative start times of each scene in seconds. */
export function buildSceneStartTimes(durations: Record<string, number>): number[] {
  const times: number[] = [];
  let elapsed = 0;
  for (const key of Object.keys(durations)) {
    times.push(elapsed / 1000);
    elapsed += durations[key];
  }
  return times;
}

// ---------------------------------------------------------------------------
// WAV encoder — converts an AudioBuffer to a PCM WAV Blob
// ---------------------------------------------------------------------------

function audioBufferToWavBlob(buffer: AudioBuffer): Blob {
  const numChannels = 1; // mono
  const sampleRate = buffer.sampleRate;
  const numSamples = buffer.length;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const ab = new ArrayBuffer(44 + dataSize);
  const view = new DataView(ab);

  const ws = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };

  ws(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  ws(8, 'WAVE');
  ws(12, 'fmt ');
  view.setUint32(16, 16, true);        // chunk size
  view.setUint16(20, 1, true);         // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  ws(36, 'data');
  view.setUint32(40, dataSize, true);

  const pcm = buffer.getChannelData(0);
  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, pcm[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }

  return new Blob([ab], { type: 'audio/wav' });
}

// ---------------------------------------------------------------------------
// Offline audio renderer — produces the ambient backing track asset
// ---------------------------------------------------------------------------

async function renderAmbientBuffer(durationSeconds: number): Promise<AudioBuffer> {
  const sampleRate = 22050; // sufficient for ambient music
  const ctx = new OfflineAudioContext(1, Math.ceil(sampleRate * durationSeconds), sampleRate);

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.5, 0);
  master.connect(ctx.destination);

  // A-minor pad: A2/E3/A3/E4 with LFO breathing and warm low-pass filter
  const partials = [
    { freq: 110, type: 'sine'     as OscillatorType, gain: 0.22, lfoHz: 0.09 },
    { freq: 165, type: 'triangle' as OscillatorType, gain: 0.15, lfoHz: 0.12 },
    { freq: 220, type: 'sine'     as OscillatorType, gain: 0.12, lfoHz: 0.15 },
    { freq: 330, type: 'triangle' as OscillatorType, gain: 0.08, lfoHz: 0.18 },
  ];

  partials.forEach(({ freq, type, gain, lfoHz }, i) => {
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, 0);
    osc.detune.setValueAtTime((i - 1.5) * 5, 0);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(gain, 0);

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(lfoHz, 0);
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.setValueAtTime(gain * 0.15, 0);
    lfo.connect(lfoDepth);
    lfoDepth.connect(oscGain.gain);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650 - i * 80, 0);
    filter.Q.setValueAtTime(0.6, 0);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(master);

    osc.start(0);
    osc.stop(durationSeconds);
    lfo.start(0);
    lfo.stop(durationSeconds);
  });

  return ctx.startRendering();
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export interface UseNarrationReturn {
  muted: boolean;
  toggleMute: () => void;
  activeCaption: string | null;
  seekTo: (timeSeconds: number) => void;
}

export function useNarration(durations: Record<string, number>): UseNarrationReturn {
  const [muted, setMuted] = useState(true);
  const [activeCaption, setActiveCaption] = useState<string | null>(null);

  // <audio> element ref — created once audio blob is ready
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Monotonic caption clock independent of AudioContext state.
  // elapsed = (performance.now() - clockWallMs) + clockOffsetMs
  const clockWallMsRef = useRef(performance.now());
  const clockOffsetMsRef = useRef(0);

  const rafIdRef = useRef<number | null>(null);

  const totalDurationMs = useMemo(
    () => Object.values(durations).reduce((a, b) => a + b, 0),
    [durations],
  );
  const timeline = useMemo(() => buildCaptionTimeline(durations), [durations]);

  // ----- Render audio and wire up the <audio> element on mount -------------
  useEffect(() => {
    let cancelled = false;
    let audio: HTMLAudioElement | null = null;
    let blobUrl: string | null = null;

    // Start the caption clock immediately so captions appear even before
    // the audio blob is ready (OfflineAudioContext render is typically <200ms)
    clockWallMsRef.current = performance.now();
    clockOffsetMsRef.current = 0;

    renderAmbientBuffer(totalDurationMs / 1000)
      .then((buffer) => {
        if (cancelled) return;

        const blob = audioBufferToWavBlob(buffer);
        blobUrl = URL.createObjectURL(blob);

        audio = new Audio(blobUrl);
        audio.loop = true;
        // Start muted — <audio muted autoplay> is allowed by browsers and
        // advances currentTime without a user gesture.
        audio.muted = true;

        audioRef.current = audio;

        // Sync audio position to the current caption clock position so
        // audio.currentTime tracks in sync after load.
        const elapsedAtLoad = performance.now() - clockWallMsRef.current + clockOffsetMsRef.current;
        audio.currentTime = (elapsedAtLoad / 1000) % (totalDurationMs / 1000);

        audio.play().catch(() => {
          // Blocked by autoplay policy — clock still advances, audio will
          // resume on toggleMute()
        });
      })
      .catch((err) => {
        console.error('[useNarration] render failed', err);
      });

    return () => {
      cancelled = true;
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
      if (audio) {
        audio.pause();
        audio.src = '';
        audioRef.current = null;
      }
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalDurationMs]);

  // ----- RAF caption loop — driven by our monotonic clock ------------------
  useEffect(() => {
    const tick = () => {
      const elapsed =
        ((performance.now() - clockWallMsRef.current + clockOffsetMsRef.current) % totalDurationMs + totalDurationMs) %
        totalDurationMs;

      const hit = timeline.find((c) => elapsed >= c.startMs && elapsed <= c.endMs) ?? null;
      setActiveCaption(hit ? hit.text : null);

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [timeline, totalDurationMs]);

  // ----- Mute / unmute -----------------------------------------------------
  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      const audio = audioRef.current;
      if (audio) {
        audio.muted = next;
        if (!next && audio.paused) {
          // Autoplay was blocked — resume on first unmute
          audio.play().catch(() => {});
        }
      }
      return next;
    });
  }, []);

  // Keep audio element in sync with muted state
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.muted = muted;
  }, [muted]);

  // ----- Scene seek --------------------------------------------------------
  /**
   * Seek both the audio element and the caption clock to a specific time.
   * Call this whenever the user jumps to a different scene.
   */
  const seekTo = useCallback((timeSeconds: number) => {
    // Reset caption clock to the new position
    clockWallMsRef.current = performance.now();
    clockOffsetMsRef.current = timeSeconds * 1000;

    // Seek audio element
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = timeSeconds % (totalDurationMs / 1000);
    }
  }, [totalDurationMs]);

  return { muted, toggleMute, activeCaption, seekTo };
}
