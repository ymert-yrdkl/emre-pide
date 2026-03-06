import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Emre Pide Salonu iletişim bilgileri - adres, telefon, e-posta ve çalışma saatleri. Düzce'de taş fırında pide.",
};

const contactCards = [
  {
    title: "Adres",
    value: "Azmimilli, Serhat Sk. 81020 Düzce",
    href: "https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+Duzce",
    icon: "📍",
    external: true,
  },
  {
    title: "Telefon",
    value: "0380 524 57 01",
    href: "tel:+903805245701",
    icon: "📞",
    external: false,
  },
  {
    title: "E-posta",
    value: "info@emrepide.com.tr",
    href: "mailto:info@emrepide.com.tr",
    icon: "✉️",
    external: false,
  },
];

export default function IletisimPage() {
  return (
    <div className="overflow-x-hidden bg-background">
      <section className="bg-koyu px-6 pb-20 pt-32 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
            Bize Ulaşın
          </span>
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.2rem,5vw,4rem)] leading-tight text-krem">
            Her zaman <em className="italic text-primary">ulaşılabiliriz</em>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-8 text-krem/60">
            Sipariş, rezervasyon veya konum bilgisi için aşağıdaki iletişim kanallarını kullanabilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="rounded-[28px] border border-border bg-white p-6 shadow-sm transition-all no-underline hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                    {card.icon}
                  </div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {card.title}
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-serif)] text-[1.3rem] leading-tight text-foreground">
                    {card.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="rounded-[32px] border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Çalışma Saatleri
                  </span>
                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-border py-2">
                      <span className="text-text-muted">Pazartesi - Cumartesi</span>
                      <span className="font-semibold text-foreground">10:00 - 22:00</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-text-muted">Pazar</span>
                      <span className="font-semibold text-foreground">10:00 - 22:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Hızlı İşlem
                  </span>
                  <div className="mt-5 grid gap-3">
                    <a
                      href="tel:+903805245701"
                      className="rounded-2xl bg-primary px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-primary-dark"
                    >
                      Hemen Ara
                    </a>
                    <a
                      href="https://wa.me/903805245701"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-[#25D366] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-[#1ea952]"
                    >
                      WhatsApp ile Yaz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-border bg-white shadow-[0_20px_60px_rgba(42,23,10,0.12)]">
            <div className="border-b border-border px-6 py-5 md:px-8">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Harita
              </span>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                Konumu doğrudan açabilir veya yol tarifi almak için haritayı kullanabilirsiniz.
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0!2d30.84!3d40.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUwJzI0LjAiTiAzMMKwNTAnMjQuMCJF!5e0!3m2!1str!2str!4v1!5m2!1str!2str"
              width="100%"
              height="100%"
              className="min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emre Pide Salonu Konum"
            />
          </div>
        </div>
      </section>

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
              addressLocality: "Düzce",
              postalCode: "81020",
              addressCountry: "TR",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
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
