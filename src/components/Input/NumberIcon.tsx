import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const NumberIcon = () => (
  <div className="flex flex-col ml-2 mr-2.5">
    <BiChevronUp size={16} className="mb-[-6px]" fill="#737373" />
    <BiChevronDown size={16} fill="#737373" />
  </div>
);
