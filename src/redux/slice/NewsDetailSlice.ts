import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type NewsDetailState = {
  title: string;
  topic: string;
  summary: string;
  image: string;
  date: string;
  author: string;
  _id: string;
};

const initialState: NewsDetailState = {
  title: '',
  summary: '',
  date: '',
  image: '',
  author: '',
  topic: '',
  _id: '',
};

export const NewsDetailSlice = createSlice({
  name: 'newsdetail',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = NewsDetailSlice.actions;

export default NewsDetailSlice.reducer;
