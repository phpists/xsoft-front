import styled from "styled-components";
import { Header } from "./Header/Header";
import { PersonalTable } from "./PersonalTable/PersonalTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Catalog = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledCatalog>
    <Header />
    <PersonalTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledCatalog>
);

const StyledCatalog = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
