"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const faqItems = [
    {
        q: "Sipariş nasıl verebilirim?",
        a: "Telefonla 0380 524 57 01 numarasından veya WhatsApp üzerinden sipariş verebilirsiniz. Dükkanımıza gelerek yerinde de yiyebilirsiniz.",
    },
    {
        q: "Paket servis var mı?",
        a: "Evet, Düzce merkez içinde paket servisimiz mevcuttur. Sipariş vermek için bizi arayın.",
    },
    {
        q: "Çalışma saatleriniz nedir?",
        a: "Her gün 10:00 - 22:00 saatleri arasında hizmet vermekteyiz.",
    },
    {
        q: "Menüdeki fiyatlar güncel mi?",
        a: "Evet, QR menümüzdeki fiyatlar sürekli güncellenmektedir. Güncel fiyatlar için menu.emrepide.com.tr adresini ziyaret edebilirsiniz.",
    },
    {
        q: "Özel günler için toplu sipariş alıyor musunuz?",
        a: "Evet, düğün, nişan, toplantı gibi özel günleriniz için toplu sipariş kabul ediyoruz. Detaylı bilgi için bizi arayın.",
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

            // Bölüm viewport'ta ne kadar görünür?
            const sectionTop = rect.top;

            // Bölüm viewport'a girdiğinde progress 0 → 1
            const start = windowH; // bölümün üstü ekranın altından göründüğünde
            const end = -rect.height; // bölümün altı ekranın üstünden çıktığında
            const progress = Math.min(1, Math.max(0, (start - sectionTop) / (start - end)));

            // 0° → 360° arası dönüş
            const rotation = progress * 360;
            pide.style.transform = `translateX(35%) rotate(${rotation}deg)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-pad bg-[#241610] text-white overflow-hidden relative"
        >
            <div className="site-shell relative">
                <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-start">
                    {/* Sol: FAQ Akordeon */}
                    <div>
                        <span className="section-kicker text-[#f4d7a0]">Sıkça Sorulan Sorular</span>
                        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[#fff6e8] mb-10">
                            Merak ettikleriniz
                            <br />
                            <span className="text-[#f4d7a0]">burada</span>
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
                                            className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
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

                    {/* Sağ: Dönen Trabzon Pide — yarısı ekran dışında */}
                    <div className="hidden lg:flex items-center justify-end relative min-h-[500px]">
                        <div
                            ref={pideRef}
                            className="absolute right-0 w-[600px] h-[600px] transition-none"
                            style={{ transform: "translateX(35%) rotate(0deg)" }}
                        >
                            <Image
                                src="/images/menu/trabzon pide.png"
                                alt="Trabzon Pide"
                                fill
                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                                sizes="600px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
