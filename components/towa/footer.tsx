"use client";

import { Logo } from "@/components/ui/logo";
import Typewriter from "@/components/ui/typewriter";
import { motion } from "framer-motion";
import { CircleFadingPlus, MessageSquare, Video } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const towaPhrases = [
    "Cari teman mabar.",
    "Deep Talk malam.",
    "Asbun apa aja.",
    "Bahas Anime favorit.",
    "Curhat kehidupan.",
    "Pamer karya keren.",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex min-h-screen w-full flex-col justify-between bg-towa-bg-alt text-towa-text transition-colors duration-500 dark:bg-transparent">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 pb-32 pt-10 md:pb-10 lg:px-8 lg:pt-24">
        <div className="flex flex-col items-start justify-center pt-0 pb-16 lg:pt-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-towa-accent-2">
            Di TOWA kamu bisa
          </p>
          <div className="w-full text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            <Typewriter
              prefix=""
              texts={towaPhrases}
              color="var(--towa-text)"
              typedColor="var(--towa-accent-2)"
              cursorColor="var(--towa-accent-2)"
              cursorChar="_"
              showCursor={true}
              deleteSpeed={0.05}
              ease={{
                type: "tween",
                duration: 0.05,
                delay: 1.8,
                ease: "easeInOut",
              }}
              font={{
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "900",
                lineHeight: "1.2em",
                letterSpacing: "-0.03em",
              }}
            />
          </div>
        </div>

        <div className="grid gap-12 border-t border-towa-border/30 pt-16 transition-colors duration-500 dark:!border-towa-accent-2/20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <a
                href="#top"
                aria-label="TOWA home"
                className="flex shrink-0 items-center gap-1 transition-transform active:scale-95"
              >
                <Logo className="h-14 sm:h-16" />
                <span className="text-xl mt-3 font-black tracking-wider text-[#ce8e0d] sm:text-2xl">
                  TOWA
                </span>
              </a>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-towa-text-muted">
                Tempat pulang buat obrolan random, mabar, dan cerita yang belum
                sempat selesai.
              </p>
            </div>

            <div className="group inline-flex w-fit cursor-default items-center gap-3 rounded-full border-2 border-towa-ink bg-towa-bg px-4 py-2.5 text-xs font-black shadow-[3px_3px_0_var(--towa-ink)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--towa-ink)] dark:!border-towa-accent-2/50 dark:!bg-[#0a0a12]/80 dark:!shadow-[0_0_15px_rgba(47,232,255,0.1)] dark:backdrop-blur-md dark:hover:!border-towa-accent-2 dark:hover:!shadow-[0_0_25px_rgba(47,232,255,0.3)]">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase text-towa-text">
                Bot &amp; Server Active
              </span>
            </div>
          </div>

          {/* ========================================== */}
          {/* MENU NAVIGASI (Dengan efek Hover Neon)     */}
          {/* ========================================== */}
          <div className="flex flex-col gap-4 lg:ml-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-towa-accent-2">
              Navigasi
            </p>
            <ul className="flex flex-col gap-3 text-sm font-bold text-towa-text-muted">
              <li>
                <a
                  href="#tentang"
                  className="transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#warga"
                  className="transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  Rukun Warga
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  Rules &amp; FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-towa-accent-2">
              Tongkrongan
            </p>
            <ul className="flex flex-col gap-3 text-sm font-bold text-towa-text-muted">
              <li>
                <a
                  href="https://discord.gg/mYFaDU77PT"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  <MessageSquare className="size-4" /> Discord Server
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  <Video className="size-4" /> TikTok Clips (Soon)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  <CircleFadingPlus className="size-4" /> Instagram (Soon)
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-towa-accent-2">
              Hall of fame
            </p>
            <ul className="flex flex-col gap-3 text-sm font-bold text-towa-text-muted">
              <li>
                <a
                  href="#warga"
                  className="transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  Boosters & Donors
                </a>
              </li>
              <li>
                <a
                  href="#momen"
                  className="transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  Kirim Momen
                </a>
              </li>
              <li>
                <a
                  href="#karya"
                  className="transition-all duration-300 hover:text-towa-ink dark:hover:text-towa-accent-2 dark:hover:drop-shadow-[0_0_8px_rgba(47,232,255,0.6)]"
                >
                  Pamer Karya
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center text-xs text-towa-text-subtle sm:mt-0 sm:flex-row sm:text-left">
          <span className="mb-2 font-bold text-towa-text sm:mb-0">
            © {currentYear} TOWA
          </span>
          <span className="hidden mx-1.5 text-towa-text-subtle/50 sm:inline-block">
            |
          </span>

          <motion.span
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--towa-accent-2), var(--towa-accent), var(--towa-accent-2))",
            }}
            className="inline-block bg-[size:200%_auto] bg-clip-text font-extrabold text-transparent"
          >
            Made with Caramel Macchiato double-shot by warga asbun.
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
