// =====================================================
// assets.js — Nails by Prisca
// Loads all image/video assets from GitHub Pages
// =====================================================

const BASE = 'https://tafika-itaye.github.io/nailsbyprisca/assets/';

// All known asset filenames from the GitHub repo
const ALL_ASSETS = [
  '04db3b3e1b87294741346222851055400.png',
  '294fe7f8d9d362423343ddfdd52714d0.png',
  '330881cd9fdef515f5520af2a406f16b.png',
  '3c3550c7beb07ca4ee4dcf13e0771cb4.png',
  '3f9c9fd51d8ae0760d53d4555bdff2c8.png',
  '4edbb2cef8a3ada7c9f9482e340e6a8b.png',
  '878ad3bdcaf3fc80655e4afd322b0e29.png',
  'a1e5696a126de674a21aec567cb81406.png',
  'a3531d6885510b86286c4821dd7f7e40.png',
  'a5c7d6fafc18d187387a718534f0e949.png',
  'b3a4fc70c338382b85ede39a2445d542.png',
  'b90cc83fd0e0ebaf0a59384ae63e57e8.mp4',
  'd685b00b8a89f344c74eb99a0cfd5c83.png',
  'de45ceda1f393f6dbf4789bca4801748.png',
  'de6a695b360afb0f10cc2f5dd9f974b9.png',
];

// Categorise by content type
const VIDEOS = ALL_ASSETS.filter(f => f.endsWith('.mp4'));
const IMAGES = ALL_ASSETS.filter(f => !f.endsWith('.mp4'));

// Categorise images by content (manual tagging based on visible thumbnails)
const NAIL_IMAGES = [
  '3c3550c7beb07ca4ee4dcf13e0771cb4.png',
  '3f9c9fd51d8ae0760d53d4555bdff2c8.png',
  '4edbb2cef8a3ada7c9f9482e340e6a8b.png',
  '878ad3bdcaf3fc80655e4afd322b0e29.png',
  'a3531d6885510b86286c4821dd7f7e40.png',
  'b3a4fc70c338382b85ede39a2445d542.png',
  'd685b00b8a89f344c74eb99a0cfd5c83.png',
];

const JEWELLERY_IMAGES = [
  '04db3b3e1b87294741346222851055400.png',
  '294fe7f8d9d362423343ddfdd52714d0.png',
  '330881cd9fdef515f5520af2a406f16b.png',
  'a1e5696a126de674a21aec567cb81406.png',
  'a5c7d6fafc18d187387a718534f0e949.png',
];

const ACCESSORY_IMAGES = [
  '3c3550c7beb07ca4ee4dcf13e0771cb4.png',
  'de45ceda1f393f6dbf4789bca4801748.png',
  'de6a695b360afb0f10cc2f5dd9f974b9.png',
];

// Product data built from assets
const PRODUCTS = [
  { id: 1, name: 'Hot Pink Stiletto Set', category: 'nails', desc: 'Vibrant hot pink acrylic stilettos — fierce & long lasting.', img: '3c3550c7beb07ca4ee4dcf13e0771cb4.png', badge: 'Popular' },
  { id: 2, name: 'Pastel Pink Oval Set', category: 'nails', desc: 'Soft pastel pink oval shape — elegant everyday look.', img: '3f9c9fd51d8ae0760d53d4555bdff2c8.png', badge: null },
  { id: 3, name: 'Teal Coffin Set', category: 'nails', desc: 'Bold teal coffin nails with glossy finish.', img: '4edbb2cef8a3ada7c9f9482e340e6a8b.png', badge: 'New' },
  { id: 4, name: 'Nude Almond Set', category: 'nails', desc: 'Classic nude almond — timeless, sophisticated.', img: '878ad3bdcaf3fc80655e4afd322b0e29.png', badge: null },
  { id: 5, name: 'French Tips Set', category: 'nails', desc: 'Clean white French tips for a polished finish.', img: 'a3531d6885510b86286c4821dd7f7e40.png', badge: null },
  { id: 6, name: 'Dual Tone Nails', category: 'nails', desc: 'Two-colour hand-painted nail art, customisable.', img: 'b3a4fc70c338382b85ede39a2445d542.png', badge: null },
  { id: 7, name: 'Crystal Stud Earrings', category: 'jewelry', desc: 'Dainty crystal studs perfect for any occasion.', img: '04db3b3e1b87294741346222851055400.png', badge: 'Popular' },
  { id: 8, name: 'Black Rose Earrings', category: 'jewelry', desc: 'Elegant black fabric rose stud earrings.', img: '294fe7f8d9d362423343ddfdd52714d0.png', badge: null },
  { id: 9, name: 'Gold Flower Studs', category: 'jewelry', desc: 'Delicate gold-tone flower stud earrings.', img: '330881cd9fdef515f5520af2a406f16b.png', badge: 'New' },
  { id: 10, name: 'Black Fashion Earrings Set', category: 'jewelry', desc: 'A bold mix of black fashion earring styles.', img: 'a1e5696a126de674a21aec567cb81406.png', badge: null },
  { id: 11, name: 'Statement Earrings', category: 'jewelry', desc: 'Eye-catching statement earrings to elevate any outfit.', img: 'a5c7d6fafc18d187387a718534f0e949.png', badge: null },
  { id: 12, name: 'LV-Style Wallet (Brown)', category: 'accessories', desc: 'Designer-inspired trifold wallet with signature pattern.', img: 'de45ceda1f393f6dbf4789bca4801748.png', badge: 'Hot' },
  { id: 13, name: 'LV-Style Long Wallet', category: 'accessories', desc: 'Long bi-fold wallet — elegant & spacious.', img: 'de6a695b360afb0f10cc2f5dd9f974b9.png', badge: null },
  { id: 14, name: 'Black Bangle & Ring', category: 'accessories', desc: 'Chunky black bangle & matching ring set.', img: 'd685b00b8a89f344c74eb99a0cfd5c83.png', badge: null },
];

window.NBP = { BASE, ALL_ASSETS, IMAGES, VIDEOS, NAIL_IMAGES, JEWELLERY_IMAGES, ACCESSORY_IMAGES, PRODUCTS };
