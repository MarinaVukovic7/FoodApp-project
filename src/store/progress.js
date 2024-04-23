import { createSlice } from "@reduxjs/toolkit";

const initialProgressState = { progress: '' };

const progressSlice = createSlice({
  name: 'progress',
  initialState: initialProgressState,
  reducers: {
    showCart(state) {
      state.progress = 'cart';
    },
    hideCart(state) {
      state.progress = '';
    },
    showCheckout(state) {
      state.progress = 'checkout';
    },
    hideCheckout(state) {
      state.progress = '';
    }
  }
});

export default progressSlice;
export const progressActions = progressSlice.actions;
