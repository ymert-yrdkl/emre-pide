import type { Metadata } from "next";
import Image from "next/image";

import MenuSections from "@/app/components/MenuSections";
import { categoryInfo, menuData } from "@/app/data/menu";

export const metadata: Metadata = {
  title: "QR Menü",
  description:
    "Emre Pide Salonu QR menüsü - taş fırında pişmiş pideler, lahmacun, içecekler ve tatlılar.",
  alternates: {
    canonical: "https://menu.emrepide.com.tr",
  },
};

export default function QRMenuPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8efe2_0%,#fdf8f1_100%)]">
      <header className="sticky top-0 z-50 border-b border-[#e9ddce] bg-[#fff9f1]/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="Emre Pide Logo" width={40} height={40} className="rounded-lg" priority />
            <div>
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--foreground)] leading-none">
                Emre Pide
              </span>
              <span className="block text-[0.72rem] text-[var(--text-muted)] tracking-[0.18em] mt-0.5">QR MENÜ</span>
            </div>
          </div>

          <a
            href="tel:+903805245701"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[var(--primary-dark)] transition-colors no-underline"
          >
            <span>📞</span>
            Sipariş
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pt-4">
        <div className="rounded-xl bg-[#b73a2d] text-white text-xs font-semibold tracking-wide px-3 py-2 inline-flex">
          QR MENU V2 - BUILD ff3a2a6
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 pt-4 pb-8">
        <section className="rounded-2xl bg-[#2a160e] text-[#f8efe2] p-5 md:p-6 shadow-[0_10px_30px_rgba(35,20,10,0.25)] mb-5">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[0.72rem] tracking-[0.2em] uppercase text-[#d9b46b] mb-2">Taş Fırından Sofraya</p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl leading-tight">Menümüz</h1>
              <p className="text-sm md:text-base text-[#f8efe2]/75 mt-2">40+ çeşit pide, lahmacun, kiremit ve içecekler</p>
            </div>
            <a
              href="https://wa.me/903805245701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-2.5 rounded-full hover:bg-[#1ea952] transition-colors no-underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </section>

        <div className="sticky top-[73px] z-40 bg-[#fdf7ee]/95 backdrop-blur-sm border border-[#e9ddce] rounded-2xl p-2.5 mb-4">
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Object.entries(categoryInfo).map(([key, { emoji, label }]) => (
              <a
                key={key}
                href={`#${key}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-[#f1e6d8] text-[#694a37] hover:bg-[var(--primary)] hover:text-white transition-colors whitespace-nowrap no-underline"
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <MenuSections variant="qr" />

        <div className="mt-4 p-4 bg-[#f1e6d8] rounded-2xl text-center border border-[#e9ddce]">
          <p className="text-sm text-[var(--text-muted)] mb-3">📍 Fiyatlar güncel olup değişiklik gösterebilir</p>
          <a
            href="tel:+903805245701"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--primary-dark)] transition-colors text-sm no-underline"
          >
            <span>📞</span>
            Sipariş İçin Ara
          </a>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Emre Pide Salonu",
            servesCuisine: "Turkish",
            priceRange: "₺",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Azmimilli, Serhat Sk.",
              addressLocality: "Düzce",
              postalCode: "81020",
              addressCountry: "TR",
            },
            telephone: "+90 380 524 57 01",
            menu: "https://menu.emrepide.com.tr",
            hasMenu: {
              "@type": "Menu",
              hasMenuSection: Object.entries(menuData).map(([category, items]) => ({
                "@type": "MenuSection",
                name: categoryInfo[category as keyof typeof categoryInfo].label,
                hasMenuItem: items.map((item) => ({
                  "@type": "MenuItem",
                  name: item.name,
                  offers: {
                    "@type": "Offer",
                    price: item.price,
                    priceCurrency: "TRY",
                  },
                })),
              })),
            },
          }),
        }}
      />
    </div>
  );
}

