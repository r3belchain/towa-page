"use client";

import { Trophy } from "lucide-react";
import { useBoosters } from "@/hooks/use-live-data";
import { team } from "./mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

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
