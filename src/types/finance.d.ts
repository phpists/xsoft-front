export type CashCategoriesResponse = {
  code: number;
  response: {
    cash_categories: Array<{
      id: number;
      company_id: number;
      title: string;
      type_id: number;
      created_at: string;
    }>;
  };
};

export type CashesResponse = {
  code: number;
  response: {
    cashes: Array<{
      id: number;
      company_id: number;
      title: string;
      appointment: string;
      description: string;
      is_cash_category: number;
      created_at: string;
      updated_at: string;
      total: number;
    }>;
  };
};

export type CachesTransactionsResponse = {
  code: number;
  response: {
    transactions: CachesTransactionResponse[];
  };
};

export type CachesTransactionResponse = {
  id: number;
  user_id: number;
  cashes_id: number;
  type_id: string;
  amount: number;
  amount_cashes: number;
  created_at: string;
  user: {
    id: number;
    parent_id: any;
    role_id: number;
    company_id: number;
    category_id: any;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    email_verified_at: any;
    phones: any;
    color: any;
    bd_date: any;
    comment: any;
    tags: any;
    department_id: any;
    position_id: any;
    created_at: string;
    updated_at: string;
  };
  cashes: {
    id: number;
    company_id: number;
    title: string;
    appointment: string;
    description: string;
    is_cash_category: number;
    total: number;
    created_at: string;
    updated_at: string;
  };
};
