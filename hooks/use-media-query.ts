"use client";

import { useEffect, useState } from "react";

// Default false (mobile-first, aman buat SSR karena window belum ada di server).
// Nilai sebenarnya di-set di useEffect setelah komponen mount di browser.
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    function handleChange(event: MediaQueryListEvent) {
      setMatches(event.matches);
    }

    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
