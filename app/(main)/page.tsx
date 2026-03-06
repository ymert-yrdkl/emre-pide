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
  {
    name: "Kuşbaşılı Kaşarlı",
    desc: "Taze kuşbaşı et ve eriyen kaşarın dengeli buluşması.",
    price: 190,
    image: "/images/menu/kuşbaşı kaşarlı.png",
    badge: null,
  },
  {
    name: "Et Dönerli Pide",
    desc: "Döner dilimleri, özel sos ve taş fırın hamuruyla hazırlanır.",
    price: 250,
    image: "/images/menu/et dönerli.png",
    badge: "Yeni Nesil Klasik",
  },
  {
    name: "Kaşarlı Sucuklu",
    desc: "Bol kaşar ve dilimlenmiş sucuk ile güçlü ve doyurucu tercih.",
    price: 200,
    image: "/images/menu/kaşarlı sucuklu.png",
    badge: null,
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

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-koyu">
        <div className="absolute inset-0 hero-gradient" />

        <svg
          className="absolute right-[2%] top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.06] xl:block"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="100" cy="100" rx="95" ry="55" stroke="white" strokeWidth="2" />
          <ellipse cx="100" cy="100" rx="75" ry="40" stroke="white" strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="55" ry="28" stroke="white" strokeWidth="1" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="white" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="8" stroke="white" strokeWidth="1.5" />
        </svg>

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 relative z-10 pt-32 pb-24">
          <div className="max-w-xl animate-fade-in-up">
            <span className="inline-block bg-primary text-white text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-sm mb-6">
              Fırından Sofraya
            </span>
            <h1 className="font-[family-name:var(--font-serif)] text-[clamp(3rem,6vw,5rem)] text-krem leading-[1.05] mb-1">
              Emre
              <br />
              <em className="italic text-gold">Pide Salonu</em>
            </h1>
            <p className="text-base text-krem/60 mt-6 mb-10 leading-relaxed font-light max-w-[480px]">
              Ustanın elinden, taş fırından çıkan geleneksel Türk pideleri. Taze malzeme, güçlü iç harç ve yıllardır değişmeyen lezzet dengesi.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/menu"
                className="bg-primary text-white px-8 py-3.5 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:bg-primary-dark hover:-translate-y-0.5 transition-all inline-block"
              >
                Menüyü Gör
              </Link>
              <Link
                href="/iletisim"
                className="bg-transparent text-gold px-8 py-3.5 border border-gold/50 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:border-gold hover:bg-gold/[0.08] transition-all inline-block"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          <div className="hidden md:flex gap-16 mt-20 animate-fade-in-up-delay-1">
            {[
              { num: "25+", label: "Yıllık Deneyim" },
              { num: "40+", label: "Çeşit Pide" },
              { num: "4.9", label: "Müşteri Puanı" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-[family-name:var(--font-serif)] text-[2.2rem] text-gold">
                  {stat.num}
                </span>
                <span className="text-[0.7rem] tracking-[0.15em] uppercase text-krem/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex md:hidden justify-around mt-16 animate-fade-in-up-delay-1">
            {[
              { num: "25+", label: "Yıl" },
              { num: "40+", label: "Çeşit" },
              { num: "4.9", label: "Puan" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-[family-name:var(--font-serif)] text-xl text-gold">
                  {stat.num}
                </span>
                <span className="text-[0.6rem] tracking-[0.1em] uppercase text-krem/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="py-24 px-6 lg:px-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary inline-block mb-3">
              Bölümler
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-tight">
              Site içinde
              <br />
              <em className="italic text-primary">rahat gezin</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all no-underline"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-[1.35rem] text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-7">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="bg-koyu py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
              Lezzetlerimiz
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] text-krem">
              Özel <em className="italic text-primary">Menümüz</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMenu.map((item) => (
              <div key={item.name} className="glass rounded-lg p-5 menu-card-hover relative overflow-hidden group">
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-[0.62rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm z-10">
                    {item.badge}
                  </span>
                )}

                <div className="w-full aspect-[4/3] relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <h3 className="font-[family-name:var(--font-serif)] text-[1.15rem] text-krem mb-2">
                  {item.name}
                </h3>
                <p className="text-[0.82rem] text-krem/50 leading-relaxed mb-4">{item.desc}</p>
                <div className="font-[family-name:var(--font-serif)] text-xl text-gold">
                  ₺{item.price}{" "}
                  <span className="font-sans text-[0.75rem] text-krem/40 tracking-wider">/ porsiyon</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/menu"
              className="bg-primary text-white px-10 py-4 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:bg-primary-dark hover:-translate-y-0.5 transition-all inline-block"
            >
              Tüm Menüyü Gör
            </Link>
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="bg-koyu py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
            Bize Ulaşın
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] text-krem mb-4">
            Sizi de <em className="italic text-primary">bekliyoruz</em>
          </h2>
          <p className="text-krem/50 text-[0.95rem] mb-12">
            Rezervasyon, sipariş veya bilgi almak için doğrudan bize ulaşabilirsiniz.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/iletisim"
              className="bg-primary text-white px-8 py-3.5 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:bg-primary-dark transition-all inline-block"
            >
              Detaylı İletişim
            </Link>
            <a
              href="tel:+903805245701"
              className="bg-transparent text-gold px-8 py-3.5 border border-gold/50 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:border-gold hover:bg-gold/[0.08] transition-all inline-block"
            >
              Hemen Ara
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
