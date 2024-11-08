import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = () => (
  <NavLink to="/items">
    <BiArrowBack size={20} />
  </NavLink>
);
