import {createSlice} from '@reduxjs/toolkit';
import {NewsDetailState} from './NewsDetailSlice';

export type NewsListState = {
  list: NewsDetailState[];
  fetching?: boolean;
};

const initialState: NewsListState = {
  list: [],
};

export const NewsListSlice = createSlice({
  name: 'newslist',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = NewsListSlice.actions;

export default NewsListSlice.reducer;
