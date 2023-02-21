export interface Cart {
  itemCount: number;
  items: [];
  totalPrice: number;
}

export interface Product {
  id: number;
  imageUrl: string;
  price: number;
  description: string;
  name: string;
  handle: string;
  url: string;
}
