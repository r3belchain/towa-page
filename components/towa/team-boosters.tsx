"use client";

import { RolePill } from "@/components/ui/role-pill";
import { SectionHeading } from "@/components/ui/section-heading";
import { useBoosters, useDonors, useStaffMembers } from "@/hooks/use-live-data";
import { Trophy } from "lucide-react";
import { useMemo } from "react";

export function TeamAndBoosters() {
  const { data: boosters, loading: boostersLoading } = useBoosters();
  const { data: staffMembers, loading: staffLoading } = useStaffMembers();
  const { data: donors, loading: donorsLoading } = useDonors();

  // === GROUPING STAFF ===
  const groupedStaff = useMemo(() => {
    if (!staffMembers || staffMembers.length === 0) return [];
    const groupMap = new Map();

    staffMembers.forEach((staff) => {
      if (!groupMap.has(staff.role_name)) {
        groupMap.set(staff.role_name, {
          label: staff.role_name,
          color: staff.role_color,
          order: staff.position_order,
          members: [],
        });
      }
      groupMap.get(staff.role_name).members.push({
        discordUserId: staff.discord_user_id,
        username: staff.display_name || staff.username,
        avatarUrl: staff.avatar_url,
      });
    });

    return Array.from(groupMap.values()).sort((a, b) => a.order - b.order);
  }, [staffMembers]);

  // GROUPING DONORS (LIVE DATA)
  const groupedDonors = useMemo(() => {
    if (!donors || donors.length === 0) return [];
    const groupMap = new Map();

    donors.forEach((donor) => {
      if (!groupMap.has(donor.role_name)) {
        groupMap.set(donor.role_name, {
          label: donor.role_name,
          color: donor.role_color,
          order: donor.position_order,
          members: [],
        });
      }
      groupMap.get(donor.role_name).members.push({
        discordUserId: donor.discord_user_id,
        username: donor.display_name || donor.username,
        avatarUrl: donor.avatar_url,
      });
    });

    return Array.from(groupMap.values()).sort((a, b) => a.order - b.order);
  }, [donors]);

  return (
    <section
      id="warga"
      className="w-full bg-towa-bg-alt py-24 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          {/* ========================================== */}
          {/* BAGIAN KIRI: RUKUN WARGA */}
          {/* ========================================== */}
          <div>
            <SectionHeading
              eyebrow="Yang jaga rumah"
              title="Rukun Warga"
              description="Orang-orang yang memastikan obrolan tetap hangat, aman, dan seru."
            />

            <div className="mt-10 flex flex-wrap gap-2.5">
              {staffLoading && (
                <p className="text-sm text-towa-text-subtle">
                  Memuat pengurus warga...
                </p>
              )}

              {!staffLoading && groupedStaff.length === 0 && (
                <p className="text-sm text-towa-text-subtle">
                  Belum ada pengurus yang dilantik.
                </p>
              )}

              {!staffLoading &&
                groupedStaff.map((role) => (
                  <RolePill
                    key={role.label}
                    label={role.label}
                    members={role.members}
                    icon={
                      <span
                        aria-hidden="true"
                        className="inline-block size-2 rounded-full"
                        style={{ backgroundColor: role.color }}
                      />
                    }
                  />
                ))}
            </div>
          </div>

          {/* ========================================== */}
          {/* BAGIAN KANAN: DONORS & BOOSTERS */}
          {/* ========================================== */}
          <div className="flex h-fit flex-col rounded-3xl border-2 border-towa-border bg-towa-bg p-7 shadow-sm transition-colors duration-500">
            <Trophy className="size-9 text-towa-accent-2" />
            <p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-towa-accent-2">
              Support system
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.04em] text-towa-text">
              Donors &amp; Boosters
            </h2>
            <p className="mt-4 leading-7 text-towa-text-muted">
              Terima kasih untuk para warga yang bikin rumah ini makin nyaman
              dan penuh warna.
            </p>

            {/* 1. DONORS DI ATAS (Tanpa Garis Batas Atas) */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-towa-text-subtle">
                Donors
              </p>
              <div className="flex flex-wrap gap-2">
                {!donorsLoading && groupedDonors.length === 0 && (
                  <p className="text-sm text-towa-text-subtle">
                    Belum ada donatur terdaftar.
                  </p>
                )}
                {!donorsLoading &&
                  groupedDonors.map((role) => (
                    <RolePill
                      key={role.label}
                      label={role.label}
                      members={role.members}
                      icon={
                        <span
                          aria-hidden="true"
                          className="inline-block size-2 rounded-full"
                          style={{ backgroundColor: role.color }}
                        />
                      }
                    />
                  ))}
              </div>
            </div>

            {/* 2. SERVER BOOSTERS DI BAWAH (Dengan Scroll & Garis Batas) */}
            <div className="mt-6 flex min-h-0 flex-col border-t border-towa-border pt-6 transition-colors duration-500">
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-towa-text-subtle">
                Server Boosters
              </p>

              {/* Wadah Scroll Estetik */}
              <div className="towa-scrollbar flex max-h-[220px] flex-wrap content-start gap-2 overflow-y-auto overscroll-contain py-2 pr-2 sm:max-h-[260px] [mask-image:linear-gradient(to_bottom,transparent,black_12px,black_calc(100%-12px),transparent)]">
                {!boostersLoading && boosters.length === 0 && (
                  <p className="text-sm text-towa-text-subtle">
                    Belum ada booster.
                  </p>
                )}
                {boosters.map((booster) => (
                  <span
                    key={booster.discord_user_id}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-towa-border bg-towa-bg-alt py-1 pl-1 pr-3 text-sm font-bold text-towa-text shadow-sm transition-all duration-300 hover:scale-105 hover:border-towa-accent-2"
                  >
                    <img
                      src={booster.avatar_url}
                      alt=""
                      className="size-7 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="max-w-[100px] truncate sm:max-w-[140px]">
                      {booster.username}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
