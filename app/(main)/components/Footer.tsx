import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-koyu text-krem/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="Emre Pide Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="font-[family-name:var(--font-serif)] text-xl text-gold">
                  Emre Pide
                </span>
                <span className="block text-xs italic text-krem/40">Salonu</span>
              </div>
            </div>
            <p className="text-[0.95rem] leading-8 text-krem/50">
              1999&apos;dan bu yana Düzce&apos;de taş fırında pişen geleneksel pide lezzetinin adresi. Taze malzeme, düzenli üretim ve sıcak servis.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-serif)] text-base text-gold">
              Hızlı Linkler
            </h4>
            <ul className="list-none space-y-3">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/menu", label: "Menü" },
                { href: "/sss", label: "SSS" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-krem/50 no-underline transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-serif)] text-base text-gold">
              İletişim
            </h4>
            <div className="space-y-4 text-[0.95rem] leading-8">
              <p className="text-krem/50">
                📍 Azmimilli, Serhat Sk.
                <br />
                81020 Düzce
              </p>
              <p>
                <a
                  href="tel:+903805245701"
                  className="text-krem/50 no-underline transition-colors hover:text-gold"
                >
                  📞 0380 524 57 01
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@emrepide.com.tr"
                  className="text-krem/50 no-underline transition-colors hover:text-gold"
                >
                  ✉️ info@emrepide.com.tr
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/10 pt-6 text-center">
          <p className="text-xs text-krem/35">
            © 2026 <span className="text-gold">Emre Pide Salonu</span> - Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
