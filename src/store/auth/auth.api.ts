import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../api";

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
    getUser: build.query({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
    }),
    logout: build.query({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLazyRegisterQuery,
  useLazyLoginQuery,
  useLazyGetUserQuery,
  useLogoutQuery,
} = auth;
