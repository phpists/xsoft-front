import { Search } from "../../../../../components/Search/Search";
import { AddButton } from "./AddButton";
import { Filter } from "./Filter/Filter";

export const Actions = () => (
  <div className="flex items-center gap-6">
    <AddButton />
    <Search />
    <Filter />
  </div>
);
