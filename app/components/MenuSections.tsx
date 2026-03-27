import Image from "next/image";

import { categoryInfo, menuData } from "@/app/data/menu";

type MenuSectionsProps = {
  compact?: boolean;
  variant?: "default" | "qr";
};

export default function MenuSections({ compact = false, variant = "default" }: MenuSectionsProps) {
  const isQr = variant === "qr";
  const imageSize = compact ? "w-14 h-14" : "w-16 h-16";

  return (
    <>
      {Object.entries(menuData).map(([category, items]) => {
        const info = categoryInfo[category as keyof typeof categoryInfo];

        return (
          <section
            key={category}
            id={category}
            className={isQr ? "mb-8 scroll-mt-36 rounded-2xl bg-white/85 border border-[#eadfce] shadow-[0_8px_30px_rgba(35,20,10,0.06)] p-4 md:p-5" : "mb-8 scroll-mt-28"}
          >
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
                <div
                  key={`${category}-${item.name}`}
                  className={isQr
                    ? "flex items-center gap-3 bg-white rounded-xl p-3 border border-[#efe3d3] hover:shadow-sm transition-shadow"
                    : compact
                      ? "flex items-center gap-3 bg-white rounded-xl p-3 border border-[var(--border)] hover:shadow-sm transition-shadow"
                      : "flex items-center gap-3 bg-[var(--card-bg)] rounded-xl p-3 border border-[var(--border)] hover:shadow-sm transition-shadow"}
                >
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
                    <div className={`${imageSize} rounded-lg bg-[var(--warm-bg)] flex items-center justify-center flex-shrink-0`}>
                      <span className="text-2xl opacity-40">🥙</span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className={compact ? "font-semibold text-[var(--foreground)] text-[14px]" : "font-semibold text-[var(--foreground)] text-[15px] md:text-base"}>
                      {item.name}
                    </h3>
                  </div>

                  {item.price15 ? (
                    <div className={isQr
                      ? "flex-shrink-0 flex flex-col items-end gap-0.5"
                      : "flex-shrink-0 flex flex-col items-end gap-0.5"}>
                      <span className={isQr
                        ? "bg-[#b73a2d]/10 text-[#b73a2d] font-extrabold text-xs px-2.5 py-1 rounded-md"
                        : "bg-[var(--primary)]/8 text-[var(--primary)] font-bold text-xs px-2.5 py-1 rounded-md"}>
                        1P: ₺{item.price}
                      </span>
                      <span className={isQr
                        ? "bg-[#b73a2d]/5 text-[#b73a2d]/80 font-semibold text-[11px] px-2.5 py-0.5 rounded-md"
                        : "bg-[var(--primary)]/4 text-[var(--primary)]/80 font-semibold text-[11px] px-2.5 py-0.5 rounded-md"}>
                        1.5P: ₺{item.price15}
                      </span>
                    </div>
                  ) : (
                    <div className={isQr ? "flex-shrink-0 bg-[#b73a2d]/10 text-[#b73a2d] font-extrabold text-sm px-3 py-1.5 rounded-lg" : "flex-shrink-0 bg-[var(--primary)]/8 text-[var(--primary)] font-bold text-sm px-3 py-1.5 rounded-lg"}>
                      ₺{item.price}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
