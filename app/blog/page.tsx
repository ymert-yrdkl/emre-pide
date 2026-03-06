import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
    title: "Blog — Düzce Pide Kültürü ve Taş Fırın Lezzetleri",
    description:
        "Emre Pide Salonu blog: Düzce'de taş fırın pide yapımı, Trabzon pidesi tarifleri, pide çeşitleri rehberi ve yerel lezzet kültürü hakkında yazılar.",
    alternates: {
        canonical: "https://emrepide.com.tr/blog",
    },
};

const blogPosts = [
    {
        slug: "tas-firinda-pide-nasil-yapilir",
        title: "Taş Fırında Pide Nasıl Yapılır? Adım Adım Rehber",
        excerpt:
            "Taş fırında pide yapımının sırrı hamurun kıvamında ve fırının sıcaklığında gizlidir. Günlük hazırlanan hamur, doğru dinlenme süresi ve 300°C üzerindeki taş fırın birleşince ortaya çıkan lezzet başka hiçbir yöntemle elde edilemez.",
        date: "2026-03-05",
        category: "Taş Fırın",
        image: "/images/menu/trabzon pide.png",
        readTime: "5 dk",
    },
    {
        slug: "trabzon-pidesi-nedir-ozellikleri",
        title: "Trabzon Pidesi Nedir? Düzce'de Karadeniz Lezzeti",
        excerpt:
            "Trabzon pidesi, Karadeniz mutfağının en güçlü temsilcilerinden biridir. Tereyağlı hamuru, kuşbaşı eti ve yumurtası ile standart pideden ayrılan bu lezzet, Düzce'de Emre Pide'nin en çok tercih edilen ürünlerinden biridir.",
        date: "2026-03-01",
        category: "Pide Çeşitleri",
        image: "/images/menu/kavurmalı pide.png",
        readTime: "4 dk",
    },
    {
        slug: "duzce-pide-kulturu",
        title: "Düzce'nin Pide Kültürü: Yerel Lezzetlerin Hikayesi",
        excerpt:
            "Düzce, Karadeniz ile Marmara arasında köprü olan bir şehirdir. Bu coğrafi konum, mutfak kültürünü de zenginleştirmiştir. Taş fırın pideciliği Düzce'de nesiller boyu aktarılan bir gelenektir.",
        date: "2026-02-25",
        category: "Kültür",
        image: "/images/menu/kıymalı.png",
        readTime: "6 dk",
    },
    {
        slug: "kiremit-yemekleri-rehberi",
        title: "Kiremitte Yemek Nedir? Kiremit Köfte ve Daha Fazlası",
        excerpt:
            "Kiremit üzerinde pişirilen yemekler, yüksek ısıda eşit dağılan sıcaklık sayesinde etin doğal suyunu korur. Kiremitte köfte, kuşbaşı ve sucuk en popüler seçenekler arasındadır.",
        date: "2026-02-20",
        category: "Kiremit",
        image: "/images/menu/kiremit köfte.png",
        readTime: "4 dk",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen">
            <SiteHeader />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#1c120c] py-20 text-white md:py-28">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(214,171,95,0.18),transparent_35%)]" />
                    <div className="site-shell relative max-w-3xl">
                        <span className="section-kicker text-[#f4d7a0]">Blog</span>
                        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.05] text-[#fff6e8]">
                            Taş fırın lezzetleri
                            <br />
                            <span className="text-[#f4d7a0]">ve pide kültürü</span>
                        </h1>
                        <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-white/70">
                            Düzce&apos;de pide yapım gelenekleri, taş fırın sırları, pide çeşitleri rehberi ve yerel lezzet kültürü hakkında yazılarımız.
                        </p>
                    </div>
                </section>

                {/* Blog Listesi */}
                <section className="section-pad">
                    <div className="site-shell">
                        <div className="grid gap-8 md:grid-cols-2">
                            {blogPosts.map((post, i) => (
                                <article
                                    key={post.slug}
                                    className={`group site-card overflow-hidden transition-transform hover:-translate-y-1 ${i === 0 ? "md:col-span-2" : ""}`}
                                >
                                    <div className={`grid ${i === 0 ? "md:grid-cols-2" : ""}`}>
                                        <div className={`relative ${i === 0 ? "aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"} overflow-hidden bg-[#2e1c15]`}>
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
                                            />
                                            <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-white">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-3">
                                                <time className="text-[0.75rem] text-text-muted">{new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time>
                                                <span className="text-[0.75rem] text-text-muted">·</span>
                                                <span className="text-[0.75rem] text-text-muted">{post.readTime} okuma</span>
                                            </div>
                                            <h2 className="font-[family-name:var(--font-playfair)] text-[1.4rem] leading-snug">{post.title}</h2>
                                            <p className="mt-3 text-[0.92rem] leading-7 text-text-muted">{post.excerpt}</p>
                                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                                                Devamını Oku
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Blog JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        name: "Emre Pide Salonu Blog",
                        description: "Düzce'de taş fırın pide yapımı, pide çeşitleri ve yerel lezzet kültürü hakkında yazılar.",
                        url: "https://emrepide.com.tr/blog",
                        publisher: {
                            "@type": "Restaurant",
                            name: "Emre Pide Salonu",
                            url: "https://emrepide.com.tr",
                        },
                        blogPost: blogPosts.map((post) => ({
                            "@type": "BlogPosting",
                            headline: post.title,
                            description: post.excerpt,
                            datePublished: post.date,
                            url: `https://emrepide.com.tr/blog/${post.slug}`,
                            author: {
                                "@type": "Organization",
                                name: "Emre Pide Salonu",
                            },
                        })),
                    }),
                }}
            />

            <SiteFooter />
        </div>
    );
}
