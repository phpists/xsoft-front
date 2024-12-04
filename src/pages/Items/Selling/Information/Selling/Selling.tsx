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
      <div className="flex items-center max-w-[510px] gap-2.5">
        <div className="flex items-center gap-3.5">
          <Input
            label="Кількість"
            number
            labelActive
            className="w-[92px]"
            value={10}
          />{" "}
          <Input
            label="Одинця"
            value="шт"
            options={[
              { title: "шт", value: "шт" },
              { title: "кг", value: "кг" },
            ]}
            labelActive
            className="w-[85px]"
          />{" "}
          <Input
            label="Ціна закупки"
            number
            labelActive
            className="w-[154px]"
            sign="UAH"
            value={450}
          />{" "}
          <Input
            label="Ціна роздрібна"
            number
            labelActive
            className="w-[154px]"
            sign="UAH"
            value={500}
          />
        </div>
      </div>
    </div>
  );
};
