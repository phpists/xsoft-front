import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
