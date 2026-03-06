"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const faqItems = [
    {
        q: "Pideleriniz nasıl hazırlanıyor?",
        a: "Pidelerimiz günlük hazırlanan hamurla taş fırında pişirilir. İç harçlar sabah hazırlanır, hamur sipariş ritmine göre açılır ve servis öncesi sıcak şekilde çıkarılır.",
    },
    {
        q: "Menünüzde hangi pide çeşitleri var?",
        a: "Kıymalı, kuşbaşılı, kaşarlı, kavurmalı, Trabzon pidesi, dönerli seçenekler, lahmacun, kiremit çeşitleri, tatlılar ve içecekler dahil geniş bir menü sunuyoruz.",
    },
    {
        q: "Paket servisiniz var mı?",
        a: "Evet. Düzce merkez ve çevreye paket servis sağlıyoruz. Sipariş için 0380 524 57 01 numarasını arayabilir veya WhatsApp üzerinden bizimle iletişime geçebilirsiniz.",
    },
    {
        q: "Çalışma saatleriniz nedir?",
        a: "Her gün 11:00 - 00:00 saatleri arasında hizmet veriyoruz. Yoğun saatlerde hızlı servis için telefonla ön sipariş vermeniz daha sağlıklı olur. Ayrıca gece 00:00'a kadar hamurum biterse dükkanı kapatıyoruz.",
    },
    {
        q: "Toplu sipariş alıyor musunuz?",
        a: "Evet. Toplantı, özel gün, iş yemeği veya kalabalık aile siparişleri için toplu üretim yapıyoruz. Bir gün önceden haber vermeniz hazırlık açısından avantaj sağlar.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const pideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const pide = pideRef.current;
        if (!section || !pide) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const windowH = window.innerHeight;
            const sectionTop = rect.top;

            const start = windowH;
            const end = -rect.height;
            const progress = Math.min(1, Math.max(0, (start - sectionTop) / (start - end)));

            const rotation = progress * 360;
            pide.style.transform = `translateX(30%) rotate(${rotation}deg)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="sss"
            className="section-pad bg-[#241610] text-white overflow-hidden relative"
        >
            {/* FAQ Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqItems.map((item) => ({
                            "@type": "Question",
                            name: item.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.a,
                            },
                        })),
                    }),
                }}
            />

            <div className="site-shell relative">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 items-center">
                    {/* Sol: FAQ Akordeon */}
                    <div>
                        <span className="section-kicker text-[#f4d7a0]">Sıkça Sorulan Sorular</span>
                        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[#fff6e8] mb-10">
                            Düzce&apos;de taş fırın pide hakkında
                            <br />
                            <span className="text-[#f4d7a0]">sıkça sorulan sorular</span>
                        </h2>

                        <div className="space-y-3">
                            {faqItems.map((item, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div
                                        key={i}
                                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-colors hover:border-white/20"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                        >
                                            <span className="font-semibold text-[0.95rem] text-white/90">
                                                {item.q}
                                            </span>
                                            <span
                                                className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#f4d7a0]/15 flex items-center justify-center text-[#f4d7a0] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                                        >
                                            <p className="px-6 pb-5 text-[0.9rem] leading-7 text-white/60">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sağ: Dönen Trabzon Pide — büyütülmüş, FAQ boyutunda */}
                    <div className="hidden lg:flex items-center justify-end relative min-h-[700px]">
                        <div
                            ref={pideRef}
                            className="absolute right-0 w-[750px] h-[750px] transition-none"
                            style={{ transform: "translateX(30%) rotate(0deg)" }}
                        >
                            <Image
                                src="/images/menu/trabzon pide.png"
                                alt="Düzce taş fırında hazırlanan Trabzon pidesi - Emre Pide Salonu"
                                fill
                                className="object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
                                sizes="750px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
