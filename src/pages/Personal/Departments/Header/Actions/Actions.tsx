import { AddButton } from "./AddButton";
import { Filter } from "./Filter/Filter";
import { Settings } from "./Settings";

export const Actions = () => (
  <div className="flex items-center gap-6">
    <AddButton />
    <Filter />
    <Settings />
  </div>
);
