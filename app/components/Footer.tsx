import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-koyu text-krem/60 border-t border-gold/15">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
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
                                <span className="block text-krem/40 text-xs italic">Salonu</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-krem/50 max-w-xs">
                            1999&apos;dan bu yana Düzce&apos;de taş fırında pişen geleneksel Türk
                            pidelerinin adresi. Taze malzeme, eşsiz lezzet.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-[family-name:var(--font-serif)] text-gold text-base mb-4">
                            Hızlı Linkler
                        </h4>
                        <ul className="space-y-2 list-none">
                            {[
                                { href: "/", label: "Ana Sayfa" },
                                { href: "/menu", label: "Menümüz" },
                                { href: "/iletisim", label: "İletişim" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-krem/50 text-sm hover:text-gold transition-colors no-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-[family-name:var(--font-serif)] text-gold text-base mb-4">
                            İletişim
                        </h4>
                        <div className="space-y-3 text-sm">
                            <p className="text-krem/50">
                                📍 Azmimilli, Serhat Sk.<br />81020 Düzce
                            </p>
                            <p>
                                <a href="tel:+903805245701" className="text-krem/50 hover:text-gold transition-colors no-underline">
                                    📞 0380 524 57 01
                                </a>
                            </p>
                            <p>
                                <a href="mailto:info@emrepide.com.tr" className="text-krem/50 hover:text-gold transition-colors no-underline">
                                    ✉️ info@emrepide.com.tr
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-gold/10 text-center">
                    <p className="text-xs text-krem/35">
                        © 2026 <span className="text-gold">Emre Pide Salonu</span> — Tüm
                        hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
