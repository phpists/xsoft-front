import styled from "styled-components";
import { Header } from "./Header/Header";
import { ResourceTable } from "./ResourceTable/ResourceTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Resource = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledResource>
    <Header />
    <ResourceTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledResource>
);

const StyledResource = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
