import type { Metadata } from "next";

import MenuSections from "@/app/components/MenuSections";
import { categoryInfo, menuData } from "@/app/data/menu";

export const metadata: Metadata = {
  title: "Menü",
  description:
    "Emre Pide Salonu menüsü - taş fırında pişmiş pideler, lahmacun, içecekler ve tatlılar.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="bg-koyu pt-28 pb-10 px-[5%]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
            Lezzetlerimiz
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,3rem)] text-krem leading-tight mb-3">
            Menümüz
          </h1>
          <p className="text-krem/50 text-sm">40+ çeşit pide, lahmacun, kiremit ve daha fazlası</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Object.entries(categoryInfo).map(([key, { emoji, label }]) => (
              <a
                key={key}
                href={`#${key}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-warm-bg text-text-muted hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <MenuSections />

        <div className="mt-8 p-4 bg-[var(--warm-bg)] rounded-2xl text-center">
          <p className="text-sm text-[var(--text-muted)] mb-3">📍 Fiyatlar güncel olup değişiklik gösterebilir</p>
          <a
            href="tel:+903805245701"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--primary-dark)] transition-colors text-sm"
          >
            <span>📞</span>
            Sipariş İçin Ara
          </a>
        </div>

        <div className="h-8" />
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
            menu: "https://emrepide.com.tr/menu",
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
