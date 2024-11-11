import { Input } from "../../../../components/Input/Input";
import { SectionTitle } from "../SectionTitle";

export const Materials = () => (
  <div>
    <SectionTitle title="Налаштування витратних матеріалів" />
    <div className="flex items-center gap-3 5">
      <Input label="Кількість" required className="w-[120px]" number />
      <Input
        label="Одиниця виміру"
        required
        className="w-[160px]"
        defaultValue="ml"
        options={[
          { title: "ml", value: "ml" },
          { title: "kg", value: "kg" },
        ]}
      />
    </div>
    <div className="text-sm text-[#737373] leading-[19.6px] mt-2">
      Ваші роздрібні ціни включають податки
    </div>
  </div>
);
