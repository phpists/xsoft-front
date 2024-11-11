import styled from "styled-components";
import { Card } from "./Card/Card";

export const List = () => (
  <StyledList className="flex items-center gap-3.5">
    <Card />
  </StyledList>
);

const StyledList = styled.div`
  border-radius: 16px;
  padding: 14px;
  background: #fff;
`;
