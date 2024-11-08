import { BiX } from "react-icons/bi";

interface Props {
  onClose: () => void;
}

export const CloseButton = ({ onClose }: Props) => (
  <button
    className="w-5 h-6 flex items-center justify-center absolute top-3.5 right-3.5"
    onClick={onClose}
  >
    <BiX size={20} />
  </button>
);
