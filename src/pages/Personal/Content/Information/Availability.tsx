import { Input } from "../../../../components/Input/Input";
import { Select } from "../../../../components/Select/Select";
import { SectionTitle } from "../SectionTitle";

export const Availability = () => (
  <div>
    <SectionTitle title="Наявність товару" />
    <Select
      label={"Склад"}
      options={[
        { title: "Склад 1", value: "1" },
        { title: "Склад 2", value: "2" },
      ]}
      className="!max-w-[474px] mb-3.5"
    />
    <Select
      label={"Постачальник"}
      options={[
        { title: "Постачальник 1", value: "1" },
        { title: "Постачальник 2", value: "2" },
      ]}
      className="!max-w-[474px] mb-3.5"
    />
    <div className="flex items-center gap-2.5 mb-2 w-max">
      <Input label="Кількість" required className="max-w-[130px]" number />
      <Input
        label="Критичний залишок"
        required
        className="max-w-[180px]"
        number
      />
    </div>{" "}
    <div className="text-sm text-[#737373] leading-[19.6px] mt-2">
      Додайте новий товар на склад для продажу
    </div>
  </div>
);
