export type MenuItem = {
  name: string;
  price: number;
  image?: string;
};

export type MenuCategoryKey =
  | "pideler"
  | "lahmacun"
  | "tatlilar"
  | "kiremit"
  | "icecekler";

export const categoryInfo: Record<MenuCategoryKey, { emoji: string; label: string }> = {
  pideler: { emoji: "🥙", label: "Pideler" },
  lahmacun: { emoji: "🌯", label: "Lahmacun" },
  tatlilar: { emoji: "🍮", label: "Tatlılar" },
  kiremit: { emoji: "🍳", label: "Kiremit" },
  icecekler: { emoji: "🥤", label: "İçecekler" },
};

export const menuData: Record<MenuCategoryKey, MenuItem[]> = {
  pideler: [
    { name: "Kıymalı Pide", price: 150, image: "/images/menu/kıymalı.png" },
    { name: "Kıymalı Kaşarlı Pide", price: 170, image: "/images/menu/kıymalı kaşarlı.png" },
    { name: "Kuşbaşılı Pide", price: 170 },
    { name: "Kuşbaşılı Kaşarlı Pide", price: 190, image: "/images/menu/kuşbaşı kaşarlı.png" },
    { name: "Kaşarlı Pide", price: 170, image: "/images/menu/kaşarlı.png" },
    { name: "Kaşarlı Sucuklu Pide", price: 200, image: "/images/menu/kaşarlı sucuklu.png" },
    { name: "Kaşarlı Yumurtalı Pide", price: 180, image: "/images/menu/kaşarlı yumurtalı.png" },
    {
      name: "Kaşarlı Sucuklu Yumurtalı Pide",
      price: 210,
      image: "/images/menu/sucuklu kaşarlı yumurtalı.png",
    },
    { name: "Trabzon Pide", price: 220, image: "/images/menu/trabzon pide.png" },
    { name: "Trabzon Yağlısı Pide", price: 230 },
    { name: "Tavuklu Pide", price: 130, image: "/images/menu/TAVUKLU PİDE.png" },
    { name: "Tavuklu Pide (Kaşarlı)", price: 150, image: "/images/menu/TAVUKLU KAŞARLI.png" },
    { name: "Çıtır Kıymalı Pide", price: 170 },
    { name: "Çıtır Kıymalı Kaşarlı Pide", price: 190, image: "/images/menu/çıtır kıyma kaşar.png" },
    { name: "Kavurmalı Pide", price: 250, image: "/images/menu/kavurmalı pide.png" },
    { name: "Kavurmalı Kaşarlı Pide", price: 270, image: "/images/menu/kavurmalı kaşarlı.png" },
    { name: "Pastırmalı Pide", price: 250, image: "/images/menu/pastırmalı.png" },
    { name: "Pastırmalı Kaşarlı Pide", price: 270, image: "/images/menu/pastırma kaşar.png" },
    { name: "Et Dönerli Pide", price: 250, image: "/images/menu/et dönerli.png" },
    { name: "Et Döner Kaşarlı Pide", price: 270, image: "/images/menu/et dönerli kaşarlı.png" },
    { name: "Bafra Pidesi", price: 200, image: "/images/menu/bafra pidesi.png" },
    { name: "Tavuk Dönerli Pide", price: 150, image: "/images/menu/kaşarlı tavık dönerli pide.png" },
    {
      name: "Tavuk Döner Kaşarlı Pide",
      price: 170,
      image: "/images/menu/tavuk dönerli kaşarlı pide.png",
    },
    { name: "Sucuk Döner Pide", price: 260, image: "/images/menu/sucuk döner.png" },
    { name: "Sucuk Döner Kaşarlı Pide", price: 280, image: "/images/menu/sucuk döner kaşar.png" },
    { name: "Emre Pide Special", price: 170 },
    { name: "Çikolatalı Pide", price: 150 },
    { name: "Çikolatalı Cevizli Pide", price: 170 },
    { name: "Tam Karışık Pide", price: 220, image: "/images/menu/tam karışık pide.png" },
    { name: "Kaşarlı Sebzeli Pide", price: 190 },
    { name: "Kuşbaşı Yumurtalı Pide", price: 180, image: "/images/menu/kuşbaşı yumurtalı.png" },
    { name: "Kıymalı Yumurtalı Pide", price: 160, image: "/images/menu/kıymalı yumurtalı.png" },
    { name: "Dört Mevsim Pide", price: 250, image: "/images/menu/dört mevsim pide.png" },
    { name: "Kıymalı Mantarlı Pide", price: 200 },
    { name: "Kaşarlı Sosisli Pide", price: 220 },
    { name: "Akdeniz Pide", price: 220, image: "/images/menu/akdeniz pide.png" },
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
  ],
  kiremit: [
    { name: "Kiremitte Köfte", price: 280, image: "/images/menu/kiremit köfte.png" },
    { name: "Kiremitte Kuşbaşı", price: 280, image: "/images/menu/kiremit kuşbaşı.png" },
    { name: "Kiremitte Sucuk", price: 220, image: "/images/menu/kiremit sucuk.png" },
    { name: "Kiremitte Tavuk", price: 200, image: "/images/menu/kiremit tavuk.png" },
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
