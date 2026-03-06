"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { categoryInfo, MenuCategoryKey, menuData } from "@/app/data/menu";

type ViewMode = "home" | "menu" | "contact";

const categoryOrder: MenuCategoryKey[] = ["pideler", "lahmacun", "kiremit", "tatlilar", "icecekler"];
const phoneDisplay = "0380 524 57 01";
const phoneHref = "tel:+903805245701";
const mapHref = "https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+Duzce";

function normalize(value: string): string {
  return value.toLocaleLowerCase("tr-TR");
}

export default function QRMenuClient() {
  const [mode, setMode] = useState<ViewMode>("home");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>("pideler");

  const totalCount = useMemo(() => {
    return Object.values(menuData).reduce((sum, items) => sum + items.length, 0);
  }, []);

  const filteredGroups = useMemo(() => {
    const q = normalize(query.trim());

    return categoryOrder
      .map((key) => {
        const items = q
          ? menuData[key].filter((item) => normalize(item.name).includes(q))
          : menuData[key];

        return {
          key,
          info: categoryInfo[key],
          items,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [query]);

  const openCategory = (key: MenuCategoryKey) => {
    setActiveCategory(key);
    const target = document.getElementById(`cat-${key}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#1d120d]">
      <main className="mx-auto w-full max-w-[980px] px-4 py-6">
        <div className={mode === "home" ? "mx-auto flex min-h-[calc(100vh-3rem)] max-w-[860px] flex-col justify-center" : "mx-auto max-w-[860px]"}>
          <header className="mb-5">
            <div className="relative overflow-hidden rounded-3xl border border-[#e7d9c8] bg-white p-4 shadow-sm sm:p-5">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#b74133]/8" />
              <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-[#d8af62]/10" />

              <div className="relative flex items-center justify-between gap-[5px]">
                <div className="flex items-center gap-[5px]">
                  <Image src="/images/logo.svg" alt="Emre Pide" width={50} height={50} priority className="rounded-md" />
                  <div className="leading-tight">
                    <p className="font-[family-name:var(--font-playfair)] text-3xl">Emre Pide</p>
                    <p className="text-xs tracking-[0.23em] text-[#755e4f]">QR MENU</p>
                  </div>
                </div>

                <a
                  href={phoneHref}
                  className="rounded-full bg-[#b74133] px-4 py-2 text-sm font-semibold text-white no-underline shadow-sm hover:bg-[#973629]"
                >
                  Ara
                </a>
              </div>
            </div>
          </header>

          {mode === "home" && (
            <section className="mx-auto grid w-full max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMode("menu")}
                className="group relative overflow-hidden rounded-3xl border border-[#e7d9c8] bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(183,65,51,0.08),rgba(216,175,98,0.08))] opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex aspect-[1.618/1] flex-col justify-center">
                  <p className="mb-3 text-3xl">📋</p>
                  <h2 className="text-3xl font-semibold">Menu</h2>
                  <p className="mt-2 text-sm text-[#6d5748]">{totalCount} urun, fotograf ve fiyatlarla</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMode("contact")}
                className="group relative overflow-hidden rounded-3xl border border-[#e7d9c8] bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,90,50,0.06),rgba(37,211,102,0.08))] opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex aspect-[1.618/1] flex-col justify-center">
                  <p className="mb-3 text-3xl">📞</p>
                  <h2 className="text-3xl font-semibold">Iletisim</h2>
                  <p className="mt-2 text-sm text-[#6d5748]">Hemen ara veya konuma git</p>
                </div>
              </button>
            </section>
          )}

          {mode === "menu" && (
            <section className="mx-auto w-full max-w-[780px]">
              <div className="sticky top-3 z-20 mb-5 rounded-2xl border border-[#e7d9c8] bg-white/95 p-3 shadow-sm backdrop-blur">
                <div className="mb-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                  <h2 className="font-[family-name:var(--font-playfair)] text-4xl">Menu</h2>
                  <button
                    type="button"
                    onClick={() => setMode("home")}
                    className="rounded-full border border-[#d8cab8] bg-white px-4 py-2 text-sm font-medium"
                  >
                    Geri
                  </button>
                </div>

                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Urun ara..."
                  className="mb-3 w-full rounded-xl border border-[#e7d9c8] bg-[#fdfbf7] px-4 py-2.5 text-sm outline-none focus:border-[#b74133]"
                />

                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {categoryOrder.map((key) => {
                    const info = categoryInfo[key];
                    const isActive = activeCategory === key;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => openCategory(key)}
                        className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition ${
                          isActive
                            ? "bg-[#b74133] text-white"
                            : "bg-[#f2e7d8] text-[#6b5343] hover:bg-[#eadbc8]"
                        }`}
                      >
                        {info.emoji} {info.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {filteredGroups.length === 0 && (
                <div className="rounded-2xl border border-[#e7d9c8] bg-white p-6 text-center text-[#6d5748]">
                  Aradigin urun bulunamadi.
                </div>
              )}

              <div className="space-y-8">
                {filteredGroups.map((group) => (
                  <section key={group.key} id={`cat-${group.key}`} className="text-center scroll-mt-32">
                    <h3 className="mb-3 text-2xl font-semibold">
                      {group.info.emoji} {group.info.label}
                    </h3>

                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={`${group.key}-${item.name}`}
                          className="mx-auto grid w-full max-w-[760px] grid-cols-[78px_minmax(0,3fr)_auto] items-center gap-[5px] rounded-2xl border border-[#e7d9c8] bg-white p-3 shadow-sm"
                        >
                          <div className="relative h-[66px] w-[78px] overflow-hidden rounded-xl bg-[#efe3d4]">
                            {item.image ? (
                              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="78px" />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-xl">{group.info.itemIcon}</div>
                            )}
                          </div>

                          <span className="flex items-center gap-[5px] text-left text-[1rem] leading-snug">
                            <span>{group.info.itemIcon}</span>
                            <span>{item.name}</span>
                          </span>

                          <span className="rounded-full bg-[#b74133]/10 px-3 py-1 text-sm font-semibold text-[#b74133]">
                            ₺{item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
          )}

          {mode === "contact" && (
            <section className="mx-auto w-full max-w-[760px]">
              <div className="mb-6 flex flex-col items-center gap-2 text-center">
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl">Iletisim</h2>
                <button
                  type="button"
                  onClick={() => setMode("home")}
                  className="rounded-full border border-[#d8cab8] bg-white px-4 py-2 text-sm font-medium"
                >
                  Geri
                </button>
              </div>

              <div className="mx-auto flex w-full max-w-[680px] flex-col gap-3">
                <a
                  href={phoneHref}
                  className="flex w-full flex-col items-center gap-[5px] rounded-2xl border border-[#e7d9c8] bg-white px-5 py-4 text-lg font-semibold no-underline shadow-sm sm:flex-row sm:justify-between"
                >
                  <span>📞 Hemen Ara</span>
                  <span>{phoneDisplay}</span>
                </a>

                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full flex-col items-center gap-[5px] rounded-2xl border border-[#e7d9c8] bg-white px-5 py-4 text-lg font-semibold no-underline shadow-sm sm:flex-row sm:justify-between"
                >
                  <span>📍 Dukkan Konumu</span>
                  <span>Haritada Ac</span>
                </a>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}


