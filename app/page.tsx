import Link from "next/link";
import Image from "next/image";
import Marquee from "./components/Marquee";
import FAQ from "./components/FAQ";

const featuredMenu = [
  {
    name: "Kıymalı Pide",
    desc: "Özel baharatlı kıyma, biber ve domates ile taş fırın pidesi.",
    price: 150,
    image: "/images/menu/kıymalı.png",
    badge: "En Çok Satan",
  },
  {
    name: "Kuşbaşılı Kaşarlı",
    desc: "Taze kuşbaşı et ve bol kaşar peynir ile hazırlanır.",
    price: 190,
    image: "/images/menu/kuşbaşı kaşarlı.png",
    badge: null,
  },
  {
    name: "Kavurmalı Pide",
    desc: "Geleneksel kavurma ile hazırlanan özel pide lezzeti.",
    price: 250,
    image: "/images/menu/kavurmalı pide.png",
    badge: "Favoriler",
  },
  {
    name: "Trabzon Pide",
    desc: "Karadeniz usulü kapalı pide, tereyağı ile servis edilir.",
    price: 220,
    image: "/images/menu/trabzon pide.png",
    badge: null,
  },
  {
    name: "Et Dönerli Pide",
    desc: "Döner kebap dilimli, özel soslu lezzetli pide.",
    price: 250,
    image: "/images/menu/et dönerli.png",
    badge: "Yeni",
  },
  {
    name: "Kaşarlı Sucuklu",
    desc: "Bol kaşar ve dilimlenmiş sucuk ile taş fırında pişirilir.",
    price: 200,
    image: "/images/menu/kaşarlı sucuklu.png",
    badge: null,
  },
];

export default function Home() {
  return (
    <div>
      {/* ══════ HERO ══════ */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-koyu">
        {/* Background gradients */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Decorative SVG pattern */}
        <svg
          className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] opacity-[0.06]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <ellipse cx="100" cy="100" rx="95" ry="55" stroke="white" strokeWidth="2" />
          <ellipse cx="100" cy="100" rx="75" ry="40" stroke="white" strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="55" ry="28" stroke="white" strokeWidth="1" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="white" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="8" stroke="white" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 px-[5%] max-w-[650px] animate-fade-in-up pt-24">
          <span className="inline-block bg-primary text-white text-[0.7rem] font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-sm mb-6">
            🔥 Fırından Sofraya
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(3rem,7vw,5.5rem)] text-krem leading-[1.05] mb-1">
            Emre<br />
            <em className="italic text-gold">Pide Salonu</em>
          </h1>
          <p className="text-base text-krem/60 mt-6 mb-10 leading-relaxed font-light max-w-[480px]">
            Ustanın elinden, taş fırından çıkan geleneksel Türk pideleri. Her
            lokmada Anadolu&apos;nun sıcaklığını hissedeceksiniz.
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

        {/* Hero Stats */}
        <div className="absolute bottom-12 right-[5%] z-10 hidden md:flex gap-12 animate-fade-in-up-delay-1">
          {[
            { num: "25+", label: "Yıllık Deneyim" },
            { num: "40+", label: "Çeşit Pide" },
            { num: "⭐ 4.9", label: "Müşteri Puanı" },
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

        {/* Mobile Stats */}
        <div className="absolute bottom-8 left-[5%] right-[5%] z-10 flex md:hidden justify-around animate-fade-in-up-delay-1">
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
      </section>

      {/* ══════ MARQUEE ══════ */}
      <Marquee />

      {/* ══════ HAKKIMIZDA ══════ */}
      <section id="hakkimizda" className="py-20 px-[5%] bg-background scroll-mt-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual Card */}
          <div className="relative">
            <div className="bg-koyu rounded-md p-10 text-krem relative overflow-hidden">
              <span className="inline-block bg-primary text-white text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-sm mb-5">
                Taş Fırın
              </span>
              <h3 className="font-[family-name:var(--font-serif)] text-[1.6rem] text-gold mb-4 italic">
                &quot;Pide bir sanattır,<br />
                her dilim bir hikâye.&quot;
              </h3>
              <p className="text-sm leading-relaxed text-krem/70">
                1999 yılından bu yana aynı tarif, aynı özen, aynı lezzet. Emre
                Usta&apos;nın sırrı: doğal malzeme, sabır ve sevgi.
              </p>
              <span className="absolute text-[8rem] right-[-1rem] bottom-[-1rem] opacity-10">
                🫓
              </span>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-4 md:-right-4 bg-primary text-white px-6 py-4 rounded-md text-center shadow-xl">
              <strong className="block font-[family-name:var(--font-serif)] text-2xl">
                1999
              </strong>
              <span className="text-[0.7rem] tracking-[0.1em] uppercase opacity-85">
                Kuruluş Yılı
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary block mb-4">
              Biz Kimiz
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,2.8rem)] leading-tight mb-6">
              Gelenekten gelen<br />
              <em className="italic text-primary">özgün lezzet</em>
            </h2>
            <p className="text-[0.95rem] leading-relaxed text-text-muted mb-4">
              Karadeniz usulü hamur işlerinin yanı sıra Orta Anadolu&apos;nun
              zengin iç malzemeleriyle hazırladığımız pideler, her yaştan
              misafirimizin gözdesi.
            </p>
            <p className="text-[0.95rem] leading-relaxed text-text-muted">
              Taze malzemeler her sabah hazırlanır, taş fırınımız gün boyu
              yanmaya devam eder. Kalabalık ailelerden, iş çıkışı uğrayan
              misafirlere kadar herkese kapımız açık.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DIVIDER ══════ */}
      <div className="section-divider">
        <span className="relative bg-background px-6 text-gold text-xl">✦</span>
      </div>

      {/* ══════ MENU PREVIEW ══════ */}
      <section className="bg-koyu py-20 px-[5%]">
        <div className="text-center mb-12">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
            Lezzetlerimiz
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3rem)] text-krem">
            Özel <em className="italic text-primary">Menümüz</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {featuredMenu.map((item, i) => (
            <div
              key={i}
              className="glass rounded-md p-6 menu-card-hover relative overflow-hidden group"
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-primary text-white text-[0.62rem] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm z-10">
                  {item.badge}
                </span>
              )}

              {/* Food Image */}
              <div className="w-full h-36 relative mb-4 rounded-md overflow-hidden">
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
              <p className="text-[0.82rem] text-krem/50 leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="font-[family-name:var(--font-serif)] text-xl text-gold">
                {item.price} ₺{" "}
                <span className="font-sans text-[0.75rem] text-krem/40 tracking-wider">
                  / kişilik
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="bg-primary text-white px-10 py-4 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:bg-primary-dark hover:-translate-y-0.5 transition-all inline-block"
          >
            Tüm Menüyü Gör →
          </Link>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <FAQ />

      {/* ══════ CONTACT SUMMARY ══════ */}
      <section className="bg-koyu py-20 px-[5%]">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
            Bize Ulaşın
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,2.8rem)] text-krem mb-4">
            Sizi de{" "}
            <em className="italic text-primary">bekliyoruz</em>
          </h2>
          <p className="text-krem/50 text-[0.95rem] mb-10">
            Rezervasyon yapmak veya bilgi almak için bize ulaşabilirsiniz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: "📍",
                title: "Adres",
                desc: "Azmimilli, Serhat Sk.\n81020 Düzce",
              },
              {
                icon: "📞",
                title: "Telefon",
                desc: "0380 524 57 01\nHer gün 10:00 – 22:00",
              },
              {
                icon: "✉️",
                title: "E-posta",
                desc: "info@emrepide.com.tr",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="contact-card-premium text-center"
              >
                <span className="text-3xl block mb-4">{card.icon}</span>
                <h4 className="font-[family-name:var(--font-serif)] text-gold text-base mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-krem/60 whitespace-pre-line">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/iletisim"
              className="bg-primary text-white px-8 py-3.5 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:bg-primary-dark transition-all inline-block"
            >
              📍 Detaylı İletişim
            </Link>
            <a
              href="tel:+903805245701"
              className="bg-transparent text-gold px-8 py-3.5 border border-gold/50 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:border-gold hover:bg-gold/[0.08] transition-all inline-block"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ══════ JSON-LD ══════ */}
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
