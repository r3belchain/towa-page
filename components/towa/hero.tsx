"use client";

import { Doodles } from "@/components/ui/doodles";
import {
  useBoosters,
  useServerStats,
  useVoiceActivity,
} from "@/hooks/use-live-data";
import { useTheme } from "@/lib/theme-provider";
import {
  animate as animateCount,
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ChevronDown, ChevronUp, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function formatCompact(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

function StatCounter({
  value,
  label,
  loading,
}: {
  value: number;
  label: string;
  loading: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => formatCompact(Math.round(v)));

  useEffect(() => {
    if (loading || !inView) return;
    if (hasAnimated.current) {
      count.set(value);
      return;
    }
    hasAnimated.current = true;
    if (reduce) {
      count.set(value);
      return;
    }
    const controls = animateCount(count, value, {
      duration: 1.2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [loading, inView, value, reduce, count]);

  return (
    <div ref={ref}>
      <p className="text-3xl font-black tracking-tight text-towa-text">
        {loading ? "—" : <motion.span>{display}</motion.span>}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-towa-text-subtle">
        {label}
      </p>
    </div>
  );
}

export function Hero() {
  const { data: stats, loading: statsLoading } = useServerStats();
  const { data: boosters, loading: boostersLoading } = useBoosters();
  const { isDesktop } = useTheme();
  const reduce = useReducedMotion();

  const animate = isDesktop && !reduce;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const communityStats = [
    { value: stats?.total_members ?? 0, label: "Warga", loading: statsLoading },
    { value: stats?.online_count ?? 0, label: "Online", loading: statsLoading },
    { value: boosters.length, label: "Boosters", loading: boostersLoading },
  ];

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-towa-bg"
    >
      <Doodles />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="relative z-10">
          <motion.div
            style={animate ? { opacity: textOpacity, y: textY } : undefined}
          >
            <motion.p className="mb-5 inline-flex items-center gap-2 rounded-full border border-towa-accent-2/30 bg-towa-bg-alt px-3 py-1 text-xs font-black tracking-[0.18em] text-towa-accent-2">
              <span className="size-2 rounded-full bg-towa-accent-2" /> DISCORD
              COMMUNITY
            </motion.p>
            <motion.h1 className="max-w-2xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] text-towa-text sm:text-8xl lg:text-[7.3rem]">
              <motion.span
                className="inline-block"
                initial={animate ? { opacity: 0, y: 20 } : false}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0,
                }}
              >
                <motion.span
                  className="sticker-text inline-block"
                  animate={
                    animate ? { scale: [0.995, 1.005, 0.995] } : undefined
                  }
                  transition={
                    animate
                      ? { duration: 4.2, ease: "easeInOut", repeat: Infinity }
                      : undefined
                  }
                >
                  Ini TOWA,
                </motion.span>
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={animate ? { opacity: 0, y: 20 } : false}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
              >
                <motion.span
                  className="text-towa-accent-2 inline-block"
                  animate={
                    animate
                      ? { y: [-4, 4, -4], rotate: [-0.8, 0.8, -0.8] }
                      : undefined
                  }
                  transition={
                    animate
                      ? { duration: 3.6, ease: "easeInOut", repeat: Infinity }
                      : undefined
                  }
                >
                  tongkrongan
                </motion.span>
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={animate ? { opacity: 0, y: 20 } : false}
                whileInView={animate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
              >
                <motion.span
                  className="inline-block"
                  animate={animate ? { x: [-3, 3, -3] } : undefined}
                  transition={
                    animate
                      ? { duration: 5, ease: "easeInOut", repeat: Infinity }
                      : undefined
                  }
                >
                  warga asbun.
                </motion.span>
              </motion.span>
            </motion.h1>
            <motion.p className="mt-7 max-w-xl text-lg leading-8 text-towa-text-muted">
              Cari teman mabar 24 jam? Mau deep talk atau bahas anime? Di sini
              tempatnya. Satu server, banyak cerita.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-2 text-sm font-bold md:hidden">
              <motion.a
                className="rounded-full border border-towa-border px-4 py-2 hover:border-towa-accent-2"
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
                href="#warga"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { y: 1, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 12 }}
              >
                Rukun Warga
              </motion.a>
              <motion.a
                className="rounded-full border border-towa-border px-4 py-2 hover:border-towa-accent-2"
                href="#faq"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { y: 1, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 12 }}
              >
                FAQ
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-towa-border pt-6">
            {communityStats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
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
    <div className="relative mx-auto flex min-h-[500px] w-full max-w-[580px] flex-col items-center justify-start pt-4">
      <motion.div
        initial={animate ? { opacity: 0, scale: 0.9 } : false}
        animate={animate ? { opacity: 1, scale: 1 } : false}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="relative z-0 -mt-16"
      >
        <motion.div
          animate={animate ? { y: [0, -6, 0] } : false}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative flex size-[300px] items-center justify-center overflow-hidden rounded-full border-[3px] border-towa-ink bg-[#FAF8F5] shadow-[10px_12px_0_var(--towa-accent-2)] sm:size-[360px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full scale-105 object-cover"
            >
              <source src="/dc-assets/logo-towa-hero.webm" type="video/webm" />
              <source src="/dc-assets/logo-towa-hero2.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-20 -mt-4 w-full max-w-[380px] self-center sm:self-end">
        <VoiceActivityCard />
      </div>
    </div>
  );
}

export function VoiceActivityCard() {
  const { data: voiceChannels, loading } = useVoiceActivity();
  const { isDesktop } = useTheme();
  const reduce = useReducedMotion();
  const animate = isDesktop && !reduce;

  // Langsung urutkan semua channel berdasarkan jumlah warga tanpa dipotong
  const sortedChannels = [...voiceChannels].sort((a, b) => b.people - a.people);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="w-full rotate-[-1.5deg] rounded-2xl border-2 border-towa-ink bg-towa-bg p-4 shadow-[7px_8px_0_var(--towa-ink)] transition-shadow duration-300 hover:shadow-[9px_10px_0_var(--towa-ink)] sm:p-5"
    >
      {/* 🔹 HEADER SECTION */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.2em] text-towa-accent-2">
            Live now
          </p>
          <h3 className="mt-0.5 text-lg font-black text-towa-ink">
            Voice Activity
          </h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-towa-live-bg px-2.5 py-1 text-[10px] font-black text-towa-live-text">
          <span className="size-2 animate-pulse rounded-full bg-towa-accent-2" />{" "}
          LIVE
        </span>
      </div>

      {/* 🔹 CONTENT SECTION */}
      <div className="flex flex-col">
        {!loading && voiceChannels.length === 0 && (
          <p className="py-6 text-center text-sm font-medium text-towa-text-subtle">
            Belum ada warga yang nge-VC.
          </p>
        )}

        {/* 
          Wadah Scroll Ajaib (The Magic Container)
          - max-h: Disesuaikan untuk proporsi hero section (cukup untuk 2-3 list, sisanya scroll)
          - mask-image: Membuat gradasi transparan 16px di atas & bawah agar scroll pudar halus
          - overscroll-contain: Mencegah layar website ikut terseret saat scroll mentok di mobile
          - scrollbar:hidden: Menghilangkan batang scroll jelek
        */}
        <div className="towa-scrollbar flex max-h-[260px] flex-col gap-3 overflow-y-auto overscroll-contain py-2 sm:max-h-[320px] pr-2 [mask-image:linear-gradient(to_bottom,transparent,black_16px,black_calc(100%-16px),transparent)]">
          <AnimatePresence initial={false}>
            {sortedChannels.map((channel) => (
              <motion.div
                key={channel.channelId}
                layout={animate}
                initial={animate ? { opacity: 0, y: 10 } : false}
                animate={animate ? { opacity: 1, y: 0 } : false}
                exit={animate ? { opacity: 0, y: -10 } : undefined}
                // shrink-0 mencegah kartu gepeng saat flexbox penuh
                className="shrink-0 rounded-xl border border-towa-border/80 bg-towa-bg-alt/60 p-2.5 transition-colors hover:bg-towa-bg-alt"
              >
                {/* NAMA VOICE CHANNEL */}
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-towa-ink">
                    <Volume2 className="size-3.5 text-towa-accent-2" />
                    <span className="max-w-[120px] truncate sm:max-w-[150px]">
                      {channel.name}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-full bg-towa-accent/20 px-2 py-0.5 text-[10px] font-black text-towa-ink">
                    {channel.people} Warga
                  </span>
                </div>

                {/* LIST MEMBER DI DALAM VC */}
                <div className="flex flex-wrap gap-1.5">
                  {channel.members.map((member, index) => (
                    <span
                      key={member.username + index}
                      className="inline-flex items-center gap-1.5 rounded-full border border-towa-border/60 bg-towa-bg px-2.5 py-1 text-xs font-bold text-towa-text shadow-sm"
                    >
                      {member.avatarUrl ? (
                        <img
                          src={member.avatarUrl}
                          alt={member.username}
                          className="size-4 rounded-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="flex size-4 items-center justify-center rounded-full bg-towa-accent text-[9px] font-black uppercase text-towa-ink">
                          {member.username[0]}
                        </span>
                      )}

                      {/* NAMA MEMBER (Di-truncate agar rapi di HP kecil) */}
                      <span className="max-w-[85px] truncate sm:max-w-[110px]">
                        {member.username}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
