import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "Air Jordon 4 Retro", count: 1 },
    { id: 1, name: "Nike Air Force 1 '07 LV8", count: 1 },
    { id: 2, name: "Nike Air More Up Tempo", count: 1 },
    { id: 3, name: "Nike Air Jordon 1 Low", count: 1 },
    { id: 4, name: "Nike Air BaperMax Moke Lome", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export let { addCount, addItem } = cart.actions;
