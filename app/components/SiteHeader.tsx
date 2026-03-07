"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/hikaye", label: "Hikaye" },
  { href: "/lezzetler", label: "Lezzetler" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        bg-[#140a06]/80 backdrop-blur-[18px] backdrop-saturate-[1.4] shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.4)]
        md:shadow-none ${scrolled
          ? "md:bg-[#140a06]/72 md:backdrop-blur-[18px] md:backdrop-saturate-[1.4] md:shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.4)]"
          : "md:bg-transparent md:backdrop-blur-none md:backdrop-saturate-100"
        }`}
    >
      <div className="site-shell flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/images/logo.svg" alt="Emre Pide Logo" width={52} height={52} priority />
          <div>
            <span className="block font-[family-name:var(--font-playfair)] text-[1.55rem] font-bold text-[#f4d7a0] leading-tight">
              Emre Pide
            </span>
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Düzce Taş Fırın
            </span>
          </div>
        </Link>

        {/* Desktop Nav — kırmızı glow efekti */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link-glow text-[0.82rem] font-bold uppercase tracking-[0.14em] no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/iletisim"
            className="hidden md:inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-[0.79rem] font-bold uppercase tracking-[0.12em] no-underline transition-all duration-300 bg-gradient-to-br from-[#c8000a] to-[#e8151a] text-white shadow-[0_4px_18px_rgba(200,0,10,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] hover:shadow-[0_6px_28px_rgba(232,21,26,0.65)] hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
            İletişim
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-[10px] border border-white/12 bg-white/8 cursor-pointer"
            aria-label="Menüyü Aç"
          >
            <span className={`block h-[2px] w-5 bg-[#e8151a] rounded-sm shadow-[0_0_6px_rgba(232,21,26,0.7)] transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-[#e8151a] rounded-sm shadow-[0_0_6px_rgba(232,21,26,0.7)] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-[#e8151a] rounded-sm shadow-[0_0_6px_rgba(232,21,26,0.7)] transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-350 ease-in-out ${mobileOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="site-shell flex flex-col gap-1 pb-5 pt-3 bg-[#140a06]/95 backdrop-blur-[20px] rounded-b-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-5 py-4 text-[1.1rem] font-bold no-underline transition-all border border-[#f4d7a0]/30 bg-white/5"
              style={{ color: '#ffd66b', textShadow: '0 0 12px rgba(255,214,107,0.6)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-[0.82rem] font-bold uppercase tracking-[0.12em] no-underline bg-gradient-to-br from-[#c8000a] to-[#e8151a] text-white shadow-[0_4px_18px_rgba(200,0,10,0.4)]"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
}
