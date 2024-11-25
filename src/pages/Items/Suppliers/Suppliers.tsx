import styled from "styled-components";
import { Header } from "./Header/Header";
import { SuppliersTable } from "./SuppliersTable/SuppliersTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Suppliers = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledSuppliers>
    <Header />
    <SuppliersTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledSuppliers>
);

const StyledSuppliers = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
