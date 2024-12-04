import styled from "styled-components";
import { useEffect, useState } from "react";
import { addZero, getMonthDays } from "../../helpers";
import { Day } from "./Day";

interface Props {
  date: Date;
  selected?: string;
  onSelectDay: (day?: string) => void;
}

export const Days = ({ date, selected, onSelectDay }: Props) => {
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
      <StyledDays>
        <div className="days-wrapper">
          {prevDays?.map((d) => (
            <Day
              key={d}
              date={new Date(d)?.getDate()?.toString()}
              empty
              selected={selected === d}
              onSelect={() => onSelectDay(d)}
            />
          ))}
          {days?.map((d) => (
            <Day
              key={d}
              date={new Date(d)?.getDate()?.toString()}
              selected={selected === d}
              onSelect={() => onSelectDay(d)}
            />
          ))}
          {nextDays?.map((d) => (
            <Day
              key={d}
              date={new Date(d)?.getDate()?.toString()}
              empty
              selected={selected === d}
              onSelect={() => onSelectDay(d)}
            />
          ))}
        </div>
      </StyledDays>
    </>
  );
};

const StyledDays = styled.div`
  .days-wrapper {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`;
