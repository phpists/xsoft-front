import styled from "styled-components";
import { Header } from "./Header";
import { Days } from "./Days";
import { useState } from "react";

export const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const handleChangeDate = (d: Date) => setDate(d);
  const handleSelectDay = (day?: string) => setSelected(day);

  return (
    <StyledCalendar>
      <Header date={date} onChangeDate={handleChangeDate} />
      <Days date={date} selected={selected} onSelectDay={handleSelectDay} />
    </StyledCalendar>
  );
};

const StyledCalendar = styled.div``;
