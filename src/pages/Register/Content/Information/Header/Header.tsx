import { Button } from "../../../../../components/Button";

interface Props {
  onSave: () => void;
  loading: boolean;
}

export const Header = ({ onSave, loading }: Props) => (
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
