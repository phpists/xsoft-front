import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, headers } from "../../api";
import {
  CompaniesResponse,
  CompanyCategoriesResponse,
  CompanyResponse,
} from "../../types/companies";
import { Option } from "../../components/Select/Select";

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
    addCompanyCategory: build.query({
      query: (title) => ({
        url: "/company-category/add-category",
        method: "POST",
        params: { title },
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
    getCompanyCategories: build.query({
      query: () => ({
        url: "/company-category/get-categories",
        method: "GET",
        headers: headers(),
      }),
      transformResponse: (resp: CompanyCategoriesResponse): Option[] => {
        return resp.response?.categories?.map(({ title, id }) => ({
          title,
          value: id,
        }));
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
  useLazyAddCompanyCategoryQuery,
  useGetCompanyCategoriesQuery,
} = companies;
