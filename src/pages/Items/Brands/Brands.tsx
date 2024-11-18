import styled from "styled-components";
import { Header } from "./Header/Header";
import { BrandsTable } from "./BrandsTable/BrandsTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Brands = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledBrands>
    <Header />
    <BrandsTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledBrands>
);

const StyledBrands = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
