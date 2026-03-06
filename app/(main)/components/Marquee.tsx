export default function Marquee() {
  const items = [
    "taş fırın lezzeti",
    "geleneksel pide",
    "taze malzeme",
    "25 yıllık deneyim",
    "Düzce'nin favorisi",
  ];

  const content = items.map((item) => `${item} • `).join("");

  return (
    <div className="marquee-container bg-koyu py-5 border-y border-gold/20">
      <div className="marquee-track">
        <span className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-krem/70 tracking-wide italic px-4">
          {content}
          {content}
        </span>
        <span className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-krem/70 tracking-wide italic px-4">
          {content}
          {content}
        </span>
      </div>
    </div>
  );
}
