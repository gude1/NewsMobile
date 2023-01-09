import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface NewsListState {}

const initialState: NewsListState = {
  value: 0,
};

export const NewsListSlice = createSlice({
  name: 'newslist',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = NewsListSlice.actions;

export default NewsListSlice.reducer;
