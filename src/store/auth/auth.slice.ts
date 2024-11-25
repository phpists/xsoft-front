import { createSlice } from "@reduxjs/toolkit";

interface IState {
  user: {
    id: number;
    parent_id: any;
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
    media: Array<any>;
    tags: any;
    company: {
      id: number;
      title: string;
      user_id: number;
      color: string;
      category_id: number;
      created_at: string;
      branches: Array<{
        id: number;
        company_id: number;
        location: string;
        phones: Array<{
          phone: string;
          type_id: Array<number>;
        }>;
        created_at: string;
      }>;
    };
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
