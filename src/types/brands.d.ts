export type BrandsResponse = {
  code: number;
  response: {
    brands: IBrandResponse[];
  };
};

export type IBrandResponse = {
  id: number;
  title: string;
  description: any;
  created_at: string;
  color: string;
};
