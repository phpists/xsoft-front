import { createSlice } from "@reduxjs/toolkit";

export const personalSlice = createSlice({
  name: "personal",
  initialState: {},
  reducers: {},
});

export const personalActions = personalSlice.actions;
export const personalReducer = personalSlice.reducer;
