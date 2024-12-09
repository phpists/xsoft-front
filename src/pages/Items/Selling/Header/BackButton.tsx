import { BiArrowBack } from "react-icons/bi";

interface Props {
  onBack: () => void;
}

export const BackButton = ({ onBack }: Props) => (
  <button className="mr-6" onClick={onBack}>
    <BiArrowBack size={20} />{" "}
  </button>
);
