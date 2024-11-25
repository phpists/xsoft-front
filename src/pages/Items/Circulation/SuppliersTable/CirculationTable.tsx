import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Назва", sortable: true, className: "header-text" },
  { title: "Дата", sortable: true, className: "header-text" },
  { title: "Тип операції", sortable: true, className: "header-text" },
  { title: "Склад", sortable: true, className: "header-text" },
  { title: "Собівартість", sortable: true, className: "header-text" },
  { title: "Ціна", sortable: true, className: "header-text" },
  { title: "Наявність", sortable: true, className: "header-text" },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const CirculationTable = ({
  selected,
  onSelect,
  onSelectAll,
}: Props) => (
  <StyledCirculationTable>
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
  </StyledCirculationTable>
);

const StyledCirculationTable = styled.div`
  .header-text {
    span {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
