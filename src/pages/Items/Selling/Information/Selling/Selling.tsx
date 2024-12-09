import { Input } from "../../../../../components/Input/Input";
import { useGetMovementsInfoQuery } from "../../../../../store/movements/movements.api";
import { IProductInfo } from "../../../../../types/products";
import { ISellingProduct } from "../../Selling";

interface Props {
  data: ISellingProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  errors: string[];
}

export const Selling = ({ data, onChange, errors }: Props) => {
  const { data: info } = useGetMovementsInfoQuery({});

  return (
    <div>
      <div className="flex items-center max-w-[510px] gap-2.5">
        <div className="flex items-center gap-3.5">
          <Input
            label="Кількість"
            number
            labelActive
            className="w-[92px]"
            value={data.qty}
            onChange={(val) => onChange("qty", val)}
            error={!!errors?.includes("qty")}
          />{" "}
          <Input
            label="Одиниця"
            options={
              info?.measurements.map(({ title, id }) => ({
                title,
                value: id,
              })) ?? []
            }
            labelActive
            className="w-[85px]"
            value={data.measurement_id}
            disabled
          />{" "}
          <Input
            label="Ціна закупки"
            number
            labelActive
            className="w-[154px]"
            sign="UAH"
            value={data.cost_price}
            onChange={(val) => onChange("cost_price", val)}
            error={!!errors?.includes("cost_price")}
          />{" "}
          <Input
            label="Ціна роздрібна"
            number
            labelActive
            className="w-[154px]"
            sign="UAH"
            value={data.retail_price}
            onChange={(val) => onChange("retail_price", val)}
            error={!!errors?.includes("retail_price")}
          />
        </div>
      </div>
    </div>
  );
};
