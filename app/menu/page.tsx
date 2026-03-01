import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Menü",
    description:
        "Emre Pide Salonu menüsü — Taş fırında pişmiş pideler, lahmacun, içecekler ve tatlılar. Fiyatları ve çeşitleri inceleyin.",
};

// Menü verileri — ileride veritabanından çekilecek
const menuData = {
    pideler: [
        { name: "Kıymalı Pide", price: 150 },
        { name: "Kıymalı Kaşarlı Pide", price: 170 },
        { name: "Kuşbaşılı Pide", price: 170 },
        { name: "Kuşbaşılı Kaşarlı Pide", price: 190 },
        { name: "Kaşarlı Pide", price: 170 },
        { name: "Kaşarlı Sucuklu Pide", price: 200 },
        { name: "Kaşarlı Yumurtalı Pide", price: 180 },
        { name: "Kaşarlı Sucuklu Yumurtalı Pide", price: 210 },
        { name: "Trabzon Pide", price: 220 },
        { name: "Trabzon Yağlısı Pide", price: 230 },
        { name: "Tavuklu Pide", price: 130 },
        { name: "Tavuklu Pide (Kaşarlı)", price: 150 },
        { name: "Çıtır Kıymalı Pide", price: 170 },
        { name: "Çıtır Kıymalı Kaşarlı Pide", price: 190 },
        { name: "Kavurmalı Pide", price: 250 },
        { name: "Kavurmalı Kaşarlı Pide", price: 270 },
        { name: "Pastırmalı Pide", price: 250 },
        { name: "Pastırmalı Kaşarlı Pide", price: 270 },
        { name: "Et Dönerli Pide", price: 250 },
        { name: "Et Döner Kaşarlı Pide", price: 270 },
        { name: "Bafra Pidesi", price: 200 },
        { name: "Tavuk Dönerli Pide", price: 150 },
        { name: "Tavuk Döner Kaşarlı Pide", price: 170 },
        { name: "Sucuk Döner Pide", price: 260 },
        { name: "Sucuk Döner Kaşarlı Pide", price: 280 },
        { name: "Emre Pide Special", price: 170 },
        { name: "Çikolatalı Pide", price: 150 },
        { name: "Çikolatalı Cevizli Pide", price: 170 },
        { name: "Tam Karışık Pide", price: 220 },
        { name: "Kaşarlı Sebzeli Pide", price: 190 },
        { name: "Kuşbaşı Yumurtalı Pide", price: 180 },
        { name: "Kıymalı Yumurtalı Pide", price: 160 },
        { name: "Dört Mevsim Pide", price: 250 },
        { name: "Kıymalı Mantarlı Pide", price: 200 },
        { name: "Kaşarlı Sosisli Pide", price: 220 },
        { name: "Akdeniz Pide", price: 220 },
        { name: "Kokoreçli Pide", price: 270 },
        { name: "Ispanaklı Pide", price: 220 },
        { name: "Pizza", price: 220 },
        { name: "Ton Balıklı Pide", price: 225 },
        { name: "Beyaz Peynirli Pide", price: 170 },
        { name: "Patatesli Pide", price: 120 },
    ],
    lahmacun: [
        { name: "Lahmacun", price: 90 },
        { name: "Kaşarlı Lahmacun", price: 100 },
        { name: "Cevizli Lahmacun", price: 120 },
    ],
    tatlilar: [
        { name: "Profiterol", price: 60 },
        { name: "Supangle", price: 60 },
        { name: "Kazandibi", price: 60 },
        { name: "Sufle", price: 120 },
        { name: "Katmer", price: 130 },
        { name: "Künefe", price: 120 },
    ],
    kiremit: [
        { name: "Kiremitte Köfte", price: 280 },
        { name: "Kiremitte Kuşbaşı", price: 280 },
        { name: "Kiremitte Sucuk", price: 220 },
        { name: "Kiremitte Tavuk", price: 200 },
        { name: "Kiremitte Kanat", price: 220 },
    ],
    icecekler: [
        { name: "2,5 Lt. Kola-Fanta", price: 90 },
        { name: "1 Lt. Kola-Fanta", price: 70 },
        { name: "Kutu Kola-Fanta", price: 50 },
        { name: "Sprite", price: 50 },
        { name: "Kutu Meyve Suyu", price: 50 },
        { name: "Şişe Kola - Fanta", price: 40 },
        { name: "Kutu Cola Zero", price: 50 },
        { name: "Laz Bombası", price: 40 },
        { name: "Uludağ Gazoz", price: 40 },
        { name: "Şalgam (Acılı/Acısız)", price: 40 },
        { name: "Ayran (Büyük)", price: 30 },
        { name: "Ayran (Küçük)", price: 20 },
        { name: "Soda", price: 15 },
        { name: "Meyveli Soda", price: 20 },
        { name: "Su", price: 10 },
        { name: "Kutu Ice Tea", price: 50 },
        { name: "Pepsi Max", price: 50 },
        { name: "Niğde Gazoz", price: 50 },
    ],
};

const categoryInfo: Record<string, { emoji: string; label: string }> = {
    pideler: { emoji: "🫓", label: "Pideler" },
    lahmacun: { emoji: "🌯", label: "Lahmacun" },
    tatlilar: { emoji: "🍮", label: "Tatlılar" },
    kiremit: { emoji: "🍳", label: "Kiremit" },
    icecekler: { emoji: "🥤", label: "İçecekler" },
};

export default function MenuPage() {
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
                        <p className="text-xs text-[var(--text-light)]">Menü</p>
                    </div>
                </div>

                {/* Category filter tabs */}
                <div className="max-w-lg mx-auto px-4 pb-3">
                    <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {Object.entries(categoryInfo).map(([key, { emoji, label }]) => (
                            <a
                                key={key}
                                href={`#${key}`}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-[var(--warm-bg)] text-[var(--text-muted)] hover:bg-[var(--primary)] hover:text-white transition-colors whitespace-nowrap"
                            >
                                <span>{emoji}</span>
                                <span>{label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Menu Content */}
            <main className="max-w-lg mx-auto px-4 py-6">
                {Object.entries(menuData).map(([category, items]) => {
                    const info = categoryInfo[category];
                    return (
                        <section key={category} id={category} className="mb-8 scroll-mt-28">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-xl">
                                    {info.emoji}
                                </div>
                                <h2 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-[var(--foreground)]">
                                    {info.label}
                                </h2>
                                <div className="flex-1 h-px bg-[var(--border)]" />
                            </div>

                            {/* Menu Items */}
                            <div className="space-y-3">
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start justify-between gap-4 bg-[var(--card-bg)] rounded-xl p-4 border border-[var(--border)] hover:shadow-sm transition-shadow"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-[var(--foreground)] text-[15px]">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0 bg-[var(--primary)]/8 text-[var(--primary)] font-bold text-sm px-3 py-1.5 rounded-lg">
                                            ₺{item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}

                {/* Info Footer */}
                <div className="mt-8 p-4 bg-[var(--warm-bg)] rounded-2xl text-center">
                    <p className="text-sm text-[var(--text-muted)] mb-3">
                        📍 Fiyatlar güncel olup değişiklik gösterebilir
                    </p>
                    <a
                        href="tel:+903805245701"
                        className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--primary-dark)] transition-colors text-sm"
                    >
                        <span>📞</span>
                        Sipariş İçin Ara
                    </a>
                </div>

                {/* Bottom Spacing */}
                <div className="h-8" />
            </main>

            {/* JSON-LD Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Restaurant",
                        name: "Emre Pide Salonu",
                        servesCuisine: "Turkish",
                        priceRange: "₺",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Azmimilli, Serhat Sk.",
                            addressLocality: "Düzce",
                            postalCode: "81020",
                            addressCountry: "TR",
                        },
                        telephone: "+90 380 524 57 01",
                        menu: "https://emrepide.com.tr/menu",
                        hasMenu: {
                            "@type": "Menu",
                            hasMenuSection: Object.entries(menuData).map(([category, items]) => ({
                                "@type": "MenuSection",
                                name: categoryInfo[category].label,
                                hasMenuItem: items.map((item) => ({
                                    "@type": "MenuItem",
                                    name: item.name,
                                    offers: {
                                        "@type": "Offer",
                                        price: item.price,
                                        priceCurrency: "TRY",
                                    },
                                })),
                            })),
                        },
                    }),
                }}
            />
        </div>
    );
}
