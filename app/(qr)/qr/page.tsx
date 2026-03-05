import type { Metadata } from "next";
import Image from "next/image";

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
    <div className="min-h-screen bg-[#f5f1ea] text-[#22150f]">
      <main className="px-4 py-6" style={{ maxWidth: 860, margin: "0 auto" }}>
        <section className="rounded-3xl border border-[#e7dcca] bg-white px-5 py-6 shadow-sm mb-5">
          <div className="flex flex-col items-center text-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Emre Pide"
              width={56}
              height={56}
              priority
              className="rounded-lg"
            />
            <p className="font-[family-name:var(--font-playfair)] text-4xl leading-none">Emre Pide</p>
            <p className="text-xs tracking-[0.24em] text-[#7a6352]">MENÜ</p>
            <p className="text-sm text-[#6d5849] mt-1">İletişim: 0380 524 57 01</p>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-2">
              <a
                href="tel:+903805245701"
                className="inline-flex items-center justify-center rounded-full bg-[#b33b2f] text-white font-semibold px-5 py-3 no-underline hover:bg-[#963226] transition-colors"
              >
                Sipariş Ver
              </a>
              <a
                href="https://wa.me/903805245701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] text-white font-semibold px-5 py-3 no-underline hover:bg-[#1ea952] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <nav className="sticky top-3 z-20 rounded-2xl border border-[#e7dcca] bg-white/95 backdrop-blur px-3 py-3 mb-6 shadow-sm">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Object.entries(categoryInfo).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#f3e9dc] px-4 py-2 text-sm font-medium text-[#6f5542] no-underline hover:bg-[#eadcc9]"
              >
                <span>{value.emoji}</span>
                <span>{value.label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div className="space-y-10">
          {Object.entries(menuData).map(([category, items]) => {
            const info = categoryInfo[category as keyof typeof categoryInfo];

            return (
              <section key={category} id={category} className="scroll-mt-24">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{info.emoji}</span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl leading-none">{info.label}</h2>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <article
                      key={`${category}-${item.name}`}
                      className="rounded-2xl border border-[#e7dcca] bg-white p-4 sm:p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative h-[78px] w-[96px] shrink-0 overflow-hidden rounded-xl bg-[#efe3d4]">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-2xl">🥙</div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold leading-snug">{item.name}</h3>
                        </div>

                        <div className="shrink-0 rounded-full bg-[#b33b2f]/10 px-4 py-2 text-sm font-bold text-[#b33b2f]">
                          ₺{item.price}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <footer className="mt-10 rounded-2xl border border-[#e7dcca] bg-white px-4 py-4 text-center text-sm text-[#6d5849]">
          Fiyatlar güncel olup dönemsel olarak değişebilir.
        </footer>
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
