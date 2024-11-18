import { IPhone } from "../components/PhonesInput/PhonesInput";
import { IMedia } from "./global";

export interface CategoryResponse {
  code: number;
  response: { categories: Category[] };
}

export interface Category {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface ClientsResponse {
  code: number;
  response: ClientsResponseData;
}

export interface ClientsResponseData {
  current_page: number;
  data: Client[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url?: string; label: string; active: boolean }[];
  next_page_url: any;
  path: string;
  per_page: number;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface Client {
  id: number;
  category_id?: number;
  role_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  phones?: IPhone[];
  color?: string;
  bd_date?: string;
  comment?: string;
  created_at: string;
  updated_at: string;
  media: IMedia[];
}
