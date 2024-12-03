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
  type_id: number;
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

export type CompanyCategoriesResponse = {
  code: 200;
  response: {
    categories: [
      {
        id: 1;
        title: "Магазин";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-13 11:54:20";
        branches: null;
      },
      {
        id: 2;
        title: "Барбершоп ";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-13 11:54:20";
        branches: null;
      },
      {
        id: 7;
        title: "test3";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-19 08:08:38";
        branches: null;
      },
      {
        id: 12;
        title: "ноунейм";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-27 11:08:45";
        branches: null;
      },
      {
        id: 13;
        title: "yjdsds";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-27 11:27:05";
        branches: null;
      },
      {
        id: 14;
        title: "112121";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-27 11:32:39";
        branches: null;
      },
      {
        id: 23;
        title: "Some cat11";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-28 13:09:35";
        branches: null;
      },
      {
        id: 24;
        title: "test34567";
        user_id: null;
        color: null;
        category_id: null;
        created_at: "2024-11-28 13:38:25";
        branches: null;
      }
    ];
  };
};
