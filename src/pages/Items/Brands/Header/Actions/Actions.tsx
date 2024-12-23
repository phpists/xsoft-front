import { AddButton } from "./AddButton";
import { Filter } from "./Filter/Filter";
import { Search } from "../../../../../components/Search/Search";

export const Actions = () => (
  <div className="flex items-center gap-6">
    <AddButton />
    <Search />
    <Filter />
  </div>
);
