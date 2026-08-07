"use client";

import { useRecentMembers } from "@/hooks/use-live-data";
import { useTheme } from "@/lib/theme-provider";
import { motion, useReducedMotion } from "framer-motion";

const HEADING = "10 Warga Terbaru";

export function RecentMembers() {
  const { data: members, loading } = useRecentMembers(10);
  const { isDesktop } = useTheme();
  const reduce = useReducedMotion();
  const animate = isDesktop && !reduce;

  return (
    <section id="warga-baru" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <motion.p
        className="text-xs font-black uppercase tracking-[.22em] text-towa-accent-2"
        initial={animate ? { opacity: 0, y: 8 } : false}
        whileInView={animate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ amount: 0.6 }}
        transition={animate ? { duration: 0.5, ease: "easeInOut" } : undefined}
      >
        Baru gabung
      </motion.p>

      <motion.h2
        className="mt-3 text-3xl font-black tracking-[-.04em] text-towa-text"
        initial={animate ? { opacity: 0, y: 12 } : false}
        whileInView={animate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ amount: 0.6 }}
        transition={animate ? { duration: 0.5, ease: "easeInOut" } : undefined}
      >
        <span className="sr-only">{HEADING}</span>
        <span aria-hidden="true" className="flex flex-wrap">
          {HEADING.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              animate={animate ? { y: [0, -6, 0] } : undefined}
              transition={
                animate
                  ? {
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: index * 0.05,
                    }
                  : undefined
              }
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {loading && <p className="text-sm text-towa-text-subtle">Memuat...</p>}
        {!loading && members.length === 0 && (
          <p className="text-sm text-towa-text-subtle">Belum ada warga baru.</p>
        )}
        {members.map((member) => (
          <span
            key={member.discord_user_id + member.event_at}
            className="inline-flex items-center gap-2 rounded-full border border-towa-border bg-towa-bg-alt py-1 pl-1 pr-3 text-sm font-bold"
          >
            <img
              src={member.avatar_url}
              alt=""
              className="size-7 rounded-full object-cover"
            />
            {member.username}
          </span>
        ))}
      </div>
    </section>
  );
}
