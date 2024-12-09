import { Button } from "../../../../../components/Button";

interface Props {
  onSave: () => void;
  loading: boolean;
  off?: boolean;
}

export const Header = ({ onSave, loading, off }: Props) => (
  <div className="flex items-center justify-end gap-3.5">
    <Button
      title={off ? "Списати" : "Продати"}
      className="!w-[155px]"
      onClick={onSave}
      disabled={loading}
      loading={loading}
    />
  </div>
);
