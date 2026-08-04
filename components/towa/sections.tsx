"use client";

import {
  useBoosters,
  useRecentMembers,
  useServerStats,
  useVoiceActivity,
} from "@/hooks/use-live-data";
import {
  ArrowUpRight,
  Camera,
  ChevronDown,
  CircleDot,
  Gamepad2,
  MessageCircle,
  Palette,
  Play,
  Sparkles,
  Triangle,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";
import { artworks, faqs, featureItems, moments, team } from "./mock-data";

const iconMap = {
  gamepad: Gamepad2,
  sparkles: Sparkles,
  users: Users,
  message: MessageCircle,
  camera: Camera,
  palette: Palette,
};

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="towa-cup" aria-hidden="true">
        <span />
      </span>
      <span
        className={
          compact
            ? "font-black tracking-[0.18em]"
            : "text-xl font-black tracking-[0.18em]"
        }
      >
        TOWA
      </span>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#ead9ad]/70 bg-[#fffdf7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" aria-label="TOWA home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
          <a href="#momen" className="transition-colors hover:text-[#e8833a]">
            Kirim Momen
          </a>
          <a href="#karya" className="transition-colors hover:text-[#e8833a]">
            Pamer Karya
          </a>
          <a href="#warga" className="transition-colors hover:text-[#e8833a]">
            Rukun Warga
          </a>
        </nav>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#f5c518] px-5 py-2.5 text-sm font-black text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition hover:bg-[#ffd94f] hover:shadow-[1px_1px_0_#1a1a1a]"
          href="https://discord.com/invite/towa"
          target="_blank"
          rel="noreferrer"
        >
          Join Server <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="doodle-dot left-[8%] top-28" />
      <span className="doodle-dot right-[13%] top-20 bg-[#e8833a]" />
      <Triangle className="absolute right-[7%] top-64 size-7 rotate-12 text-[#f5c518]" />
      <CircleDot className="absolute bottom-20 left-[4%] size-9 text-[#e8833a]" />
      <span className="doodle-dot bottom-24 right-[29%] bg-[#f5c518]" />
    </div>
  );
}

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

export function Features() {
  return (
    <section id="tentang" className="bg-[#fff9ec] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Bebas masuk, bebas cerita"
          title="Apa yang bisa kamu temukan?"
          description="TOWA itu seperti kedai kopi favorit: selalu ada kursi kosong, obrolan baru, dan orang-orang yang siap bikin harimu lebih seru."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <article
                key={item.title}
                className={`group rounded-2xl border-2 border-[#ead9ad] bg-[#fffdf7] p-6 transition-transform hover:-translate-y-1 ${index === 0 ? "lg:rotate-[-1deg]" : index === 3 ? "lg:rotate-[1deg]" : ""}`}
              >
                <div className="mb-8 flex size-12 items-center justify-center rounded-xl bg-[#f5c518] text-[#1a1a1a] transition-transform group-hover:rotate-6">
                  <Icon />
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#756d5c]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-black text-[#756d5c]">
            Fasilitas warga:
          </span>
          {["Sistem Leveling", "Custom Voice Channel", "Aktif 24 Jam"].map(
            (item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#e8cf80] bg-[#f5c518]/20 px-4 py-2 text-sm font-bold"
              >
                <CircleDot className="size-3 text-[#e8833a]" />
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-black uppercase tracking-[.22em] text-[#e8833a]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[#756d5c]">{description}</p>
    </div>
  );
}

export function Moments() {
  return (
    <section id="momen" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Cerita warga"
        title="Kirim Momen"
        description="Momen kecil, cerita besar. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
      />
      <div className="mt-12 grid auto-rows-[180px] gap-4 sm:grid-cols-4 sm:auto-rows-[150px]">
        {moments.map((moment, index) => (
          <figure
            key={moment.title}
            className={`group relative overflow-hidden rounded-2xl border-2 border-[#1a1a1a] ${moment.size === "tall" ? "sm:row-span-2" : "sm:col-span-1"} ${index === 1 ? "sm:col-span-2" : ""}`}
          >
            <img
              src={moment.image}
              alt={moment.title}
              className="size-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent px-4 pb-4 pt-10 text-sm font-black text-white">
              {moment.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Artwork() {
  return (
    <section id="karya" className="bg-[#1a1a1a] py-24 text-[#fffdf7]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Sudut kreatif"
          title="Pamer Karya"
          description="Tempat karya kamu mendapat panggung, feedback, dan tepuk tangan dari warga TOWA."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {artworks.map((artwork) => (
            <article
              key={artwork.title}
              className="overflow-hidden rounded-2xl border-2 border-[#655c48] bg-[#24231e]"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-black">{artwork.title}</h3>
                  <p className="mt-1 text-sm text-[#c9bfa8]">
                    {artwork.artist}
                  </p>
                </div>
                <button
                  aria-label={`Play ${artwork.title}`}
                  className="flex size-10 items-center justify-center rounded-full bg-[#f5c518] text-[#1a1a1a]"
                >
                  <Play className="ml-0.5 size-4 fill-current" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamAndBoosters() {
  const { data: boosters, loading } = useBoosters();
  return (
    <section id="warga" className="bg-[#fff9ec] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading
              eyebrow="Yang jaga rumah"
              title="Rukun Warga"
              description="Orang-orang di balik obrolan tetap hangat, aman, dan seru."
            />
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {team.map((member) => (
                <article key={member.username} className="text-center">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="mx-auto size-24 rounded-full border-4 border-[#f5c518] object-cover"
                  />
                  <h3 className="mt-3 font-black">{member.name}</h3>
                  <p className="text-xs text-[#887e69]">{member.username}</p>
                  <span className="mt-2 inline-block rounded-full bg-[#ffe5d2] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#b75819]">
                    {member.role}
                  </span>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border-2 border-[#ead9ad] bg-[#fffdf7] p-7">
            <Trophy className="size-9 text-[#e8833a]" />
            <p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[#e8833a]">
              Support system
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.04em]">
              Server Boosters
            </h2>
            <p className="mt-4 leading-7 text-[#756d5c]">
              Terima kasih untuk para warga yang bikin rumah ini makin nyaman
              dan penuh warna.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {!loading && boosters.length === 0 && (
                <p className="text-sm text-[#887e69]">
                  Belum ada booster. Jadi yang pertama?
                </p>
              )}
              {boosters.map((booster) => (
                <span
                  key={booster.discord_user_id}
                  className="inline-flex items-center gap-2 rounded-full border border-[#e8cf80] bg-[#fff9ec] py-1 pl-1 pr-3 text-sm font-bold"
                >
                  <img
                    src={booster.avatar_url}
                    alt=""
                    className="size-7 rounded-full object-cover"
                  />
                  {booster.username}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FASE 1 (functional-ugly): belum ada di desain v0 asli, styling minimal dulu,
// nanti dipoles bareng section lain di Fase 2.
export function RecentMembers() {
  const { data: members, loading } = useRecentMembers(10);
  return (
    <section id="warga-baru" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <p className="text-xs font-black uppercase tracking-[.22em] text-[#e8833a]">
        Baru gabung
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-[-.04em]">
        10 Warga Terbaru
      </h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {loading && <p className="text-sm text-[#887e69]">Memuat...</p>}
        {!loading && members.length === 0 && (
          <p className="text-sm text-[#887e69]">Belum ada warga baru.</p>
        )}
        {members.map((member) => (
          <span
            key={member.discord_user_id + member.event_at}
            className="inline-flex items-center gap-2 rounded-full border border-[#ead9ad] bg-[#fff9ec] py-1 pl-1 pr-3 text-sm font-bold"
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

export function RulesFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8"
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[.22em] text-[#e8833a]">
          Biar tetap nyaman
        </p>
        <h2 className="mt-3 text-5xl font-black tracking-[-.05em]">
          Main aman,
          <br />
          <span className="text-[#e8833a]">ngobrol nyaman.</span>
        </h2>
        <div className="mt-8 rounded-2xl border-2 border-[#1a1a1a] bg-[#f5c518] p-6 shadow-[6px_6px_0_#1a1a1a]">
          <p className="font-black">Rules singkat warga:</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm font-bold">
            <li>01 — Saling menghargai, no drama.</li>
            <li>02 — Promosi di tempat yang sudah disediakan.</li>
            <li>03 — Kalau ragu, tanya staff. Jangan asumsi.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-2xl border-2 border-[#ead9ad] bg-[#fff9ec]"
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-black"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              {faq.question}
              <ChevronDown
                className={`size-5 shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`}
              />
            </button>
            {open === index && (
              <p className="border-t border-[#ead9ad] px-5 pb-5 pt-4 leading-7 text-[#756d5c]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-[#ead9ad] bg-[#fff9ec]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <Logo compact />
          <p className="mt-4 max-w-xs leading-7 text-[#756d5c]">
            Tempat pulang buat obrolan random, mabar, dan cerita yang belum
            sempat selesai.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              className="flex size-10 items-center justify-center rounded-full border border-[#d9c58d]"
              href="#"
              aria-label="Instagram"
            >
              <Camera className="size-4" />
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full border border-[#d9c58d]"
              href="#"
              aria-label="TikTok"
            >
              <Video className="size-4" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-bold">
          <a href="#top">Home</a>
          <a href="#momen">Kirim Momen</a>
          <a href="#karya">Pamer Karya</a>
          <a href="#faq">Rules & FAQ</a>
        </div>
      </div>
      <div className="border-t border-[#ead9ad] px-5 py-5 text-center text-xs font-bold text-[#887e69]">
        Made with kopi susu and warga asbun.
      </div>
    </footer>
  );
}
