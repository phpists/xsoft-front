import { Input } from "../../../../../components/Input/Input";
import { SectionTitle } from "../SectionTitle";
import { IProduct, IProductInfo } from "../../../../../types/products";

interface Props {
  data: IProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  productInfo?: IProductInfo;
  errors: string[];
}

export const Selling = ({ data, onChange, productInfo, errors }: Props) => {
  return (
    <div>
      <SectionTitle title="Налаштування продажів" />
      <div className="flex items-center max-w-[310px] gap-2.5">
        <Input
          label="Собівартість"
          defaultValue="500,00 грн"
          sign="UAH"
          className="max-w-[154px]"
          value={data.cost_price}
          onChange={(val) => onChange("cost_price", val)}
          labelActive
          error={!!errors?.includes("cost_price")}
        />
        <Input
          label="Роздрібна ціна"
          defaultValue="500,00 грн"
          sign="UAH"
          className="max-w-[154px]"
          value={data.retail_price}
          onChange={(val) => onChange("retail_price", val)}
          labelActive
          error={!!errors?.includes("retail_price")}
        />
      </div>
    </div>
  );
};
