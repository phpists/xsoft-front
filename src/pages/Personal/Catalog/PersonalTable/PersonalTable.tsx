import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Ім’я", sortable: true },
  { title: "Посада", sortable: true },
  { title: "Телефон", sortable: true },
  { title: "Статус", sortable: true },
  { title: "Ставка", sortable: true },
  { title: "Локація", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const PersonalTable = ({ selected, onSelect, onSelectAll }: Props) => (
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
