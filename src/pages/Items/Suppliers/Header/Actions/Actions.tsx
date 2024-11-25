import { Filter } from "./Filter/Filter";
import { Search } from "../../../../../components/Search/Search";
import { AddButton } from "./AddButton";

export const Actions = () => (
  <div className="flex items-center gap-6">
    <AddButton />
    <Search />
    <Filter />
  </div>
);
