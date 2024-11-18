import { Input } from "../../../../../components/Input/Input";
import { SectionTitle } from "../../SectionTitle";
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
      {/* {data.items.map(({ tax_id, cost_price, retail_price }, i) => (
        <div className="flex items-start justify-between mb-3.5" key={i}>
          <div>
            <Select
              label={"Без податків"}
              options={
                productInfo?.taxes.map(({ id, title }) => ({
                  title,
                  value: id,
                })) ?? []
              }
              search
              value={tax_id}
              onChange={(val) => handleChangeItemFiels(i, "tax_id", val)}
              className="!max-w-[479px]"
              message="Ваші роздрібні ціни включають податки"
            />
            <div className="text-sm text-[#737373] leading-[19.6px] mt-2">
              Ваші роздрібні ціни включають податки
            </div>
          </div>
          <div className="flex items-center gap-3 5">
            <Input
              label="Собівартість"
              defaultValue="500,00 грн"
              sign="UAH"
              className="max-w-[154px]"
              value={cost_price}
              onChange={(val) => handleChangeItemFiels(i, "cost_price", val)}
              labelActive
            />
            <Input
              label="Роздрібна ціна"
              defaultValue="500,00 грн"
              sign="UAH"
              className="max-w-[154px]"
              value={retail_price}
              onChange={(val) => handleChangeItemFiels(i, "retail_price", val)}
              labelActive
            />
            {data?.items?.length > 0 ? (
              <BiTrash
                size={20}
                className="shrink-0 cursor-pointer"
                onClick={() => handleDeleteItem(i)}
              />
            ) : null}
          </div>
        </div>
      ))} */}

      {/* <AddButton title="Додати послугу" onClick={handleAddItem} /> */}
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
