import { BiCog, BiPlus } from "react-icons/bi";
import { Button } from "../../../../../components/Button";
import { Filter } from "./Filter/Filter";

export const Actions = () => (
  <div className="flex items-center gap-3.5">
    <Button title="Створити нову статтю" Icon={<BiPlus />} />
    <Button title="Нова каса" Icon={<BiPlus />} />
    <Filter />
    <button>
      <BiCog size={20} />
    </button>
  </div>
);
