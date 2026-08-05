import {
  Camera,
  CircleDot,
  Gamepad2,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import { featureItems } from "./mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  gamepad: Gamepad2,
  sparkles: Sparkles,
  users: Users,
  message: MessageCircle,
  camera: Camera,
  palette: Palette,
};

export function Features() {
  return (
    <section id="tentang" className="bg-[#fff9ec] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Bebas masuk, bebas cerita"
          title="Apa yang bisa kamu temukan?"
          description="TOWA itu seperti kedai kopi favorit: selalu ada kursi kosong, obrolan baru, dan orang-orang yang siap bikin harimu lebih seru."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <article
                key={item.title}
                className={`group rounded-2xl border-2 border-[#ead9ad] bg-[#fffdf7] p-6 transition-transform hover:-translate-y-1 ${index === 0 ? "lg:rotate-[-1deg]" : index === 3 ? "lg:rotate-[1deg]" : ""}`}
              >
                <div className="mb-8 flex size-12 items-center justify-center rounded-xl bg-[#f5c518] text-[#1a1a1a] transition-transform group-hover:rotate-6">
                  <Icon />
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#756d5c]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-black text-[#756d5c]">
            Fasilitas warga:
          </span>
          {["Sistem Leveling", "Custom Voice Channel", "Aktif 24 Jam"].map(
            (item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[#e8cf80] bg-[#f5c518]/20 px-4 py-2 text-sm font-bold"
              >
                <CircleDot className="size-3 text-[#e8833a]" />
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
