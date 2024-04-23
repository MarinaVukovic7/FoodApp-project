import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);

      if(existingItemIndex > -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({id: newItem.id, price: newItem.price, title: newItem.title, quantity: 1});
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      const existingItem = state.items[existingItemIndex];

      if (existingItem.quantity === 1) {
        state.items.splice(existingItemIndex, 1);

      } else {
       existingItem.quantity--;
      }
    },

    clearCart(state) {
      state.items = [];
    }
  }
});

export default cartSlice;
export const cartActions = cartSlice.actions;