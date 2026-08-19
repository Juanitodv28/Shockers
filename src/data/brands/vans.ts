import type { Sneaker } from '../../types/sneaker';

const IMAGES = ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1552346154-21d32810baa3?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1200&auto=format&fit=crop'];
const MODELS: Array<[string, string, string, number, boolean]> = [
  ['vans-knu-skool-black-white', 'Knu Skool Black White', 'Knu Skool', 380000, true],
  ['vans-old-skool-black-white', 'Old Skool Black White', 'Old Skool', 350000, false],
  ['vans-sk8-hi-black', 'Sk8-Hi Black', 'Sk8-Hi', 390000, false],
  ['vans-authentic-checkerboard', 'Authentic Checkerboard', 'Authentic', 300000, false],
  ['vans-slip-on-checkerboard', 'Slip-On Checkerboard', 'Slip-On', 320000, false],
  ['vans-old-skool-red', 'Old Skool Red', 'Old Skool', 350000, false],
  ['vans-old-skool-green', 'Old Skool Green', 'Old Skool', 350000, false],
  ['vans-sk8-hi-checkerboard', 'Sk8-Hi Checkerboard', 'Sk8-Hi', 400000, false],
  ['vans-authentic-black', 'Authentic Black', 'Authentic', 300000, false],
  ['vans-slip-on-black', 'Slip-On Black', 'Slip-On', 320000, false],
];
export const VANS_DATA: Sneaker[] = MODELS.map(([id, name, silhouette, price, isFeatured], index) => ({ id, name, brand: 'Vans', silhouette, price, image: IMAGES[index % IMAGES.length], isFeatured, sizes: [7, 8, 9, 10, 11] }));
