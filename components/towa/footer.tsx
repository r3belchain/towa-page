"use client";

import { ArrowUp, MessageSquare, Video, CircleFadingPlus } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import Typewriter from "@/components/ui/typewriter";
import { motion } from "framer-motion";

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
    <footer className="relative flex min-h-screen w-full flex-col justify-between bg-towa-bg-alt text-towa-text transition-colors duration-500">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 pb-10 pt-24 lg:px-8">
        <div className="flex flex-col items-start justify-center pt-8 pb-16">
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

        <div className="grid gap-12 border-t border-towa-border/30 pt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-towa-border bg-towa-bg px-4 py-2.5 text-xs font-black shadow-sm transition-colors">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-rose-700" />
              </span>
              <span className="tracking-wider uppercase text-towa-text">
                Bot &amp; Server Inactive
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:ml-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-towa-accent-2">
              Navigasi
            </p>
            <ul className="flex flex-col gap-3 text-sm font-bold text-towa-text-muted">
              <li>
                <a
                  href="#tentang"
                  className="transition-colors hover:text-towa-text"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#warga"
                  className="transition-colors hover:text-towa-text"
                >
                  Rukun Warga
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-towa-text"
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
                  className="inline-flex items-center gap-2 transition-colors hover:text-towa-text"
                >
                  <MessageSquare className="size-4" /> Discord Server
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-towa-text"
                >
                  <Video className="size-4" /> TikTok Clips (Soon)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-towa-text"
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
                  className="transition-colors hover:text-towa-text"
                >
                  Boosters & Donors
                </a>
              </li>
              <li>
                <a
                  href="#momen"
                  className="transition-colors hover:text-towa-text"
                >
                  Kirim Momen
                </a>
              </li>
              <li>
                <a
                  href="#karya"
                  className="transition-colors hover:text-towa-text"
                >
                  Pamer Karya
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="...">
          <p className="text-center text-xs text-towa-text-subtle sm:text-left">
            <span className="font-bold text-towa-text">
              © {currentYear} TOWA
            </span>
            <span className="mx-1.5 text-towa-text-subtle/50">|</span>

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
          </p>
        </div>
      </div>
    </footer>
  );
}
