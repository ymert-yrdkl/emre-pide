import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ä°letiÅŸim",
    description:
        "Emre Pide Salonu iletiÅŸim bilgileri â€” Adres, telefon, e-posta ve Ã§alÄ±ÅŸma saatleri. DÃ¼zce'de taÅŸ fÄ±rÄ±nda pide.",
};

export default function IletisimPage() {
    return (
        <div>
            {/* Hero Banner */}
            <section className="bg-koyu pt-32 pb-16 px-[5%]">
                <div className="max-w-[900px] mx-auto text-center">
                    <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-gold inline-block mb-3">
                        Bize UlaÅŸÄ±n
                    </span>
                    <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,3.5rem)] text-krem leading-tight mb-4">
                        Her Zaman <em className="italic text-primary">YanÄ±nÄ±zdayÄ±z</em>
                    </h1>
                    <p className="text-krem/60 text-base font-light max-w-md mx-auto">
                        Rezervasyon, sipariÅŸ veya bilgi almak iÃ§in bizimle iletiÅŸime
                        geÃ§ebilirsiniz.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-16 px-[5%] bg-background">
                <div className="max-w-[900px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                        {/* Adres */}
                        <a
                            href="https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+DÃ¼zce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 bg-card-bg rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all group no-underline"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                                ğŸ“
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-foreground mb-1 text-base">
                                    Adres
                                </div>
                                <div className="text-sm text-text-muted leading-relaxed">
                                    Azmimilli, Serhat Sk.
                                    <br />
                                    81020 DÃ¼zce
                                </div>
                            </div>
                            <svg
                                className="w-5 h-5 text-text-light group-hover:text-primary group-hover:translate-x-1 transition-all mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>

                        {/* Telefon */}
                        <a
                            href="tel:+903805245701"
                            className="flex items-center gap-4 bg-card-bg rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary transition-all group no-underline"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                                ğŸ“
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-foreground text-base">
                                    Telefon
                                </div>
                                <div className="text-sm text-text-muted">0380 524 57 01</div>
                            </div>
                            <svg
                                className="w-5 h-5 text-text-light group-hover:text-primary group-hover:translate-x-1 transition-all"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>

                        {/* E-posta */}
                        <a
                            href="mailto:info@emrepide.com.tr"
                            className="flex items-center gap-4 bg-card-bg rounded-2xl p-6 border border-border hover:shadow-lg hover:border-gold transition-all group no-underline"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                                âœ‰ï¸
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-foreground text-base">
                                    E-posta
                                </div>
                                <div className="text-sm text-text-muted">
                                    info@emrepide.com.tr
                                </div>
                            </div>
                            <svg
                                className="w-5 h-5 text-text-light group-hover:text-gold group-hover:translate-x-1 transition-all"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </a>

                        {/* Ã‡alÄ±ÅŸma Saatleri */}
                        <div className="bg-card-bg rounded-2xl p-6 border border-border">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-2xl flex-shrink-0">
                                    ğŸ•
                                </div>
                                <div className="font-semibold text-foreground text-base">
                                    Ã‡alÄ±ÅŸma Saatleri
                                </div>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center py-2 border-b border-border">
                                    <span className="text-text-muted">Pazartesi - Cumartesi</span>
                                    <span className="font-semibold text-foreground">
                                        10:00 - 22:00
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-text-muted">Pazar</span>
                                    <span className="font-semibold text-foreground">
                                        10:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                            href="tel:+903805245701"
                            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-4 rounded-2xl hover:bg-primary-dark transition-colors text-base no-underline"
                        >
                            <span className="text-xl">ğŸ“</span>
                            Hemen Ara
                        </a>
                        <a
                            href="https://wa.me/903805245701"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-4 rounded-2xl hover:bg-[#1ea952] transition-colors text-base no-underline"
                        >
                            <span className="text-xl">ğŸ’¬</span>
                            WhatsApp ile Yaz
                        </a>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0!2d30.84!3d40.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUwJzI0LjAiTiAzMMKwNTAnMjQuMCJF!5e0!3m2!1str!2str!4v1!5m2!1str!2str"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Emre Pide Salonu Konum"
                        />
                    </div>
                </div>
            </section>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Emre Pide Salonu",
                        telephone: "+903805245701",
                        email: "info@emrepide.com.tr",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Azmimilli, Serhat Sk.",
                            addressLocality: "DÃ¼zce",
                            postalCode: "81020",
                            addressCountry: "TR",
                        },
                        openingHoursSpecification: {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: [
                                "Monday", "Tuesday", "Wednesday", "Thursday",
                                "Friday", "Saturday", "Sunday",
                            ],
                            opens: "10:00",
                            closes: "22:00",
                        },
                    }),
                }}
            />
        </div>
    );
}
