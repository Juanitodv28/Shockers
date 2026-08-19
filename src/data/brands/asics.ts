import type { Sneaker } from '../../types/sneaker';

const IMAGES = ['https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1552346154-21d32810baa3?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&auto=format&fit=crop'];
const MODELS: Array<[string, string, string, number, boolean]> = [
  ['asics-gel-kayano-14-cream-black', 'Gel-Kayano 14 Cream Black', 'Gel-Kayano 14', 820000, true],
  ['asics-gel-1130-white-silver', 'Gel-1130 White Silver', 'Gel-1130', 650000, false],
  ['asics-gel-nyc-cream', 'Gel-NYC Cream', 'Gel-NYC', 780000, false],
  ['asics-gel-kayano-14-metallic', 'Gel-Kayano 14 Metallic Plum', 'Gel-Kayano 14', 900000, false],
  ['asics-gel-lyte-iii-og', 'Gel-Lyte III OG', 'Gel-Lyte III', 700000, false],
  ['asics-gel-kayano-14-silver', 'Gel-Kayano 14 Silver', 'Gel-Kayano 14', 850000, false],
  ['asics-gel-1130-cream', 'Gel-1130 Cream', 'Gel-1130', 680000, false],
  ['asics-gel-nyc-black', 'Gel-NYC Black', 'Gel-NYC', 780000, false],
  ['asics-gel-lyte-iii-burgundy', 'Gel-Lyte III Burgundy', 'Gel-Lyte III', 720000, false],
  ['asics-gel-quantum-180', 'Gel-Quantum 180', 'Gel-Quantum', 750000, false],
];
export const ASICS_DATA: Sneaker[] = MODELS.map(([id, name, silhouette, price, isFeatured], index) => ({ id, name, brand: 'Asics', silhouette, price, image: IMAGES[index % IMAGES.length], isFeatured, sizes: [7, 8, 9, 10, 11] }));
