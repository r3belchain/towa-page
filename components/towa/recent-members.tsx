"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { useRecentMembers } from "@/hooks/use-live-data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export function RecentMembers() {
  const { data: members, loading } = useRecentMembers(10);

  return (
    <section
      id="warga-baru"
      className="w-full bg-towa-bg py-24 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-5 lg:px-8">
        <SectionHeading eyebrow="Baru gabung" title="10 Warga Terbaru" />

        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-10%" }}
        >
          {loading && (
            <p className="text-sm font-medium text-towa-text-subtle">
              Memuat kedatangan warga baru...
            </p>
          )}
          {!loading && members.length === 0 && (
            <p className="text-sm font-medium text-towa-text-subtle">
              Belum ada warga baru yang tercatat.
            </p>
          )}

          {members.map((member, index) => (
            <motion.span
              /* 🔹 Diubah: Menggunakan gabungan ID + Index agar key 100% unik dan lulus type-check */
              key={`${member.discord_user_id}-${index}`}
              variants={bubbleVariants}
              whileHover={{ y: -4, scale: 1.05 }}
              className="group inline-flex items-center gap-3 rounded-full border border-towa-border bg-towa-bg-alt py-1.5 pl-1.5 pr-5 text-sm font-bold text-towa-text shadow-sm transition-colors duration-300 hover:border-towa-accent-2 hover:shadow-md"
            >
              <div className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-towa-bg bg-towa-border">
                <img
                  src={member.avatar_url}
                  alt={member.username}
                  className="size-full object-cover transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
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
      </div>
    </section>
  );
}
