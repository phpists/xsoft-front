import styled from "styled-components";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { Day } from "./Day";
import { addZero, getMonthDays } from "../../../helpers";
import { SelectHeader } from "./SelectHeader";

interface Props {
  date: Date;
  selecting: boolean;
  onSelect: (val: string) => void;
  selected: string[];
  onChangeSelected: (val: string[]) => void;
}

export const Days = ({
  date,
  selecting,
  onSelect,
  selected,
  onChangeSelected,
}: Props) => {
  const [prevDays, setPrevDays] = useState<string[]>([]);
  const [days, setDays] = useState<string[]>([]);
  const [nextDays, setNextDays] = useState<string[]>([]);

  const handleAddZero = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;

  const renderCalendar = (year: number, month: number) => {
    // Calculate days of current, previous, and next months
    const lastDayPrevMonth = new Date(year, month, 0).getDate();
    let startDayOfWeek = new Date(year, month, 1).getDay();
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    // Display previous month's last few days if offset needed
    let updatedPrevDays = [];
    for (let i = startDayOfWeek; i > 0; i--) {
      updatedPrevDays.push(
        `${year}-${handleAddZero(month === 0 ? 12 : month)}-${handleAddZero(
          lastDayPrevMonth - i + 1
        )}`
      );
    }
    setPrevDays(updatedPrevDays);

    const updatedDays = getMonthDays(date);
    setDays(updatedDays);

    // Display next month's first few days if necessary
    const daysDisplayed = updatedDays.length + updatedPrevDays.length;
    let updatedNextDays = [];
    for (let i = 1; daysDisplayed + i <= 42; i++) {
      updatedNextDays.push(
        `${month + 2 === 13 ? 1 + year : year}-${handleAddZero(
          month + 2 === 13 ? 1 : month + 2
        )}-${handleAddZero(i)}`
      );
    }
    setNextDays(updatedNextDays);
  };

  useEffect(() => {
    renderCalendar(date.getFullYear(), date.getMonth());
  }, [date]);

  return (
    <>
      {" "}
      {selecting ? (
        <SelectHeader
          date={date}
          selected={selected}
          onChangeSelected={onChangeSelected}
        />
      ) : null}
      <StyledDays>
        <Header />
        <div className="days-wrapper">
          {prevDays?.map((d) => (
            <Day key={d} empty />
          ))}
          {days?.map((d) => (
            <Day
              key={d}
              date={addZero(new Date(d)?.getDate())}
              holiday={[6, 0].includes(new Date(d).getDay())}
              onSelect={() => (selecting ? onSelect(d) : null)}
              selected={!!selected.includes(d)}
            />
          ))}
          {nextDays?.map((d) => (
            <Day key={d} empty />
          ))}
        </div>
      </StyledDays>
    </>
  );
};

const StyledDays = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  .days-wrapper {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  .day-wrapper {
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    &:nth-child(7n) {
      border-right: none;
    }
    &:nth-last-child(-n + 7) {
      border-bottom: none;
    }
  }
`;
