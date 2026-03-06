import type { Metadata } from "next";
import { Inter, Nunito, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Emre Pide Salonu",
    default: "Emre Pide Salonu — Düzce'de Taş Fırında Geleneksel Lezzet",
  },
  description:
    "Emre Pide Salonu — 1999'dan bu yana Düzce'de taş fırında pişmiş geleneksel Türk pideleri. 40+ çeşit pide, taze malzemeler, eşsiz lezzet. Menümüzü inceleyin ve sipariş verin.",
  keywords: [
    "pide",
    "emre pide",
    "düzce pide",
    "taş fırın",
    "türk mutfağı",
    "pide salonu",
    "düzce",
    "emre pide salonu",
    "düzce pide salonu",
    "taş fırın pide",
    "karadeniz pidesi",
    "trabzon pidesi",
    "lahmacun",
    "düzce yemek",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Emre Pide Salonu",
    title: "Emre Pide Salonu — Düzce'de Taş Fırında Geleneksel Lezzet",
    description:
      "1999'dan bu yana Düzce'de taş fırında pişmiş geleneksel Türk pideleri. 40+ çeşit pide, taze malzemeler.",
    url: "https://emrepide.com.tr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Pide Salonu",
    description: "Düzce'de taş fırında geleneksel pide lezzeti.",
  },
  alternates: {
    canonical: "https://emrepide.com.tr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
