import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import {
  CategoryResponse,
  ClientsResponse,
  ClientsResponseData,
} from "../../types/clients.";
import { Option } from "../../components/Select/Select";

export const clients = createApi({
  reducerPath: "clients/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getClients: build.query({
      query: ({ perPage = 30, page = 1, sortBy, q, sortDesc }) => ({
        url: "/client/get-clients",
        method: "GET",
        params: { perPage, page, sortBy, q, sortDesc },
        headers: headers(),
      }),
      transformResponse: (resp: ClientsResponse): ClientsResponseData => {
        return resp.response;
      },
    }),
    addClient: build.query({
      query: (data) => ({
        url: "/client/add-client",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editClient: build.query({
      query: (data) => ({
        url: "/client/edit-client",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    getClient: build.query({
      query: (id) => ({
        url: "/client/get-client",
        method: "GET",
        params: { id },
        headers: headers(),
      }),
    }),
    getCategories: build.query({
      query: () => ({
        url: "/client/get-users-categories",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: CategoryResponse): Option[] => {
        return resp.response.categories?.map(({ title, id }) => ({
          title,
          value: id?.toString(),
        }));
      },
    }),
    deleteClients: build.query({
      query: (idx) => ({
        url: "/client/delete-client",
        method: "DELETE",
        headers: headers(),
        body: { idx },
      }),
    }),
    saveClientMedia: build.query({
      query: (data) => ({
        url: "/client/save-client-media",
        method: "POST",
        headers: headers(),
        body: data,
      }),
    }),
    deleteClientMedia: build.query({
      query: ({ id, user_id }) => ({
        url: "/client/delete-client-media",
        method: "DELETE",
        headers: headers(),
        body: { user_id },
        params: { id },
      }),
    }),
  }),
});

export const {
  useGetClientsQuery,
  useLazyGetClientsQuery,
  useLazyAddClientQuery,
  useLazyEditClientQuery,
  useLazyGetClientQuery,
  useGetCategoriesQuery,
  useLazyDeleteClientsQuery,
  useLazySaveClientMediaQuery,
  useLazyDeleteClientMediaQuery,
} = clients;
