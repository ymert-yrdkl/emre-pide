import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Emre Pide Salonu",
    default: "Emre Pide Salonu — Taş Fırında Geleneksel Lezzet",
  },
  description:
    "Emre Pide Salonu — Taş fırında pişmiş geleneksel Türk pideleri. Taze malzemeler, eşsiz lezzet. Menümüzü inceleyin ve sipariş verin.",
  keywords: ["pide", "emre pide", "taş fırın", "türk mutfağı", "pide salonu"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Emre Pide Salonu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
