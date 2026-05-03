import { useCallback, useState } from 'react';

export type ExportState = 'idle' | 'waiting' | 'recording' | 'processing' | 'done' | 'error';

const MP4_CODECS = [
  'video/mp4;codecs=avc1',
  'video/mp4;codecs=h264',
  'video/mp4',
];

function getSupportedMp4MimeType(): string | null {
  for (const codec of MP4_CODECS) {
    if (MediaRecorder.isTypeSupported(codec)) return codec;
  }
  return null;
}

export function useExportMP4(
  onStartExport: () => void,
  onComplete?: () => void,
) {
  const [exportState, setExportState] = useState<ExportState>('idle');
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const startExport = useCallback(async () => {
    if (exportState !== 'idle') return;

    const mimeType = getSupportedMp4MimeType();
    if (!mimeType) {
      setErrorMessage('MP4 not supported — please use Chrome 105+ or Edge.');
      setExportState('error');
      setTimeout(() => {
        setExportState('idle');
        setErrorMessage(null);
        setProgress(0);
      }, 5000);
      return;
    }

    setExportState('waiting');

    try {
      const stream = await (navigator.mediaDevices as MediaDevices & {
        getDisplayMedia(opts?: Record<string, unknown>): Promise<MediaStream>;
      }).getDisplayMedia({
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          frameRate: { ideal: 30 },
        },
        audio: false,
        preferCurrentTab: true,
      });

      const chunks: Blob[] = [];

      const recorder = new MediaRecorder(stream, { mimeType });

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'startup-launchpad-trailer.mp4';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        window.startRecording = undefined;
        window.stopRecording = undefined;
        setProgress(100);
        setExportState('done');
        onComplete?.();
        setTimeout(() => {
          setExportState('idle');
          setProgress(0);
        }, 4000);
      };

      stream.getTracks().forEach((track) => {
        track.addEventListener('ended', () => {
          if (recorder.state !== 'inactive') recorder.stop();
          window.startRecording = undefined;
          window.stopRecording = undefined;
          setExportState('idle');
          setProgress(0);
          onComplete?.();
        });
      });

      const totalMs = 60000;
      let progressInterval: ReturnType<typeof setInterval> | null = null;

      window.startRecording = async () => {
        recorder.start(200);
        setExportState('recording');
        setProgress(0);
        const startTime = Date.now();
        progressInterval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          setProgress(Math.min(98, (elapsed / totalMs) * 100));
        }, 500);
      };

      window.stopRecording = () => {
        if (progressInterval) {
          clearInterval(progressInterval);
          progressInterval = null;
        }
        if (recorder.state !== 'inactive') {
          recorder.stop();
          setExportState('processing');
        }
      };

      onStartExport();
    } catch (err) {
      console.error('Export failed:', err);
      window.startRecording = undefined;
      window.stopRecording = undefined;
      setErrorMessage('Export cancelled or failed.');
      setExportState('error');
      onComplete?.();
      setTimeout(() => {
        setExportState('idle');
        setErrorMessage(null);
        setProgress(0);
      }, 4000);
    }
  }, [exportState, onStartExport, onComplete]);

  return { exportState, progress, errorMessage, startExport };
}
