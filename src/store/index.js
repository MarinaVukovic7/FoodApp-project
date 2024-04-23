import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart';
import progressSlice from './progress';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    progress: progressSlice.reducer
  }
});

export default store;
