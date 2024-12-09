import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import { IWarehouseResponse, WarehousesResponse } from "../../types/warehouses";

export const warehouses = createApi({
  reducerPath: "warehouses/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addWarehouse: build.query({
      query: (data) => ({
        url: "/warehouse/add-warehouse",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editWarehouse: build.query({
      query: (data) => ({
        url: "/warehouse/update-warehouse",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    deleteWarehouses: build.query({
      query: (idx) => ({
        url: "/warehouse/delete-warehouse",
        method: "DELETE",
        body: { idx },
        headers: headers(),
      }),
    }),
    getWarehouses: build.query({
      query: ({ sortBy, q, sortDesc }) => ({
        url: "/warehouse/get-all-warehouses",
        method: "GET",
        headers: headers(),
        params: { sortBy, q, sortDesc },
      }),
      transformResponse: (resp: WarehousesResponse): IWarehouseResponse[] => {
        return resp.response?.warehouses;
      },
    }),
    getWarehouse: build.query({
      query: (id) => ({
        url: "/warehouse/get-warehouse",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
  }),
});

export const {
  useLazyAddWarehouseQuery,
  useLazyEditWarehouseQuery,
  useLazyDeleteWarehousesQuery,
  useLazyGetWarehouseQuery,
  useLazyGetWarehousesQuery,
  useGetWarehousesQuery
} = warehouses;
