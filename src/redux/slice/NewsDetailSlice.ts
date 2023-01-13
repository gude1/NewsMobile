import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type NewsDetailState = {
  title?: string;
  _id?: string;
};

const initialState: NewsDetailState = {};

export const NewsDetailSlice = createSlice({
  name: 'newsdetail',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = NewsDetailSlice.actions;

export default NewsDetailSlice.reducer;
