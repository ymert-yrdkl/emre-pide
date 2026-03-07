import type { Metadata } from "next";

import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
    title: "İletişim",
    description:
        "Emre Pide Salonu iletişim bilgileri — adres, telefon, çalışma saatleri ve konum. Düzce Azmimilli.",
};

const contactCards = [
    {
        label: "Adres",
        title: "Azmimilli, Serhat Sk.",
        detail: "81020 Düzce Merkez",
        icon: "📍",
        action: {
            href: "https://maps.google.com/?q=Azmimilli+Serhat+Sk+Düzce",
            label: "Yol Tarifi Al",
        },
    },
    {
        label: "Telefon",
        title: "0380 524 57 01",
        detail: "Sipariş ve bilgi almak için",
        icon: "📞",
        action: {
            href: "tel:+903805245701",
            label: "Hemen Ara",
        },
    },
    {
        label: "Çalışma Saatleri",
        title: "Her gün açık",
        detail: "11:00 - 00:00",
        icon: "🕐",
        action: null,
    },
    {
        label: "WhatsApp",
        title: "WhatsApp Sipariş",
        detail: "Mesaj ile sipariş verin",
        icon: "💬",
        action: {
            href: "https://wa.me/903805245701",
            label: "WhatsApp'tan Yaz",
        },
    },
];

export default function IletisimPage() {
    return (
        <div className="min-h-screen">
            <SiteHeader />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#1c120c] py-20 text-white md:py-28">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,171,95,0.15),transparent_40%)]" />
                    <div className="site-shell relative max-w-3xl">
                        <span className="section-kicker text-[#f4d7a0]">İletişim</span>
                        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.05] text-[#fff6e8]">
                            Sipariş, konum ve
                            <br />
                            <span className="text-[#f4d7a0]">hızlı ulaşım</span>
                        </h1>
                        <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-white/70">
                            Düzce Azmimilli&apos;de bizi ziyaret edin veya telefonla sipariş verin. Sıcak pidenizi hazırlayalım.
                        </p>
                    </div>
                </section>

                {/* İletişim Kartları */}
                <section className="section-pad">
                    <div className="site-shell">
                        <div className="grid gap-5 md:grid-cols-2">
                            {contactCards.map((card) => (
                                <div key={card.label} className="site-card px-7 py-7 transition-transform hover:-translate-y-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                                            {card.icon}
                                        </div>
                                        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary font-bold">{card.label}</p>
                                    </div>
                                    <p className="font-[family-name:var(--font-playfair)] text-[1.5rem]">{card.title}</p>
                                    <p className="mt-2 text-sm leading-7 text-text-muted">{card.detail}</p>
                                    {card.action && (
                                        <a
                                            href={card.action.href}
                                            target={card.action.href.startsWith("http") ? "_blank" : undefined}
                                            rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="site-btn-primary mt-5 inline-flex min-h-[42px] px-5 py-2 text-[0.78rem]"
                                        >
                                            {card.action.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Google Maps */}
                <section className="section-pad bg-[#241610] text-white">
                    <div className="site-shell">
                        <div className="max-w-2xl mb-10">
                            <span className="section-kicker text-[#f4d7a0]">Konum</span>
                            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] leading-tight text-[#fff6e8]">
                                Bizi haritada <span className="text-[#f4d7a0]">bulun</span>
                            </h2>
                        </div>
                        <div className="overflow-hidden rounded-[28px] border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4268.906733844717!2d31.15340494859973!3d40.83734403667689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d7543379f4dab%3A0x9c038e368282536!2sEmre%20Pide%20Salonu!5e0!3m2!1str!2str!4v1772844129924!5m2!1str!2str"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Emre Pide Salonu Konum"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
