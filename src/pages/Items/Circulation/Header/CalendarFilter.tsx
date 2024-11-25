import { BiCalendar, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

export const CalendarFilter = () => (
  <StyledCalendarFilter className="flex items-center justify-between gap-2">
    <button>
      <BiChevronLeft />
    </button>
    <div className="flex items-center gap-2">
      <BiCalendar size={20} /> Вівторок, 25 бер
    </div>
    <button>
      <BiChevronRight />
    </button>
  </StyledCalendarFilter>
);

const StyledCalendarFilter = styled.div`
  padding: 8px 9px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background: #fff;
  height: 34px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  width: max-content;
  white-space: nowrap;
  cursor: pointer;
`;
