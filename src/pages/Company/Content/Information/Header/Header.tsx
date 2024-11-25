import { Button } from "../../../../../components/Button";
import { ICompany } from "../../Content";
import { Color } from "./Color";

interface Props {
  data: ICompany;
  onChange: (
    field: string,
    value: string | number | string[] | number[]
  ) => void;
  onSave: () => void;
  loading: boolean;
}

export const Header = ({ data, onChange, onSave, loading }: Props) => (
  <div className="flex items-center justify-between gap-3.5">
    <div className="flex items-center justify-between gap-2 py-[9.5px] px-3.5 bg-[#EFEFEF] rounded-[100px] w-full">
      <Color value={data.color} onChange={(val) => onChange("color", val)} />
    </div>
    <Button
      title="Зберегти зміни"
      className="!w-[155px]"
      onClick={onSave}
      disabled={loading}
      loading={loading}
    />
  </div>
);
