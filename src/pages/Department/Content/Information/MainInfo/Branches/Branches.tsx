import styled from "styled-components";
import { SectionTitle } from "../../../../../../components/SectionTitle";
import { Card } from "./Card";
import { AddButton } from "../../../../../../components/AddButton";

export const Branches = () => (
  <StyledBranches>
    <SectionTitle title="Філія" />
    <Card />
    <AddButton title="Додати філію" />
  </StyledBranches>
);

const StyledBranches = styled.div`
  padding: 14px;
  border-radius: 8px;
  background: #f7f7f7;
`;
