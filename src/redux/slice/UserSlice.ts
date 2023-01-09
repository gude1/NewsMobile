import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface NewsDetailState {}

const initialState: NewsDetailState = {};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = UserSlice.actions;

export default UserSlice.reducer;
