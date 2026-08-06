"use client";

import { Logo } from "@/components/ui/logo";
import { useTheme } from "@/lib/theme-provider";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

function CyberpunkToggle() {
  const { theme, toggleTheme, isDesktop } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  
  if (!isDesktop) return null;

  const isCyberpunk = theme === "cyberpunk";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isCyberpunk}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { y: 1, scale: 0.97 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 500, damping: 12 }
      }
      className="inline-flex items-center gap-2 rounded-full border border-towa-border px-3.5 py-2 text-xs font-black uppercase tracking-wider text-towa-text transition hover:border-towa-accent-2"
    >
      <Zap className="size-3.5" />
      {isCyberpunk ? "Normal mode" : "Cyberpunk mode"}
    </motion.button>
  );
}

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();

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
          <motion.a
            className="inline-flex items-center gap-2 rounded-full bg-towa-accent px-5 py-2.5 text-sm font-black text-towa-ink shadow-[3px_3px_0_var(--towa-ink)] transition hover:shadow-[5px_5px_0_var(--towa-ink)] active:shadow-[1px_1px_0_var(--towa-ink)]"
            href="https://discord.gg/SZbfKfU2NY"
            target="_blank"
            rel="noreferrer"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
              rest: { x: 0, y: 0 },
              hover: shouldReduceMotion ? {} : { y: -4, x: -1 },
              tap: shouldReduceMotion ? {} : { y: 2, x: 1 },
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 500, damping: 12 }
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
              aria-hidden="true"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join Server
            <motion.span
              className="inline-flex"
              variants={{
                rest: { x: 0, y: 0 },
                hover: { x: 2, y: -2 },
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 500, damping: 12 }
              }
            >
              <ArrowUpRight className="size-4" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}
