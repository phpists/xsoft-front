import { Filter } from "./Filter/Filter";
import { Search } from "../../../../../components/Search/Search";
import { AddButton } from "./AddButton";

interface Props {
  search: string;
  onSearch: (val: string) => void;
}

export const Actions = ({ search, onSearch }: Props) => (
  <div className="flex items-center gap-6">
    <AddButton />
    <Search value={search} onChange={onSearch} />
    <Filter />
  </div>
);
