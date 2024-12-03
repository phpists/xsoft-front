import styled from "styled-components";
import { Header } from "./Header";
import { Days } from "./Days";
import { useState } from "react";

export const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleChangeDate = (d: Date) => setDate(d);
  return (
    <StyledCalendar>
      <Header date={date} onChangeDate={handleChangeDate} />
      <Days date={date} />
    </StyledCalendar>
  );
};

const StyledCalendar = styled.div``;
