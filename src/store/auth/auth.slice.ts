import { createSlice } from "@reduxjs/toolkit";

interface IState {
  user: {
    id: number;
    category_id: any;
    role_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    phones: any;
    color: any;
    bd_date: any;
    comment: any;
    created_at: string;
    updated_at: string;
    media: any[];
  } | null;
}

const initialState: IState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
