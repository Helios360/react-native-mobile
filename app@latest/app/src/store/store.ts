import { configureStore } from '@reduxjs/toolkit';
import likedImagesReducer from '../reducers/likedImages';
import usersReducer from '../reducers/users';

export const store = configureStore({
  reducer: {
    likedImages: likedImagesReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
