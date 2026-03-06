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
    <section id={id} className="bg-[var(--acik-kahve)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.2rem,4vw,3.2rem)] leading-tight text-foreground">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 auto-rows-[180px] gap-5 md:grid-cols-12 md:auto-rows-[130px]">
          {galleryImages.map((item) => (
            <div
              key={item.src}
              className={`relative overflow-hidden rounded-[28px] bg-white shadow-[0_16px_40px_rgba(42,23,10,0.12)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-5 text-sm font-medium text-white md:text-[0.95rem]">
                {item.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
