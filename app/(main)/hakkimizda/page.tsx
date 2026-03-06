import type { Metadata } from "next";

import AboutContent from "../components/AboutContent";
import GallerySection from "../components/GallerySection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Emre Pide Salonu'nun hikayesi, taş fırın geleneği ve üretim yaklaşımı.",
};

export default function HakkimizdaPage() {
  return (
    <div className="overflow-x-hidden bg-background">
      <section className="bg-koyu px-6 pb-20 pt-32 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
            Hakkımızda
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.3rem,5vw,4rem)] leading-tight text-krem">
            Taş fırında
            <br />
            <em className="italic text-primary">istikrarlı lezzet</em>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[1rem] font-light leading-8 text-krem/60">
            Emre Pide Salonu yıllardır aynı üretim disiplinini sürdürüyor: günlük hazırlık, sıcak servis ve güçlü taş fırın karakteri.
          </p>
        </div>
      </section>

      <AboutContent />
      <GallerySection title="Mutfaktan ve fırından kareler" eyebrow="Galeri" />
    </div>
  );
}
