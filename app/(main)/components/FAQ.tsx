"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const faqData = [
  {
    question: "Pideleriniz nasıl hazırlanıyor?",
    answer:
      "Pidelerimiz günlük hazırlanan hamurla taş fırında pişirilir. İç harçlar sabah hazırlanır, hamur sipariş ritmine göre açılır ve servis öncesi sıcak şekilde çıkarılır.",
  },
  {
    question: "Menünüzde hangi pide çeşitleri var?",
    answer:
      "Kıymalı, kuşbaşılı, kaşarlı, kavurmalı, Trabzon pidesi, dönerli seçenekler, lahmacun, kiremit çeşitleri, tatlılar ve içecekler dahil geniş bir menü sunuyoruz.",
  },
  {
    question: "Paket servisiniz var mı?",
    answer:
      "Evet. Düzce merkez ve yakın çevreye paket servis sağlıyoruz. Sipariş için 0380 524 57 01 numarasını arayabilir veya WhatsApp üzerinden bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer:
      "Her gün 10:00 - 22:00 saatleri arasında hizmet veriyoruz. Yoğun saatlerde hızlı servis için telefonla ön sipariş vermeniz daha sağlıklı olur.",
  },
  {
    question: "Toplu sipariş alıyor musunuz?",
    answer:
      "Evet. Toplantı, özel gün, iş yemeği veya kalabalık aile siparişleri için toplu üretim yapıyoruz. Bir gün önceden haber vermeniz hazırlık açısından avantaj sağlar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)),
      );

      setRotation(progress * 240);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="sss" className="py-24 px-6 lg:px-10 bg-background scroll-mt-20 overflow-x-clip">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary inline-block mb-3">
            Merak Edilenler
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            Sıkça Sorulan <em className="italic text-primary">Sorular</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-12 lg:gap-20 items-start">
          <div className="border-t border-border max-w-2xl">
            {faqData.map((item, index) => (
              <div key={item.question} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
                <div className={`accordion-body ${openIndex === index ? "open" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block sticky top-28">
            <div className="relative h-[420px] overflow-visible">
              <div className="absolute inset-y-4 right-0 w-[210px] rounded-l-full border border-gold/25 border-r-0" />
              <div className="absolute inset-y-12 right-10 w-[140px] rounded-l-full border border-gold/10 border-r-0" />
              <div
                className="absolute top-1/2 right-[-150px] h-[300px] w-[300px]"
                style={{
                  transform: `translateY(-50%) rotate(${rotation}deg)`,
                  transition: "transform 0.12s linear",
                }}
              >
                <Image
                  src="/images/menu/trabzon pide.png"
                  alt="Trabzon Pide"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(25,12,6,0.25)]"
                  sizes="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
