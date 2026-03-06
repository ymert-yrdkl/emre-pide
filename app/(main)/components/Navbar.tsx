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
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/menu", label: "Menü" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] border-b transition-all duration-300 ${
          scrolled ? "nav-scrolled bg-koyu/98 border-gold/30" : "bg-koyu/95 border-gold/20"
        }`}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/images/logo.svg"
              alt="Emre Pide Logo"
              width={44}
              height={44}
              className="rounded-lg"
              priority
            />
            <div>
              <span className="font-[family-name:var(--font-serif)] text-[1.35rem] tracking-wide text-gold">
                Emre Pide
              </span>
              <span className="block text-[0.72rem] italic tracking-[0.15em] text-krem/60">
                Geleneksel Türk Mutfağı
              </span>
            </div>
          </Link>

          <ul className="hidden list-none gap-8 md:flex lg:gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-krem/72 no-underline transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="tel:+903805245701"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-primary-dark md:inline-flex"
          >
            Hemen Ara
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 md:hidden"
            aria-label="Menü"
          >
            <span className={`block h-0.5 w-6 bg-krem transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-krem transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-krem transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
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
            className="mt-4 rounded-lg bg-primary px-8 py-3 text-base font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-primary-dark"
            onClick={() => setMobileOpen(false)}
          >
            📞 Hemen Ara
          </Link>
        </div>
      )}
    </>
  );
}
