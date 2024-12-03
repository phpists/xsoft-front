import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";
import { MONTHS } from "../../constants";

interface Props {
  date: Date;
  onChangeDate: (val: Date) => void;
}

export const Header = ({ date, onChangeDate }: Props) => {
  const handleChangeMonth = (next?: boolean) => {
    let d = new Date(date);
    d.setMonth(d.getMonth() + (next ? 1 : -1));
    onChangeDate(d);
  };

  return (
    <StyledHeader className="flex items-center justify-between">
      <div>
        {" "}
        {MONTHS[date.getMonth()]} {date.getFullYear()}
      </div>
      <div className="flex items-center gap-[1px]">
        <button onClick={() => handleChangeMonth()}>
          <BiChevronLeft size={16} />
        </button>
        <button onClick={() => handleChangeMonth(true)}>
          <BiChevronRight size={16} />
        </button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  color: #111111;
  button {
    padding: 4px;
    background: #efefef;
    transition: all 0.3s;
    &:nth-child(1) {
      border-radius: 8px 0 0 8px;
    }
    &:nth-child(2) {
      border-radius: 0 8px 8px 0;
    }
    &:hover {
      background: #d3d2d2;
    }
  }
`;
