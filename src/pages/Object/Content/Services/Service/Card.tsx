import { BiCube, BiTrash } from "react-icons/bi";
import { Input } from "../../../../../components/Input/Input";
import { Select } from "../../../../../components/Select/Select";

export const Card = () => (
  <div className="flex items-center justify-between mb-2">
    <Select
      label="Послуга"
      options={[]}
      className="max-w-[345px]"
      Icon={<BiCube />}
    />
    <div className="flex items-center gap-3.5">
      <Input
        label="Кількість"
        className="w-[92px]"
        number
        labelActive
        value={1}
      />
      <Input
        label="Тривалість"
        className="w-[140px]"
        time
        labelActive
        value={1}
      />
      <Input
        label="Ціна"
        className="w-[154px]"
        number
        labelActive
        value={500}
        sign="UAH"
      />
      <button>
        <BiTrash size={24} />
      </button>
    </div>
  </div>
);
