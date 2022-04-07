import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from '../slices/shared';

export const store = configureStore({
  reducer: {
    common: snackbarReducer,
  },
});
