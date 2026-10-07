import type { Metadata, Viewport } from "next";
import { Oswald, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; // добавлено
import { studio, studioDescription, studioKeywords } from "@/lib/studio";
import "./globals.css";

const display = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${studio.name} — автодетейлинг в ${studio.city}`,
    template: `%s | ${studio.name}`,
  },
  description: studioDescription,
  keywords: studioKeywords,
  openGraph: {
    title: `${studio.name} — автодетейлинг в ${studio.city}`,
    description: studioDescription,
    locale: "ru_KZ",
    type: "website",
  },
  twitter: { card: "summary", title: `${studio.name} — автодетейлинг в ${studio.city}`, description: studioDescription },
};

export const viewport: Viewport = {
  themeColor: "#080807",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">
        {children}
        <div className="grain animate-grain" aria-hidden />
        <Analytics /> {/* добавлено */}
      </body>
    </html>
  );
}
