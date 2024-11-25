import { createSlice } from "@reduxjs/toolkit";
import { CompanyResponse } from "../../types/companies";

interface IState {
  companies: CompanyResponse[] | undefined;
}

const initialState: IState = {
  companies: undefined,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    onSaveCompanies(state: IState, action) {
      state.companies = action.payload;
    },
  },
});

export const companiesActions = companiesSlice.actions;
export const companiesReducer = companiesSlice.reducer;
