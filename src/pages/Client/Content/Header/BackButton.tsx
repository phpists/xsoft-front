import { NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = () => (
  <NavLink to="/clients">
    <BiArrowBack size={20} />
  </NavLink>
);
