import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const warehousesSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},
});

export const warehousesActions = warehousesSlice.actions;
export const warehousesReducer = warehousesSlice.reducer;
