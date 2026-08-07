"use client";

import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Doodles } from "@/components/ui/doodles";
import { useTheme } from "@/lib/theme-provider";
import {
  useBoosters,
  useServerStats,
  useVoiceActivity,
} from "@/hooks/use-live-data";

function formatCompact(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

// Entrance staggered kolom kiri Hero. Spring 400/22 sengaja kalem (sedikit
// settle) — kalau pakai 500/12 headline gede ikut goyang.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
};

export function Hero() {
  const { data: stats, loading: statsLoading } = useServerStats();
  const { data: boosters } = useBoosters();
  const { isDesktop } = useTheme();
  const reduce = useReducedMotion();
  // Gate animasi load/continuous: mati di mobile & saat reduce-motion → render
  // statis (mobile ringan, kode animasi tetap ke-download tapi nggak jalan).
  const animate = isDesktop && !reduce;

  const communityStats = [
    {
      value: statsLoading ? "—" : formatCompact(stats?.total_members ?? 0),
      label: "Warga",
    },
    {
      value: statsLoading ? "—" : formatCompact(stats?.online_count ?? 0),
      label: "Online",
    },
    {
      value: statsLoading ? "—" : formatCompact(boosters.length),
      label: "Boosters",
    },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <Doodles />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          className="relative z-10"
          variants={container}
          initial={animate ? "hidden" : false}
          animate={animate ? "show" : false}
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-towa-accent-2/30 bg-towa-bg-alt px-3 py-1 text-xs font-black tracking-[0.18em] text-towa-accent-2"
          >
            <span className="size-2 rounded-full bg-towa-accent-2" /> DISCORD
            COMMUNITY
          </motion.p>
          <motion.h1
            variants={item}
            className="max-w-2xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] text-towa-text sm:text-8xl lg:text-[7.3rem]"
          >
            <span className="sticker-text">Ini TOWA,</span>
            <br />
            <span className="text-towa-accent-2">tongkrongan</span>
            <br />
            warga asbun.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-8 text-towa-text-muted"
          >
            Cari teman mabar 24 jam? Mau deep talk atau bahas anime? Di sini
            tempatnya. Satu server, banyak cerita.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-2 text-sm font-bold"
          >
            <motion.a
              className="rounded-full bg-towa-ink px-4 py-2 text-towa-bg"
              href="#tentang"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { y: 1, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
            >
              Tentang
            </motion.a>
            <motion.a
              className="rounded-full border border-towa-border px-4 py-2 hover:border-towa-accent-2"
              href="#momen"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { y: 1, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
            >
              Kirim Momen
            </motion.a>
            <motion.a
              className="rounded-full border border-towa-border px-4 py-2 hover:border-towa-accent-2"
              href="#karya"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { y: 1, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
            >
              Pamer Karya
            </motion.a>
            <motion.a
              className="rounded-full border border-towa-border px-4 py-2 hover:border-towa-accent-2"
              href="#faq"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { y: 1, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 12 }}
            >
              Event
            </motion.a>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-8 border-t border-towa-border pt-6"
          >
            {communityStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-tight text-towa-text">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-towa-text-subtle">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const { isDesktop } = useTheme();
  const reduce = useReducedMotion();
  const animate = isDesktop && !reduce;

  return (
    <div className="relative mx-auto min-h-[460px] w-full max-w-[560px]">
      {/* Layer posisi: centering statis lewat -translate, dipisah biar transform
          framer-motion (scale/y) nggak nabrak dan bikin lingkaran lari dari tengah. */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Layer pop-in entrance */}
        <motion.div
          initial={animate ? { opacity: 0, scale: 0.9 } : false}
          animate={animate ? { opacity: 1, scale: 1 } : false}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {/* Layer idle-float (opsional, desktop only) — hapus blok motion ini
              saja kalau mengganggu, sisanya tetap jalan. */}
          <motion.div
            animate={animate ? { y: [0, -8, 0] } : false}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative flex size-[310px] items-center justify-center rounded-full border-[3px] border-towa-ink bg-towa-accent shadow-[12px_14px_0_var(--towa-accent-2)] sm:size-[390px]">
              <div className="rounded-full border-2 border-towa-ink bg-towa-bg-alt p-12">
                <div className="towa-cup towa-cup-xl">
                  <span />
                </div>
              </div>
              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-towa-ink px-4 py-1 text-xs font-black tracking-[.2em] text-towa-bg">
                EST. 2021
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <VoiceActivityCard />
    </div>
  );
}

export function VoiceActivityCard() {
  const { data: voiceChannels, loading } = useVoiceActivity();
  const { isDesktop } = useTheme();
  const reduce = useReducedMotion();
  const animate = isDesktop && !reduce;

  return (
    <div className="absolute bottom-0 right-0 w-[min(100%,330px)] rotate-[-3deg] rounded-2xl border-2 border-towa-ink bg-towa-bg p-5 shadow-[7px_8px_0_var(--towa-ink)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-towa-accent-2">
            Live now
          </p>
          <h3 className="mt-1 text-xl font-black">Voice Activity</h3>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-towa-live-bg px-2 py-1 text-[10px] font-black text-towa-live-text">
          <span className="size-1.5 animate-pulse rounded-full bg-towa-accent-2" />{" "}
          LIVE
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {!loading && voiceChannels.length === 0 && (
          <p className="pt-3 text-sm text-towa-text-subtle">
            Belum ada yang nge-VC.
          </p>
        )}
        {/* initial={false}: row yang sudah ada saat mount TIDAK slide-in; cuma
            channel yang beneran baru muncul yang animate masuk. key={channelId}
            stabil → refetch realtime nggak bikin row lama re-animate. */}
        <AnimatePresence initial={false}>
          {voiceChannels.map((channel) => (
            <motion.div
              key={channel.channelId}
              layout={animate}
              initial={animate ? { opacity: 0, x: 12 } : false}
              animate={animate ? { opacity: 1, x: 0 } : false}
              exit={animate ? { opacity: 0, x: 12 } : undefined}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
              className="flex items-center justify-between border-t border-towa-border pt-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {channel.avatars.slice(0, 3).map((name, index) => (
                    <span
                      key={name + index}
                      className="flex size-7 items-center justify-center rounded-full border-2 border-towa-bg bg-towa-accent text-[9px] font-black"
                    >
                      {name[0]}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-bold">{channel.name}</span>
              </div>
              <span className="text-xs font-bold text-towa-text-subtle">
                {channel.people}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
