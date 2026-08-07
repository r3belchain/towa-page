import { Camera, Video } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t-2 border-[#ead9ad] bg-[#fff9ec]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <Logo compact />
          <p className="mt-4 max-w-xs leading-7 text-[#756d5c]">
            Tempat pulang buat obrolan random, mabar, dan cerita yang belum
            sempat selesai.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              className="flex size-10 items-center justify-center rounded-full border border-[#d9c58d]"
              href="#"
              aria-label="Instagram"
            >
              <Camera className="size-4" />
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full border border-[#d9c58d]"
              href="#"
              aria-label="TikTok"
            >
              <Video className="size-4" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm font-bold">
          <a href="#top">Home</a>
          <a href="#momen">Kirim Momen</a>
          <a href="#karya">Pamer Karya</a>
          <a href="#faq">Rules & FAQ</a>
        </div>
      </div>
      <div className="border-t border-[#ead9ad] px-5 py-5 text-center text-xs font-bold text-[#887e69]">
        Made with aren latte less sugar by warga asbun.
      </div>
    </footer>
  );
}
