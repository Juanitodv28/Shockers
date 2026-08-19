export type Brand =
  | 'Nike'
  | 'Adidas'
  | 'Bape'
  | 'New Balance'
  | 'Asics'
  | 'Jordan'
  | 'LV'
  | 'Louis Vuitton'
  | 'Puma'
  | 'Vans'
  | 'Timberland'
  | 'Osiris';

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
