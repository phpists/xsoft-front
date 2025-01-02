import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import {
  CachesTransactionsResponse,
  CashCategoriesResponse,
  CashesResponse,
} from "../../types/finance";

export const finance = createApi({
  reducerPath: "finance/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addCashCategory: build.query({
      query: (data) => ({
        url: "/cash-category/add-cash-category",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editCashCategory: build.query({
      query: (data) => ({
        url: "/cash-category/update-cash-category",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    deleteCashCategory: build.query({
      query: (idx) => ({
        url: "/cash-category/delete-cash-categories",
        method: "DELETE",
        body: { idx },
        headers: headers(),
      }),
    }),
    getCashCategories: build.query({
      query: () => ({
        url: "/cash-category/get-cash-categories",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (
        resp: CashCategoriesResponse
      ): CashCategoriesResponse => {
        return resp;
      },
    }),
    addCash: build.query({
      query: (data) => ({
        url: "/cashes/add-cash",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editCash: build.query({
      query: (data) => ({
        url: "/cashes/edit-cash",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    deleteCash: build.query({
      query: (id) => ({
        url: "/cashes/delete-cash",
        method: "DELETE",
        headers: headers(),
        params: { id },
      }),
    }),
    getCashes: build.query({
      query: () => ({
        url: "/cashes/get-cashes",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: CashesResponse): CashesResponse => resp,
    }),
    getCash: build.query({
      query: (id) => ({
        url: "/cashes/get-cash",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
    getCashTransactions: build.query({
      query: ({ id, debt_status, ...filters }) => ({
        url: "/cashes/get-cash-transactions",
        method: "GET",
        headers: headers(),
        params: { id, debt_status, ...filters },
      }),
      transformResponse: (
        resp: CachesTransactionsResponse
      ): CachesTransactionsResponse => resp,
    }),
    getDebt: build.query({
      query: (id) => ({
        url: "/cashes/get-debt",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
    payDebt: build.query({
      query: (id) => ({
        url: "/cashes/debt-paid",
        method: "POST",
        headers: headers(),
        params: { id },
      }),
    }),
    cancelPayDebt: build.query({
      query: (id) => ({
        url: "/cashes/cancel-debt-paid",
        method: "POST",
        headers: headers(),
        params: { id },
      }),
    }),
  }),
});

export const {
  useLazyAddCashCategoryQuery,
  useLazyEditCashCategoryQuery,
  useLazyDeleteCashCategoryQuery,
  useGetCashCategoriesQuery,
  useLazyAddCashQuery,
  useLazyEditCashQuery,
  useLazyDeleteCashQuery,
  useGetCashesQuery,
  useLazyGetCashQuery,
  useLazyGetCashTransactionsQuery,
  useLazyGetDebtQuery,
  useLazyCancelPayDebtQuery,
  useLazyPayDebtQuery,
} = finance;
