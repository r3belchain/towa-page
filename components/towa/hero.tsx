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

import { useEffect, useRef } from "react";

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
    <div className="relative mx-auto min-h-[460px] w-full max-w-[560px]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <motion.div
          initial={animate ? { opacity: 0, scale: 0.9 } : false}
          animate={animate ? { opacity: 1, scale: 1 } : false}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <motion.div
            animate={animate ? { y: [0, -8, 0] } : false}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative flex size-[310px] items-center justify-center rounded-full border-[3px] border-towa-ink bg-towa-accent shadow-[12px_14px_0_var(--towa-accent-2)] sm:size-[390px]">
     
              <div className="flex items-center justify-center rounded-full border-2 border-towa-ink bg-towa-bg-alt p-10 sm:p-12">
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-20 sm:size-24 transition-transform duration-500 hover:scale-105"
                  aria-hidden="true"
                >
                
                  <path
                    d="M21 13H25C26.6569 13 28 14.3431 28 16V18C28 19.6569 26.6569 21 25 21H21"
                    className="stroke-towa-text transition-colors duration-500"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

           
                  <path
                    d="M7 10H21V20C21 23.866 17.866 27 14 27C10.134 27 7 23.866 7 20V10Z"
                    className="fill-towa-accent stroke-towa-text transition-colors duration-500"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

            
                  <path
                    d="M11 6C11 4.5 12 4.5 12 3"
                    className="stroke-towa-accent-2 transition-colors duration-500"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

           
                  <path
                    d="M17 6C17 4.5 16 4.5 16 3"
                    className="stroke-towa-accent-2 transition-colors duration-500"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
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
          <h3 className="mt-1 text-xl font-black text-towa-ink">
            Voice Activity
          </h3>
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
