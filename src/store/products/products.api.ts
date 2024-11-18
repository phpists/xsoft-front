import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import {
  IProductInfo,
  IProductInfoResponse,
  ProductsResoponse,
  ProductsResponseData,
} from "../../types/products";

export const products = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addProduct: build.query({
      query: (data) => ({
        url: "/product/add-product",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editProduct: build.query({
      query: (data) => ({
        url: "/product/update-product",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    getProductInfo: build.query({
      query: () => ({
        url: "/product/get-product-info",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: IProductInfoResponse): IProductInfo => {
        return resp?.response;
      },
    }),
    getProducts: build.query({
      query: ({ perPage = 30, page = 1, sortBy, q, sortDesc }) => ({
        url: "/product/get-products",
        method: "GET",
        params: { perPage, page, sortBy, q, sortDesc },
        headers: headers(),
      }),
      transformResponse: (resp: ProductsResoponse): ProductsResponseData => {
        return resp.response;
      },
    }),
    saveProductMedia: build.query({
      query: (data) => ({
        url: "/product/save-product-media",
        method: "POST",
        headers: headers(),
        body: data,
      }),
    }),
    deleteProductMedia: build.query({
      query: ({ id, product_id }) => ({
        url: "/product/delete-product-media",
        method: "DELETE",
        headers: headers(),
        body: { product_id },
        params: { id },
      }),
    }),
    getProduct: build.query({
      query: (id) => ({
        url: "/product/get-product",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
    deleteProducts: build.query({
      query: (idx) => ({
        url: "/product/delete-product",
        method: "DELETE",
        headers: headers(),
        body: { idx },
      }),
    }),
    addCategory: build.query({
      query: (title) => ({
        url: "/category/add-category",
        method: "POST",
        headers: headers(),
        params: { title },
      }),
    }),
    editCategory: build.query({
      query: ({ id, title }) => ({
        url: "/category/edit-category",
        method: "POST",
        headers: headers(),
        params: { id, title },
      }),
    }),
    deleteCategory: build.query({
      query: (id) => ({
        url: "/category/delete-category",
        method: "DELETE",
        headers: headers(),
        params: { id },
      }),
    }),
  }),
});

export const {
  useLazyAddProductQuery,
  useLazyEditProductQuery,
  useGetProductInfoQuery,
  useLazyGetProductsQuery,
  useLazySaveProductMediaQuery,
  useLazyDeleteProductMediaQuery,
  useLazyGetProductQuery,
  useLazyDeleteProductsQuery,
  useLazyAddCategoryQuery,
  useLazyDeleteCategoryQuery,
  useLazyEditCategoryQuery,
} = products;
