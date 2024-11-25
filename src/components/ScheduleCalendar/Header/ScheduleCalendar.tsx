import styled from "styled-components";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { Days } from "../Days/Days";
import { getMonthDays } from "../../../helpers";

export const ScheduleCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChangeDate = (val: Date) => setDate(val);

  const handleToggleSelecting = (val: boolean) => {
    setSelecting(val);
    setSelected([]);
  };

  const handleSelect = (date: string) =>
    setSelected(
      selected.includes(date)
        ? selected.filter((v) => v !== date)
        : [...selected, date]
    );
  const handleChangeSelected = (val: string[]) => setSelected(val);

  const handleSelectActions = (actions: string) => {
    const alldays = getMonthDays(date);
    switch (actions) {
      case "all":
        setSelected(alldays.length === selected.length ? [] : alldays);
        break;
      case "count":
        setSelected(alldays.filter((d, i) => new Date(d)?.getDate() % 2 === 0));
        break;
      case "not_count":
        setSelected(alldays.filter((d, i) => new Date(d)?.getDate() % 2 !== 0));
        break;
      case "weekdays":
        setSelected(
          alldays.filter((d) => ![0, 6].includes(new Date(d)?.getDay()))
        );
        break;
      case "weekends":
        setSelected(
          alldays.filter((d) => [0, 6].includes(new Date(d)?.getDay()))
        );
        break;
    }
  };

  return (
    <StyledScheduleCalendar>
      <Header
        date={date}
        onChangeDate={handleChangeDate}
        selecting={selecting}
        onToggleSelecting={handleToggleSelecting}
        onSelectAction={handleSelectActions}
      />
      <Days
        date={date}
        selecting={selecting}
        onSelect={handleSelect}
        selected={selected}
        onChangeSelected={handleChangeSelected}
      />
    </StyledScheduleCalendar>
  );
};
const StyledScheduleCalendar = styled.div``;
