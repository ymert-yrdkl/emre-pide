import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--warm-bg)] px-4">
      {/* Decorative top border */}
      <div className="w-full max-w-md">
        {/* Logo / Brand Area */}
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--primary)] mb-6 shadow-lg">
            <span className="text-4xl">🫓</span>
          </div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-[var(--foreground)] mb-2">
            Emre Pide Salonu
          </h1>
          <p className="text-[var(--text-muted)] text-sm mb-8">
            Taş fırında geleneksel lezzet
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="space-y-3 animate-fade-in-up-delay-1">
          <Link
            href="/menu"
            className="flex items-center gap-4 bg-[var(--card-bg)] rounded-2xl p-5 shadow-sm border border-[var(--border)] hover:shadow-md hover:border-[var(--primary)] transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📋
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[var(--foreground)]">Menümüz</div>
              <div className="text-sm text-[var(--text-light)]">Pideler, içecekler ve daha fazlası</div>
            </div>
            <svg className="w-5 h-5 text-[var(--text-light)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/iletisim"
            className="flex items-center gap-4 bg-[var(--card-bg)] rounded-2xl p-5 shadow-sm border border-[var(--border)] hover:shadow-md hover:border-[var(--accent)] transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📍
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[var(--foreground)]">İletişim</div>
              <div className="text-sm text-[var(--text-light)]">Adres, telefon ve çalışma saatleri</div>
            </div>
            <svg className="w-5 h-5 text-[var(--text-light)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href="tel:+905551234567"
            className="flex items-center gap-4 bg-[var(--primary)] rounded-2xl p-5 shadow-sm hover:bg-[var(--primary-dark)] transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📞
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white">Hemen Ara</div>
              <div className="text-sm text-white/70">0555 123 45 67</div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in-up-delay-3">
          <p className="text-xs text-[var(--text-light)]">
            © 2025 Emre Pide Salonu — Tüm hakları saklıdır
          </p>
        </div>
      </div>
    </div>
  );
}
