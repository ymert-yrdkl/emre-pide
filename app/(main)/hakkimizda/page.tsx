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
      <section className="bg-koyu pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
            Hakkımızda
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.4rem,5vw,4rem)] text-krem leading-tight mb-4">
            Taş fırında
            <br />
            <em className="italic text-primary">istikrarlı lezzet</em>
          </h1>
          <p className="text-krem/60 text-base font-light max-w-2xl mx-auto leading-8">
            Emre Pide Salonu yıllardır aynı üretim disiplinini sürdürüyor: günlük hazırlık, sıcak servis ve güçlü taş fırın karakteri.
          </p>
        </div>
      </section>

      <AboutContent />
      <GallerySection title="Mutfaktan ve fırından kareler" eyebrow="Galeri" />
    </div>
  );
}
