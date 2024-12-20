import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {},
});

export const financeActions = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
