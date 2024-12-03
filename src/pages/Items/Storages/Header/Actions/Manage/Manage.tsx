import { BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "./Button";
import { ArchiveButton } from "./ArchiveButton";
import { NavLink } from "react-router-dom";

export const Manage = () => (
  <div className="flex items-center gap-3 5">
    <Button title="Прихід" Icon={BiPlus} color="blue" />
    <Button title="Списаня" Icon={BiMinus} />
    <NavLink to="/storage">
      <Button title="Склад" Icon={BiPlus} />
    </NavLink>
    <ArchiveButton />
  </div>
);
