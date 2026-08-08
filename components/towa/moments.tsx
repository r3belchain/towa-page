"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { moments } from "./mock-data";

import { SectionHeading } from "@/components/ui/section-heading";

const STREAM_CONFIG = [
  { left: "3%", width: "220px", yStart: "70vh", yEnd: "-120vh" },
  { left: "5%", width: "240px", yStart: "160vh", yEnd: "-40vh" },
  { left: "25%", width: "260px", yStart: "90vh", yEnd: "-100vh" },
  { left: "23%", width: "230px", yStart: "180vh", yEnd: "-20vh" },
  { left: "52%", width: "250px", yStart: "80vh", yEnd: "-110vh" },
  { left: "54%", width: "240px", yStart: "170vh", yEnd: "-30vh" },
  { left: "76%", width: "270px", yStart: "100vh", yEnd: "-90vh" },
  { left: "74%", width: "280px", yStart: "190vh", yEnd: "-10vh" },
];

function StreamCard({
  moment,
  config,
  progress,
  reduce,
}: {
  moment: (typeof moments)[number];
  config: (typeof STREAM_CONFIG)[number];
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const y = useTransform(
    progress,
    [0, 1],
    reduce ? ["0vh", "0vh"] : [config.yStart, config.yEnd],
  );

  return (
    <motion.div
      style={{
        y,
        left: config.left,
        width: config.width,
        position: "absolute",
        top: 0,
      }}
      className="z-10"
    >
      <figure
        style={{ aspectRatio: moment.ratio }}

        className="group relative overflow-hidden rounded-2xl border border-towa-border bg-towa-bg-alt shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      >
        <img
          src={moment.image}
          alt={moment.title}
          className="size-full object-cover transition duration-700 group-hover:scale-105"
        />
  
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 pb-3 pt-10 text-xs font-bold text-white opacity-90 transition-opacity duration-300 group-hover:opacity-100">
          {moment.title}
        </figcaption>
      </figure>
    </motion.div>
  );
}

export function Moments() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.22],
    reduce ? [1, 1] : [1, 0],
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.22],
    reduce ? [1, 1] : [1, 0.85],
  );
  const titleBlur = useTransform(
    scrollYProgress,
    [0, 0.22],
    reduce ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(10px)"],
  );

  return (

    <section
      id="momen"
      className="w-full bg-towa-bg transition-colors duration-500"
    >

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Cerita Warga"
          title="Kirim Momen"
          description="Momen kecil, cerita besar. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
          align="center"
          className="mb-12 lg:hidden"
        />

        <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-4 sm:auto-rows-[150px] lg:hidden">
          {moments.map((moment, index) => (
            <figure
              key={moment.title}
      
              className={`group relative overflow-hidden rounded-2xl border border-towa-border shadow-sm ${moment.size === "tall" ? "sm:row-span-2" : "sm:col-span-1"} ${index === 1 ? "sm:col-span-2" : ""}`}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">
                {moment.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          ref={sectionRef}
          className="relative hidden lg:block"
          style={{ height: "320vh" }}
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            <motion.div
              style={{
                opacity: titleOpacity,
                scale: titleScale,
                filter: titleBlur,
              }}
              className="relative z-0 pointer-events-none"
            >
              <SectionHeading
                eyebrow="Cerita Warga"
                title="Kirim Momen"
                description="Momen kecil, cerita besar. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
                align="center"
              />
            </motion.div>

            {moments.map((moment, index) => (
              <StreamCard
                key={moment.title}
                moment={moment}
                config={STREAM_CONFIG[index]}
                progress={scrollYProgress}
                reduce={!!reduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
