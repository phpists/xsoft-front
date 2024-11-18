import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
});

export const clientsActions = clientsSlice.actions;
export const clientsReducer = clientsSlice.reducer;
