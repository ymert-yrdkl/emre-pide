export default function AboutContent() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="bg-koyu rounded-lg p-10 text-krem relative overflow-hidden">
            <span className="inline-block bg-primary text-white text-[0.7rem] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-sm mb-5">
              Taş Fırın
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-[1.6rem] text-gold mb-4 italic leading-snug">
              &quot;Pide bir sanattır,
              <br />
              her dilim bir hikaye.&quot;
            </h3>
            <p className="text-sm leading-relaxed text-krem/70">
              1999 yılından bu yana aynı tarif, aynı özen ve aynı taş fırın ritmi ile çalışıyoruz. Bizim için lezzet, günlük disiplinin sonucudur.
            </p>
            <span className="absolute text-[8rem] right-[-1rem] bottom-[-1rem] opacity-10">🥙</span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-4 rounded-lg text-center shadow-xl z-10">
            <strong className="block font-[family-name:var(--font-serif)] text-2xl">1999</strong>
            <span className="text-[0.7rem] tracking-[0.1em] uppercase opacity-85">Kuruluş Yılı</span>
          </div>
        </div>

        <div>
          <span className="text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-primary block mb-4">
            Biz Kimiz
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,3.5vw,2.8rem)] leading-tight mb-6">
            Gelenekten gelen
            <br />
            <em className="italic text-primary">özgün lezzet</em>
          </h2>
          <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-4">
            Karadeniz usulü hamur işlerinin inceliğini, Düzce&apos;de sevilen güçlü iç harçlarla birleştiriyoruz. Her ürün, taş fırında kontrollü ısı ile pişiyor.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-8">
            Sabah hazırlanan taze malzemeler, gün boyu sıcak kalan taş fırın ve yıllardır değişmeyen iş disiplini sayesinde Emre Pide Salonu, mahalle klasiği olmayı sürdürüyor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Günlük Hazırlık",
                text: "Hamur ve iç harçlar gün içinde taze şekilde hazırlanır.",
              },
              {
                title: "Taş Fırın",
                text: "Sabit ısı dengesiyle daha karakterli ve güçlü tat alınır.",
              },
              {
                title: "Yerel Güven",
                text: "Uzun yıllardır aynı bölgede tanınan bir üretim disiplini var.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
