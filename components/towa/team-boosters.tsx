"use client";

import { RolePill } from "@/components/ui/role-pill";
import { SectionHeading } from "@/components/ui/section-heading";
import { useBoosters } from "@/hooks/use-live-data";
import { Trophy } from "lucide-react";
import { donorTiers, teamRoles } from "./mock-data";

const DONOR_TONE = ["default", "amber", "rose", "royal"] as const;

export function TeamAndBoosters() {
  const { data: boosters, loading } = useBoosters();

  return (
    <section id="warga" className="bg-towa-bg-alt py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading
              eyebrow="Yang jaga rumah"
              title="Rukun Warga"
              description="Orang-orang di balik obrolan tetap hangat, aman, dan seru."
            />
            <div className="mt-10 flex flex-wrap gap-2.5">
              {teamRoles.map((role) => (
                <RolePill
                  key={role.label}
                  label={role.label}
                  members={role.members}
                  icon={<span aria-hidden="true">{role.icon}</span>}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-2 border-towa-border bg-towa-bg p-7">
            <Trophy className="size-9 text-towa-accent-2" />
            <p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-towa-accent-2">
              Support system
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.04em] text-towa-text">
              Server Boosters &amp; Donors
            </h2>
            <p className="mt-4 leading-7 text-towa-text-muted">
              Terima kasih untuk para warga yang bikin rumah ini makin nyaman
              dan penuh warna.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-towa-text-subtle">
                Server Boosters
              </p>
              <div className="flex flex-wrap gap-2">
                {!loading && boosters.length === 0 && (
                  <p className="text-sm text-towa-text-subtle">
                    Belum ada booster. Jadi yang pertama?
                  </p>
                )}
                {boosters.map((booster) => (
                  <span
                    key={booster.discord_user_id}
                    className="inline-flex items-center gap-2 rounded-full border border-towa-border bg-towa-bg-alt py-1 pl-1 pr-3 text-sm font-bold text-towa-text"
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

            <div className="mt-6 border-t border-towa-border pt-6">
              <p className="mb-3 text-xs font-black uppercase tracking-wider text-towa-text-subtle">
                Donors
              </p>
              <div className="flex flex-wrap gap-2">
                {donorTiers.map((tier, index) => (
                  <RolePill
                    key={tier.label}
                    label={tier.label}
                    members={tier.members}
                    icon={<span aria-hidden="true">{tier.icon}</span>}
                    tone={DONOR_TONE[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
