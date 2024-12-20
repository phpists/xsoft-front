import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import { CashCategoriesResponse } from "../../types/finance";

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
  }),
});

export const {
  useLazyAddCashCategoryQuery,
  useLazyEditCashCategoryQuery,
  useLazyDeleteCashCategoryQuery,
  useGetCashCategoriesQuery,
} = finance;
