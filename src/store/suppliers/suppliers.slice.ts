import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
});

export const suppliersActions = suppliersSlice.actions;
export const suppliersReducer = suppliersSlice.reducer;
