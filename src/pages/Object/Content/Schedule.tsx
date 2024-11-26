import styled from "styled-components";
import { ScheduleCalendar } from "../../../components/ScheduleCalendar/Header/ScheduleCalendar";

export const Schedule = () => {
  return (
    <StyledSchedule>
      <ScheduleCalendar />
    </StyledSchedule>
  );
};

const StyledSchedule = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 0 0 16px 0;
`;
