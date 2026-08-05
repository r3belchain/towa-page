import { SectionHeading } from "@/components/ui/section-heading";
import { moments } from "./mock-data";

export function Moments() {
  return (
    <section id="momen" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Cerita warga"
        title="Kirim Momen"
        description="Momen kecil, cerita besar. Bagikan potongan harimu dan biarkan warga lain ikut tersenyum."
      />
      <div className="mt-12 grid auto-rows-[180px] gap-4 sm:grid-cols-4 sm:auto-rows-[150px]">
        {moments.map((moment, index) => (
          <figure
            key={moment.title}
            className={`group relative overflow-hidden rounded-2xl border-2 border-[#1a1a1a] ${moment.size === "tall" ? "sm:row-span-2" : "sm:col-span-1"} ${index === 1 ? "sm:col-span-2" : ""}`}
          >
            <img
              src={moment.image}
              alt={moment.title}
              className="size-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent px-4 pb-4 pt-10 text-sm font-black text-white">
              {moment.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
