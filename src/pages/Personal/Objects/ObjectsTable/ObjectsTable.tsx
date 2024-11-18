import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Назва", sortable: true },
  { title: "Кількість", sortable: true },
  { title: "Статус", sortable: true },
  { title: "Послуги", sortable: true },
  { title: "Локація", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const ObjectsTable = ({ selected, onSelect, onSelectAll }: Props) => (
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
