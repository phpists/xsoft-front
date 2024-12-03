import styled from "styled-components";
import { Select } from "../../Select/Select";
import { MONTHS } from "../../../constants";



interface Props {
  date: Date;
  onChangeDate: (val: Date) => void;
}

export const CurrentDate = ({ date, onChangeDate }: Props) => {
  const handleChangeMonth = (val: number | string) => {
    let d = new Date(date);
    d.setMonth(Number(val));
    onChangeDate(d);
  };

  return (
    <StyledCurrentDate className="flex items-center gap-3.5">
      <div className="title">
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </div>
      <Select
        label="Місяць"
        value={date.getMonth()}
        options={MONTHS.map((m, i) => ({ title: m, value: i }))}
        className="!h-[44px] !gap-2"
        onChange={handleChangeMonth}
      />
    </StyledCurrentDate>
  );
};

const StyledCurrentDate = styled.div`
  .title {
    font-size: 24px;
    font-weight: 600;
    line-height: 33.6px;
    text-align: left;
    white-space: nowrap;
  }
`;
