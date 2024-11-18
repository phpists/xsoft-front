import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Назва", sortable: true },
  { title: "Локація", sortable: true },
  { title: "Ресурси", sortable: true },
  { title: "Об'єкти", sortable: true },
  { title: "Персонал", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const DepartmentsTable = ({
  selected,
  onSelect,
  onSelectAll,
}: Props) => (
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
