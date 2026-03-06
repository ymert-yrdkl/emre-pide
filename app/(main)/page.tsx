import Image from "next/image";
import Link from "next/link";

import FAQ from "./components/FAQ";
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

const galleryImages = [
  {
    src: "/images/menu/trabzon pide.png",
    alt: "Trabzon pide",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: "/images/menu/kavurmalı pide.png",
    alt: "Kavurmalı pide",
    className: "md:col-span-4",
  },
  {
    src: "/images/menu/kıymalı.png",
    alt: "Kıymalı pide",
    className: "md:col-span-3",
  },
  {
    src: "/images/menu/kuşbaşı kaşarlı.png",
    alt: "Kuşbaşılı kaşarlı pide",
    className: "md:col-span-3",
  },
  {
    src: "/images/menu/et dönerli.png",
    alt: "Et dönerli pide",
    className: "md:col-span-4",
  },
  {
    src: "/images/menu/tam karışık pide.png",
    alt: "Tam karışık pide",
    className: "md:col-span-5",
  },
];

const contactCards = [
  {
    icon: "📍",
    title: "Adres",
    desc: "Azmimilli, Serhat Sk.\n81020 Düzce",
  },
  {
    icon: "📞",
    title: "Telefon",
    desc: "0380 524 57 01\nHer gün 10:00 - 22:00",
  },
  {
    icon: "✉️",
    title: "E-posta",
    desc: "info@emrepide.com.tr",
  },
];

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-koyu">
        <div className="absolute inset-0 hero-gradient" />

        <svg
          className="absolute right-[-8rem] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 opacity-[0.06] lg:block"
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
              Ustanın elinden, taş fırından çıkan geleneksel Türk pideleri. Taze malzeme,
              güçlü iç harç ve yıllardır değişmeyen lezzet dengesi.
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

      <section id="hakkimizda" className="py-24 px-6 lg:px-10 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="bg-koyu rounded-lg p-10 text-krem relative overflow-hidden">
              <span className="inline-block bg-primary text-white text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-sm mb-5">
                Taş Fırın
              </span>
              <h3 className="font-[family-name:var(--font-serif)] text-[1.6rem] text-gold mb-4 italic leading-snug">
                &quot;Pide bir sanattır,
                <br />
                her dilim bir hikaye.&quot;
              </h3>
              <p className="text-sm leading-relaxed text-krem/70">
                1999 yılından bu yana aynı tarif, aynı özen ve aynı taş fırın ritmi ile çalışıyoruz.
                Bizim için lezzet, günlük disiplinin sonucudur.
              </p>
              <span className="absolute text-[8rem] right-[-1rem] bottom-[-1rem] opacity-10">🥙</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-4 rounded-lg text-center shadow-xl z-10">
              <strong className="block font-[family-name:var(--font-serif)] text-2xl">1999</strong>
              <span className="text-[0.7rem] tracking-[0.1em] uppercase opacity-85">Kuruluş Yılı</span>
            </div>
          </div>

          <div>
            <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary block mb-4">
              Biz Kimiz
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight mb-6">
              Gelenekten gelen
              <br />
              <em className="italic text-primary">özgün lezzet</em>
            </h2>
            <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-4">
              Karadeniz usulü hamur işlerinin inceliğini, Düzce&apos;de sevilen güçlü iç harçlarla
              birleştiriyoruz. Her ürün, taş fırında kontrollü ısı ile pişiyor.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-text-muted">
              Sabah hazırlanan taze malzemeler, gün boyu sıcak kalan taş fırın ve yıllardır değişmeyen
              iş disiplini sayesinde Emre Pide Salonu, mahalle klasiği olmayı sürdürüyor.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <span className="relative bg-background px-6 text-gold text-xl">✦</span>
      </div>

      <section id="menu" className="bg-koyu py-24 px-6 lg:px-10 scroll-mt-20">
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

      <section className="bg-[var(--acik-kahve)] py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary inline-block mb-3">
              Foto Galeri
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-tight">
              Taş fırından çıkan
              <br />
              <em className="italic text-primary">gerçek görüntüler</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[160px] md:auto-rows-[110px] gap-4">
            {galleryImages.map((item) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_rgba(42,23,10,0.12)] ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-4 text-white text-sm font-medium">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section id="iletisim" className="bg-koyu py-24 px-6 lg:px-10 scroll-mt-20">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card) => (
              <div key={card.title} className="contact-card-premium text-center">
                <span className="text-3xl block mb-4">{card.icon}</span>
                <h4 className="font-[family-name:var(--font-serif)] text-gold text-base mb-2">{card.title}</h4>
                <p className="text-sm text-krem/60 whitespace-pre-line">{card.desc}</p>
              </div>
            ))}
          </div>

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

