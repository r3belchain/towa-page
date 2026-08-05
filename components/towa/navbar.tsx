"use client";

import { ArrowUpRight, Zap } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { Logo } from "@/components/ui/logo";

function CyberpunkToggle() {
  const { theme, toggleTheme, isDesktop } = useTheme();

  // Bukan cuma disembunyikan lewat CSS — mekanismenya tetap ada di semua ukuran
  // layar (biar gampang di-test), tapi secara desain memang cuma dimaksudkan
  // buat desktop, jadi elemen ini disembunyikan penuh di bawah breakpoint lg.
  if (!isDesktop) return null;

  const isCyberpunk = theme === "cyberpunk";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isCyberpunk}
      className="hidden items-center gap-2 rounded-full border border-towa-border px-3.5 py-2 text-xs font-black uppercase tracking-wider text-towa-text transition hover:border-towa-accent-2 lg:inline-flex"
    >
      <Zap className="size-3.5" />
      {isCyberpunk ? "Normal mode" : "Cyberpunk mode"}
    </button>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-towa-border/70 bg-towa-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#top" aria-label="TOWA home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
          <a
            href="#momen"
            className="transition-colors hover:text-towa-accent-2"
          >
            Kirim Momen
          </a>
          <a
            href="#karya"
            className="transition-colors hover:text-towa-accent-2"
          >
            Pamer Karya
          </a>
          <a
            href="#warga"
            className="transition-colors hover:text-towa-accent-2"
          >
            Rukun Warga
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <CyberpunkToggle />
          <a
            className="inline-flex items-center gap-2 rounded-full bg-towa-accent px-5 py-2.5 text-sm font-black text-towa-ink shadow-[3px_3px_0_var(--towa-ink)] transition hover:shadow-[1px_1px_0_var(--towa-ink)]"
            href="https://discord.com/invite/towa"
            target="_blank"
            rel="noreferrer"
          >
            Join Server <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
