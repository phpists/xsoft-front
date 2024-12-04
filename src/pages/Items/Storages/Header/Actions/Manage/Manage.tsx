import { BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export const Manage = () => (
  <div className="flex items-center gap-3 5">
    <NavLink to="/storage">
      <Button title="Склад" Icon={BiPlus} />
    </NavLink>
  </div>
);
