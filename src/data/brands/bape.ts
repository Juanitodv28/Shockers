import type { Sneaker } from '../../types/sneaker';

const IMAGES = [
  'https://images.unsplash.com/photo-1552346154-21d32810baa3?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=1200&auto=format&fit=crop',
];

const BAPE_BASE_DATA: Sneaker[] = [
  { id: 'bape-bapesta-triple-white', name: 'Bapesta Triple White', brand: 'Bape', silhouette: 'Bapesta', price: 1400000, image: IMAGES[0], isFeatured: true, sizes: [7, 8, 9, 10, 11] },
  { id: 'bape-bapesta-abc-camo', name: 'Bapesta ABC Camo Green', brand: 'Bape', silhouette: 'Bapesta', price: 1800000, image: IMAGES[1], isFeatured: false, sizes: [7, 8, 9, 10] },
  { id: 'bape-sk8-sta-black-white', name: 'Sk8 Sta Black White', brand: 'Bape', silhouette: 'Sk8 Sta', price: 1550000, image: IMAGES[2], isFeatured: false, sizes: [7, 8, 9, 10, 11] },
  { id: 'bape-bapesta-color-camo', name: 'Bapesta Color Camo', brand: 'Bape', silhouette: 'Bapesta', price: 1750000, image: IMAGES[3], isFeatured: false, sizes: [8, 9, 10] },
  { id: 'bape-road-sta-low-white', name: 'Road Sta Low White', brand: 'Bape', silhouette: 'Road Sta', price: 1300000, image: IMAGES[4], isFeatured: false, sizes: [7, 8, 9, 10] },
];

export const BAPE_DATA: Sneaker[] = BAPE_BASE_DATA.map((sneaker, index) => ({
  ...sneaker,
  image: IMAGES[index % IMAGES.length],
}));
