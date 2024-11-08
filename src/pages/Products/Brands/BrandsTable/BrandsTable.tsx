import styled from "styled-components";
import { Table } from "../../../../components/Table/Table";
import { Row } from "./Row";

const COLUMNS = [
  { title: "Назва", sortable: true, className: "w-full" },
  { title: "Дата", sortable: true },
];

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const BrandsTable = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledBrandsTable>
    <Table
      columns={COLUMNS}
      selected={selected?.length}
      onSelectAll={onSelectAll}
      allCount={20}
      className="table-wrapper"
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
  </StyledBrandsTable>
);

const StyledBrandsTable = styled.div`
  .table-wrapper {
    grid-template-columns: 40px 1fr max-content max-content;
  }
`;
