import { Title } from "./Title";
import { Close } from "./Close";

interface Props {
  onClose: () => void;
}

export const Header = ({ onClose }: Props) => (
  <div className="flex items-center justify-between mb-6">
    <Title />
    <Close onClose={onClose} />
  </div>
);
