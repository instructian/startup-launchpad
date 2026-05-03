import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Repeat, FileText, Download, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import VideoTemplate, { SCENE_DURATIONS } from './VideoTemplate';
import { useSceneControls } from './useSceneControls';
import Storyboard from './Storyboard';
import { useExportMP4, type ExportState } from '@/hooks/useExportMP4';

const PROGRESS_TICK_MS = 60;

interface ControlBarProps {
  visible: boolean;
  collapsed: boolean;
  locked: boolean;
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  tick: number;
  showingScript: boolean;
  exportState: ExportState;
  exportProgress: number;
  exportError: string | null;
  onToggleLock: () => void;
  onJumpTo: (index: number) => void;
  onToggleCollapsed: () => void;
  onToggleScript: () => void;
  onExport: () => void;
}

function ProgressSegments({
  sceneKeys,
  activeIndex,
  activeDuration,
  tick,
  onJumpTo,
}: {
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  tick: number;
  onJumpTo: (index: number) => void;
}) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(0);
    const start = performance.now();
    const id = window.setInterval(() => {
      setElapsed(performance.now() - start);
    }, PROGRESS_TICK_MS);
    return () => window.clearInterval(id);
  }, [tick]);

  const progress = activeDuration > 0 ? Math.min(1, elapsed / activeDuration) : 0;

  return (
    <div className="flex-1 flex items-center gap-1.5">
      {sceneKeys.map((key, i) => {
        const isActive = i === activeIndex;
        const fill = isActive ? progress * 100 : 0;
        return (
          <button
            key={key}
            onClick={() => onJumpTo(i)}
            className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-4 hover:bg-white/25 transition-all relative min-h-[12px]"
            aria-label={`Jump to scene ${i + 1}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <div
              className="absolute inset-y-0 left-0 bg-white/90 rounded-full transition-[width] duration-100"
              style={{ width: `${fill}%` }}
            />
          </button>
        );
      })}
    </div>
  );
}

function ExportButton({
  exportState,
  exportProgress,
  exportError,
  onExport,
}: {
  exportState: ExportState;
  exportProgress: number;
  exportError: string | null;
  onExport: () => void;
}) {
  const isIdle = exportState === 'idle';
  const isWaiting = exportState === 'waiting';
  const isRecording = exportState === 'recording';
  const isProcessing = exportState === 'processing';
  const isDone = exportState === 'done';
  const isError = exportState === 'error';
  const isActive = isWaiting || isRecording || isProcessing;

  let label: string;
  let title: string;
  if (isWaiting) { label = 'Select tab to share…'; title = label; }
  else if (isRecording) { label = `Recording… ${Math.round(exportProgress)}%`; title = label; }
  else if (isProcessing) { label = 'Saving MP4…'; title = label; }
  else if (isDone) { label = 'Downloaded!'; title = label; }
  else if (isError) { label = exportError ?? 'Export failed'; title = label; }
  else { label = 'Export MP4'; title = 'Export MP4 — requires Chrome 105+ or Edge'; }

  return (
    <button
      onClick={isIdle ? onExport : undefined}
      disabled={isActive || isDone}
      title={title}
      aria-label={label}
      className={[
        'flex items-center gap-2 px-4 h-14 rounded-lg transition-all shrink-0 text-sm font-medium',
        isRecording ? 'bg-red-500/80 text-white' : '',
        isProcessing ? 'bg-blue-500/80 text-white' : '',
        isDone ? 'bg-green-500/80 text-white' : '',
        isError ? 'bg-red-700/80 text-white' : '',
        isWaiting ? 'text-white/70 bg-white/10' : '',
        isIdle ? 'text-white/70 hover:text-white hover:bg-white/10' : '',
      ].join(' ')}
    >
      {isWaiting && <Loader2 className="w-5 h-5 animate-spin shrink-0" />}
      {isRecording && (
        <span className="relative flex w-3 h-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      )}
      {isProcessing && <Loader2 className="w-5 h-5 animate-spin shrink-0" />}
      {isDone && <CheckCircle2 className="w-5 h-5 shrink-0" />}
      {isError && <AlertCircle className="w-5 h-5 shrink-0" />}
      {isIdle && <Download className="w-5 h-5 shrink-0" />}
      <span className="whitespace-nowrap">{label}</span>
      {isIdle && (
        <span className="sr-only"> (requires Chrome 105+ or Edge)</span>
      )}
    </button>
  );
}

function ControlBar({
  visible,
  collapsed,
  locked,
  sceneKeys,
  activeIndex,
  activeDuration,
  tick,
  showingScript,
  exportState,
  exportProgress,
  exportError,
  onToggleLock,
  onJumpTo,
  onToggleCollapsed,
  onToggleScript,
  onExport,
}: ControlBarProps) {
  return (
    <div
      className={`flex items-center gap-3 bg-black/50 backdrop-blur-sm px-5 py-4 transition-all duration-200 ease-out ${
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <button
        onClick={onToggleLock}
        className={`w-14 h-14 flex items-center justify-center transition-colors rounded-lg shrink-0 ${
          locked
            ? 'text-white bg-white/15 hover:bg-white/25'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
        title={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        aria-label={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        aria-pressed={locked}
      >
        <Repeat className="w-8 h-8" />
      </button>

      <div className="w-px self-stretch bg-white/15" aria-hidden="true" />

      <ProgressSegments
        sceneKeys={sceneKeys}
        activeIndex={activeIndex}
        activeDuration={activeDuration}
        tick={tick}
        onJumpTo={onJumpTo}
      />

      <div className="text-xl text-white/60 font-mono tabular-nums shrink-0">
        {activeIndex + 1}/{sceneKeys.length}
      </div>

      <div className="w-px self-stretch bg-white/15" aria-hidden="true" />

      <ExportButton
        exportState={exportState}
        exportProgress={exportProgress}
        exportError={exportError}
        onExport={onExport}
      />

      <div className="w-px self-stretch bg-white/15" aria-hidden="true" />

      <button
        onClick={onToggleScript}
        className={`w-14 h-14 flex items-center justify-center transition-colors rounded-lg shrink-0 ${
          showingScript
            ? 'text-white bg-white/15 hover:bg-white/25'
            : 'text-white/60 hover:text-white hover:bg-white/10'
        }`}
        title={showingScript ? 'Close script & storyboard' : 'View script & storyboard'}
        aria-label={showingScript ? 'Close script & storyboard' : 'View script & storyboard'}
        aria-pressed={showingScript}
      >
        <FileText className="w-8 h-8" />
      </button>

      <button
        onClick={onToggleCollapsed}
        className="w-14 h-14 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors rounded-lg shrink-0"
        title={collapsed ? 'Show controls' : 'Hide controls'}
        aria-label={collapsed ? 'Show controls' : 'Hide controls'}
        aria-expanded={!collapsed}
      >
        {collapsed ? <ChevronUp className="w-10 h-10" /> : <ChevronDown className="w-10 h-10" />}
      </button>
    </div>
  );
}

export default function VideoWithControls() {
  const isIframed = typeof window !== 'undefined' && window.self !== window.top;

  const {
    sceneKeys,
    activeIndex,
    locked,
    mountKey,
    tick,
    durations,
    activeDuration,
    onSceneChange,
    jumpTo,
    toggleLock,
  } = useSceneControls(SCENE_DURATIONS);

  // When true, VideoTemplate uses full SCENE_DURATIONS with loop=false for recording
  const [isExporting, setIsExporting] = useState(false);

  const handleExportComplete = useCallback(() => {
    setIsExporting(false);
  }, []);

  const handleStartExport = useCallback(() => {
    // If scene is locked, unlock it so the full video plays
    if (locked) toggleLock();
    setIsExporting(true);
    // Reset to scene 1 (remounts VideoTemplate, which triggers window.startRecording)
    jumpTo(0);
  }, [locked, toggleLock, jumpTo]);

  const { exportState, progress: exportProgress, errorMessage: exportError, startExport } =
    useExportMP4(handleStartExport, handleExportComplete);

  const sensorRef = useRef<HTMLDivElement | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [tapPinned, setTapPinned] = useState(false);
  const [showingScript, setShowingScript] = useState(false);

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') setHovering(true);
  }, []);
  const handlePointerLeave = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') setHovering(false);
  }, []);
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === 'mouse') return;
      if (collapsed) setTapPinned(true);
    },
    [collapsed],
  );
  const handleToggleCollapsed = useCallback(() => {
    setCollapsed((c) => {
      if (!c) {
        setHovering(false);
        setTapPinned(false);
      }
      return !c;
    });
  }, []);
  const handleToggleScript = useCallback(() => {
    setShowingScript((s) => !s);
  }, []);

  useEffect(() => {
    if (!(collapsed && tapPinned)) return;
    const onDocPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return;
      const sensor = sensorRef.current;
      if (sensor && !sensor.contains(e.target as Node)) setTapPinned(false);
    };
    document.addEventListener('pointerdown', onDocPointerDown);
    return () => document.removeEventListener('pointerdown', onDocPointerDown);
  }, [collapsed, tapPinned]);

  const barVisible = !collapsed || hovering || tapPinned;

  if (!isIframed) return <VideoTemplate />;

  return (
    <div className="relative w-full h-screen">
      <VideoTemplate
        key={mountKey}
        durations={isExporting ? SCENE_DURATIONS : durations}
        loop={!isExporting}
        onSceneChange={onSceneChange}
      />

      {/* Storyboard overlay */}
      {showingScript && <Storyboard onClose={() => setShowingScript(false)} />}

      <div
        ref={sensorRef}
        className="absolute bottom-0 left-0 right-0 z-50 flex flex-col justify-end"
        style={{ height: '25%' }}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
      >
        <div className="flex-1 w-full" aria-hidden="true" />
        <ControlBar
          visible={barVisible}
          collapsed={collapsed}
          locked={locked}
          sceneKeys={sceneKeys}
          activeIndex={activeIndex}
          activeDuration={activeDuration}
          tick={tick}
          showingScript={showingScript}
          exportState={exportState}
          exportProgress={exportProgress}
          exportError={exportError}
          onToggleLock={toggleLock}
          onJumpTo={jumpTo}
          onToggleCollapsed={handleToggleCollapsed}
          onToggleScript={handleToggleScript}
          onExport={startExport}
        />
      </div>
    </div>
  );
}
