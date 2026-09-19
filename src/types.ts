export interface Product {
  id: string;
  name: string;
  category: 'shreds' | 'blocks' | 'slices' | 'snacks' | 'reserve';
  categoryLabel: string;
  size: string;
  description: string;
  tagline: string;
  agedDays?: number;
  flavorProfile: string[];
  imageUrl: string;
  badge?: string;
  isPopular?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  cookTime: string;
  servings: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  cheeseUsed: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  distance: string;
  inStockItems: string[];
}
