import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
};

export function VimeoPlayer({ videoId, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);
  const userPausedRef = useRef(false);

  // Init player
  useEffect(() => {
    if (!containerRef.current) return;
    const player = new Player(containerRef.current, {
      id: Number(videoId),
      autoplay: false,
      muted: true,
      loop: true,
      controls: false,
      dnt: true,
      playsinline: true,
      title: false,
      byline: false,
      portrait: false,
      responsive: true,
    });
    playerRef.current = player;

    player.ready().then(() => {
      setReady(true);
      player.getDuration().then(setDuration).catch(() => {});
    });

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = (d: { seconds: number; duration: number }) => {
      setProgress(d.seconds);
      if (d.duration) setDuration(d.duration);
    };
    player.on("play", onPlay);
    player.on("pause", onPause);
    player.on("timeupdate", onTime);
    player.on("ended", () => setPlaying(false));

    return () => {
      player.off("play", onPlay);
      player.off("pause", onPause);
      player.off("timeupdate", onTime);
      player.destroy().catch(() => {});
      playerRef.current = null;
    };
  }, [videoId]);

  // Intersection observer for smart autoplay
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !ready) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        const p = playerRef.current;
        if (!p) return;
        if (e.isIntersecting && e.intersectionRatio > 0.5) {
          if (!userPausedRef.current) p.play().catch(() => {});
        } else {
          p.pause().catch(() => {});
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  const togglePlay = async () => {
    const p = playerRef.current;
    if (!p) return;
    const paused = await p.getPaused();
    if (paused) {
      userPausedRef.current = false;
      p.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      p.pause().catch(() => {});
    }
  };

  const toggleMute = async () => {
    const p = playerRef.current;
    if (!p) return;
    const m = await p.getMuted();
    await p.setMuted(!m);
    if (m) await p.setVolume(1);
    setMuted(!m);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const p = playerRef.current;
    if (!p || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    p.setCurrentTime(Math.max(0, Math.min(duration, ratio * duration))).catch(() => {});
  };

  const pct = duration ? (progress / duration) * 100 : 0;

  return (
    <div className="relative h-full w-full bg-black">
      <div ref={containerRef} className="absolute inset-0 [&_iframe]:!h-full [&_iframe]:!w-full" />

      {/* Click overlay to toggle */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Lecture"}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      {/* Bottom control bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            seek(e);
          }}
          className="pointer-events-auto mb-2.5 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/20"
        >
          <div
            className="h-full rounded-full bg-electric transition-[width] duration-100"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={playing ? "Pause" : "Play"}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110"
          >
            {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            aria-label={muted ? "Activer le son" : "Couper le son"}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      </div>

      {/* Title for accessibility */}
      <span className="sr-only">{title}</span>
    </div>
  );
}
