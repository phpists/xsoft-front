import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Назва", sortable: true },
  { title: "#", sortable: true },
  { title: "Категорія", sortable: true },
  { title: "Склад", sortable: true },
  { title: "Наявність", sortable: true },
  { title: "Одиниця \n виміру", sortable: true },
  { title: "Ціна ", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const ProductsTable = ({ selected, onSelect, onSelectAll }: Props) => (
  <>
    <Table
      columns={COLUMNS}
      selected={selected?.length}
      onSelectAll={onSelectAll}
      allCount={20}
    >
      {Array.from(Array(20).keys())?.map((i) => (
        <Row
          key={i}
          selected={selected.includes(i)}
          onSelect={() => onSelect(i)}
          className={i % 2 === 1 ? "grey" : ""}
        />
      ))}
    </Table>
  </>
);
