import { Filter } from "./Filter/Filter";
import { Search } from "../../../../../components/Search/Search";
import { Download } from "./Download";

export const Actions = () => (
  <div className="flex items-center gap-6">
    <Search />
    <Filter />
    <Download />
  </div>
);
