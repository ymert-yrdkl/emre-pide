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
    <div className="min-h-screen bg-[var(--background)]">
      <header className="bg-white border-b border-[var(--border)] sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Emre Pide Logo"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <div>
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[var(--foreground)]">
                Emre Pide
              </span>
              <span className="block text-[0.65rem] text-[var(--text-muted)] tracking-wider">MENÜ</span>
            </div>
          </div>
          <a
            href="tel:+903805245701"
            className="flex items-center gap-1.5 bg-[var(--primary)] text-white text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-[var(--primary-dark)] transition-colors no-underline"
          >
            <span>📞</span>
            <span>Sipariş</span>
          </a>
        </div>
      </header>

      <div className="sticky top-[57px] z-40 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)] py-2.5">
        <div className="max-w-lg mx-auto px-4">
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Object.entries(categoryInfo).map(([key, { emoji, label }]) => (
              <a
                key={key}
                href={`#${key}`}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium bg-[var(--warm-bg)] text-[var(--text-muted)] hover:bg-[var(--primary)] hover:text-white transition-colors whitespace-nowrap no-underline"
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-lg mx-auto px-4 py-5">
        <MenuSections compact />

        <div className="mt-6 p-4 bg-[var(--warm-bg)] rounded-2xl text-center">
          <p className="text-sm text-[var(--text-muted)] mb-3">📍 Fiyatlar güncel olup değişiklik gösterebilir</p>
          <a
            href="tel:+903805245701"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--primary-dark)] transition-colors text-sm no-underline"
          >
            <span>📞</span>
            Sipariş İçin Ara
          </a>
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://wa.me/903805245701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[#25D366] transition-colors no-underline"
          >
            💬 WhatsApp ile sipariş ver
          </a>
        </div>

        {/* Harita */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4268.906733844717!2d31.15340494859973!3d40.83734403667689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d7543379f4dab%3A0x9c038e368282536!2sEmre%20Pide%20Salonu!5e0!3m2!1str!2str!4v1772844129924!5m2!1str!2str"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Emre Pide Salonu Konum"
          />
        </div>

        <div className="h-6" />
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
