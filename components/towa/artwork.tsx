import { Play } from "lucide-react";
import { artworks } from "./mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Artwork() {
  return (
    <section id="karya" className="bg-[#1a1a1a] py-24 text-[#fffdf7]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Sudut kreatif"
          title="Pamer Karya"
          description="Tempat karya kamu mendapat panggung, feedback, dan tepuk tangan dari warga TOWA."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {artworks.map((artwork) => (
            <article
              key={artwork.title}
              className="overflow-hidden rounded-2xl border-2 border-[#655c48] bg-[#24231e]"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h3 className="font-black">{artwork.title}</h3>
                  <p className="mt-1 text-sm text-[#c9bfa8]">
                    {artwork.artist}
                  </p>
                </div>
                <button
                  aria-label={`Play ${artwork.title}`}
                  className="flex size-10 items-center justify-center rounded-full bg-[#f5c518] text-[#1a1a1a]"
                >
                  <Play className="ml-0.5 size-4 fill-current" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
