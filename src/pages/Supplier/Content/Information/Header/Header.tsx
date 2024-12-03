import { Button } from "../../../../../components/Button";
import { IProduct } from "../../../../../types/products";
import { Color } from "./Color";
import { Tags } from "./Tags";

interface Props {
  data: IProduct;
  onChange: (
    field: string,
    value: string | boolean | number | string[]
  ) => void;
  onSave: () => void;
  loading: boolean;
}

export const Header = ({ data, onChange, onSave, loading }: Props) => (
  <div className="flex items-center justify-between gap-3.5">
    <div className="flex items-center justify-between gap-2 py-[9.5px] px-3.5 bg-[#EFEFEF] rounded-[100px] w-full">
      <Color
        value={data.color}
        onChange={(val: string) => onChange("color", val)}
      />
      {/* <Tags
        value={data.tags}
        onChange={(val: string[]) => onChange("tags", val)}
      /> */}
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
