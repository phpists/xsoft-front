import { BiSlider } from "react-icons/bi";
import { Tabs } from "./Tabs";

export const Header = () => (
  <div className="flex items-center justify-between mb-3.5">
    <Tabs />
    <button>
      <BiSlider size={20} />
    </button>
  </div>
);
