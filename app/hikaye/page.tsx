import type { Metadata } from "next";
import Image from "next/image";

import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Hikaye",
  description:
    "Emre Pide Salonu'nun hikayesi — Düzce'de 25 yılı aşkın taş fırın geleneği, günlük hazırlık disiplini ve mahalle güveni.",
};

const values = [
  {
    title: "Taş Fırın Ritmi",
    text: "Hamur, iç harç ve pişirme sırası aynı disiplinle ilerler. Lezzet şansa bırakılmaz. Her gün aynı özenle, aynı kalitede hazırlanır.",
    icon: "🔥",
  },
  {
    title: "Günlük Hazırlık",
    text: "Ürünler gün içinde hazırlanır, sıcak servis önceliği korunur ve menü sade tutulur. Dünden kalma malzeme kullanılmaz.",
    icon: "🌅",
  },
  {
    title: "Mahalle Güveni",
    text: "Düzce merkezde yıllardır bilinen sabit kaliteyi, hızlı servis ve net iletişimle sürdürüyoruz. Müşterilerimiz ailemizdir.",
    icon: "🤝",
  },
  {
    title: "Trabzon Usulü",
    text: "Karadeniz'in pide geleneğini Düzce'ye taşıyoruz. Tereyağlı hamur, özel iç harç ve taş fırın birleşimi ile fark yaratıyoruz.",
    icon: "⛰️",
  },
];

export default function HikayePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1c120c] py-20 text-white md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,171,95,0.2),transparent_35%)]" />
          <div className="site-shell relative max-w-3xl">
            <span className="section-kicker text-[#f4d7a0]">Hikayemiz</span>
            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.05] text-[#fff6e8]">
              25 yılı aşkın
              <br />
              <span className="text-[#f4d7a0]">taş fırın geleneği</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-white/70">
              Emre Pide Salonu, Düzce Azmimilli&apos;de taş fırında hazırlanan pideler, lahmacunlar ve kiremit yemekleriyle yıllardır aynı lezzeti sunuyor. Amacımız basit: sıcak, taze ve dürüst yemek.
            </p>
          </div>
        </section>

        {/* Değerler Grid */}
        <section className="section-pad">
          <div className="site-shell">
            <div className="max-w-2xl mb-12">
              <span className="section-kicker">Yaklaşım</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.2rem)] leading-tight">
                Normal, net ve güven veren
                <br />
                <span className="text-primary">bir felsefe</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {values.map((item) => (
                <article key={item.title} className="site-card px-7 py-7 md:px-8 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[1.5rem]">{item.title}</h3>
                  </div>
                  <p className="text-[0.98rem] leading-8 text-text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trabzon Pide Vurgusu */}
        <section className="section-pad bg-[#241610] text-white">
          <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-center">
            <div>
              <span className="section-kicker text-[#f4d7a0]">Gurur kaynağımız</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[#fff6e8]">
                Trabzon Pide
                <br />
                <span className="text-[#f4d7a0]">ustalığın simgesi</span>
              </h2>
              <p className="mt-6 max-w-xl text-[1rem] leading-8 text-white/65">
                Karadeniz çizgisini taşıyan, tereyağı dokunuşlu güçlü klasiğimiz. Taş fırında özenle pişirilen hamurun içine yerleştirilen kuşbaşı et, yumurta ve tereyağı birleşimi.
              </p>
              <a href="/lezzetler" className="site-btn-primary mt-8 inline-flex">
                Tüm Lezzetler
              </a>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#2c1b14]">
              <Image
                src="/images/menu/trabzon pide.png"
                alt="Trabzon Pide"
                fill
                className="object-contain scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
