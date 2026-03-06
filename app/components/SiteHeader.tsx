import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#hikaye", label: "Hikaye" },
  { href: "#lezzetler", label: "Lezzetler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function SiteHeader() {
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

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white/72 no-underline transition-colors hover:text-[#f4d7a0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="tel:+903805245701" className="site-btn-primary hidden min-h-[44px] px-5 py-2.5 md:inline-flex">
          Hemen Ara
        </a>
      </div>
    </header>
  );
}
