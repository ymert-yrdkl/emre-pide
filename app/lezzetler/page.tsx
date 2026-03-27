import type { Metadata } from "next";
import Image from "next/image";

import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
    title: "Lezzetler",
    description:
        "Emre Pide Salonu'nun öne çıkan lezzetleri — taş fırında pideler, kiremit yemekleri ve daha fazlası.",
};

const featuredItems = [
    {
        name: "Trabzon Pide",
        price: "300 TL",
        text: "Karadeniz çizgisini taşıyan, tereyağı dokunuşlu güçlü klasik. Kuşbaşı et, yumurta ve tereyağı birleşimi.",
        image: "/images/menu/trabzon pide.png",
        badge: "Favoriler",
    },
    {
        name: "Kavurmalı Pide",
        price: "350 TL",
        text: "Doyurucu kavurma iç harcı, taş fırın hamuru ve sıcak servis dengesi. En çok tercih edilen pidelerimizden.",
        image: "/images/menu/kavurmalı pide.png",
        badge: "Popüler",
    },
    {
        name: "Kıymalı Pide",
        price: "200 TL",
        text: "Emre Pide'nin en bilinen ürünlerinden biri; net, tanıdık ve güçlü tat. Her yaştan misafirin favorisi.",
        image: "/images/menu/kıymalı.png",
        badge: "Klasik",
    },
    {
        name: "Kuşbaşılı Kaşarlı Pide",
        price: "240 TL",
        text: "Yumuşak kuşbaşı etin kaşarla buluşması. Lezzet ve doygunluğun dengesi.",
        image: "/images/menu/kuşbaşı kaşarlı.png",
        badge: "Önerilen",
    },
    {
        name: "Tam Karışık Pide",
        price: "300 TL",
        text: "Tüm lezzetler bir arada. Zengin iç harç ile hazırlanan doyurucu özel pidemiz.",
        image: "/images/menu/tam karışık pide.png",
        badge: "Özel",
    },
    {
        name: "Kiremitte Köfte",
        price: "350 TL",
        text: "Kiremit üzerinde servis edilen el yapımı köfteler. Yanında taze sebzeler ve eritilmiş kaşar.",
        image: "/images/menu/kiremit köfte.png",
        badge: "Kiremit",
    },
];

export default function LezzetlerPage() {
    return (
        <div className="min-h-screen">
            <SiteHeader />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#1c120c] py-20 text-white md:py-28">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(183,58,45,0.22),transparent_35%)]" />
                    <div className="site-shell relative max-w-3xl">
                        <span className="section-kicker text-[#f4d7a0]">Lezzetler</span>
                        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.05] text-[#fff6e8]">
                            İlk bakışta ne sunduğumuzu
                            <br />
                            <span className="text-[#f4d7a0]">doğrudan göster</span>
                        </h1>
                        <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-white/70">
                            Taş fırında hazırlanan öne çıkan pidelerimiz, kiremit yemeklerimiz ve daha fazlası. Tüm menümüze QR menüden ulaşabilirsiniz.
                        </p>
                        <a href="https://menu.emrepide.com.tr" className="site-btn-primary mt-8 inline-flex">
                            Tam Menüyü Gör
                        </a>
                    </div>
                </section>

                {/* Ürün Kartları */}
                <section className="section-pad">
                    <div className="site-shell">
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {featuredItems.map((item) => (
                                <article key={item.name} className="group site-card overflow-hidden transition-transform hover:-translate-y-1">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#2e1c15]">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 1280px) 50vw, 33vw"
                                        />
                                        <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white">
                                            {item.badge}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="font-[family-name:var(--font-playfair)] text-[1.4rem]">{item.name}</h3>
                                            <span className="rounded-full bg-primary/8 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary whitespace-nowrap">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="mt-3 text-[0.92rem] leading-7 text-text-muted">{item.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-14 text-center">
                            <div className="site-card inline-block px-10 py-8">
                                <p className="font-[family-name:var(--font-playfair)] text-[1.6rem]">Tüm menümüzü keşfedin</p>
                                <p className="mt-2 text-sm text-text-muted">40+ çeşit pide, lahmacun, kiremit ve tatlı</p>
                                <a href="https://menu.emrepide.com.tr" className="site-btn-primary mt-6 inline-flex">
                                    QR Menüyü Aç
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
