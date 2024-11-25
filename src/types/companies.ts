export type CompaniesResponse = {
  code: number;
  response: CompanyResponse[];
};

export type CompanyResponse = {
  id: number;
  title: string;
  user_id: number;
  color: string;
  category_id: number;
  created_at: string;
  branches: Array<{
    id: number;
    company_id: number;
    location: string;
    created_at: string;
    updated_at: string;
    title: string;
    latitude: string;
    longitude: string;
    phones: Array<{
      phone?: string;
      type_id: Array<number>;
    }>;
  }>;
};
