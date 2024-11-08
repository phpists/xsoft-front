import styled from "styled-components";
import { Card } from "./Card";
import { Banner } from "./Banner";

export const Home = () => {
  return (
    <StyledHome>
      <Card />
      <Banner />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 120px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;
