import { BiLoader } from "react-icons/bi";

export const Loading = () => (
  <div className="flex items-center justify-center flex-col h-full">
    <BiLoader size={40} className="mr-1 animate-spin" />
  </div>
);
