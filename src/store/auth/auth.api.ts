import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";

export const auth = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    register: build.query({
      query: ({
        phone,
        email,
        first_name,
        last_name,
        password,
        password_confirmation,
      }) => ({
        url: "/auth/register",
        method: "POST",
        params: {
          phone,
          email,
          first_name,
          last_name,
          password,
          password_confirmation,
        },
        headers: {
          Accept: "application/json",
        },
      }),
    }),
    login: build.query({
      query: ({ login, password }) => ({
        url: "/auth/login",
        method: "POST",
        params: {
          login,
          password,
        },
      }),
    }),
    editUser: build.query({
      query: ({ first_name, last_name, phones, color, user_id }) => ({
        url: "/profile/update-user",
        method: "POST",
        body: {
          first_name,
          last_name,
          phones: phones?.[0]?.phone ?? "",
          color,
          user_id,
        },
      }),
    }),
    updateUserPassword: build.query({
      query: ({ password, password_confirmation, user_id }) => ({
        url: "/profile/update-user-password",
        method: "POST",
        params: { password, password_confirmation, user_id },
      }),
    }),
    getUser: build.query({
      query: () => ({
        url: "/auth/user",
        method: "GET",
        headers: headers(),
      }),
    }),
    logout: build.query({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
    forgotPassword: build.query({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        params: {
          email,
        },
      }),
    }),
    resetPassword: build.query({
      query: ({ token, email, password, password_confirmation }) => ({
        url: "/auth/reset-password",
        method: "POST",
        params: {
          token,
          email,
          password,
          password_confirmation,
        },
      }),
    }),
  }),
});

export const {
  useLazyRegisterQuery,
  useLazyLoginQuery,
  useLazyGetUserQuery,
  useLazyLogoutQuery,
  useLazyForgotPasswordQuery,
  useLazyResetPasswordQuery,
  useLazyEditUserQuery,
  useLazyUpdateUserPasswordQuery,
} = auth;
