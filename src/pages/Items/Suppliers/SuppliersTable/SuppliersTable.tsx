import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Ім’я", sortable: true, className: "header-text" },
  { title: "Телефон", sortable: true, className: "header-text" },
  { title: "Коментар", sortable: true, className: "header-text" },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const SuppliersTable = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledSuppliersTable>
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
  </StyledSuppliersTable>
);

const StyledSuppliersTable = styled.div`
  .header-text {
    span {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
