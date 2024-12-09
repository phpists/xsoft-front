import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const movementsSlice = createSlice({
  name: "movements",
  initialState,
  reducers: {},
});

export const movementsActions = movementsSlice.actions;
export const movementsReducer = movementsSlice.reducer;
