"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/hikaye", label: "Hikaye" },
  { href: "/lezzetler", label: "Lezzetler" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="site-shell flex min-h-[78px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/images/logo.svg" alt="Emre Pide Logo" width={56} height={56} priority />
          <div>
            <span className="block font-[family-name:var(--font-playfair)] text-[1.6rem] font-bold text-[#f4d7a0]">
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
              className="text-[0.84rem] font-bold uppercase tracking-[0.14em] text-[#cf103a] no-underline transition-colors hover:text-[#e8384a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* İletişim — Cezbedici renkli buton */}
          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-[0.82rem] font-bold uppercase tracking-[0.12em] no-underline transition-all duration-300 bg-gradient-to-r from-[#cf103a] to-[#e8384a] text-white shadow-[0_4px_20px_rgba(207,16,58,0.4)] hover:shadow-[0_6px_28px_rgba(207,16,58,0.55)] hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
            İletişim
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-lg border border-white/15 bg-white/5"
            aria-label="Menüyü Aç"
          >
            <span className={`block h-[2px] w-5 bg-[#cf103a] transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-[#cf103a] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-[#cf103a] transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${mobileOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="site-shell flex flex-col gap-1 pb-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[0.88rem] font-semibold text-[#cf103a] no-underline transition-colors hover:bg-white/8 hover:text-[#e8384a]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-[0.82rem] font-bold uppercase tracking-[0.12em] no-underline bg-gradient-to-r from-[#cf103a] to-[#e8384a] text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
}
