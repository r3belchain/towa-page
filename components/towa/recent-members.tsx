"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useRecentMembers } from "@/hooks/use-live-data";
import { motion } from "framer-motion";

export function RecentMembers() {
  const { data: members, loading } = useRecentMembers(10);

  return (
    <section
      id="warga-baru"
      className="w-full bg-towa-bg py-24 transition-colors duration-500 dark:bg-transparent"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-5 lg:px-8">
        <SectionHeading eyebrow="Baru gabung" title="10 Warga Terbaru" />

        {loading && (
          <div className="mt-12 flex flex-wrap gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="h-11 w-32 animate-pulse rounded-full bg-towa-border/40 dark:bg-towa-accent-2/10"
              />
            ))}
          </div>
        )}

        {!loading && members.length === 0 && (
          <p className="mt-12 text-sm font-medium text-towa-text-subtle">
            Belum ada warga baru yang tercatat.
          </p>
        )}

        {!loading && members.length > 0 && (
          <motion.div
            className="mt-12 flex flex-wrap gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
          >
            {members.map((member, index) => (
              <motion.span
                key={member.discord_user_id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.85 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.06,
                    },
                  },
                }}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group inline-flex cursor-default items-center gap-3 rounded-full border border-towa-border bg-towa-bg-alt py-1.5 pl-1.5 pr-5 text-sm font-bold text-towa-text shadow-sm transition-all duration-300 hover:border-towa-accent-2 hover:shadow-md dark:!border-towa-accent-2 dark:!bg-[#12121e]/80 dark:!shadow-[0_0_15px_rgba(47,232,255,0.2)] dark:hover:!shadow-[0_0_25px_rgba(47,232,255,0.4)]"
              >
                <div className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-towa-bg bg-towa-border transition-colors duration-300 dark:!border-towa-accent-2 dark:!bg-transparent">
                  <img
                    src={member.avatar_url}
                    alt={member.username}
                    className="size-full object-cover transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <span className="max-w-[120px] truncate sm:max-w-none">
                  {member.username}
                </span>
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
