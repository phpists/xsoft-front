import { Filter } from "./Filter/Filter";
import { Search } from "../../../../../components/Search/Search";
import { Download } from "./Download";
import { Manage } from "./Manage/Manage";

export const Actions = () => (
  <div className="flex items-center gap-6">
    <Manage />
    <Search />
    <Filter />
    <Download />
  </div>
);
