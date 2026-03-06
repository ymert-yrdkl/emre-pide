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
    <section ref={sectionRef} id="sss" className="bg-background px-6 py-24 scroll-mt-20 overflow-x-hidden lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">
            Merak Edilenler
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight">
            Sıkça Sorulan <em className="italic text-primary">Sorular</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_460px]">
          <div className="rounded-[32px] border border-border bg-white p-6 shadow-sm md:p-8 lg:p-10">
            <div className="border-t border-border">
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
          </div>

          <div className="relative hidden min-h-[520px] overflow-hidden rounded-[32px] border border-gold/15 bg-koyu lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(192,57,43,0.18),transparent_38%),radial-gradient(circle_at_78%_75%,rgba(212,168,67,0.14),transparent_45%)]" />
            <div className="absolute inset-x-8 top-8">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Öne çıkan cevaplar
              </span>
              <p className="mt-4 max-w-xs text-sm leading-7 text-krem/65">
                Paket servis, çalışma saatleri ve toplu sipariş gibi en kritik sorular bu ekranda hızlıca cevaplanır.
              </p>
            </div>
            <div className="absolute inset-y-10 right-0 w-[230px] rounded-l-full border border-gold/25 border-r-0" />
            <div className="absolute inset-y-20 right-8 w-[160px] rounded-l-full border border-gold/10 border-r-0" />
            <div
              className="absolute bottom-[-30px] right-[-90px] h-[360px] w-[360px]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.12s linear",
              }}
            >
              <Image
                src="/images/menu/trabzon pide.png"
                alt="Trabzon Pide"
                fill
                className="object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.35)]"
                sizes="360px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
