import { configureStore } from '@reduxjs/toolkit';
import data from './data/slice';

export const store = configureStore({
  reducer: {
    data,
  },
});
