import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description:
        "Emre Pide Salonu iletişim bilgileri — Adres, telefon numarası ve çalışma saatleri. Düzce'de taş fırında pide.",
};

export default function IletisimPage() {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
                <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-3">
                    <a href="/" className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </a>
                    <div>
                        <h1 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-[var(--foreground)]">
                            Emre Pide Salonu
                        </h1>
                        <p className="text-xs text-[var(--text-light)]">İletişim</p>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-lg mx-auto px-4 py-6 space-y-4">
                {/* Adres */}
                <a
                    href="https://maps.google.com/?q=Azmimilli,+Serhat+Sk.,+81020+Düzce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-[var(--card-bg)] rounded-2xl p-5 border border-[var(--border)] hover:shadow-md hover:border-[var(--primary)] transition-all group"
                >
                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                        📍
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-[var(--foreground)] mb-1">Adres</div>
                        <div className="text-sm text-[var(--text-muted)] leading-relaxed">
                            Azmimilli, Serhat Sk.<br />
                            81020 Düzce
                        </div>
                    </div>
                    <svg className="w-5 h-5 text-[var(--text-light)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>

                {/* Telefon */}
                <a
                    href="tel:+903805245701"
                    className="flex items-center gap-4 bg-[var(--card-bg)] rounded-2xl p-5 border border-[var(--border)] hover:shadow-md hover:border-[var(--primary)] transition-all group"
                >
                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        📞
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-[var(--foreground)]">Telefon</div>
                        <div className="text-sm text-[var(--text-muted)]">0380 524 57 01</div>
                    </div>
                    <svg className="w-5 h-5 text-[var(--text-light)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>

                {/* Çalışma Saatleri */}
                <div className="bg-[var(--card-bg)] rounded-2xl p-5 border border-[var(--border)]">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-2xl">
                            🕐
                        </div>
                        <div className="font-semibold text-[var(--foreground)]">Çalışma Saatleri</div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                            <span className="text-[var(--text-muted)]">Pazartesi - Cumartesi</span>
                            <span className="font-medium text-[var(--foreground)]">10:00 - 22:00</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-[var(--text-muted)]">Pazar</span>
                            <span className="font-medium text-[var(--foreground)]">10:00 - 22:00</span>
                        </div>
                    </div>
                </div>

                {/* Hemen Ara Butonu */}
                <a
                    href="tel:+903805245701"
                    className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-4 rounded-2xl hover:bg-[var(--primary-dark)] transition-colors text-base w-full"
                >
                    <span className="text-xl">📞</span>
                    Hemen Ara
                </a>

                {/* Harita */}
                <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.0!2d30.84!3d40.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUwJzI0LjAiTiAzMMKwNTAnMjQuMCJF!5e0!3m2!1str!2str!4v1!5m2!1str!2str"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Emre Pide Salonu Konum"
                    />
                </div>

                {/* Bottom Spacing */}
                <div className="h-4" />
            </main>
        </div>
    );
}
