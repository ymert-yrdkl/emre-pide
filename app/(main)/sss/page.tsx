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
      <section className="bg-koyu px-6 pb-20 pt-32 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
            SSS
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.3rem,5vw,4rem)] leading-tight text-krem">
            Merak edilenleri
            <br />
            <em className="italic text-primary">tek yerde topladık</em>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] font-light leading-8 text-krem/60">
            Sipariş, çalışma saatleri, menü kapsamı ve toplu sipariş gibi en çok sorulan konuların kısa cevapları burada.
          </p>
        </div>
      </section>

      <FAQ />

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-koyu p-8 text-center text-krem md:p-10 lg:p-12">
          <h2 className="font-[family-name:var(--font-serif)] text-[2rem] mb-4">
            Hâlâ cevap bulamadın mı?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[0.98rem] leading-8 text-krem/60">
            Doğrudan arayabilir veya iletişim sayfasından konum ve iletişim bilgilerine ulaşabilirsin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+903805245701"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-[0.84rem] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-all hover:bg-primary-dark"
            >
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl border border-gold/50 px-8 py-4 text-[0.84rem] font-semibold uppercase tracking-[0.1em] text-gold no-underline transition-all hover:border-gold hover:bg-gold/[0.08]"
            >
              İletişim Sayfası
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
