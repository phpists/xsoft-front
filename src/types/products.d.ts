export type IProductInfoResponse = {
  code: number;
  response: IProductInfo;
};

export type IProductInfo = {
  brands: Array<{
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
  }>;
  categories: Array<{
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
  }>;
  measurements: Array<{
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
  }>;
  taxes: Array<{
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
  }>;
  warehouses: Array<{
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
  }>;
  vendors: Array<{
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
  }>;
};

export interface IProduct {
  brand_id: number | undefined;
  category_id: number | undefined;
  article: string;
  title: string;
  description: string;
  product_measure_id: number | undefined;
  color: string;
  balance: number;
  cost_price: number;
  retail_price: number;
  tags: string[];
  vendors: number[];
}

export interface ProductsResoponse {
  code: number;
  response: ProductsResponseData;
}

export interface ProductsResponseData {
  current_page: number;
  data: IProductResponse[];
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
}

export interface IProductResponse {
  id: number;
  user_id: number;
  brand_id: number;
  category_id: number;
  article: string;
  title: string;
  description: string;
  product_measure_id: number;
  color: any;
  balance: number;
  cost_price: number;
  retail_price: number;
  materials_used_quantity: any;
  materials_used_measure_id: any;
  created_at: string;
  items: Array<any>;
  media: Array<{
    id: number;
    type_id: number;
    parent_id: number;
    file: string;
  }>;
  tags: Array<string>;
  vendors: Array<number>;
}
