import { ThemeProvider } from "@/lib/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOWA | Tongkrongan Warga Asbun",
  description: "Server discord buat mabar, bahas anime, dan asbun bareng.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fffdf7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="bg-[#fffdf7]" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
