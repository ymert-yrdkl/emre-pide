"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { categoryInfo, MenuCategoryKey, menuData } from "@/app/data/menu";

type ViewMode = "home" | "menu" | "contact";

const categoryOrder: MenuCategoryKey[] = ["pideler", "lahmacun", "kiremit", "tatlilar", "icecekler"];

export default function QRMenuClient() {
  const [mode, setMode] = useState<ViewMode>("home");

  const totalCount = useMemo(() => {
    return Object.values(menuData).reduce((sum, items) => sum + items.length, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f140d]">
      <main className="mx-auto flex w-full max-w-[980px] flex-col items-center px-4 py-8">
        <header className="mb-6 text-center">
          <div className="mx-auto mb-2 flex w-fit items-center gap-3 rounded-2xl border border-[#e8ddcf] bg-white px-4 py-3 shadow-sm">
            <Image src="/images/logo.svg" alt="Emre Pide" width={46} height={46} priority className="rounded-md" />
            <div className="text-left leading-tight">
              <p className="font-[family-name:var(--font-playfair)] text-3xl">Emre Pide</p>
              <p className="text-xs tracking-[0.22em] text-[#7b6354]">QR MENÜ</p>
            </div>
          </div>
        </header>

        {mode === "home" && (
          <section className="mx-auto grid w-full max-w-[430px] grid-cols-1 gap-4">
            <button
              type="button"
              onClick={() => setMode("menu")}
              className="aspect-[1.618/1] rounded-2xl border border-[#e8ddcf] bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5"
            >
              <div className="flex h-full flex-col items-center justify-center">
                <p className="mb-2 text-2xl">📋</p>
                <h2 className="text-2xl font-semibold">Menü</h2>
                <p className="mt-1 text-sm text-[#6f5849]">{totalCount} ürün - Görsel + yazı + fiyat</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setMode("contact")}
              className="aspect-[1.618/1] rounded-2xl border border-[#e8ddcf] bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5"
            >
              <div className="flex h-full flex-col items-center justify-center">
                <p className="mb-2 text-2xl">📞</p>
                <h2 className="text-2xl font-semibold">İletişim</h2>
                <p className="mt-1 text-sm text-[#6f5849]">Hemen ara ve konuma git</p>
              </div>
            </button>
          </section>
        )}

        {mode === "menu" && (
          <section className="mx-auto flex w-full max-w-[760px] flex-col items-center">
            <div className="mb-6 flex w-full max-w-[720px] flex-col items-center gap-3 text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl">Menü</h2>
              <button
                type="button"
                onClick={() => setMode("home")}
                className="rounded-full border border-[#d8cab8] bg-white px-4 py-2 text-sm font-medium"
              >
                Geri
              </button>
            </div>

            <div className="w-full space-y-8">
              {categoryOrder.map((key) => {
                const info = categoryInfo[key];
                const items = menuData[key];

                return (
                  <section key={key} className="text-center">
                    <h3 className="mb-3 text-2xl font-semibold">
                      {info.emoji} {info.label}
                    </h3>

                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li
                          key={`${key}-${item.name}`}
                          className="mx-auto grid w-full max-w-[720px] grid-cols-[minmax(70px,1fr)_minmax(0,3fr)_auto] items-center gap-3 rounded-xl border border-[#e8ddcf] bg-white p-3"
                        >
                          <div className="relative h-[66px] w-full max-w-[88px] justify-self-center overflow-hidden rounded-lg bg-[#f2e9dd]">
                            {item.image ? (
                              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="88px" />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-xl">{info.itemIcon}</div>
                            )}
                          </div>

                          <span className="flex items-center gap-2 text-left text-[1rem]">
                            <span>{info.itemIcon}</span>
                            <span>{item.name}</span>
                          </span>

                          <span className="rounded-full bg-[#b63b2f]/10 px-3 py-1 text-sm font-semibold text-[#b63b2f]">
                            ₺{item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </section>
        )}

        {mode === "contact" && (
          <section className="mx-auto w-full max-w-[700px]">
            <div className="mb-6 flex flex-col items-center gap-3 text-center">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl">İletişim</h2>
              <button
                type="button"
                onClick={() => setMode("home")}
                className="rounded-full border border-[#d8cab8] bg-white px-4 py-2 text-sm font-medium"
              >
                Geri
              </button>
            </div>

            <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-3">
              <a
                href="tel:+903805245701"
                className="flex w-full flex-col items-center gap-1 rounded-2xl border border-[#e8ddcf] bg-white px-5 py-4 text-lg font-semibold no-underline sm:flex-row sm:justify-between"
              >
                <span>📞 Hemen Ara</span>
                <span>0380 524 57 01</span>
              </a>

              <a
                href="https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+Düzce"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full flex-col items-center gap-1 rounded-2xl border border-[#e8ddcf] bg-white px-5 py-4 text-lg font-semibold no-underline sm:flex-row sm:justify-between"
              >
                <span>📍 Dükkan Konumu</span>
                <span>Haritada Aç</span>
              </a>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
