export type IMovementsInfoResponse = {
  code: number;
  response: IMovementsInfoResponseData;
};

export type IMovementsInfoResponseData = {
  company_id: number;
  staffs: Array<{
    id: number;
    parent_id: any;
    role_id: number;
    company_id?: number;
    category_id: any;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    email_verified_at: any;
    phones?: string;
    color?: string;
    bd_date: any;
    comment: any;
    tags: any;
    department_id?: number;
    position_id: any;
    created_at: string;
    updated_at: string;
  }>;
  warehouses: Array<{
    id: number;
    title: string;
    description?: string;
    created_at: string;
    updated_at: string;
    company_id?: number;
  }>;
  measurements: Array<{
    id: number;
    title: string;
    created_at?: string;
    updated_at?: string;
  }>;
  suppliers: Array<{
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
      phone: string;
    }>;
    color: string;
    comment: any;
    created_at: string;
    updated_at: string;
  }>;
};

export type IMovementsResponse = {
  code: number;
  response: {
    products_movement: IMovementsResponseData;
  };
};

export type IMovementsResponseData = {
  current_page: number;
  data: Array<IMovementsResponseDataItem>;
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

export type IMovementsResponseDataItem = {
  id: number;
  company_id: number;
  staff_id: number;
  warehouse_id: number;
  supplier_id: number;
  type_id: number;
  type_title: string;
  date_create: string;
  time_create: string;
  debt: number;
  installment_payment: number;
  box_office_date: any;
  total_price: number;
  created_at: string;
  items: Array<{
    id: number;
    product_movement_id: number;
    product_id: number;
    type_id: number;
    qty: number;
    measurement_id: number;
    cost_price: number;
    retail_price: number;
    description: any;
    created_at: string;
    type_title: string;
    product: {
      id: number;
      company_id?: number;
      user_id: number;
      brand_id: number;
      category_id: number;
      article: string;
      title: string;
      description: string;
      product_measure_id: number;
      color?: string;
      balance: number;
      cost_price: number;
      retail_price: number;
      materials_used_quantity: any;
      materials_used_measure_id: any;
      created_at: string;
      media: Array<any>;
      tags: Array<string>;
      vendors: Array<number>;
    };
  }>;
};

export type IMovementsSearchResponse = {
  code: number;
  response: {
    product_movement_items: IMovementsSearchResponseItem[];
  };
};

export type IMovementsSearchResponseItem = {
  id: number;
  product_movement_id: number;
  product_id: number;
  type_id: number;
  qty: number;
  measurement_id: number;
  cost_price: number;
  retail_price: number;
  description: any;
  created_at: string;
  product: {
    id: number;
    company_id: any;
    user_id: number;
    brand_id: number;
    category_id: number;
    article: string;
    title: string;
    description: string;
    product_measure_id: number;
    color: string;
    balance: number;
    cost_price: any;
    retail_price: any;
    materials_used_quantity: any;
    materials_used_measure_id: any;
    created_at: string;
    media: Array<any>;
    tags: any;
    vendors: any;
  };
};
