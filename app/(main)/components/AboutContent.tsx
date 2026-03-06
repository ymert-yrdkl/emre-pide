export default function AboutContent() {
  return (
    <section className="bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
          <div className="relative overflow-hidden rounded-[36px] bg-koyu p-8 text-krem md:p-10">
            <span className="mb-5 inline-flex rounded-full bg-primary px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white">
              Taş Fırın
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-[1.8rem] italic leading-snug text-gold md:text-[2rem]">
              &quot;Pide bir sanattır,
              <br />
              her dilim bir hikaye.&quot;
            </h3>
            <p className="mt-5 text-[0.98rem] leading-8 text-krem/72">
              1999 yılından bu yana aynı tarif, aynı özen ve aynı taş fırın ritmi ile çalışıyoruz. Bizim için lezzet, günlük disiplinin sonucudur.
            </p>
            <span className="absolute bottom-0 right-3 text-[7rem] opacity-10">🥙</span>
          </div>
          <div className="absolute bottom-4 right-4 rounded-[24px] bg-primary px-6 py-5 text-center text-white shadow-xl md:bottom-5 md:right-5">
            <strong className="block font-[family-name:var(--font-serif)] text-2xl">1999</strong>
            <span className="text-[0.72rem] uppercase tracking-[0.1em] opacity-85">Kuruluş Yılı</span>
          </div>
        </div>

        <div className="max-w-2xl">
          <span className="mb-4 block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">
            Biz Kimiz
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2.2rem,4vw,3.2rem)] leading-tight text-foreground">
            Gelenekten gelen
            <br />
            <em className="italic text-primary">özgün lezzet</em>
          </h2>
          <p className="mt-6 text-[1rem] leading-8 text-text-muted">
            Karadeniz usulü hamur işlerinin inceliğini, Düzce&apos;de sevilen güçlü iç harçlarla birleştiriyoruz. Her ürün, taş fırında kontrollü ısı ile pişiyor.
          </p>
          <p className="mt-4 text-[1rem] leading-8 text-text-muted">
            Sabah hazırlanan taze malzemeler, gün boyu sıcak kalan taş fırın ve yıllardır değişmeyen iş disiplini sayesinde Emre Pide Salonu mahalle klasiği olmayı sürdürüyor.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
              <div key={item.title} className="rounded-[24px] border border-border bg-white p-6 shadow-sm md:p-7">
                <h3 className="mb-3 font-semibold text-foreground">{item.title}</h3>
                <p className="text-[0.95rem] leading-8 text-text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
