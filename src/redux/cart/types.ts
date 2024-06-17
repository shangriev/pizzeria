export type MyCartItem = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  size: number;
  type: string;
};

export type MyCartState = {
  totalPrice: number;
  items: MyCartItem[];
};
