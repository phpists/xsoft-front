import { Input } from "../../../../components/Input/Input";
import { Select } from "../../../../components/Select/Select";
import { IProduct, IProductInfo } from "../../../../types/products";
import { SectionTitle } from "./SectionTitle";

interface Props {
  data: IProduct;
  onChange: (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => void;
  productInfo?: IProductInfo;
  errors: string[];
}

export const Availability = ({
  data,
  onChange,
  productInfo,
  errors,
}: Props) => (
  <div>
    <SectionTitle title="Наявність товару" />
    {/* <Select
      label={"Склад"}
      options={
        productInfo?.warehouses.map(({ title, id }) => ({
          title,
          value: id,
        })) ?? []
      }
      className="!max-w-[474px] mb-3.5"
    />*/}
    <Select
      label={"Постачальник"}
      options={
        productInfo?.vendors?.map?.(({ id, title }) => ({
          title,
          value: id,
        })) ?? []
      }
      className="!max-w-[474px] mb-3.5 vendors-select"
      multiselect
      multiselectValue={data.vendors}
      onChangeMultiselect={(val) => onChange("vendors", val)}
    />
    <div className="flex items-center gap-2.5 mb-2 w-max">
      {/* <Input label="Кількість" required className="max-w-[130px]" number /> */}
      <Input
        label="Критичний залишок"
        required
        className="w-[474px] max-w-[474px]"
        number
        value={data.balance}
        onChange={(val) => onChange("balance", val)}
        labelActive
        error={!!errors?.includes("balance")}
      />
    </div>{" "}
    <div className="text-sm text-[#737373] leading-[19.6px] mt-2">
      Додайте новий товар на склад для продажу
    </div>
  </div>
);
