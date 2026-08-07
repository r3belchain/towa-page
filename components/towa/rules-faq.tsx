"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "./mock-data";

export function RulesFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8"
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[.22em] text-[#e8833a]">
          Biar tetap nyaman
        </p>
        <h2 className="mt-3 text-5xl font-black tracking-[-.05em]">
          Main aman,
          <br />
          <span className="text-[#e8833a]">ngobrol nyaman.</span>
        </h2>
        <div className="mt-8 rounded-2xl border-2 border-[#1a1a1a] bg-[#f5c518] p-6 shadow-[6px_6px_0_#1a1a1a]">
          <p className="font-black">Rules singkat warga:</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm font-medium">
            <li>
              — <strong className="font-bold">No SARA & Politik:</strong> Kita
              di sini nyari temen mabar dan tempat santai, bukan mau debat
              capres atau agama.
            </li>
            <li>
              — <strong className="font-bold">No NSFW/porno:</strong> Hargain warga yang lain. AutoMod kita galak,
              salah kirim link atau ketik kata terlarang bisa langsung di- kick
              / banned.
            </li>
            <li>
              — <strong className="font-bold">Respect the Staff:</strong> Kalau ditegur sama Pejabat atau Moderator,
              tolong diturutin ya biar tongkrongan tetep asik buat semua.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-2xl border-2 border-[#ead9ad] bg-[#fff9ec]"
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-black"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              {faq.question}
              <ChevronDown
                className={`size-5 shrink-0 transition-transform ${open === index ? "rotate-180" : ""}`}
              />
            </button>
            {open === index && (
              <p className="border-t border-[#ead9ad] px-5 pb-5 pt-4 leading-7 text-[#756d5c]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
