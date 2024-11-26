import { IPhone } from "../components/PhonesInput/PhonesInput";

export type PersonalResponse = {
  code: number;
  response: PersonalResponseData;
};

export type PersonalResponseData = {
  current_page: number;
  data: IPersonaResponse[];
  first_page_url: string;
  from: any;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url?: string;
    label: string;
    active: boolean;
  }>;
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: any;
  total: number;
};

export type IPersonaResponse = {
  id: number;
  company_id: number;
  category_id: any;
  role_id: number;
  first_name: string;
  last_name: string;
  email: string;
  color: string;
  comment: any;
  created_at: string;
  updated_at: string;
  media: Array<any>;
  phones: IPhone[];
};

export type IRolesResponse = {
  code: number;
  response: {
    roles: Array<{
      id: number;
      title: string;
      created_at: string;
      updated_at: string;
    }>;
  };
};

export type IRole = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
};

export type IGeneratePasswordResponse = {
  code: number;
  response: {
    password: string;
  };
};

export type PersonalInfoResponse = {
  code: number;
  response: {
    positions: Array<{
      id: number;
      title: string;
      created_at: string;
      updated_at: string;
    }>;
    departments: Array<{
      id: number;
      title: string;
      created_at: string;
      updated_at: string;
    }>;
  };
};
