import styled from "styled-components";
import { Header } from "./Header/Header";
import { DepartmentsTable } from "./DepartmentsTable/DepartmentsTable";

interface Props {
  selected: number[];
  onSelect: (id: number) => void;
  onSelectAll: () => void;
}

export const Departments = ({ selected, onSelect, onSelectAll }: Props) => (
  <StyledDepartments>
    <Header />
    <DepartmentsTable
      selected={selected}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
    />
  </StyledDepartments>
);

const StyledDepartments = styled.div`
  padding: 10px 14px 14px;
  position: relative;
`;
