
export enum Category {
  Electronics = 'Electronics',
  Fashion = 'Fashion',
  Home = 'Home & Living',
  Accessories = 'Accessories',
  Phones = 'Mobile Phones'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'customer' | 'admin';
  loyaltyPoints: number;
  joinedDate: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  items: CartItem[];
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export type AuthProvider = 'email' | 'google' | 'facebook';

export type PaymentMethod = 'card' | 'paypal' | 'googlepay' | 'applepay' | 'bank' | 'crypto';
