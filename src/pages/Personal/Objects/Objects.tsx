import styled from "styled-components";
import { Header } from "./Header/Header";
import { ObjectsTable } from "./ObjectsTable/ObjectsTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Objects = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledObjects>
    <Header />
    <ObjectsTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledObjects>
);

const StyledObjects = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
