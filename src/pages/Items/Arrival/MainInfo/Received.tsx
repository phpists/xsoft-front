import { BiCalendar, BiUser } from "react-icons/bi";
import { Select } from "../../../../components/Select/Select";
import { Input } from "../../../../components/Input/Input";

export const Received = () => (
  <div className="flex items-center justify-between mb-3.5">
    <Select
      label="Прийняв"
      options={[]}
      Icon={<BiUser />}
      className="max-w-[479px]"
    />
    <div className="flex items-center gap-2">
      <Input label="Дата" calendar Icon={BiCalendar} />
      <Input label="Час" time labelActive />
    </div>
  </div>
);
