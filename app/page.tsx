import Image from "next/image";
import Link from "next/link";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FAQ from "./components/FAQ";

const highlights = [
  { label: "Yıllık deneyim", value: "25+" },
  { label: "Çeşit ürün", value: "40+" },
  { label: "Açık saat", value: "10-22" },
];

const featuredItems = [
  {
    name: "Trabzon Pide",
    price: "220 TL",
    text: "Karadeniz çizgisini taşıyan, tereyağı dokunuşlu güçlü klasik.",
    image: "/images/menu/trabzon pide.png",
  },
  {
    name: "Kavurmalı Pide",
    price: "250 TL",
    text: "Doyurucu iç harç, taş fırın hamuru ve sıcak servis dengesi.",
    image: "/images/menu/kavurmalı pide.png",
  },
  {
    name: "Kıymalı Pide",
    price: "150 TL",
    text: "Emre Pide&apos;nin en bilinen ürünlerinden biri; net, tanıdık ve güçlü tat.",
    image: "/images/menu/kıymalı.png",
  },
];

const previewSections = [
  {
    kicker: "Hikayemiz",
    title: "Taş fırın ritmi, günlük hazırlık, mahalle güveni",
    text: "25 yılı aşkın tecrübeyle Düzce'de aynı lezzeti sunuyoruz.",
    href: "/hikaye",
    icon: "🔥",
  },
  {
    kicker: "Lezzetler",
    title: "40+ çeşit pide, kiremit, lahmacun",
    text: "Taş fırında hazırlanan öne çıkan ürünlerimizi keşfedin.",
    href: "/lezzetler",
    icon: "🥙",
  },
  {
    kicker: "İletişim",
    title: "Sipariş, konum ve hızlı ulaşım",
    text: "Azmimilli, Serhat Sk. — 0380 524 57 01",
    href: "/iletisim",
    icon: "📍",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1c120c] py-20 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(214,171,95,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(183,58,45,0.26),transparent_36%)]" />
          <div className="site-shell relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-14">
            <div className="max-w-2xl">
              <span className="section-kicker text-[#f4d7a0]">Düzce&apos;de taş fırın</span>
              <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(3rem,6vw,5.4rem)] leading-[0.98] text-[#fff6e8]">
                Emre Pide için
                <br />
                <span className="text-[#f4d7a0]">yeni bir başlangıç</span>
              </h1>
              <p className="mt-7 max-w-xl text-[1rem] leading-8 text-white/70 md:text-[1.05rem]">
                Taş fırında hazırlanan ürünleri, net iletişim bilgilerini ve QR menü erişimini tek bir çatı altında toplayan sade bir ana sayfa.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/lezzetler" className="site-btn-primary">
                  Öne Çıkanlar
                </Link>
                <a href="https://menu.emrepide.com.tr" className="site-btn-secondary">
                  QR Menü
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/12 bg-white/6 px-6 py-5 backdrop-blur-sm">
                    <p className="font-[family-name:var(--font-playfair)] text-[1.85rem] text-[#f4d7a0]">{item.value}</p>
                    <p className="mt-1 text-[0.74rem] uppercase tracking-[0.18em] text-white/52">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="dark-card relative overflow-hidden p-5 md:p-6">
                <div className="soft-grid absolute inset-0 opacity-20" />
                <div className="relative aspect-[4/4.4] overflow-hidden rounded-[28px] bg-[#2c1b14]">
                  <Image
                    src="/images/menu/trabzon pide.png"
                    alt="Trabzon pide"
                    fill
                    className="object-contain scale-105"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
                <div className="relative mt-5 rounded-[24px] bg-white/7 px-5 py-5">
                  <p className="text-[0.74rem] uppercase tracking-[0.18em] text-[#f4d7a0]">Bugünün vurgusu</p>
                  <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-[1.8rem] text-white">Trabzon Pide</h2>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Karadeniz çizgisini taşıyan tereyağı dokunuşlu güçlü klasik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sayfalar Önizleme Kartları */}
        <section className="section-pad">
          <div className="site-shell">
            <div className="max-w-2xl mb-12">
              <span className="section-kicker">Keşfet</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,3.5rem)] leading-tight">
                Emre Pide&apos;yi
                <br />
                <span className="text-primary">yakından tanıyın</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {previewSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group site-card px-7 py-7 no-underline transition-transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-5">
                    {section.icon}
                  </div>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary font-bold">{section.kicker}</p>
                  <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-[1.35rem] leading-snug">{section.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-7 text-text-muted">{section.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Devamını Gör
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Öne Çıkanlar (kısa) */}
        <section className="section-pad bg-[#241610] text-white">
          <div className="site-shell">
            <div className="max-w-2xl">
              <span className="section-kicker text-[#f4d7a0]">Öne çıkanlar</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,3.4rem)] leading-tight text-[#fff6e8]">
                İlk bakışta ne sunduğumuzu
                <br />
                <span className="text-[#f4d7a0]">doğrudan göster</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredItems.map((item) => (
                <article key={item.name} className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-[#2e1c15]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 1280px) 100vw, 33vw" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-[1.55rem] text-white">{item.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/62">{item.text}</p>
                    </div>
                    <span className="rounded-full bg-[#f4d7a0]/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4d7a0]">
                      {item.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/lezzetler" className="site-btn-secondary border-white/20 bg-white/8 text-white hover:border-white/40 inline-flex">
                Tüm Lezzetleri Gör →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ + Dönen Pide */}
        <FAQ />
      </main>

      <SiteFooter />
    </div>
  );
}
