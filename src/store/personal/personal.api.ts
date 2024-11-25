import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import {
  IGeneratePasswordResponse,
  IRole,
  IRolesResponse,
  PersonalResponse,
  PersonalResponseData,
} from "../../types/personal";

export const personal = createApi({
  reducerPath: "personal/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addStaff: build.query({
      query: (data) => ({
        url: "/staff/add-staff",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editStaff: build.query({
      query: (data) => ({
        url: "/staff/edit-staff",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    deleteStaff: build.query({
      query: (idx) => ({
        url: "/staff/delete-staff",
        method: "DELETE",
        body: { idx },
        headers: headers(),
      }),
    }),
    getStaff: build.query({
      query: ({ perPage = 30, page = 1, sortBy, q, sortDesc }) => ({
        url: "/staff/get-all-staff",
        method: "GET",
        params: { perPage, page, sortBy, q, sortDesc },
        headers: headers(),
      }),
      transformResponse: (resp: PersonalResponse): PersonalResponseData => {
        return resp.response;
      },
    }),
    getRoles: build.query({
      query: () => ({
        url: "/role/get-roles",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: IRolesResponse): IRole[] => {
        return resp.response.roles;
      },
    }),
    generatePassword: build.query({
      query: () => ({
        url: "/staff/generate-password",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (
        resp: IGeneratePasswordResponse
      ): IGeneratePasswordResponse => {
        return resp;
      },
    }),
    getStaffPerson: build.query({
      query: (id) => ({
        url: "/staff/get-staff",
        method: "GET",
        headers: headers(),
        params: { id },
      }),
    }),
    saveStaffMedia: build.query({
      query: (data) => ({
        url: "/staff/save-staff-media",
        method: "POST",
        headers: headers(),
        body: data,
      }),
    }),
    deleteStaffMedia: build.query({
      query: ({ id, staff_id }) => ({
        url: "/staff/delete-staff-media?id=9",
        method: "DELETE",
        headers: headers(),
        body: { staff_id },
        params: { id },
      }),
    }),
  }),
});

export const {
  useLazyGetStaffQuery,
  useLazyAddStaffQuery,
  useGetRolesQuery,
  useLazyGeneratePasswordQuery,
  useLazyDeleteStaffQuery,
  useLazyEditStaffQuery,
  useLazyGetStaffPersonQuery,
  useLazySaveStaffMediaQuery,
  useLazyDeleteStaffMediaQuery,
} = personal;
