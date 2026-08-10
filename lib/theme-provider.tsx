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
const DESKTOP_QUERY = "(min-width: 1024px)";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("normal");
  const isDesktop = useMediaQuery(DESKTOP_QUERY);


  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "cyberpunk" || saved === "normal") {
      setThemeState(saved);
    }
  }, []);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  function toggleTheme() {
    setTheme(theme === "cyberpunk" ? "normal" : "cyberpunk");
  }

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, isDesktop }}
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
