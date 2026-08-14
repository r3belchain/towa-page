"use client";

import CoverflowGallery from "@/components/ui/coverflow-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { artworks } from "./mock-data";

export function Artwork() {
  return (
    <section
      id="karya"
      className="w-full bg-towa-bg py-24 text-towa-text transition-colors duration-500 dark:bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading Section */}
        <SectionHeading
          eyebrow="Sudut Kreatif"
          title="Pamer Karya"
          description="Tempat karya kamu mendapat panggung, feedback, dan tepuk tangan dari warga TOWA."
          align="center"
        />

        <div className="mt-12 h-[450px] w-full lg:mt-16 lg:h-[550px]">
          <CoverflowGallery slides={artworks} />
        </div>
      </div>
    </section>
  );
}