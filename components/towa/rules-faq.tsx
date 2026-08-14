"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { faqs } from "./mock-data";

// PERBAIKAN TS: Mendefinisikan sebagai tuple 4 angka secara eksplisit
const SMOOTH_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Variants untuk Judul & Eyebrow
const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: SMOOTH_EASE },
  },
};

// Variants untuk Card Rules Singkat
const rulesCardVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: 0.12, ease: SMOOTH_EASE },
  },
};

// Variants Kontainer FAQ
const faqContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Variants Setiap Kartu FAQ
const faqItemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: SMOOTH_EASE },
  },
};

export function RulesFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"

      className="w-full bg-towa-bg-alt py-24 transition-colors duration-500 dark:bg-transparent"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">

        <div>
          {/* Eyebrow & Judul */}
          <motion.div
            initial="hidden"
            whileInView="visible"

            viewport={{ once: true, amount: 0.1 }}
            variants={titleVariants}
          >
            <p className="text-xs font-black uppercase tracking-[.22em] text-towa-accent-2">
              Biar tetap nyaman
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.05em] text-towa-text sm:text-5xl">
              Main aman,
              <br />
              <span className="text-towa-accent-2">ngobrol nyaman.</span>
            </h2>
          </motion.div>

          {/* Card Rules Singkat Warga */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={rulesCardVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        
            className="mt-8 rounded-2xl border-2 border-towa-ink bg-towa-accent p-6 text-towa-ink shadow-[6px_6px_0_var(--towa-ink)] transition-all duration-500 dark:!border-towa-accent-2 dark:!bg-[#0a0a12]/80 dark:!text-towa-text dark:!shadow-[0_0_25px_rgba(47,232,255,0.15)] dark:backdrop-blur-md"
          >
            <p className="text-base font-black">Rules singkat warga:</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-medium">
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-towa-ink dark:text-towa-accent-2">
                  —
                </span>
                <span>
                  <strong className="font-black text-towa-ink dark:text-towa-text">
                    No SARA &amp; Politik:
                  </strong>{" "}
                  Kita di sini nyari temen mabar dan tempat santai, bukan mau
                  debat capres atau agama.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-towa-ink dark:text-towa-accent-2">
                  —
                </span>
                <span>
                  <strong className="font-black text-towa-ink dark:text-towa-text">
                    No NSFW/porno:
                  </strong>{" "}
                  Hargain warga yang lain. AutoMod kita galak, salah kirim link
                  atau ketik kata terlarang bisa langsung di-kick / banned.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-bold text-towa-ink dark:text-towa-accent-2">
                  —
                </span>
                <span>
                  <strong className="font-black text-towa-ink dark:text-towa-text">
                    Respect the Staff:
                  </strong>{" "}
                  Kalau ditegur sama Pejabat atau Moderator, tolong diturutin ya
                  biar tongkrongan tetep asik buat semua.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ================================================== */}
        {/* KOLOM KANAN: ACCORDION FAQ                         */}
        {/* ================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={faqContainerVariants}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                variants={faqItemVariants}
                className={`overflow-hidden rounded-2xl border-2 border-towa-ink bg-towa-bg shadow-[3px_3px_0_var(--towa-ink)] transition-all duration-300 hover:border-towa-ink dark:!bg-[#0a0a12]/80 dark:backdrop-blur-md ${
                  isOpen
                    ? "dark:!border-towa-accent-2 dark:!shadow-[0_0_20px_rgba(47,232,255,0.2)]"
                    : "dark:!border-towa-accent-2/40 dark:!shadow-none dark:hover:!border-towa-accent-2 dark:hover:!shadow-[0_0_15px_rgba(47,232,255,0.15)]"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-towa-text transition-colors"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: SMOOTH_EASE }}
                    className={`shrink-0 transition-colors ${
                      isOpen ? "text-towa-accent-2" : "text-towa-text-muted"
                    }`}
                  >
                    <ChevronDown className="size-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: SMOOTH_EASE }}
                    >
                      <p className="border-t-2 border-towa-ink/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-towa-text-muted transition-colors duration-500 whitespace-pre-line dark:!border-towa-accent-2/50 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
