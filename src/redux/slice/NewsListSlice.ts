import {createSlice} from '@reduxjs/toolkit';

export type NewsListState = {};

const initialState: NewsListState = {};

export const NewsListSlice = createSlice({
  name: 'newslist',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = NewsListSlice.actions;

export default NewsListSlice.reducer;
