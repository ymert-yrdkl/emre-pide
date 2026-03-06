import Image from "next/image";
import Link from "next/link";

import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FAQ from "./components/FAQ";

const highlights = [
  { label: "Yıllık deneyim", value: "25+" },
  { label: "Çeşit ürün", value: "40+" },
  { label: "Açık saat", value: "11-00" },
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
    text: "Emre Pide'nin en bilinen ürünlerinden biri; net, tanıdık ve güçlü tat.",
    image: "/images/menu/kıymalı.png",
  },
];

const blogPreview = [
  {
    title: "Taş Fırında Pide Nasıl Yapılır?",
    excerpt: "Taş fırında pide yapımının sırrı hamurun kıvamında ve fırının sıcaklığında gizlidir.",
    date: "5 Mart 2026",
    readTime: "5 dk",
  },
  {
    title: "Trabzon Pidesi Nedir?",
    excerpt: "Karadeniz mutfağının en güçlü temsilcisi olan Trabzon pidesi hakkında her şey.",
    date: "1 Mart 2026",
    readTime: "4 dk",
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
                Düzce Azmimilli&apos;de 25 yılı aşkın taş fırın geleneğiyle hazırlanan pideler, lahmacunlar ve kiremit yemekleri. Sıcak, taze ve dürüst lezzet.
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

        {/* Hakkımızda Bölümü */}
        <section className="section-pad">
          <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <span className="section-kicker">Hakkımızda</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,3.5rem)] leading-tight">
                25 yılı aşkın
                <br />
                <span className="text-primary">taş fırın geleneği</span>
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-text-muted">
                Emre Pide Salonu, Düzce Azmimilli&apos;de taş fırında hazırlanan pideler, lahmacunlar ve kiremit yemekleriyle yıllardır aynı lezzeti sunuyor. Günlük hazırlanan hamur, sabah hazırlanan iç harçlar ve taş fırının eşsiz pişirme yöntemi ile her pidemiz özenle hazırlanır.
              </p>
              <Link href="/hikaye" className="site-btn-primary mt-8 inline-flex">
                Hikayemizi Oku
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="site-card px-6 py-6 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-[2.2rem] text-primary">25+</p>
                <p className="mt-1 text-sm text-text-muted">Yıllık deneyim</p>
              </div>
              <div className="site-card px-6 py-6 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-[2.2rem] text-primary">40+</p>
                <p className="mt-1 text-sm text-text-muted">Çeşit ürün</p>
              </div>
              <div className="site-card px-6 py-6 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-[2.2rem] text-primary">🔥</p>
                <p className="mt-1 text-sm text-text-muted">Taş fırın</p>
              </div>
              <div className="site-card px-6 py-6 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-[2.2rem] text-primary">📍</p>
                <p className="mt-1 text-sm text-text-muted">Düzce merkez</p>
              </div>
            </div>
          </div>
        </section>

        {/* Öne Çıkanlar */}
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

        {/* Blog Önizleme */}
        <section className="section-pad">
          <div className="site-shell">
            <div className="max-w-2xl mb-12">
              <span className="section-kicker">Blog</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,3.5rem)] leading-tight">
                Taş fırın lezzetleri
                <br />
                <span className="text-primary">ve pide kültürü</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {blogPreview.map((post) => (
                <Link
                  key={post.title}
                  href="/blog"
                  className="group site-card px-7 py-7 no-underline transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[0.75rem] text-text-muted">{post.date}</span>
                    <span className="text-[0.75rem] text-text-muted">·</span>
                    <span className="text-[0.75rem] text-text-muted">{post.readTime} okuma</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-[1.35rem] leading-snug">{post.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-7 text-text-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Devamını Oku
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/blog" className="site-btn-secondary inline-flex">
                Tüm Yazıları Gör →
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
