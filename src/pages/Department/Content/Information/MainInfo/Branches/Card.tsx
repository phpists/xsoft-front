import { BiMap, BiTrash } from "react-icons/bi";
import { Input } from "../../../../../../components/Input/Input";
import { Select } from "../../../../../../components/Select/Select";

export const Card = () => (
  <div className="flex items-center gap-3.5 mb-3.5">
    {" "}
    <Input label="Назва" className="bg-white" />
    <Select
      label="Локація"
      options={[]}
      Icon={<BiMap />}
      className="bg-white"
    />
    <button>
      <BiTrash size={24} />
    </button>
  </div>
);
