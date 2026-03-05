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
      <main className="mx-auto w-full max-w-[780px] px-4 py-8">
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
          <section className="mx-auto grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode("menu")}
              className="aspect-[1.618/1] rounded-2xl border border-[#e8ddcf] bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5"
            >
              <p className="mb-2 text-2xl">📋</p>
              <h2 className="text-2xl font-semibold">Menü</h2>
              <p className="mt-1 text-sm text-[#6f5849]">{totalCount} ürün - Sadece yazı ve fiyat</p>
            </button>

            <button
              type="button"
              onClick={() => setMode("contact")}
              className="aspect-[1.618/1] rounded-2xl border border-[#e8ddcf] bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5"
            >
              <p className="mb-2 text-2xl">📞</p>
              <h2 className="text-2xl font-semibold">İletişim</h2>
              <p className="mt-1 text-sm text-[#6f5849]">Hemen ara ve konuma git</p>
            </button>
          </section>
        )}

        {mode === "menu" && (
          <section className="mx-auto w-full max-w-[700px]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl">Menü</h2>
              <button
                type="button"
                onClick={() => setMode("home")}
                className="rounded-full border border-[#d8cab8] bg-white px-4 py-2 text-sm font-medium"
              >
                Geri
              </button>
            </div>

            <div className="space-y-8">
              {categoryOrder.map((key) => {
                const info = categoryInfo[key];
                const items = menuData[key];

                return (
                  <section key={key}>
                    <h3 className="mb-3 text-2xl font-semibold">
                      {info.emoji} {info.label}
                    </h3>

                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li
                          key={`${key}-${item.name}`}
                          className="flex items-center justify-between rounded-xl border border-[#e8ddcf] bg-white px-4 py-3"
                        >
                          <span className="flex items-center gap-2 text-[1rem]">
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
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl">İletişim</h2>
              <button
                type="button"
                onClick={() => setMode("home")}
                className="rounded-full border border-[#d8cab8] bg-white px-4 py-2 text-sm font-medium"
              >
                Geri
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+903805245701"
                className="flex items-center justify-between rounded-2xl border border-[#e8ddcf] bg-white px-5 py-4 text-lg font-semibold no-underline"
              >
                <span>📞 Hemen Ara</span>
                <span>0380 524 57 01</span>
              </a>

              <a
                href="https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+Düzce"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-[#e8ddcf] bg-white px-5 py-4 text-lg font-semibold no-underline"
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
