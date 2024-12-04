export type WarehousesResponse = {
  code: number;
  response: {
    warehouses: IWarehouseResponse[];
  };
};

export type IWarehouseResponse = {
  id: number;
  company_id: number;
  title: string;
  description: any;
  created_at: string;
};
