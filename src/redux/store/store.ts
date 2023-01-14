import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import EncryptedStorage from 'react-native-encrypted-storage';
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
  storage: EncryptedStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
