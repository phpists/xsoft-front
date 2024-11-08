import { AddButton } from "../../../../../components/AddButton";
import { Button } from "../../../../../components/Button";
import { Color } from "./Color";

export const Header = () => (
  <div className="flex items-center justify-between gap-3.5">
    <div className="flex items-center justify-between gap-2 py-[9.5px] px-3.5 bg-[#EFEFEF] rounded-[100px] w-full">
      <Color />
      <AddButton title="Додати іконку" />
    </div>
    <Button title="Зберегти зміни" className="!w-[155px]" />
  </div>
);
