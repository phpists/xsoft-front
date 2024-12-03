import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { BigCalendar } from "./BigCalendar/BigCalendar";

export const CalendarPage = () => {
  return (
    <StyledCalendarPage className="flex">
      <Sidebar />
      <div className="content">
        <Header />
        <BigCalendar />
      </div>
    </StyledCalendarPage>
  );
};

const StyledCalendarPage = styled.div`
  .content {
    width: 100%;
  }
`;
