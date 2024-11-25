import styled from "styled-components";
import { Header } from "./Header/Header";
import { CirculationTable } from "./SuppliersTable/CirculationTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Circulation = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledCirculation>
    <Header />
    <CirculationTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledCirculation>
);

const StyledCirculation = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
