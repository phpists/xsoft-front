import { Button } from "../../../../../components/Button";
import { Color } from "./Color";

interface Props {
  color: string;
  onChangeColor: (val: string) => void;
  onSave: () => void;
  loading: boolean;
}

export const Header = ({ color, onChangeColor, onSave, loading }: Props) => (
  <div className="flex items-center justify-between gap-3.5">
    <div className="flex items-center justify-between gap-2 py-[9.5px] px-3.5 bg-[#EFEFEF] rounded-[100px] w-full">
      <Color color={color} onChangeColor={onChangeColor} />
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
