"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

import EyeGallery from "@/components/ui/eye-gallery"; 
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


  const { topImages, bottomImages } = useMemo(() => {
    const half = Math.ceil(moments.length / 2);


    const formatImage = (m: any) => ({
      image: { src: m.image, alt: m.title },
      focusY: 50,
    });

    return {
      topImages: moments.slice(0, half).map(formatImage),
      bottomImages: moments.slice(half).map(formatImage),
    };
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
      className="w-full bg-towa-bg transition-colors duration-500"
    >
      <div className="relative mx-auto max-w-[1500px] px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Cerita Warga"
          title="Kirim Momen"
          description="Momen kecil, cerita besar. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
          align="center"
          className="mb-8 lg:hidden"
        />

        {/* MOBILE VIEW: EYE GALLERY  */}
        <div className="lg:hidden relative w-full h-[550px] -mx-5 px-5">
          <EyeGallery
            topImages={topImages}
            bottomImages={bottomImages}
            speed={10} 
            cardWidth={350} 
            cardHeight={480} 
            rowGap={80} 
          />
        </div>

        {/*  DESKTOP VIEW: INFINITE 3D GALLERY  */}

        <div
          ref={sectionRef}
          className="relative hidden lg:block"
          style={{ height: "300vh" }}
        >
          <div className="sticky top-[5vh] flex h-[90vh] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-towa-border/50 bg-towa-bg-alt shadow-2xl">
            <div
              className="absolute inset-0"
              style={{ isolation: "isolate", zIndex: 0 }}
            >
              <InfiniteGallery
                scrollProgress={scrollYProgress}
                images={galleryImages}
                backgroundColor="var(--towa-bg-alt)"
              />
            </div>

            <motion.div
              style={{
                opacity: titleOpacity,
                scale: titleScale,
                filter: titleBlur,
              }}
              className="pointer-events-none relative z-50 flex flex-col items-center justify-center rounded-3xl border border-towa-border/30 bg-towa-bg/80 p-10 text-center shadow-2xl backdrop-blur-xl transition-colors"
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
                className="pointer-events-auto mt-8 inline-block rounded-full bg-towa-accent px-8 py-3 text-sm font-black text-towa-ink shadow-[4px_4px_0_var(--towa-ink)] transition-all hover:scale-105 hover:bg-towa-accent-2 hover:text-white"
              >
                Kirim Momen ↗
              </a>
            </motion.div>
          </div>
        </div>
        {/* ============================================== */}
      </div>
    </section>
  );
}
