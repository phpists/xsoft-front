import moment from "moment";
import { BiAlarm, BiInfoCircle } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  start?: Date;
  end?: Date;
}

export const Header = ({ start, end }: Props) => (
  <StyledHeader className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <BiAlarm size={16} />
      <span>
        {moment(start).format("HH:mm")}-{moment(end).format("HH:mm")}
      </span>
    </div>
    <BiInfoCircle size={20} />
  </StyledHeader>
);

const StyledHeader = styled.div`
  padding: 6px 4px;
  background: #2eb062;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  path {
    fill: #fff;
  }
`;
