import Image from "next/image";

const galleryImages = [
  {
    src: "/images/menu/trabzon pide.png",
    alt: "Trabzon pide",
    className: "md:col-span-5 md:row-span-2",
  },
  {
    src: "/images/menu/kavurmalı pide.png",
    alt: "Kavurmalı pide",
    className: "md:col-span-4",
  },
  {
    src: "/images/menu/kıymalı.png",
    alt: "Kıymalı pide",
    className: "md:col-span-3",
  },
  {
    src: "/images/menu/kuşbaşı kaşarlı.png",
    alt: "Kuşbaşılı kaşarlı pide",
    className: "md:col-span-3",
  },
  {
    src: "/images/menu/et dönerli.png",
    alt: "Et dönerli pide",
    className: "md:col-span-4",
  },
  {
    src: "/images/menu/tam karışık pide.png",
    alt: "Tam karışık pide",
    className: "md:col-span-5",
  },
];

type GallerySectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
};

export default function GallerySection({
  id,
  title = "Taş fırından çıkan gerçek görüntüler",
  eyebrow = "Foto Galeri",
}: GallerySectionProps) {
  return (
    <section id={id} className="bg-[var(--acik-kahve)] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary inline-block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,3rem)] leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[160px] md:auto-rows-[110px] gap-4">
          {galleryImages.map((item) => (
            <div
              key={item.src}
              className={`relative overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_rgba(42,23,10,0.12)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-4 text-white text-sm font-medium">
                {item.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
