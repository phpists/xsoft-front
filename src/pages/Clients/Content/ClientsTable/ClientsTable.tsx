import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Ім’я", sortable: true },
  { title: "Телефон", sortable: false },
  { title: "Email", sortable: false },
  { title: "Оплачено", sortable: true },
  { title: "Візити", sortable: true },
  { title: "Знижки", sortable: true },
  { title: "Останій візит", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const ClientsTable = ({ selected, onSelect, onSelectAll }: Props) => (
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
