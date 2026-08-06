"use client";

import { Doodles } from "@/components/ui/doodles";
import {
  useBoosters,
  useServerStats,
  useVoiceActivity,
} from "@/hooks/use-live-data";

function formatCompact(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return String(n);
}

export function Hero() {
  const { data: stats, loading: statsLoading } = useServerStats();
  const { data: boosters } = useBoosters();

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
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8833a]/30 bg-[#fff9ec] px-3 py-1 text-xs font-black tracking-[0.18em] text-[#e8833a]">
            <span className="size-2 rounded-full bg-[#e8833a]" /> DISCORD
            COMMUNITY
          </p>
          <h1 className="max-w-2xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] text-[#1a1a1a] sm:text-8xl lg:text-[7.3rem]">
            <span className="sticker-text">Ini TOWA,</span>
            <br />
            <span className="text-[#e8833a]">tongkrongan</span>
            <br />
            warga asbun.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#615b4c]">
            Cari teman mabar 24 jam? Mau deep talk atau bahas anime? Di sini
            tempatnya. Satu server, banyak cerita.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-sm font-bold">
            <a
              className="rounded-full bg-[#1a1a1a] px-4 py-2 text-[#fffdf7]"
              href="#tentang"
            >
              Tentang
            </a>
            <a
              className="rounded-full border border-[#d9c58d] px-4 py-2 hover:border-[#e8833a]"
              href="#momen"
            >
              Kirim Momen
            </a>
            <a
              className="rounded-full border border-[#d9c58d] px-4 py-2 hover:border-[#e8833a]"
              href="#karya"
            >
              Pamer Karya
            </a>
            <a
              className="rounded-full border border-[#d9c58d] px-4 py-2 hover:border-[#e8833a]"
              href="#faq"
            >
              Event
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 border-t border-[#ead9ad] pt-6">
            {communityStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-[#887e69]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[460px] w-full max-w-[560px]">
      <div className="absolute left-1/2 top-1/2 flex size-[310px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#1a1a1a] bg-[#f5c518] shadow-[12px_14px_0_#e8833a] sm:size-[390px]">
        <div className="rounded-full border-2 border-[#1a1a1a] bg-[#fff9ec] p-12">
          <div className="towa-cup towa-cup-xl">
            <span />
          </div>
        </div>
        <span className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-[#1a1a1a] px-4 py-1 text-xs font-black tracking-[.2em] text-[#fffdf7]">
          EST. 2021
        </span>
      </div>
      <VoiceActivityCard />
    </div>
  );
}

export function VoiceActivityCard() {
  const { data: voiceChannels, loading } = useVoiceActivity();
  return (
    <div className="absolute bottom-0 right-0 w-[min(100%,330px)] rotate-[-3deg] rounded-2xl border-2 border-[#1a1a1a] bg-[#fffdf7] p-5 shadow-[7px_8px_0_#1a1a1a]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-[#e8833a]">
            Live now
          </p>
          <h3 className="mt-1 text-xl font-black">Voice Activity</h3>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#ffe5d2] px-2 py-1 text-[10px] font-black text-[#b75819]">
          <span className="size-1.5 animate-pulse rounded-full bg-[#e8833a]" />{" "}
          LIVE
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {!loading && voiceChannels.length === 0 && (
          <p className="pt-3 text-sm text-[#887e69]">Belum ada yang nge-VC.</p>
        )}
        {voiceChannels.map((channel) => (
          <div
            key={channel.channelId}
            className="flex items-center justify-between border-t border-[#eee3c7] pt-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {channel.avatars.slice(0, 3).map((name, index) => (
                  <span
                    key={name + index}
                    className="flex size-7 items-center justify-center rounded-full border-2 border-[#fffdf7] bg-[#f5c518] text-[9px] font-black"
                  >
                    {name[0]}
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold">{channel.name}</span>
            </div>
            <span className="text-xs font-bold text-[#887e69]">
              {channel.people}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
