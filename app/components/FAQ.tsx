"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const faqData = [
    {
        question: "Pideleriniz nasıl hazırlanıyor?",
        answer:
            "Pidelerimiz her gün taze hazırlanan özel hamurumuz ile taş fırında pişirilir. Malzemelerimiz her sabah taze olarak tedarik edilir ve hiçbir hazır malzeme kullanılmaz. Geleneksel Karadeniz usulü açma tekniği ile ince ve çıtır bir hamur elde edilir.",
    },
    {
        question: "Hangi pide çeşitleriniz var?",
        answer:
            "Menümüzde 40'ın üzerinde pide çeşidi bulunmaktadır. Kıymalı, kuşbaşılı, kaşarlı, kavurmalı, pastırmalı gibi klasik çeşitlerin yanı sıra Trabzon pidesi, Bafra pidesi ve özel Emre Pide lezzetlerimiz de mevcuttur.",
    },
    {
        question: "Paket servisiniz var mı?",
        answer:
            "Evet, Düzce merkez ve çevresine paket servis hizmeti sunuyoruz. 0380 524 57 01 numaralı telefonumuzdan veya WhatsApp üzerinden sipariş verebilirsiniz. Siparişleriniz özel kutularımızda sıcak şekilde teslim edilir.",
    },
    {
        question: "Çalışma saatleriniz nedir?",
        answer:
            "Her gün 10:00 – 22:00 saatleri arasında hizmet vermekteyiz. Hafta sonları ve resmi tatillerde de aynı saatlerde açığız. Kalabalık gruplar için önceden rezervasyon yapmanızı öneririz.",
    },
    {
        question: "Özel günler için toplu sipariş alıyor musunuz?",
        answer:
            "Evet, düğün, nişan, toplantı ve özel organizasyonlar için toplu sipariş kabul ediyoruz. En az 1 gün önceden sipariş vermeniz yeterlidir. Detaylı bilgi için bizi arayabilirsiniz.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [rotation, setRotation] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollProgress = -rect.top / (rect.height + window.innerHeight);
                setRotation(scrollProgress * 360);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="sss"
            className="py-24 px-6 lg:px-10 bg-background scroll-mt-20"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary inline-block mb-3">
                        Merak Edilenler
                    </span>
                    <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
                        Sıkça Sorulan{" "}
                        <em className="italic text-primary">Sorular</em>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">
                    {/* Accordion */}
                    <div className="border-t border-border max-w-2xl">
                        {faqData.map((item, index) => (
                            <div key={index} className="accordion-item">
                                <button
                                    className="accordion-header"
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{item.question}</span>
                                    <svg
                                        className={`accordion-arrow ${openIndex === index ? "open" : ""}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`accordion-body ${openIndex === index ? "open" : ""}`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rotating Pide Image */}
                    <div className="hidden lg:flex items-center justify-center sticky top-32">
                        <div
                            className="relative w-[240px] h-[240px]"
                            style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s linear" }}
                        >
                            <Image
                                src="/images/menu/trabzon pide.png"
                                alt="Trabzon Pide"
                                fill
                                className="object-contain drop-shadow-2xl"
                                sizes="240px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
