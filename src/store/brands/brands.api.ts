import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import { BrandsResponse, IBrandResponse } from "../../types/brands";

export const brands = createApi({
  reducerPath: "brands/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addBrand: build.query({
      query: (data) => ({
        url: "/brand/add-brand",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editBrand: build.query({
      query: (data) => ({
        url: "/brand/edit-brand",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    deleteBrands: build.query({
      query: (idx) => ({
        url: "/brand/delete-brand",
        method: "DELETE",
        body: { idx },
        headers: headers(),
      }),
    }),
    getBrands: build.query({
      query: () => ({
        url: "/brand/get-all-brands",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: BrandsResponse): IBrandResponse[] => {
        return resp.response?.brands;
      },
    }),
    getBrand: build.query({
      query: (id) => ({
        url: "/brand/get-brand",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
  }),
});

export const {
  useLazyAddBrandQuery,
  useLazyEditBrandQuery,
  useLazyGetBrandsQuery,
  useLazyGetBrandQuery,
  useLazyDeleteBrandsQuery
} = brands;
