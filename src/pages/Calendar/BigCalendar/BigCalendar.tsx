import styled from "styled-components";
import { Header } from "./Header/Header";
import { Content } from "./Content";

export const BigCalendar = () => {
  return (
    <StyledBigCalendar>
      <Header />
      <Content />
    </StyledBigCalendar>
  );
};

const StyledBigCalendar = styled.div`
  padding: 8px 14px;
`;
