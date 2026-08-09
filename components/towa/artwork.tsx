"use client";

import CoverflowGallery from "@/components/ui/coverflow-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink, Image as ImageIcon, Music, Play } from "lucide-react";
import { artworks } from "./mock-data";

export function Artwork() {
  return (
    <section
      id="karya"
      className="bg-towa-bg py-24 text-towa-text transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading Section */}
        <SectionHeading
          eyebrow="Sudut Kreatif"
          title="Pamer Karya"
          description="Tempat karya kamu mendapat panggung, feedback, dan tepuk tangan dari warga TOWA."
          align="center"
        />

        <div className="hidden lg:block mt-16 h-[550px] w-full">
          <CoverflowGallery slides={artworks} />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:hidden">
          {artworks.map((artwork) => (
            <article
              key={artwork.title}
              className="group relative overflow-hidden rounded-2xl border-2 border-towa-border bg-towa-bg-alt shadow-lg transition-all"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Badge Kategori Mobile */}
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {artwork.type === "spotify" && (
                  <Music size={12} className="text-[#1DB954]" />
                )}
                {artwork.type === "video" && (
                  <Play size={12} className="text-[#FF0000]" />
                )}
                {artwork.type === "image" && (
                  <ImageIcon size={12} className="text-[#2FE8FF]" />
                )}
                {artwork.type}
              </div>

              {/* Info & Tombol CTA */}
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-black text-towa-text">{artwork.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-towa-text-muted">
                    {artwork.artist}
                  </p>
                </div>

                {/* Dynamic Link Button */}
                <a
                  href={artwork.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Lihat karya ${artwork.title}`}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-towa-accent text-towa-ink shadow-md transition-colors hover:bg-towa-accent-2 hover:text-white"
                >
                  {artwork.type === "spotify" ? (
                    <Music className="size-4" />
                  ) : artwork.type === "image" ? (
                    <ExternalLink className="size-4" />
                  ) : (
                    <Play className="ml-0.5 size-4 fill-current" />
                  )}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
