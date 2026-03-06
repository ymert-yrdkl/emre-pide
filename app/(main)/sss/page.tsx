import type { Metadata } from "next";
import Link from "next/link";

import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "SSS",
  description:
    "Emre Pide Salonu hakkında sık sorulan sorular, paket servis ve çalışma saatleri.",
};

export default function SssPage() {
  return (
    <div className="overflow-x-hidden bg-background">
      <section className="bg-koyu pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
            SSS
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.4rem,5vw,4rem)] text-krem leading-tight mb-4">
            Merak edilenleri
            <br />
            <em className="italic text-primary">tek yerde topladık</em>
          </h1>
          <p className="text-krem/60 text-base font-light max-w-2xl mx-auto leading-8">
            Sipariş, çalışma saatleri, menü kapsamı ve toplu sipariş gibi en çok sorulan konuların kısa cevapları burada.
          </p>
        </div>
      </section>

      <FAQ />

      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl bg-koyu text-krem p-8 md:p-10 text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-[2rem] mb-4">
            Hâlâ cevap bulamadın mı?
          </h2>
          <p className="text-krem/60 leading-8 max-w-2xl mx-auto mb-8">
            Doğrudan arayabilir veya iletişim sayfasından konum ve iletişim bilgilerine ulaşabilirsin.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+903805245701"
              className="bg-primary text-white px-8 py-3.5 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:bg-primary-dark transition-all inline-block"
            >
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="bg-transparent text-gold px-8 py-3.5 border border-gold/50 text-[0.85rem] font-semibold tracking-[0.1em] uppercase rounded-sm no-underline hover:border-gold hover:bg-gold/[0.08] transition-all inline-block"
            >
              İletişim Sayfası
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
