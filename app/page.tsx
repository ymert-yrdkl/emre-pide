import Image from "next/image";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const highlights = [
  { label: "Yıllık deneyim", value: "25+" },
  { label: "Çeşit ürün", value: "40+" },
  { label: "Açık saat", value: "10-22" },
];

const values = [
  {
    title: "Taş Fırın Ritmi",
    text: "Hamur, iç harç ve pişirme sırası aynı disiplinle ilerler. Lezzet şansa bırakılmaz.",
  },
  {
    title: "Günlük Hazırlık",
    text: "Ürünler gün içinde hazırlanır, sıcak servis önceliği korunur ve menü sade tutulur.",
  },
  {
    title: "Mahalle Güveni",
    text: "Düzce merkezde yıllardır bilinen sabit kaliteyi, hızlı servis ve net iletişimle sürdürüyoruz.",
  },
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
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
                Taş fırında hazırlanan ürünleri, net iletişim bilgilerini ve QR menü erişimini tek bir çatı altında toplayan sade bir ana sayfa kuruyoruz.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#lezzetler" className="site-btn-primary">
                  Öne Çıkanlar
                </a>
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
                    Menü, iletişim ve işletme güvenini tek ekran akışında toplayan yeni sitenin ana karakteri burada şekilleniyor.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="site-card px-6 py-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">Konum</p>
                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-[1.45rem]">Azmimilli</p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">Serhat Sk. 81020 Düzce</p>
                </div>
                <div className="site-card px-6 py-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">Telefon</p>
                  <p className="mt-3 font-[family-name:var(--font-playfair)] text-[1.45rem]">0380 524 57 01</p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">Hızlı sipariş ve bilgi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hikaye" className="section-pad">
          <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.9fr)] lg:items-start">
            <div className="max-w-2xl">
              <span className="section-kicker">Yaklaşım</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,3.5rem)] leading-tight">
                Normal, net ve güven veren
                <br />
                <span className="text-primary">bir ana sayfa</span>
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-text-muted">
                Bu başlangıç sürümünde ana odak; işletmeyi temiz bir dille tanıtmak, hızlı ulaşım sunmak ve kullanıcıyı karmaşık hissettirmeden QR menüye taşımak.
              </p>
            </div>

            <div className="grid gap-4">
              {values.map((item) => (
                <article key={item.title} className="site-card px-7 py-7 md:px-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-[1.6rem]">{item.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-8 text-text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lezzetler" className="section-pad bg-[#241610] text-white">
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
          </div>
        </section>

        <section id="iletisim" className="section-pad">
          <div className="site-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="site-card px-8 py-8 md:px-10 md:py-10">
              <span className="section-kicker">İletişim</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2.1rem,4vw,3.3rem)] leading-tight">
                Sipariş, konum ve QR menü
                <br />
                <span className="text-primary">aynı akışta</span>
              </h2>
              <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-text-muted">
                Kullanıcı tek ekranda işletmeyi görsün, telefonu arasın veya doğrudan QR menüye geçsin. İlk sürüm için doğru omurga bu.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:+903805245701" className="site-btn-primary">
                  Hemen Ara
                </a>
                <a href="https://menu.emrepide.com.tr" className="site-btn-secondary">
                  QR Menü Aç
                </a>
              </div>
            </div>

            <aside className="grid gap-4">
              <div className="site-card px-7 py-6">
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">Adres</p>
                <p className="mt-3 font-[family-name:var(--font-playfair)] text-[1.5rem]">Azmimilli, Serhat Sk.</p>
                <p className="mt-2 text-sm leading-7 text-text-muted">81020 Düzce</p>
              </div>
              <div className="site-card px-7 py-6">
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">Saatler</p>
                <p className="mt-3 font-[family-name:var(--font-playfair)] text-[1.5rem]">Her gün açık</p>
                <p className="mt-2 text-sm leading-7 text-text-muted">10:00 - 22:00</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
