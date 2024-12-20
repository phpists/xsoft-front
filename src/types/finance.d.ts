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
