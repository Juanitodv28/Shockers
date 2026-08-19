export type Brand = 'Nike' | 'Adidas' | 'Bape' | 'New Balance' | 'Asics' | 'Jordan' | 'LV' | 'Puma' | 'Vans';

export interface Sneaker {
  id: string;
  name: string;
  brand: Brand;
  silhouette: string;
  price: number;
  image: string;
  isFeatured: boolean;
  sizes: number[];
}
