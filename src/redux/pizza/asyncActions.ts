import axios from 'axios';
import {TParams, pizzaItem} from './type';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk<pizzaItem[], TParams>('pizza/fetchPizzasStatus', async (params) => {
  const {category, order, sortBy, search} = params;
  const {data} = await axios.get<pizzaItem[]>(`http://192.168.88.254:3001/items?_page=1&_limit=20&${category}${search}&_sort=${sortBy}&_order=${order}`);
  return data;
});
