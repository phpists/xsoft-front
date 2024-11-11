import styled from "styled-components";
import { List } from "./List/List";
import { SelectedCompany } from "./SelectedCompany/SelectedCompany";

export const Companies = () => (
  <StyledCompanies>
    <SelectedCompany />
    <List />
  </StyledCompanies>
);

const StyledCompanies = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 223px;
  gap: 14px;
`;
