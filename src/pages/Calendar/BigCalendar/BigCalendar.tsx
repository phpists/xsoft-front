import styled from "styled-components";
import { Header } from "./Header/Header";

export const BigCalendar = () => {
  return (
    <StyledBigCalendar>
      <Header />
    </StyledBigCalendar>
  );
};

const StyledBigCalendar = styled.div`
  padding: 8px 14px;
`;
