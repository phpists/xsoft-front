import styled from "styled-components";
import { Card } from "./Card/Card";
import { AddButton } from "../../../../../components/AddButton";

export const Affiliaties = () => (
  <StyledAffiliaties>
    <Card />
    <AddButton title="Додати філію" />
  </StyledAffiliaties>
);

const StyledAffiliaties = styled.div``;
