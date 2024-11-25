import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import { CompaniesResponse, CompanyResponse } from "../../types/companies";

export const companies = createApi({
  reducerPath: "companies/api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    addCompany: build.query({
      query: (data) => ({
        url: "/company/add-company",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    editCompany: build.query({
      query: (data) => ({
        url: "/company/edit-company",
        method: "POST",
        body: data,
        headers: headers(),
      }),
    }),
    setCompany: build.query({
      query: (company_id) => ({
        url: "/company/set-company",
        method: "POST",
        params: { company_id },
        headers: headers(),
      }),
    }),
    deleteCompany: build.query({
      query: (id) => ({
        url: "/company/delete-company",
        method: "DELETE",
        params: { id },
        headers: headers(),
      }),
    }),
    getCompanies: build.query({
      query: () => ({
        url: "/company/get-companies",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: CompaniesResponse): CompanyResponse[] => {
        return resp.response;
      },
    }),
  }),
});

export const {
  useLazyAddCompanyQuery,
  useLazyEditCompanyQuery,
  useLazyDeleteCompanyQuery,
  useLazyGetCompaniesQuery,
  useLazySetCompanyQuery,
} = companies;
