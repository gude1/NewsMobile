import {configureStore} from '@reduxjs/toolkit';
import NewsDetailSlice from '../slice/NewsDetailSlice';
import NewsListSlice from '../slice/NewsListSlice';
import UserSlice from '../slice/UserSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice,
    newslist: NewsListSlice,
    newsdetail: NewsDetailSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
