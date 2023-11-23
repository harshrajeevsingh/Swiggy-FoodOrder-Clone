import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // console.log(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
      // state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
