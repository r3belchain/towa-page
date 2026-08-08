"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion, Variants } from "framer-motion";
import {
  Camera,
  CircleDot,
  Gamepad2,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import { featureItems } from "./mock-data";

const iconMap = {
  gamepad: Gamepad2,
  sparkles: Sparkles,
  users: Users,
  message: MessageCircle,
  camera: Camera,
  palette: Palette,
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: 30, scale: 0.9, rotateZ: 0 },

  show: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,

    rotateZ: index === 0 ? -1 : index === 3 ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 15,
      mass: 1,
    },
  }),
};

const tagsContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

export function Features() {
  return (
    <section id="tentang" className="bg-towa-bg-alt py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Bebas masuk, bebas cerita"
          title="Apa yang bisa kamu temukan?"
          description="TOWA itu seperti kedai kopi favorit: selalu ada kursi kosong, obrolan baru, dan orang-orang yang siap bikin harimu lebih seru."
        />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-10%" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 perspective-[1000px]"
        >
          {featureItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={item.title}
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group flex flex-col rounded-2xl border-2 border-towa-border bg-towa-bg p-6 transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-8 flex size-12 items-center justify-center rounded-xl bg-towa-accent text-towa-ink transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Icon />
                </div>
                <h3 className="text-2xl font-black text-towa-text">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-towa-text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={tagsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-10%" }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.span
            variants={tagVariants}
            className="text-sm font-black text-towa-text-muted"
          >
            Fasilitas warga:
          </motion.span>
          {["Sistem Leveling", "Custom Voice Channel", "Aktif 24 Jam"].map(
            (item) => (
              <motion.span
                variants={tagVariants}
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-towa-border/80 bg-towa-accent/10 px-4 py-2 text-sm font-bold text-towa-text shadow-sm"
              >
                <CircleDot className="size-3 text-towa-accent-2" />
                {item}
              </motion.span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
