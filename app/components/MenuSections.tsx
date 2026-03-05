import Image from "next/image";

import { categoryInfo, menuData } from "@/app/data/menu";

type MenuSectionsProps = {
  compact?: boolean;
};

export default function MenuSections({ compact = false }: MenuSectionsProps) {
  const imageSize = compact ? "w-14 h-14" : "w-16 h-16";
  const cardClass = compact
    ? "flex items-center gap-3 bg-white rounded-xl p-3 border border-[var(--border)] hover:shadow-sm transition-shadow"
    : "flex items-center gap-3 bg-[var(--card-bg)] rounded-xl p-3 border border-[var(--border)] hover:shadow-sm transition-shadow";

  return (
    <>
      {Object.entries(menuData).map(([category, items]) => {
        const info = categoryInfo[category as keyof typeof categoryInfo];

        return (
          <section key={category} id={category} className="mb-8 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-xl">
                {info.emoji}
              </div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[var(--foreground)]">
                {info.label}
              </h2>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>

            <div className="space-y-3">
              {items.map((item) => (
                <div key={`${category}-${item.name}`} className={cardClass}>
                  {item.image ? (
                    <div className={`${imageSize} rounded-lg overflow-hidden flex-shrink-0 relative`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes={compact ? "56px" : "64px"}
                      />
                    </div>
                  ) : (
                    <div
                      className={`${imageSize} rounded-lg bg-[var(--warm-bg)] flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-2xl opacity-40">🥙</span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className={compact ? "font-semibold text-[var(--foreground)] text-[14px]" : "font-semibold text-[var(--foreground)] text-[15px]"}>
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex-shrink-0 bg-[var(--primary)]/8 text-[var(--primary)] font-bold text-sm px-3 py-1.5 rounded-lg">
                    ₺{item.price}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
