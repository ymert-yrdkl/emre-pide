export default function SiteFooter() {
  return (
    <footer className="border-t border-[#3c2a21] bg-[#1c120c] py-10 text-white/65">
      <div className="site-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-playfair)] text-2xl text-[#f4d7a0]">Emre Pide Salonu</p>
          <p className="mt-2 max-w-md text-sm leading-7 text-white/55">
            Düzce&apos;de taş fırında hazırlanan sıcak pide çeşitleri, hızlı servis ve QR menü erişimi.
          </p>
        </div>

        <div className="text-sm leading-7 text-white/55 md:text-right">
          <p>Azmimilli, Serhat Sk. 81020 Düzce</p>
          <p>0380 524 57 01</p>
          <p>Her gün 10:00 - 22:00</p>
        </div>
      </div>
    </footer>
  );
}
