import type { Brand, Sneaker } from '../types/sneaker';

interface InventoryItem {
  brand: Brand;
  silhouette: string;
  model: string;
  image: string;
  price: number;
  isFeatured?: boolean;
}

const INVENTORY_ITEMS: InventoryItem[] = [
  { brand: 'Adidas', silhouette: 'Samba', model: 'OG White/Black', image: 'https://i.postimg.cc/50jHtNL1/Samba-clasica-blanca.png', price: 650000 },
  { brand: 'Adidas', silhouette: 'Samba', model: 'OG Black/White', image: 'https://i.postimg.cc/sX1B2D7g/Samba-clasica-negra.png', price: 650000 },
  { brand: 'Adidas', silhouette: 'Samba', model: 'XL White/Black', image: 'https://i.postimg.cc/vBD1mHfT/Samba-Xl-Blanca.png', price: 750000 },
  { brand: 'Adidas', silhouette: 'Samba', model: 'XL Black/White', image: 'https://i.postimg.cc/FR1fKs37/Samba-Xl-Negra.png', price: 750000 },
  { brand: 'Adidas', silhouette: 'Superstar', model: 'Black & White', image: 'https://i.postimg.cc/ry3nGfVj/Superstar-blancas.png', price: 550000 },
  { brand: 'Adidas', silhouette: 'Superstar', model: 'White & Black', image: 'https://i.postimg.cc/kMz1NTJp/Superstar-negras.png', price: 550000 },
  { brand: 'Louis Vuitton', silhouette: 'Skate', model: 'Beige', image: 'https://i.postimg.cc/pXj0sKyx/lv-skate-beige.png', price: 3200000 },
  { brand: 'Louis Vuitton', silhouette: 'Skate', model: 'White & Blue', image: 'https://i.postimg.cc/qMKm12gr/lv-skate-blanco-azul.png', price: 3200000 },
  { brand: 'Louis Vuitton', silhouette: 'Skate', model: 'Grey & White', image: 'https://i.postimg.cc/15FWvD4y/lv-skate-gris.png', price: 3200000 },
  { brand: 'Louis Vuitton', silhouette: 'Skate', model: 'Black Pearl', image: 'https://i.postimg.cc/CL8vcbdS/lv-skate-negra-perlada.png', price: 3500000, isFeatured: true },
  { brand: 'Louis Vuitton', silhouette: 'Skate', model: 'Black & White', image: 'https://i.postimg.cc/WbZ950tp/lv-skate-negro-blanco.png', price: 3200000 },
  { brand: 'New Balance', silhouette: '9060', model: 'Grey / Sea Salt', image: 'https://i.postimg.cc/2Sf0M3BB/9060-Beieg.png', price: 850000 },
  { brand: 'New Balance', silhouette: '9060', model: 'Mushroom / Taupe', image: 'https://i.postimg.cc/htq26h7m/9060-CAFE.png', price: 850000 },
  { brand: 'New Balance', silhouette: '530', model: 'Silver / Navy', image: 'https://i.postimg.cc/L8MxwhZL/nb-530.png', price: 580000 },
  { brand: 'Nike', silhouette: 'Air Force 1', model: 'Triple White Mid/High', image: 'https://i.postimg.cc/P5zSjhmV/AF1-BLANCAS-EN-BOTA.png', price: 750000 },
  { brand: 'Nike', silhouette: 'Air Force 1', model: 'Triple Black Mid/High', image: 'https://i.postimg.cc/zGSxr5nc/AF1-NEGRAS-EN-BOTA.png', price: 750000 },
  { brand: 'Nike', silhouette: 'Air Force 1', model: 'Triple White Low', image: 'https://i.postimg.cc/SKSDQ5dy/AF1-BLANCAS.png', price: 650000 },
  { brand: 'Nike', silhouette: 'Air Force 1', model: 'Triple Black Low', image: 'https://i.postimg.cc/SKSDQ5dk/AF1-NEGRAS.png', price: 650000 },
  { brand: 'Nike', silhouette: 'Air Max', model: '97 Triple White', image: 'https://i.postimg.cc/tgq2Rfk1/AIR-MAX-BLANCA-FULL.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Air Max', model: '97 Triple Black', image: 'https://i.postimg.cc/BvSMZyp1/AIR-MAX-NEGRA-FULL.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Air Max', model: '90 Black Patent/Neon Pink', image: 'https://i.postimg.cc/cJxX1jhn/Negra-con-beige.png', price: 850000 },
  { brand: 'Nike', silhouette: 'Air Max', model: 'Command White & Red', image: 'https://i.postimg.cc/QtPbbM3x/Air-max-command-blanca-roja.png', price: 800000 },
  { brand: 'Nike', silhouette: 'Dunk', model: 'Parra Abstract Art', image: 'https://i.postimg.cc/7PF9JbXw/parra.png', price: 2200000 },
  { brand: 'Nike', silhouette: 'SB', model: 'Bubbles (Burbuja)', image: 'https://i.postimg.cc/4H47Jcr6/Burbuja.png', price: 2400000 },
  { brand: 'Nike', silhouette: 'SB', model: 'Blossom (Bombóm)', image: 'https://i.postimg.cc/sQ4Gdm0G/Bombom.png', price: 2400000, isFeatured: true },
  { brand: 'Nike', silhouette: 'SB', model: 'Buttercup (Bellota)', image: 'https://i.postimg.cc/0M0KRnHm/Bellota.png', price: 2400000 },
  { brand: 'Jordan', silhouette: 'Jordan 1', model: 'Paris', image: 'https://i.postimg.cc/QdsqSPRm/low-paris.png', price: 1450000 },
  { brand: 'Jordan', silhouette: 'Jordan 1', model: 'Travis Scott Reverse Mocha/Pink', image: 'https://i.postimg.cc/htg0MwHy/low-travis-tropical.png', price: 2800000, isFeatured: true },
  { brand: 'Jordan', silhouette: 'Jordan 3', model: 'UNC Blue', image: 'https://i.postimg.cc/259Fk53x/Jordan-3-blue.png', price: 1600000, isFeatured: true },
  { brand: 'Jordan', silhouette: 'Jordan 3', model: 'Black Cat', image: 'https://i.postimg.cc/6QbLWQTd/Jordan-3-full-black.png', price: 1550000 },
  { brand: 'Jordan', silhouette: 'Jordan 3', model: 'Triple White Craft', image: 'https://i.postimg.cc/fbqjzbk7/Jordan-3-Mony.png', price: 1600000 },
  { brand: 'Jordan', silhouette: 'Jordan 3', model: 'Blue & Pink', image: 'https://i.postimg.cc/q7DXJ7gx/Jordan-3-Nn.png', price: 1550000 },
  { brand: 'Nike', silhouette: 'P-6000', model: 'Metallic Silver', image: 'https://i.postimg.cc/NMy85wHj/p6000-silver.png', price: 700000 },
  { brand: 'Nike', silhouette: 'Air Max', model: 'Shox TL Full White', image: 'https://i.postimg.cc/HWy4mdmF/shox-tl-toda-blanca.png', price: 900000 },
  { brand: 'Nike', silhouette: 'Air Max', model: 'Shox TL Full Black', image: 'https://i.postimg.cc/xjzyQnQW/shox-tl-toda-negra.png', price: 900000 },
  { brand: 'Nike', silhouette: 'Air Max', model: 'Plus TN White & Pink', image: 'https://i.postimg.cc/021G2F21/tn-blanco-rosado.png', price: 850000 },
  { brand: 'Nike', silhouette: 'Air Max', model: 'Plus TN Full Black', image: 'https://i.postimg.cc/9FHPFKFh/tn-full-black.png', price: 850000 },
  { brand: 'Nike', silhouette: 'Air Max', model: 'Plus TN White & Green (Lacoste)', image: 'https://i.postimg.cc/c4G7424N/tn-lacoste.png', price: 1200000 },
  { brand: 'Nike', silhouette: 'Uptempo', model: 'White & Green', image: 'https://i.postimg.cc/Fsbyfp7H/Blanca-verde.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Uptempo', model: 'White & Blue', image: 'https://i.postimg.cc/Hs0wJzVn/blanca-y-azul.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Uptempo', model: 'Grey & Red', image: 'https://i.postimg.cc/02GY6nbz/c-LASICA.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Uptempo', model: 'White & Silver', image: 'https://i.postimg.cc/Fsbyfp77/GRIS-Y-CRIMSON.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Uptempo', model: 'White & Black', image: 'https://i.postimg.cc/MK07c5vM/negra-blanca.png', price: 950000 },
  { brand: 'Nike', silhouette: 'Uptempo', model: 'Black Gum', image: 'https://i.postimg.cc/rFG1djK4/Negra-suela.png', price: 950000 },
  { brand: 'Osiris', silhouette: 'D3 2001', model: 'White/Red', image: 'https://i.postimg.cc/L8HzjP1D/D3-2001-Blanca-rojas.png', price: 650000 },
  { brand: 'Osiris', silhouette: 'D3 2001', model: 'Triple White', image: 'https://i.postimg.cc/Z5Tr6NdV/D3-2001-Blanca-total.png', price: 650000 },
  { brand: 'Osiris', silhouette: 'D3 2001', model: 'Triple Black', image: 'https://i.postimg.cc/GmckvDyQ/D3-2001-Negra-total.png', price: 650000 },
  { brand: 'Osiris', silhouette: 'D3 2001', model: 'Black Gum', image: 'https://i.postimg.cc/3xKg2Gv9/D3-2001-Negras-suela-goma.png', price: 650000 },
  { brand: 'Puma', silhouette: 'Suede XL', model: 'Blue & White', image: 'https://i.postimg.cc/Y9mgtf5H/suede-xl-azul.png', price: 520000 },
  { brand: 'Puma', silhouette: 'Suede XL', model: 'Black & White', image: 'https://i.postimg.cc/wvsJ9cCd/suede-xl-negros.png', price: 520000 },
  { brand: 'Puma', silhouette: 'Speedcat', model: 'Roja', image: 'https://i.postimg.cc/3yMkkVsk/Speedcat-roja.png', price: 480000 },
  { brand: 'Puma', silhouette: 'Speedcat', model: 'Negra', image: 'https://i.postimg.cc/sBFMMqkZ/Speedcat-negra.png', price: 480000 },
  { brand: 'Puma', silhouette: 'Speedcat', model: 'Café', image: 'https://i.postimg.cc/f34VVpG9/Speedcat-cafe.png', price: 480000 },
  { brand: 'Timberland', silhouette: '6-Inch Boot', model: 'Clásica', image: 'https://i.postimg.cc/njpMk7cH/Timberland-clasica.png', price: 850000 },
  { brand: 'Timberland', silhouette: '6-Inch Boot', model: 'Roja', image: 'https://i.postimg.cc/dkwDBdtv/Timberland-roja.png', price: 900000 },
  { brand: 'Timberland', silhouette: '6-Inch Boot', model: 'Negra', image: 'https://i.postimg.cc/S2kjr8NQ/Timberland-negra.png', price: 900000 },
  { brand: 'Vans', silhouette: 'Knu Skool', model: 'Navy Blue', image: 'https://i.postimg.cc/prbjr5vY/vans-knu-azul.png', price: 420000 },
  { brand: 'Vans', silhouette: 'Knu Skool', model: 'Black & White', image: 'https://i.postimg.cc/hvWmvQn1/vans-knu-clasicas.png', price: 420000 },
];

export const SHOCKERS_INVENTORY: Sneaker[] = INVENTORY_ITEMS.map((item) => ({
  id: `${item.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${item.silhouette.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${item.model.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  name: `${item.silhouette} ${item.model}`,
  brand: item.brand,
  silhouette: item.silhouette,
  price: item.price,
  image: item.image,
  isFeatured: item.isFeatured ?? false,
  sizes: [7, 8, 9, 10, 11],
}));
