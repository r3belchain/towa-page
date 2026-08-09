"use client";

import { ArrowUp, MessageSquare, Video, Camera } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import Typewriter from "@/components/ui/typewriter";

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
              <Logo className="h-12 sm:h-14" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-towa-text-muted">
                Tempat pulang buat obrolan random, mabar, dan cerita yang belum
                sempat selesai.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-towa-border bg-towa-bg px-4 py-2.5 text-xs font-black shadow-sm transition-colors">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
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
                  href="#fitur"
                  className="transition-colors hover:text-towa-text"
                >
                  Fasilitas Rumah
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
                  href="https://discord.gg"
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
                  <Video className="size-4" /> TikTok Clips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 transition-colors hover:text-towa-text"
                >
                  <Camera className="size-4" /> Instagram
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
                  Server Boosters
                </a>
              </li>
              <li>
                <a
                  href="#warga"
                  className="transition-colors hover:text-towa-text"
                >
                  Donors / Support
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

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-towa-border/30 pt-8 sm:flex-row">
          <p className="text-xs font-bold text-towa-text-muted">
            Made with{" "}
            <span className="text-towa-accent-2">aren latte less sugar</span> by
            warga asbun.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="group inline-flex items-center gap-2 rounded-full border border-towa-border bg-towa-bg px-5 py-2.5 text-xs font-black text-towa-text shadow-sm transition-all hover:bg-towa-accent-2 hover:text-white"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
