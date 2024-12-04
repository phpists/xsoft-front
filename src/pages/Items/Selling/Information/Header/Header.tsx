import { Button } from "../../../../../components/Button";
import { IProduct } from "../../../../../types/products";

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
  <div className="flex items-center justify-end gap-3.5">
    <Button
      title="Зберегти зміни"
      className="!w-[155px]"
      onClick={onSave}
      disabled={loading}
      loading={loading}
    />
  </div>
);
