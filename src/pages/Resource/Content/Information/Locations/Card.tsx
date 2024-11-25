import { BiTrash } from "react-icons/bi";
import { Input } from "../../../../../components/Input/Input";

export const Card = () => (
  <div className="flex items-center gap-3.5 w-max">
    <Input label="Філія / Локація" className="w-[421px] bg-white" />
    <button>
      <BiTrash size={24} />
    </button>
  </div>
);
