import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import { SuppliersResponse } from "../../types/suppliers";

export const suppliers = createApi({
  reducerPath: "suppliers/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addSupplier: build.query({
      query: (data) => ({
        url: "/supplier/add-supplier",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editSupplier: build.query({
      query: (data) => ({
        url: "/supplier/edit-supplier",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    deleteSuppliers: build.query({
      query: (idx) => ({
        url: "/supplier/delete-supplier",
        method: "DELETE",
        body: { idx },
        headers: headers(),
      }),
    }),
    getSuppliers: build.query({
      query: ({ perPage = 30, page = 1, sortBy, q, sortDesc }) => ({
        url: "/supplier/get-suppliers",
        method: "GET",
        headers: headers(),
        params: { perPage, page, sortBy, q, sortDesc },
      }),
      transformResponse: (resp: SuppliersResponse): SuppliersResponse => {
        return resp;
      },
    }),
    getSupplier: build.query({
      query: (id) => ({
        url: "/supplier/get-supplier",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
  }),
});

export const {
  useLazyAddSupplierQuery,
  useLazyEditSupplierQuery,
  useLazyGetSupplierQuery,
  useLazyGetSuppliersQuery,
  useLazyDeleteSuppliersQuery,
} = suppliers;
