"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/#hakkimizda", label: "Hakkımızda" },
    { href: "/menu", label: "Menü" },
    { href: "/#sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 border-b ${
          scrolled ? "nav-scrolled bg-koyu/98 border-gold/30" : "bg-koyu/95 border-gold/20"
        }`}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="Emre Pide Logo"
              width={44}
              height={44}
              className="rounded-lg"
              priority
            />
            <div>
              <span className="font-[family-name:var(--font-serif)] text-[1.3rem] text-gold tracking-wide">
                Emre Pide
              </span>
              <span className="block text-krem/60 text-[0.7rem] tracking-[0.15em] font-light italic">
                — Geleneksel Türk Mutfağı —
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex gap-8 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-krem/70 text-[0.8rem] tracking-[0.12em] uppercase font-semibold hover:text-gold transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="tel:+903805245701"
            className="hidden md:inline-block bg-primary text-white px-5 py-2.5 rounded-sm text-[0.78rem] font-semibold tracking-[0.1em] uppercase hover:bg-primary-dark transition-colors no-underline"
          >
            Hemen Ara
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
            aria-label="Menü"
          >
            <span className={`block w-6 h-0.5 bg-krem transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-krem transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-krem transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="tel:+903805245701"
            className="mt-4 bg-primary text-white px-8 py-3 rounded-sm text-base font-semibold tracking-[0.1em] uppercase no-underline hover:bg-primary-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            📞 Hemen Ara
          </Link>
        </div>
      )}
    </>
  );
}
