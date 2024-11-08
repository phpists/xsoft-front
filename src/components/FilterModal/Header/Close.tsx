import { BiX } from "react-icons/bi";

interface Props {
  onClose: () => void;
}

export const Close = ({ onClose }: Props) => (
  <button
    className="flex items-center justify-center w-5 h-5"
    onClick={onClose}
  >
    <BiX size={20} />
  </button>
);
