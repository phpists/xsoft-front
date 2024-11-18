import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Товар", sortable: true, className: "header-text" },
  { title: "Категорія", sortable: true, className: "header-text" },
  { title: "Склад", sortable: true, className: "header-text" },
  { title: "Кількість", sortable: true, className: "header-text" },
  { title: "Одиниця виміру", sortable: true, className: "header-text" },
  { title: "Націнка", sortable: true, className: "header-text" },
  { title: "Вартість ", sortable: true, className: "header-text" },
  { title: "Наявність ", sortable: true, className: "header-text" },
  { title: "Критичні ", sortable: true, className: "header-text" },
  {
    title: "Недолік до бажаної кількості ",
    sortable: true,
    className: "header-text",
  },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const StoragesTable = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledStoragesTable>
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
  </StyledStoragesTable>
);

const StyledStoragesTable = styled.div`
  .header-text {
    span {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
