export type SuppliersResponse = {
  code: number;
  response: {
    current_page: number;
    data: ISupplierResponse[];
    first_page_url: string;
    from: number;
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
    to: number;
    total: number;
  };
};

export type ISupplierResponse = {
  id: number;
  parent_id: number;
  company_id: number;
  category_id: number;
  role_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phones: Array<{
    type_id: Array<any>;
    phone: any;
  }>;
  color: string;
  comment?: string;
  created_at: string;
  updated_at: string;
};
