import { BiCube, BiTrash } from "react-icons/bi";
import { Select } from "../../../../components/Select/Select";
import { Input } from "../../../../components/Input/Input";

export const Card = () => (
  <div className="flex items-center justify-between mb-3.5">
    <Select
      label="Продукт"
      options={[]}
      Icon={<BiCube />}
      className="max-w-[345px]"
    />
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
      <button>
        <BiTrash size={20} />
      </button>
    </div>
  </div>
);
