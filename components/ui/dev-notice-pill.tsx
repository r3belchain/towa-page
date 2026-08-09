"use client";

export function DevNoticePill() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full border border-towa-border bg-towa-bg/85 px-4 py-2 text-xs font-bold text-towa-text shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-towa-accent-2 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-towa-accent-2" />
      </span>


      <span className="tracking-wide">
        Website Masih Dalam Tahap Pengerjaan
      </span>
    </div>
  );
}
