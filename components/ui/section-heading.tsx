"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className = "",
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { margin: "-15%" });

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.018,
        delayChildren: 0.35,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 2 },
    visible: { opacity: 1, y: 0 },
  };

let titleColor = "text-towa-text";
let descColor = "text-towa-text-muted";

if (inverted) {
  titleColor = "text-towa-bg [html[data-theme='cyberpunk']_&]:text-towa-text";
  descColor =
    "text-towa-text-subtle [html[data-theme='cyberpunk']_&]:text-towa-text-muted";
}

  return (
    <div
      ref={containerRef}
      className={`max-w-2xl flex flex-col ${alignClasses[align]} ${className}`}
    >
      <div className="flex flex-col lg:hidden">
        {eyebrow && (
          <p className="text-xs font-black uppercase tracking-[.22em] text-towa-accent-2">
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl ${titleColor}`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-lg leading-8 ${descColor}`}>{description}</p>
        )}
      </div>

      <div
        className={`hidden lg:flex lg:flex-col ${alignClasses[align]} w-full`}
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-black uppercase tracking-[.22em] text-towa-accent-2"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-3 text-4xl font-black tracking-[-.04em] sm:text-6xl ${titleColor}`}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`mt-4 text-lg leading-8 ${descColor}`}
          >
            {description.split("").map((char, index) => (
              <motion.span key={index + char} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        )}
      </div>
    </div>
  );
}