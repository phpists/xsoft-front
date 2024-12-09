import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import {
  IMovementsInfoResponse,
  IMovementsInfoResponseData,
  IMovementsResponse,
  IMovementsResponseData,
  IMovementsSearchResponse,
} from "../../types/movements";

export const movements = createApi({
  reducerPath: "movements/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addMovement: build.query({
      query: (data) => ({
        url: "/product-movement/add-product-movement",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editMovement: build.query({
      query: (data) => ({
        url: "/product-movement/update-product-movement",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    addMovementSale: build.query({
      query: (data) => ({
        url: "/product-movement/add-product-movement-sale",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    getMovements: build.query({
      query: ({ sortBy, q, sortDesc }) => ({
        url: "/product-movement/get-products-movement",
        method: "GET",
        headers: headers(),
        params: {
          perPage: 100,
          sortBy,
          q,
          sortDesc,
        },
      }),
      transformResponse: (resp: IMovementsResponse): IMovementsResponseData => {
        return resp.response.products_movement;
      },
    }),
    getMovementsInfo: build.query({
      query: () => ({
        url: "/product-movement/get-product-movement-info",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (
        resp: IMovementsInfoResponse
      ): IMovementsInfoResponseData => {
        return resp?.response;
      },
    }),
    searchProductMovement: build.query({
      query: (q) => ({
        url: "/product-movement/search-products-movement",
        method: "GET",
        headers: headers(),
        params: { q },
      }),
      transformResponse: (
        resp: IMovementsSearchResponse
      ): IMovementsSearchResponse => {
        return resp;
      },
    }),
    getProduct: build.query({
      query: (id) => ({
        url: "/product-movement/get-product-by-id",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
      transformResponse: (
        resp: IMovementsSearchResponse
      ): IMovementsSearchResponse => {
        return resp;
      },
    }),
    getMovement: build.query({
      query: (product_movement_id) => ({
        url: "/product-movement/get-product-movement",
        method: "GET",
        headers: headers(),
        params: { product_movement_id },
      }),
      //   transformResponse: (
      //     resp: IMovementsSearchResponse
      //   ): IMovementsSearchResponse => {
      //     return resp;
      //   },
    }),
  }),
});

export const {
  useLazyAddMovementQuery,
  useLazyEditMovementQuery,
  useGetMovementsInfoQuery,
  useLazyGetMovementsQuery,
  useLazyAddMovementSaleQuery,
  useLazySearchProductMovementQuery,
  useLazyGetProductQuery,
  useLazyGetMovementQuery
} = movements;
