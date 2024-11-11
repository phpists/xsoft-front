import styled from "styled-components";
import { Header } from "./Header/Header";

export const Card = () => (
  <StyledCard>
    <Header />
  </StyledCard>
);

const StyledCard = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  width: 272px;
  height: 100%;
`;
