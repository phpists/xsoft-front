import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
});

export const brandsActions = brandsSlice.actions;
export const brandsReducer = brandsSlice.reducer;
