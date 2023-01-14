import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {NewsDetailState} from './NewsDetailSlice';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getNews} from '../thunk/news';

export type NewsListState = {
  list: NewsDetailState[];
  fetching: boolean;
};

const initialState: NewsListState = {
  list: [],
  fetching: false,
};

export const NewsListSlice = createSlice({
  name: 'newslist',
  initialState,
  reducers: {
    updateNewsStatus: (
      state: NewsListState,
      action: PayloadAction<boolean>,
    ) => {
      state.fetching = action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getNews.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {updateNewsStatus} = NewsListSlice.actions;

export default NewsListSlice.reducer;
