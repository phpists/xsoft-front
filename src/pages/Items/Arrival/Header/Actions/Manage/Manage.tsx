import { BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "./Button";
import { ArchiveButton } from "./ArchiveButton";

export const Manage = () => (
  <div className="flex items-center gap-3 5">
    <Button title="Прихід" Icon={BiPlus} color="blue" />
    <Button title="Списаня" Icon={BiMinus} />
    <ArchiveButton />
  </div>
);
