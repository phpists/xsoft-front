import { AddButton } from "./AddButton";
import { Filter } from "./Filter/Filter";
import { Search } from "../../../../../components/Search/Search";
import { Download } from "./Download";
import { BiCog } from "react-icons/bi";

interface Props {
  search: string;
  onSearch: (val: string) => void;
  filter: any;
  onChangeFilter: (field: string, value: string[] | number) => void;
}

export const Actions = ({
  search,
  onSearch,
  filter,
  onChangeFilter,
}: Props) => (
  <div className="flex items-center gap-6">
    <AddButton />
    <Search value={search} onChange={onSearch} />
    <Filter filter={filter} onChangeFilter={onChangeFilter} />
    <Download />
    <button>
      <BiCog size={24} />
    </button>
  </div>
);
