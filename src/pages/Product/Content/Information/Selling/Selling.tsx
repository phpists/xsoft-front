import { BiTrash } from "react-icons/bi";
import { Input } from "../../../../../components/Input/Input";
import { Select } from "../../../../../components/Select/Select";
import { SectionTitle } from "../../SectionTitle";
import { AddButton } from "../../../../../components/AddButton";

export const Selling = () => (
  <div>
    <SectionTitle title="Налаштування продажів" />
    <div className="flex items-start justify-between mb-3.5">
      <div>
        <Select
          label={"Без податків"}
          options={[
            { title: "Без податків", value: "1" },
            { title: "Без податків", value: "2" },
          ]}
          dropdownButton="Додати категорію"
          onClickDropdownButton={() => alert("here")}
          search
          value="1"
          className="!max-w-[479px]"
          message="Ваші роздрібні ціни включають податки"
        />
        <div className="text-sm text-[#737373] leading-[19.6px] mt-2">
          Ваші роздрібні ціни включають податки
        </div>
      </div>
      <div className="flex items-center gap-3 5">
        <Input
          label="Роздрібна ціна"
          defaultValue="500,00 грн"
          sign="UAH"
          className="max-w-[154px]"
        />
        <Input
          label="Собівартість "
          defaultValue="500,00 грн"
          sign="UAH"
          className="max-w-[154px]"
        />
        <BiTrash size={20} className="shrink-0 cursor-pointer" />
      </div>
    </div>
    <AddButton title="Додати послугу" />
  </div>
);
