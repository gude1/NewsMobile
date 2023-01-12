import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import NewsDetailReducer from '../slice/NewsDetailSlice';
import NewsListReducer from '../slice/NewsListSlice';
import UserReducer from '../slice/UserSlice';

const rootReducer = combineReducers({
  user: UserReducer,
  newslist: NewsListReducer,
  newsdetail: NewsDetailReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
