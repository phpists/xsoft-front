import styled from "styled-components";
import { Header } from "./Header";
import { ReactNode } from "react";
import { Loading } from "./Loading";
import { Empty } from "./Empty";

export interface Column {
  title: string;
  sortable: boolean;
  className?: string;
  onClick?: () => void;
}

interface Props {
  columns: Column[];
  children: ReactNode;
  selected?: number;
  onSelectAll?: () => void;
  allCount?: number;
  className?: string;
  onDeleteSelected?: () => void;
  loading?: boolean;
}

export const Table = ({
  columns,
  children,
  selected,
  onSelectAll,
  allCount,
  className,
  onDeleteSelected,
  loading,
}: Props) => (
  <StyledTable
    columnsCount={columns?.length}
    className={`no-scrollbar ${onSelectAll ? "" : "no-select"} ${className}`}
  >
    <Header
      columns={columns}
      selected={selected}
      onSelectAll={onSelectAll}
      allCount={allCount}
      onDeleteSelected={onDeleteSelected}
    />
    {loading ? <Loading /> : allCount === 0 ? <Empty /> : children}
  </StyledTable>
);

interface StyledTableProps {
  columnsCount: number;
}

const StyledTable = styled.div<StyledTableProps>`
  display: grid;
  grid-template-columns: 40px repeat(${({ columnsCount }) => columnsCount}, 1fr) max-content;
  grid-auto-rows: max-content;
  box-shadow: 0px 6px 14px 0px #1e1e1e1a;
  border-radius: 8px;
  overflow: auto;
  height: calc(100svh - 144px);
  background: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  text-align: left;
  color: #111111;
  position: relative;
  &.no-select {
    grid-template-columns: repeat(${({ columnsCount }) => columnsCount}, 1fr);
  }
  .grey {
    background: #f7f7f7 !important;
  }
`;
