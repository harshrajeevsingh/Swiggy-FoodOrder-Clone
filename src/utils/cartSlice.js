import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.items.push({ ...newItem, amount: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        // If the item exists in the cart and its amount is greater than 1, decrement the amount
        if (existingItem.amount > 1) {
          existingItem.amount -= 1;
        } else {
          // If the amount is 1, remove the item from the cart
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
