export type Brand = "Asian Paints" | "Berger" | "Dulux" | "Nerolac";
export type Application = "Interior" | "Exterior";
export type SizeOption = "1L" | "4L" | "10L" | "20L";

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  application: Application;
  pricePerL: number;
  features: string[];
  sizes: SizeOption[];
  colors: ColorOption[];
  image: string;
}

export interface CartItem {
  product: Product;
  size: SizeOption;
  color: ColorOption;
  quantity: number;
}

export interface FilterState {
  brand?: Brand;
  application?: Application;
  color?: ColorOption;
}