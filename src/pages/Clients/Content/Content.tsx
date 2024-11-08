import styled from "styled-components";
import { Header } from "./Header/Header";
import { ClientsTable } from "./ClientsTable/ClientsTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Content = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledContent>
    <Header />
    <ClientsTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledContent>
);

const StyledContent = styled.div`
  padding: 10px 14px 14px;
`;
