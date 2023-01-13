import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {NewsDetailState} from './NewsDetailSlice';
import type {PayloadAction} from '@reduxjs/toolkit';
import news from '../../config/news';
import axios from 'axios';
import {AppDispatch} from '../store/store';

export type NewsListState = {
  list: NewsDetailState[];
  fetching: boolean;
};

const initialState: NewsListState = {
  list: [],
  fetching: false,
};

// First, create the thunk
export const getNews = createAsyncThunk<
  NewsDetailState[],
  null,
  {
    dispatch: AppDispatch;
    state: NewsListState;
  }
>('newslist/getNews', async (param, thunkApi) => {
  try {
    const options = {
      params: {
        lang: 'en',
        media: 'True',
        q: 'chatgpt',
      },
    };

    thunkApi.dispatch(updateNewStatus(true));
    const res = await news.get('/search', options);
    let data: [] = res.data.articles;
    data.map((item: any) => {
      return {
        topic: item.topic,
        title: item.title,
        _id: item._id,
        image: item.media,
        summary: item.summary,
        author: item.author,
        date: item.published_date,
      } as NewsDetailState;
    });
    thunkApi.dispatch(updateNewStatus(false));
    return data;
  } catch (err) {
    thunkApi.dispatch(updateNewStatus(false));
    console.log('searchNews', String(err));
    return [];
  }
});

export const NewsListSlice = createSlice({
  name: 'newslist',
  initialState,
  reducers: {
    updateNewStatus: (state: NewsListState, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getNews.fulfilled, (state, action) => {
      // Add user to the state array
      state.list = state.list.concat(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {updateNewStatus} = NewsListSlice.actions;

export default NewsListSlice.reducer;
