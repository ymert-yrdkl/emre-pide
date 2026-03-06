import Image from "next/image";
import Link from "next/link";

import GallerySection from "./components/GallerySection";
import Marquee from "./components/Marquee";

const featuredMenu = [
  {
    name: "Kıymalı Pide",
    desc: "Özel baharatlı kıyma, domates ve biberle hazırlanan taş fırın klasiği.",
    price: 150,
    image: "/images/menu/kıymalı.png",
    badge: "En Çok Satan",
  },
  {
    name: "Trabzon Pide",
    desc: "Karadeniz usulü kapalı pide, tereyağı dokunuşuyla servis edilir.",
    price: 220,
    image: "/images/menu/trabzon pide.png",
    badge: "Karadeniz Usulü",
  },
  {
    name: "Kavurmalı Pide",
    desc: "Yumuşak kavurma ve bol iç harçla hazırlanan güçlü lezzet.",
    price: 250,
    image: "/images/menu/kavurmalı pide.png",
    badge: "Favori",
  },
];

const quickLinks = [
  {
    icon: "🧱",
    title: "Hakkımızda",
    desc: "Taş fırın geleneğimiz, üretim anlayışımız ve hikayemiz.",
    href: "/hakkimizda",
  },
  {
    icon: "📋",
    title: "Menü",
    desc: "Tüm pide, lahmacun, kiremit, tatlı ve içecek çeşitleri.",
    href: "/menu",
  },
  {
    icon: "❓",
    title: "SSS",
    desc: "Sık sorulan sorular, servis ve çalışma saatleri bilgileri.",
    href: "/sss",
  },
  {
    icon: "📍",
    title: "İletişim",
    desc: "Telefon, konum, çalışma saatleri ve hızlı ulaşım bağlantıları.",
    href: "/iletisim",
  },
];

const homeHighlights = [
  { label: "Yıllık deneyim", value: "25+" },
  { label: "Çeşit pide", value: "40+" },
  { label: "Müşteri puanı", value: "4.9" },
];

const aboutPoints = [
  "Günlük hazırlanan hamur ve iç harç",
  "Taş fırında kontrollü pişirme",
  "Düzce merkezde hızlı servis ve sıcak teslim",
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-hidden bg-koyu">
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-10">
          <div className="animate-fade-in-up">
            <span className="mb-6 inline-block rounded-sm bg-primary px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white">
              Fırından Sofraya
            </span>
            <h1 className="font-[family-name:var(--font-serif)] text-[clamp(3rem,6vw,5.2rem)] leading-[1.02] text-krem">
              Emre
              <br />
              <em className="italic text-gold">Pide Salonu</em>
            </h1>
            <p className="mt-6 max-w-[560px] text-base font-light leading-8 text-krem/65">
              Ustanın elinden, taş fırından çıkan geleneksel Türk pideleri. Taze malzeme, güçlü iç harç ve yıllardır değişmeyen üretim disiplini.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-block rounded-sm bg-primary px-8 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Menüyü Gör
              </Link>
              <Link
                href="/iletisim"
                className="inline-block rounded-sm border border-gold/50 bg-transparent px-8 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-gold no-underline transition-all hover:border-gold hover:bg-gold/[0.08]"
              >
                Bize Ulaşın
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {homeHighlights.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gold/15 bg-krem/5 p-4 backdrop-blur-sm">
                  <span className="block font-[family-name:var(--font-serif)] text-[1.9rem] text-gold">
                    {stat.value}
                  </span>
                  <span className="text-[0.68rem] uppercase tracking-[0.14em] text-krem/55">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 animate-fade-in-up-delay-1 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-gold/15 bg-krem/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:col-span-2">
              <Image
                src="/images/menu/trabzon pide.png"
                alt="Trabzon pide"
                fill
                className="object-cover scale-[1.05]"
                sizes="(max-width: 640px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-koyu via-koyu/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="inline-block rounded-full border border-gold/30 bg-koyu/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  Düzce Merkez
                </span>
                <h2 className="mt-4 max-w-sm font-[family-name:var(--font-serif)] text-[2rem] leading-tight text-krem">
                  Taş fırında pişen gerçek Karadeniz usulü pide
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-krem/65">
                  Trabzon pidesinden kavurmalıya, her ürün aynı sıcak servis standardıyla hazırlanır.
                </p>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="rounded-[28px] border border-gold/15 bg-krem/6 p-6 no-underline transition-all hover:-translate-y-1 hover:border-gold/35"
            >
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Hakkımızda
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-serif)] text-[1.55rem] leading-tight text-krem">
                Üretim disiplinimizi ve hikayemizi inceleyin
              </h3>
            </Link>

            <div className="rounded-[28px] border border-gold/15 bg-white p-6 text-foreground shadow-sm">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Hızlı Bilgi
              </span>
              <div className="mt-4 space-y-3 text-sm leading-7 text-text-muted">
                <p>Her gün 10:00 - 22:00 arası hizmet.</p>
                <p>Azmimilli, Serhat Sk. 81020 Düzce</p>
                <a href="tel:+903805245701" className="block font-semibold text-primary no-underline">
                  0380 524 57 01
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="bg-background px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">
              Bölümler
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-tight">
              Site içinde
              <br />
              <em className="italic text-primary">rahat gezin</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-border bg-white p-6 shadow-sm transition-all no-underline hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-serif)] text-[1.35rem] text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-text-muted">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--acik-kahve)] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative min-h-[440px] overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(52,30,18,0.18)]">
            <Image
              src="/images/menu/kavurmalı pide.png"
              alt="Kavurmalı pide"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-koyu/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-krem md:p-8">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-gold">
                1999&apos;dan beri
              </span>
              <p className="mt-4 max-w-xs text-sm leading-7 text-krem/75">
                Aynı lezzet çizgisini, günlük hazırlık ve sıcak servis ile sürdürüyoruz.
              </p>
            </div>
          </div>

          <div>
            <span className="mb-4 block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">
              Hakkımızda
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-tight">
              Gelenekten gelen
              <br />
              <em className="italic text-primary">istikrarlı lezzet</em>
            </h2>
            <p className="mt-6 text-[0.96rem] leading-8 text-text-muted">
              Emre Pide Salonu taş fırın üretimini günlük hazırlık disipliniyle sürdürüyor. Hamur, iç harç ve servis ritmi her gün aynı standartta ilerliyor.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <p className="text-sm leading-7 text-text-muted">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/hakkimizda"
              className="mt-8 inline-block rounded-sm bg-primary px-8 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Hakkımızda Sayfası
            </Link>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-koyu px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
              Lezzetlerimiz
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] text-krem">
              Öne çıkan <em className="italic text-primary">ürünler</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredMenu.map((item) => (
              <div key={item.name} className="group relative overflow-hidden rounded-[28px] border border-gold/15 bg-krem/5 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/30">
                {item.badge && (
                  <span className="absolute right-4 top-4 z-10 rounded-sm bg-primary px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white">
                    {item.badge}
                  </span>
                )}

                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="mb-2 font-[family-name:var(--font-serif)] text-[1.2rem] text-krem">
                  {item.name}
                </h3>
                <p className="mb-4 text-[0.85rem] leading-7 text-krem/55">{item.desc}</p>
                <div className="font-[family-name:var(--font-serif)] text-xl text-gold">
                  ₺{item.price}{" "}
                  <span className="font-sans text-[0.75rem] tracking-wider text-krem/40">/ porsiyon</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-sm bg-primary px-10 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Tüm Menüyü Gör
            </Link>
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="bg-koyu px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] border border-gold/15 bg-koyu/60 p-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:p-10">
          <div>
            <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
              Bize Ulaşın
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] text-krem">
              Sizi de <em className="italic text-primary">bekliyoruz</em>
            </h2>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-8 text-krem/55">
              Rezervasyon, sipariş veya bilgi almak için doğrudan bize ulaşabilirsiniz. Ayrı iletişim sayfasında harita, çalışma saatleri ve tüm bağlantılar hazır.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="inline-block rounded-sm bg-primary px-8 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-all hover:bg-primary-dark"
              >
                Detaylı İletişim
              </Link>
              <Link
                href="/sss"
                className="inline-block rounded-sm border border-gold/50 px-8 py-3.5 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-gold no-underline transition-all hover:border-gold hover:bg-gold/[0.08]"
              >
                SSS Sayfası
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="tel:+903805245701"
              className="rounded-[24px] border border-gold/15 bg-krem/5 p-6 no-underline transition-all hover:-translate-y-1 hover:border-gold/35"
            >
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Telefon
              </span>
              <p className="mt-3 font-[family-name:var(--font-serif)] text-[1.5rem] text-krem">
                0380 524 57 01
              </p>
              <p className="mt-2 text-sm leading-7 text-krem/55">Hızlı sipariş ve bilgi için doğrudan arayabilirsiniz.</p>
            </a>

            <a
              href="https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+Duzce"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[24px] border border-gold/15 bg-white p-6 no-underline transition-all hover:-translate-y-1 hover:border-primary/35"
            >
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Konum
              </span>
              <p className="mt-3 font-[family-name:var(--font-serif)] text-[1.5rem] text-foreground">
                Azmimilli, Serhat Sk.
              </p>
              <p className="mt-2 text-sm leading-7 text-text-muted">Haritada açıp tek tıkla yol tarifi alabilirsiniz.</p>
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Emre Pide Salonu",
            image: "https://emrepide.com.tr/images/logo.svg",
            url: "https://emrepide.com.tr",
            telephone: "+903805245701",
            email: "info@emrepide.com.tr",
            servesCuisine: "Turkish",
            priceRange: "₺₺",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Azmimilli, Serhat Sk.",
              addressLocality: "Düzce",
              postalCode: "81020",
              addressCountry: "TR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.84,
              longitude: 30.84,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "22:00",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
            foundingDate: "1999",
          }),
        }}
      />
    </div>
  );
}
