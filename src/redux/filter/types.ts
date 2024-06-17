export type mySortState = {
  name: string;
  sortProperty: 'rating' | 'price' | '-price' | 'discount';
};

export type MyfilterState = {
  categoryId: number;
  searchValue: string;
  sort: mySortState;
};
