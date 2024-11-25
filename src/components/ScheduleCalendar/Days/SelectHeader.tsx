import styled from "styled-components";
import { Checkbox } from "../../Checkbox";
import { getMonthDays } from "../../../helpers";

interface Props {
  date: Date;
  selected: string[];
  onChangeSelected: (val: string[]) => void;
}

export const SelectHeader = ({ date, selected, onChangeSelected }: Props) => {
  const handleGetWeekDayDates = (day: number) =>
    getMonthDays(date).filter((d) => new Date(d).getDay() === day);

  const handleCheckIsAllSelected = (day: number) =>
    !!handleGetWeekDayDates(day).every((r) => selected.includes(r));

  const handleSelectWeekDay = (day: number) => {
    const isAllSelected = handleCheckIsAllSelected(day);
    const allDates = handleGetWeekDayDates(day);

    if (isAllSelected) {
      onChangeSelected(selected.filter((d) => !allDates.includes(d)));
    } else {
      onChangeSelected(
        selected.filter((d) => !allDates.includes(d)).concat(allDates)
      );
    }
  };

  return (
    <StyledSelectHeader>
      {[1, 2, 3, 4, 5, 6, 0].map((day) => (
        <Checkbox
          checked={handleCheckIsAllSelected(day)}
          onClick={() => handleSelectWeekDay(day)}
        />
      ))}
    </StyledSelectHeader>
  );
};

const StyledSelectHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-items: center;
`;
