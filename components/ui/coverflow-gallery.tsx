"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type CSSProperties,
} from "react";
import { Music, Video, Image as ImageIcon, ExternalLink } from "lucide-react";

interface Slide {
  title: string;
  artist: string;
  image: string;
  type: string;
  link: string;
}

interface CoverflowProps {
  slides: Slide[];
}

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const MAX_VISIBLE = 2;
const DEPTH = 240;

function cssTransition() {
  return { dur: 0.6, ease: "cubic-bezier(0.22, 1, 0.36, 1)" };
}

export default function CoverflowGallery({ slides }: CoverflowProps) {
  const n = slides.length;
  const loop = true;

  const [active, setActive] = useState(Math.floor(n / 2)); 

  useEffect(() => {
    setActive((a) => Math.max(0, Math.min(n - 1, a)));
  }, [n]);

  const moveDur = 0.6;
  const lockRef = useRef(false);
  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(
      () => {
        lockRef.current = false;
      },
      Math.max(50, moveDur * 1000),
    );
  }, [moveDur]);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock],
  );

  const handleCardClick = useCallback(
    (i: number) => {
      if (lockRef.current) return;
      if (active !== i) {
        lock();
        setActive(i);
      }
    },
    [active, lock],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step],
  );

  const { dur, ease } = cssTransition();
  const transitionCss = `transform ${dur}s ${ease}, opacity ${dur}s ${ease}, box-shadow ${dur}s ${ease}, border-color ${dur}s ${ease}`;

  const cardWidth = 340;
  const cardHeight = 440;
  const radius = 16;
  const tilt = 15;
  const sideTilt = 5;
  const gap = 12;

  const rootStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: `${PERSPECTIVE}px`,
    overflow: "hidden",
    outline: "none",
  };

  return (
    <div style={rootStyle} tabIndex={0} role="group" onKeyDown={onKeyDown}>
      {/* ==================================================================== */}
      {/* EFEK GRADASI MEMUDAR DI UJUNG KIRI & KANAN (EDGE SOFT FADE MASK)     */}
      {/* ==================================================================== */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-towa-bg via-towa-bg/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-towa-bg via-towa-bg/70 to-transparent" />

      <div
        style={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          transformStyle: "preserve-3d",
        }}
      >
        {slides.map((slide, i) => {
          let rel = i - active;
          if (loop) {
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
          }
          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          const sc = Math.max(0.4, 1 - ax * SCALE_STEP);
          const tx = rel * (gap * 30);
          const tz = -ax * DEPTH;
          const ry = -rel * tilt;
          const rz = rel * sideTilt;

          // Kalkulasi opasitas bertingkat: Kartu paling samping makin memudar (fade out)
          const cardOpacity = visible ? Math.max(0.2, 1 - ax * 0.35) : 0;

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: cardWidth,
            height: cardHeight,
            borderRadius: radius,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
            transition: transitionCss,
            opacity: cardOpacity,
            cursor: isActive ? "default" : "pointer",
            pointerEvents: visible ? "auto" : "none",
            backgroundColor: "var(--towa-bg-alt)",
            border: isActive
              ? "2px solid var(--towa-accent-2)"
              : "2px solid var(--towa-border)",
            boxShadow: isActive
              ? "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 30px -5px var(--towa-accent-2)"
              : "0 10px 30px -10px rgba(0,0,0,0.6)",
          };

          return (
            <div key={i} style={cardStyle} onClick={() => handleCardClick(i)}>
              {/* Gambar Cover */}
              <img
                src={slide.image}
                alt={slide.title}
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  userSelect: "none",
                }}
              />

              {/* Badge Kategori Kiri Atas */}
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                {slide.type === "spotify" && (
                  <Music size={14} className="text-[#1DB954]" />
                )}
                {slide.type === "video" && (
                  <Video size={14} className="text-[#FF0000]" />
                )}
                {slide.type === "image" && (
                  <ImageIcon size={14} className="text-[#2FE8FF]" />
                )}
                {slide.type}
              </div>

              {/* Info Karya Bawah */}
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 pt-16"
                style={{ pointerEvents: "none" }}
              >
                <h3 className="text-2xl font-black text-white drop-shadow-md">
                  {slide.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gray-300">
                  By {slide.artist}
                </p>
              </div>

              {/* Dim overlay untuk kartu tidak aktif */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#000000",
                  opacity: isActive ? 0 : 0.65,
                  transition: `opacity ${dur}s ${ease}`,
                  pointerEvents: "none",
                }}
              />

              {/* CTA BUTTON JIKA KARTU AKTIF (Di-Hover) */}
              {isActive && (
                <div className="group absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-all duration-300 hover:opacity-100">
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-towa-accent-2 px-6 py-3 text-sm font-black text-white shadow-xl transition-transform hover:scale-110"
                  >
                    {slide.type === "spotify"
                      ? "Putar di Spotify"
                      : slide.type === "video"
                        ? "Tonton Video"
                        : "Lihat Penuh"}
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
