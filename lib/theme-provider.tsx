"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

type Theme = "normal" | "cyberpunk";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDesktop: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "towa-theme";
// Harus sama persis dengan breakpoint `lg` di Tailwind, karena toggle button
// cuma tampil di lg ke atas — kalau nilainya beda, ada window aneh di mana
// tombolnya kelihatan tapi tema ke-force balik ke normal, atau sebaliknya.
const DESKTOP_QUERY = "(min-width: 1024px)";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("normal");
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  // Load preference tersimpan sekali pas mount (client-only, aman dari SSR mismatch)
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "cyberpunk" || saved === "normal") {
      setThemeState(saved);
    }
  }, []);

  // Cyberpunk itu desktop-only. Kalau lagi di mobile (atau resize ke kecil),
  // paksa balik ke normal TANPA menghapus preference yang tersimpan — begitu
  // balik ke desktop, cyberpunk otomatis nyala lagi kalau memang dipilih.
  const effectiveTheme: Theme = isDesktop ? theme : "normal";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", effectiveTheme);
  }, [effectiveTheme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  function toggleTheme() {
    setTheme(theme === "cyberpunk" ? "normal" : "cyberpunk");
  }

  return (
    <ThemeContext.Provider
      value={{ theme: effectiveTheme, setTheme, toggleTheme, isDesktop }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme harus dipakai di dalam ThemeProvider");
  return ctx;
}
