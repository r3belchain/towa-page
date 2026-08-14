"use client";

import { motion } from "framer-motion";

export default function DarkGridSpotlight() {
  return (
    // Tetap di z-0 dan hanya muncul di dark mode
    <div className="pointer-events-none fixed inset-0 z-0 hidden h-full w-full overflow-hidden bg-towa-bg dark:block">
      {/* 🔹 Doodle 1: Bintang Neon Kiri Atas */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[20%] text-towa-accent-2"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="blur-[1px]"
        >
          <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" />
        </svg>
      </motion.div>

      {/* 🔹 Doodle 2: Kotak Zigzag Kanan Tengah */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute right-[10%] top-[45%] text-towa-accent"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      </motion.div>

      {/* 🔹 Doodle 3: Plus Sign Kiri Bawah */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] left-[8%] text-towa-text-subtle"
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </motion.div>

      {/* 🔹 Doodle 4: Lingkaran Kosong Kanan Bawah */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-[10%] right-[25%] text-towa-accent-2"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </motion.div>
    </div>
  );
}
