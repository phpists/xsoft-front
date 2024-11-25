import { createSlice } from "@reduxjs/toolkit";

interface IState {
  sideMenuOpen: boolean;
  selectedCompany: string | undefined;
}

const initialState: IState = {
  sideMenuOpen: !!localStorage.getItem("sideMenuOpen"),
  selectedCompany: localStorage.getItem("selectedCompany") ?? undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideMenu(state: IState) {
      state.sideMenuOpen
        ? localStorage.removeItem("sideMenuOpen")
        : localStorage.setItem("sideMenuOpen", "open");
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    onSelectCompany(state: IState, action) {
      !action.payload
        ? localStorage.removeItem("selectedCompany")
        : localStorage.setItem("selectedCompany", action.payload);
      state.selectedCompany = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
