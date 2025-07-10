export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  features: string[];
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface User {
  name: string;
  email: string;
}

export interface SupportContact {
  type: "phone" | "email" | "hours";
  value: string;
  icon: string;
}
