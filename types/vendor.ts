export type State = "CT" | "RI" | "MA";

export type PriceRange = "$" | "$$" | "$$$" | "$$$$";

export interface Review {
  id: string;
  author: string;
  rating: number; // 1–5
  date: string;
  comment: string;
}

export interface Vendor {
  id: string;
  name: string;
  slug: string;
  state: State;
  city: string;
  phone: string;
  website?: string;
  description: string;
  priceRange: PriceRange;
  rating: number; // average, 1–5
  reviewCount: number;
  reviews: Review[];
  services: string[];
  serviceArea: string[];
  logo?: string;
  featured?: boolean;
}
