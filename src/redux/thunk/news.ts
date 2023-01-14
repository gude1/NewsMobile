import {createAsyncThunk} from '@reduxjs/toolkit';
import {NewsDetailState} from '../slice/NewsDetailSlice';
import {updateNewsStatus} from '../slice/NewsListSlice';
import news from '../../config/news';

// First, create the thunk
export const getNews = createAsyncThunk<NewsDetailState[]>(
  'newslist/getNews',
  async (_, thunkApi) => {
    try {
      const options = {
        params: {
          lang: 'en',
          media: 'True',
          q: 'chatgpt',
        },
      };
      thunkApi.dispatch(updateNewsStatus(true));
      const res = await news.get('/search', options);
      let data: NewsDetailState[];
      data = res.data.articles.map((item: any) => {
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
      thunkApi.dispatch(updateNewsStatus(false));
      return thunkApi.fulfillWithValue(data);
    } catch (err) {
      thunkApi.dispatch(updateNewsStatus(false));
      console.log('searchNews', String(err));
      return thunkApi.rejectWithValue(String(err));
    }
  },
);
