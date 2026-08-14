"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

import InfiniteGallery from "@/components/ui/infinite-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { moments } from "./mock-data";

export function Moments() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Data untuk 3D Gallery (Desktop)
  const galleryImages = useMemo(() => {
    return moments.map((moment) => ({
      src: moment.image,
      alt: moment.title,
      ratio: moment.ratio,
    }));
  }, []);

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduce ? [1, 1] : [1, 0],
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduce ? [1, 1] : [1, 0.9],
  );
  const titleBlur = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduce ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(10px)"],
  );

  return (
    <section
      id="momen"
      className="w-full bg-towa-bg py-24 transition-colors duration-500 dark:bg-transparent"
    >
      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-8">
        {/* HEADING MOBILE */}
        <SectionHeading
          eyebrow="Cerita Warga"
          title="Momen Asbun"
          description="Momen kecil, cerita besar. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
          align="center"
          className="mb-8 lg:hidden"
        />

        <div className="mt-8 w-full lg:hidden">
          <div className="columns-2 gap-3 space-y-3">
            {moments.slice(0, 6).map((moment, index) => (
              <div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-xl border-2 border-towa-ink bg-towa-bg shadow-[3px_4px_0_var(--towa-ink)] transition-all duration-300 dark:!border-towa-accent-2/80 dark:!bg-[#0a0a12] dark:!shadow-[0_0_15px_rgba(47,232,255,0.2)]"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center pb-4">
            <a
              href="https://discord.com/invite/SZbfKfU2NY"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-towa-ink bg-towa-accent px-8 py-3 text-sm font-black text-towa-ink shadow-[4px_4px_0_var(--towa-ink)] transition-transform active:scale-95 dark:!border-towa-accent-2 dark:!bg-[#12121e] dark:!text-towa-accent-2 dark:!shadow-[0_0_15px_rgba(47,232,255,0.3)]"
            >
              Kirim Momen ↗
            </a>
          </div>
        </div>

        <div
          ref={sectionRef}
          className="relative hidden lg:block"
          style={{ height: "300vh" }}
        >
    
          <div className="sticky top-[5vh] flex h-[90vh] w-full items-center justify-center overflow-hidden rounded-[2rem] border-[3px] border-towa-ink bg-towa-bg-alt shadow-[20px_20px_0_var(--towa-ink)] transition-all duration-500 dark:!border-towa-accent-2 dark:!bg-[#0a0a12] dark:!shadow-[0_0_40px_rgba(47,232,255,0.15)]">
            <div
              className="absolute inset-0"
              style={{ isolation: "isolate", zIndex: 0 }}
            >
              <InfiniteGallery
                scrollProgress={scrollYProgress}
                images={galleryImages}
                backgroundColor="transparent"
              />
            </div>

 
            <motion.div
              style={{
                opacity: titleOpacity,
                scale: titleScale,
                filter: titleBlur,
              }}
              className="pointer-events-none relative z-50 flex flex-col items-center justify-center rounded-3xl border-2 border-towa-ink bg-towa-bg/80 p-10 text-center shadow-[10px_10px_0_var(--towa-ink)] backdrop-blur-xl transition-all duration-500 dark:!border-towa-accent-2 dark:!bg-[#0a0a12]/80 dark:!shadow-[0_0_25px_rgba(47,232,255,0.2)]"
            >
              <SectionHeading
                eyebrow="Cerita Warga"
                title="Momen Asbun"
                description="Geser kanvas ini, atau scroll terus ke bawah. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
                align="center"
                disableTypewriter
              />
              <a
                href="https://discord.com/invite/SZbfKfU2NY"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto mt-8 inline-block rounded-full border-2 border-transparent bg-towa-accent px-8 py-3 text-sm font-black text-towa-ink shadow-[4px_4px_0_var(--towa-ink)] transition-all duration-300 hover:scale-105 hover:bg-towa-accent-2 hover:text-towa-ink dark:!border-towa-accent-2 dark:!bg-transparent dark:!text-towa-accent-2 dark:!shadow-[0_0_15px_rgba(47,232,255,0.3)] dark:hover:!bg-towa-accent-2/10"
              >
                Kirim Momen ↗
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
