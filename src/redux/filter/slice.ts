import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MyfilterState, mySortState} from './types';

const initialState: MyfilterState = {
  categoryId: 0,
  searchValue: '',
  sort: {
    name: 'пополярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortId(state, action: PayloadAction<mySortState>) {
      state.sort = action.payload;
    },
    setFilter(state, action: PayloadAction<MyfilterState>) {
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  },
});

export const {setCategoryId, setSortId, setFilter, setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;
