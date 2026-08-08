"use client";

import { useState } from "react";

export function DevNoticePill() {

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-full border border-towa-border bg-towa-bg/85 px-6 py-3.5 text-sm sm:text-base font-semibold text-towa-text shadow-2xl backdrop-blur-md transition-all duration-300">

      <span className="relative flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-towa-accent-2 opacity-75" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-towa-accent-2" />
      </span>


      <span className="tracking-wide">
        Website Masih Dalam Tahap Pengerjaan
      </span>
    </div>
  );
}
