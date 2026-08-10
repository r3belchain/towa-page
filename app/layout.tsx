import { ThemeProvider } from "@/lib/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteDescription =
  "Server discord buat mabar, bahas anime, dan asbun bareng warga TOWA. Join sekarang!";

export const metadata: Metadata = {
  // Domain Utama
  metadataBase: new URL("https://towaserver.online"),

  // Judul & Deskripsi Utama
  title: {
    default: "TOWA | Tongkrongan Warga Asbun",
    template: "%s | TOWA",
  },
  description: siteDescription,

  // Kata Kunci Pencarian (SEO)
  keywords: [
    "TOWA",
    "TOWA Discord",
    "Server Discord Indonesia",
    "Komunitas Discord Indonesia",
    "Server Mabar Indonesia",
    "Tongkrongan Warga Asbun",
    "Cari Teman Mabar",
  ],

  authors: [{ name: "Warga Asbun" }],
  creator: "TOWA Community",

  // Open Graph (Tampilan Preview Card di Discord, WhatsApp, & Facebook)
  openGraph: {
    title: "TOWA | Tongkrongan Warga Asbun",
    description: siteDescription,
    url: "https://towaserver.online",
    siteName: "TOWA Server",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TOWA Discord Community Banner",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "TOWA | Tongkrongan Warga Asbun",
    description: siteDescription,
    images: ["/og-image.png"],
  },


  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a12" },
  ],
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
