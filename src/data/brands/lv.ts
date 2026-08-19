import type { Sneaker } from '../../types/sneaker';

const IMAGES = ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1552346154-21d32810baa3?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1200&auto=format&fit=crop'];
const MODELS: Array<[string, string, string, number, boolean]> = [
  ['lv-trainer-white-green', 'LV Trainer White Green', 'LV Trainer', 4500000, true],
  ['lv-trainer-monogram-denim', 'LV Trainer Monogram Denim', 'LV Trainer', 4200000, false],
  ['lv-archlight-black', 'LV Archlight Black', 'Archlight', 3900000, false],
  ['lv-run-away-sneaker', 'LV Run Away Sneaker', 'Run Away', 3500000, false],
  ['lv-time-out-sneaker', 'LV Time Out Sneaker', 'Time Out', 3300000, false],
  ['lv-trainer-blue-white', 'LV Trainer Blue White', 'LV Trainer', 4200000, false],
  ['lv-trainer-red-white', 'LV Trainer Red White', 'LV Trainer', 4200000, false],
  ['lv-archlight-white', 'LV Archlight White', 'Archlight', 3900000, false],
  ['lv-run-away-black', 'LV Run Away Black', 'Run Away', 3500000, false],
  ['lv-time-out-monogram', 'LV Time Out Monogram', 'Time Out', 3400000, false],
];
export const LV_DATA: Sneaker[] = MODELS.map(([id, name, silhouette, price, isFeatured], index) => ({ id, name, brand: 'LV', silhouette, price, image: IMAGES[index % IMAGES.length], isFeatured, sizes: [7, 8, 9, 10, 11] }));
