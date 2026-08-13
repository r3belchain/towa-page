import { ThemeProvider } from "@/lib/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteDescription =
  "Komunitas Discord Indonesia tempat ngobrol santai, obrolan asbun, mabar game, dan nongkrong online 24 jam. Bergabunglah dengan Warga TOWA sekarang!";

export const metadata: Metadata = {
  metadataBase: new URL("https://wargatowa.online"),

  title: {
    default: "TOWA | Komunitas & Server Discord Indonesia",
    template: "%s | TOWA Server Discord",
  },
  description: siteDescription,

  keywords: [
    "Warga Towa",
    "TOWA Discord",
    "Server Discord Indonesia",
    "Komunitas Discord Indonesia",
    "Discord Ngobrol",
    "Server Mabar Indonesia",
    "Tempat Mabar Discord",
    "Tongkrongan Warga Asbun",
    "Cari Teman Mabar",
  ],

  authors: [{ name: "Warga TOWA" }],
  creator: "TOWA Community",

  openGraph: {
    title: "TOWA | Komunitas & Server Discord Indonesia",
    description: siteDescription,
    url: "https://wargatowa.online",
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
    title: "TOWA | Komunitas & Server Discord Indonesia",
    description: siteDescription,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://wargatowa.online",
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
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Warga TOWA",
    url: "https://wargatowa.online",
    logo: "https://wargatowa.online/icon.png",
    description: siteDescription,
    sameAs: ["https://discord.gg/SZbfKfU2NY"],
  };

  return (
    <html lang="id" className="bg-[#fffdf7]" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </body>
    </html>
  );
}
