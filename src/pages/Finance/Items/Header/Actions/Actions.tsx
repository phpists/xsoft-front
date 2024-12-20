import { AddButton } from "./AddButton";

interface Props {
  onRefetchData: () => void;
}

export const Actions = ({ onRefetchData }: Props) => (
  <div className="flex items-center gap-6">
    <AddButton onRefetchData={onRefetchData} />
  </div>
);
