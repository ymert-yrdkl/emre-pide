"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/hikaye", label: "Hikaye" },
  { href: "/lezzetler", label: "Lezzetler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#1c120c]/92 backdrop-blur">
      <div className="site-shell flex min-h-[78px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/images/logo.svg" alt="Emre Pide Logo" width={46} height={46} priority />
          <div>
            <span className="block font-[family-name:var(--font-playfair)] text-[1.45rem] text-[#f4d7a0]">
              Emre Pide
            </span>
            <span className="block text-[0.72rem] uppercase tracking-[0.18em] text-white/60">
              Düzce Taş Fırın
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white/72 no-underline transition-colors hover:text-[#f4d7a0]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+903805245701" className="site-btn-primary hidden min-h-[44px] px-5 py-2.5 md:inline-flex">
            Hemen Ara
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-lg border border-white/15 bg-white/5"
            aria-label="Menüyü Aç"
          >
            <span className={`block h-[2px] w-5 bg-[#f4d7a0] transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-[#f4d7a0] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-[#f4d7a0] transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${mobileOpen ? "max-h-64" : "max-h-0"}`}
      >
        <nav className="site-shell flex flex-col gap-1 pb-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[0.88rem] font-semibold text-white/80 no-underline transition-colors hover:bg-white/8 hover:text-[#f4d7a0]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+903805245701"
            className="site-btn-primary mt-2 min-h-[44px] px-5 py-2.5 text-center"
          >
            Hemen Ara
          </a>
        </nav>
      </div>
    </header>
  );
}
