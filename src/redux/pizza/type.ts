export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TParams = {
  category: string;
  order: string;
  sortBy: string;
  search: string;
};

export type pizzaItem = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
  description: string;
  ingredients: string[];
};

export type MyPizzaState = {
  items: pizzaItem[];
  status: Status;
};
