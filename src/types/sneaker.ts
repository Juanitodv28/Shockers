export type SneakerBrand = 'NIKE' | 'ADIDAS' | 'JORDAN' | 'PUMA' | 'NEW BALANCE' | 'YEEZY';

export interface SneakerColorway {
  id: string;
  name: string;
  reference: string;
  image: string;
  sizes: number[];
}

export interface SneakerModel {
  id: number;
  brand: SneakerBrand;
  silhouette: string;
  name: string;
  basePrice: number;
  colorways: SneakerColorway[];
}
