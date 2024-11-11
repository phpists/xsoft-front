import { createSlice } from "@reduxjs/toolkit";

interface IState {
  sideMenuOpen: boolean;
}

const initialState: IState = {
  sideMenuOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideMenu(state: IState) {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
