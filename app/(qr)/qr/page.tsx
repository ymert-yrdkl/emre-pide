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
    <div className="min-h-screen bg-[#f7f3ec] text-[#20140d]">
      <header className="border-b border-[#e6dac9] bg-[#fffdf9]">
        <div className="w-full max-w-[920px] mx-auto px-4 sm:px-6 py-5 flex items-center justify-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Emre Pide Logo"
            width={42}
            height={42}
            priority
            className="rounded-md"
          />
          <div className="leading-tight text-center">
            <p className="font-[family-name:var(--font-playfair)] text-[1.5rem] font-semibold">Emre Pide</p>
            <p className="text-xs tracking-[0.22em] text-[#7a6252]">QR MENÜ</p>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <section className="bg-white border border-[#eadfce] rounded-2xl p-6 sm:p-7 mb-7 text-center shadow-sm">
          <h1 className="font-[family-name:var(--font-playfair)] text-[2rem] leading-none mb-2">Menü</h1>
          <p className="text-sm text-[#6e5747] mb-5">Düzce - Azmimilli, Serhat Sk. - 0380 524 57 01</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+903805245701"
              className="inline-flex items-center justify-center gap-2 bg-[#b7392c] text-white font-semibold px-5 py-3 rounded-full no-underline hover:bg-[#982f24] transition-colors"
            >
              <span>📞</span>
              Sipariş Ver
            </a>
            <a
              href="https://wa.me/903805245701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-full no-underline hover:bg-[#1ea952] transition-colors"
            >
              <span>💬</span>
              WhatsApp
            </a>
          </div>
        </section>

        <nav className="bg-white border border-[#eadfce] rounded-2xl p-3.5 mb-8 sticky top-3 z-30 shadow-sm">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {Object.entries(categoryInfo).map(([key, value]) => (
              <a
                key={key}
                href={`#${key}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 text-sm rounded-full bg-[#f3e9dc] text-[#6d5442] font-medium no-underline hover:bg-[#e8dac7] transition-colors"
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
                  <h2 className="font-[family-name:var(--font-playfair)] text-[1.6rem] leading-none">
                    {info.label}
                  </h2>
                </div>

                <div className="space-y-5">
                  {items.map((item) => (
                    <article
                      key={`${category}-${item.name}`}
                      className="bg-white border border-[#eadfce] rounded-2xl p-4 sm:p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-[92px] h-[76px] rounded-xl overflow-hidden bg-[#efe3d4] shrink-0">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="92px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-2xl">🥙</div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-[1.1rem] leading-tight">{item.name}</h3>
                          <p className="text-xs text-[#8b7361] mt-1">
                            {item.image ? "Görsel mevcut" : "Görsel yakında"}
                          </p>
                        </div>

                        <div className="shrink-0 rounded-full bg-[#b7392c]/10 text-[#b7392c] font-bold px-4 py-2 text-sm">
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

        <footer className="mt-10 bg-white border border-[#eadfce] rounded-2xl p-5 text-center text-sm text-[#6e5747]">
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
