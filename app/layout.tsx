import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://emrepide.com.tr"),
  title: {
    template: "%s | Emre Pide Salonu",
    default: "Emre Pide Salonu — Düzce Taş Fırın Pide",
  },
  description:
    "Emre Pide Salonu resmi web sitesi. Düzce'de taş fırında hazırlanan pide çeşitleri, Trabzon pidesi, lahmacun, kiremit yemekleri, iletişim bilgileri ve QR menü erişimi.",
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: "Emre Pide Salonu — Düzce Taş Fırın Pide",
    description:
      "Düzce'de taş fırında hazırlanan pide çeşitleri, Trabzon pidesi, iletişim bilgileri ve QR menü erişimi.",
    url: "https://emrepide.com.tr",
    siteName: "Emre Pide Salonu",
    locale: "tr_TR",
    type: "website",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
