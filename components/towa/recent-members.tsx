"use client";

import { useRecentMembers } from "@/hooks/use-live-data";

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
