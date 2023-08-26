export interface CartItem {
  id: string;
  amount: number;
}

export interface Cart {
  items: CartItem[];
  price: number;
  discount: number;
  total: number;
}
