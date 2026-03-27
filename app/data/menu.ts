export type MenuItem = {
  name: string;
  price: number;
  price15?: number;
  image?: string;
};

export type MenuCategoryKey =
  | "pideler"
  | "lahmacun"
  | "tatlilar"
  | "kiremit"
  | "icecekler";

export const categoryInfo: Record<MenuCategoryKey, { emoji: string; label: string; itemIcon: string }> = {
  pideler: { emoji: "🥙", label: "Pideler", itemIcon: "🍕" },
  lahmacun: { emoji: "🌯", label: "Lahmacun", itemIcon: "🌶️" },
  tatlilar: { emoji: "🍮", label: "Tatlılar", itemIcon: "🍰" },
  kiremit: { emoji: "🍳", label: "Kiremit", itemIcon: "🔥" },
  icecekler: { emoji: "🥤", label: "İçecekler", itemIcon: "🧃" },
};

export const menuData: Record<MenuCategoryKey, MenuItem[]> = {
  pideler: [
    { name: "Kıymalı Pide", price: 200, price15: 300, image: "/images/menu/kıymalı.png" },
    { name: "Kıymalı Yumurtalı Pide", price: 220, price15: 320, image: "/images/menu/kıymalı yumurtalı.png" },
    { name: "Kıymalı Kaşarlı Pide", price: 220, price15: 330, image: "/images/menu/kıymalı kaşarlı.png" },
    { name: "Kuşbaşılı Pide", price: 220, price15: 330 },
    { name: "Kuşbaşılı Yumurtalı Pide", price: 240, price15: 350, image: "/images/menu/kuşbaşı yumurtalı.png" },
    { name: "Kuşbaşılı Kaşarlı Pide", price: 240, price15: 350, image: "/images/menu/kuşbaşı kaşarlı.png" },
    { name: "Kaşarlı Pide", price: 220, price15: 330, image: "/images/menu/kaşarlı.png" },
    { name: "Kaşarlı Yumurtalı Pide", price: 240, price15: 350, image: "/images/menu/kaşarlı yumurtalı.png" },
    { name: "Kaşarlı Sosisli Pide", price: 250, price15: 375 },
    { name: "Kaşarlı Sebzeli Pide", price: 220, price15: 330 },
    { name: "Kaşarlı Mantarlı Pide", price: 240, price15: 360 },
    { name: "Kaşarlı Sucuklu Pide", price: 250, price15: 375, image: "/images/menu/kaşarlı sucuklu.png" },
    { name: "Kaşarlı Sucuklu Yumurtalı Pide", price: 270, price15: 395, image: "/images/menu/sucuklu kaşarlı yumurtalı.png" },
    { name: "Kavurmalı Pide", price: 350, price15: 525, image: "/images/menu/kavurmalı pide.png" },
    { name: "Kavurmalı Kaşarlı Pide", price: 370, price15: 555, image: "/images/menu/kavurmalı kaşarlı.png" },
    { name: "Pastırmalı Pide", price: 370, price15: 555, image: "/images/menu/pastırmalı.png" },
    { name: "Pastırmalı Kaşarlı Pide", price: 390, price15: 585, image: "/images/menu/pastırma kaşar.png" },
    { name: "Bafra Pidesi", price: 250, price15: 375, image: "/images/menu/bafra pidesi.png" },
    { name: "Ton Balıklı Pide", price: 250, price15: 375 },
    { name: "Tavuklu Pide", price: 180, price15: 270, image: "/images/menu/TAVUKLU PİDE.png" },
    { name: "Tavuklu Kaşarlı Pide", price: 200, price15: 300, image: "/images/menu/TAVUKLU KAŞARLI.png" },
    { name: "Tavuk Dönerli Pide", price: 180, price15: 270, image: "/images/menu/kaşarlı tavık dönerli pide.png" },
    { name: "Tavuk Döner Kaşarlı Pide", price: 200, price15: 300, image: "/images/menu/tavuk dönerli kaşarlı pide.png" },
    { name: "Et Dönerli Pide", price: 350, price15: 525, image: "/images/menu/et dönerli.png" },
    { name: "Et Döner Kaşarlı Pide", price: 370, price15: 555, image: "/images/menu/et dönerli kaşarlı.png" },
    { name: "Emre Pide Special", price: 220, price15: 330 },
    { name: "Ispanaklı Pide", price: 160, price15: 240 },
    { name: "Ispanaklı Kaşarlı Pide", price: 180, price15: 270 },
    { name: "Beyaz Peynirli Pide", price: 220, price15: 330 },
    { name: "Patatesli Pide", price: 160, price15: 240 },
    { name: "Pizza", price: 300, price15: 450 },
    { name: "Trabzon Pidesi", price: 300, price15: 450, image: "/images/menu/trabzon pide.png" },
    { name: "Trabzon Yağlısı", price: 300, price15: 450 },
    { name: "Çıtır Kıymalı Pide", price: 220, price15: 330 },
    { name: "Çıtır Kıymalı Kaşarlı Pide", price: 240, price15: 360, image: "/images/menu/çıtır kıyma kaşar.png" },
    { name: "Tam Karışık Pide", price: 300, price15: 450, image: "/images/menu/tam karışık pide.png" },
  ],
  lahmacun: [
    { name: "Lahmacun", price: 110 },
    { name: "Kaşarlı Lahmacun", price: 120 },
    { name: "Cevizli Lahmacun", price: 130 },
  ],
  tatlilar: [
    { name: "Profiterol", price: 70 },
    { name: "Supangle", price: 70 },
    { name: "Kazandibi", price: 70 },
    { name: "Çikolatalı Pide", price: 200 },
    { name: "Çikolatalı Cevizli Pide", price: 230 },
  ],
  kiremit: [
    { name: "Kiremitte Köfte", price: 350, image: "/images/menu/kiremit köfte.png" },
    { name: "Kiremitte Kuşbaşı", price: 350, image: "/images/menu/kiremit kuşbaşı.png" },
    { name: "Kiremitte Sucuk", price: 300, image: "/images/menu/kiremit sucuk.png" },
    { name: "Kiremitte Kanat", price: 350 },
    { name: "Kiremitte Tavuk", price: 300, image: "/images/menu/kiremit tavuk.png" },
  ],
  icecekler: [
    { name: "Ayran (Büyük)", price: 30 },
    { name: "Ayran (Küçük)", price: 20 },
    { name: "330 ml Kola, Fanta, Sprite", price: 70 },
    { name: "330 ml Meyve Suyu", price: 70 },
    { name: "Soda", price: 20 },
    { name: "Meyveli Soda", price: 25 },
    { name: "Su", price: 15 },
    { name: "Şalgam", price: 60 },
    { name: "Şıra", price: 60 },
    { name: "1 Lt Kola-Fanta", price: 90 },
    { name: "2.5 Lt Kola-Fanta", price: 120 },
  ],
};
