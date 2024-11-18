import styled from "styled-components";
import { Header } from "./Header/Header";
import { StoragesTable } from "./StoragesTable/StoragesTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Storages = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledStorages>
    <Header />
    <StoragesTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledStorages>
);

const StyledStorages = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
