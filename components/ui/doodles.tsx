import { CircleDot, Triangle } from "lucide-react";

export function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="doodle-dot left-[8%] top-28" />
      <span className="doodle-dot right-[13%] top-20 bg-[#e8833a]" />
      <Triangle className="absolute right-[7%] top-64 size-7 rotate-12 text-[#f5c518]" />
      <CircleDot className="absolute bottom-20 left-[4%] size-9 text-[#e8833a]" />
      <span className="doodle-dot bottom-24 right-[29%] bg-[#f5c518]" />
    </div>
  );
}
