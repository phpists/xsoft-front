import { Input } from "../../../../components/Input/Input";
import { IProduct, IProductInfo } from "../../../../types/products";
import { SectionTitle } from "../SectionTitle";

interface Props {
  data: IProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  productInfo?: IProductInfo;
}

export const Materials = ({ data, onChange, productInfo }: Props) => (
  <div>
    <SectionTitle title="Налаштування витратних матеріалів" />
    <div className="flex items-center gap-3 5">
      {/* <Input
        label="Кількість"
        required
        className="w-[120px]"
        number
        value={data.materials_used_quantity}
        onChange={(val) => onChange("materials_used_quantity", val)}
        labelActive
      />
      <Input
        label="Одиниця виміру"
        required
        className="w-[160px]"
        options={
          productInfo?.measurements?.map(({ id, title }) => ({
            title,
            value: id,
          })) ?? []
        }
        value={data.materials_used_measure_id}
        onChange={(val) => onChange("materials_used_measure_id", val)}
      /> */}
    </div>
    <div className="text-sm text-[#737373] leading-[19.6px] mt-2">
      Ваші роздрібні ціни включають податки
    </div>
  </div>
);
