"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion, Variants } from "framer-motion";
import {
  Camera,
  CircleDot,
  Gamepad2,
  Image as ImageIcon,
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

const tagsContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section id="tentang" className="bg-towa-bg-alt py-24 dark:bg-transparent">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Bebas masuk, bebas cerita"
          title="Apa yang bisa kamu temukan?"
          description="TOWA itu seperti kedai kopi favorit: selalu ada kursi kosong, obrolan baru, dan orang-orang yang siap bikin harimu lebih seru."
        />

        <div className="mt-20 flex flex-col">
          {featureItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sticky -mx-5 flex flex-col justify-between gap-8 rounded-none border-0 bg-towa-bg p-6 shadow-none transition-all duration-500 dark:!border-0 dark:!bg-[#0a0a12] dark:!shadow-none md:mx-0 md:flex-row md:rounded-3xl md:border-2 md:border-towa-ink md:p-10 md:shadow-[8px_10px_0_var(--towa-ink)] dark:md:!border-2 dark:md:!border-towa-accent-2 dark:md:!shadow-[0_0_30px_rgba(47,232,255,0.15)]"
                style={{
                  top: "12vh",
                  zIndex: index + 10,
                  marginBottom: "8rem",
                }}
              >
                {/* BAGIAN KIRI: Teks & Ikon */}
                <div className="flex w-full flex-col justify-center px-5 md:w-5/12 md:px-0 lg:pr-8">
                  <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border-2 border-towa-ink bg-towa-accent text-towa-ink shadow-[4px_4px_0_var(--towa-ink)] dark:border-0 dark:shadow-none">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mb-4 text-3xl font-black text-towa-text md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-towa-text-muted md:text-xl">
                    {item.description}
                  </p>
                </div>

                {/* BAGIAN KANAN: Mockup Gambar Dual-Identity */}
                <div
                  className="relative mx-5 flex min-h-[300px] w-auto overflow-hidden rounded-2xl border-2 border-solid border-towa-ink/30 bg-towa-accent/5 transition-colors dark:!border-towa-accent-2/40 dark:bg-black/40 md:mx-0 md:min-h-[450px] md:w-7/12"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 50%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                >
                  {/* Efek Grid Belakang */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(47,232,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(47,232,255,0.05)_1px,transparent_1px)]" />

                  {/* 🚨 GAMBAR UNTUK LIGHT MODE 🚨 */}
                  {item.imageLight && (
                    <img
                      src={item.imageLight}
                      alt={`Mockup ${item.title} Light`}
                      className="absolute -bottom-10 -right-10 left-4 top-4 z-10 rounded-tl-xl border border-towa-ink/10 object-cover object-left-top shadow-2xl block dark:hidden"
                    />
                  )}

                  {item.imageDark && (
                    <img
                      src={item.imageDark}
                      alt={`Mockup ${item.title} Dark`}
                      className="absolute -bottom-10 -right-10 left-4 top-4 z-10 rounded-tl-xl border border-towa-accent-2/20 object-cover object-left-top shadow-2xl hidden dark:block"
                    />
                  )}

                  {!item.imageLight && !item.imageDark && (
                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 text-center opacity-60 transition-colors dark:opacity-80">
                      <ImageIcon className="size-12 text-towa-text-muted dark:text-towa-accent-2/60" />
                      <p className="text-base font-bold text-towa-text-muted dark:text-towa-accent-2/60">
                        Tempat Gambar <br /> Mockup Channel "{item.title}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}

          <div aria-hidden className="h-[30vh] md:h-[40vh]" />
        </div>

        {/* 3. PERBAIKAN HIERARKI FASILITAS WARGA */}
        <motion.div
          variants={tagsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 flex flex-col items-center justify-center gap-8 md:mt-32"
        >
          <motion.h4
            variants={tagVariants}
            className="text-2xl font-black uppercase tracking-[0.2em] text-towa-text-muted md:text-3xl"
          >
            Fasilitas Warga
          </motion.h4>

          <div className="flex flex-wrap justify-center gap-4">
            {["Sistem Leveling", "Custom Voice Channel", "Aktif 24 Jam"].map(
              (item) => (
                <motion.span
                  variants={tagVariants}
                  key={item}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-towa-ink bg-towa-bg px-5 py-3 text-sm font-bold text-towa-ink shadow-[3px_3px_0_var(--towa-ink)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_var(--towa-ink)] dark:!border-towa-accent-2 dark:!bg-[#12121e]/60 dark:!text-towa-text dark:!shadow-[0_0_10px_rgba(47,232,255,0.1)] dark:hover:!shadow-[0_0_20px_rgba(47,232,255,0.4)] md:text-base"
                >
                  <CircleDot className="size-4 text-towa-accent-2" />
                  {item}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
