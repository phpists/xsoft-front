import styled from "styled-components";
import { BiInfoCircle } from "react-icons/bi";

interface Props {
  title: string;
  value: string;
  info?: boolean;
  className?: string;
}

export const Card = ({ title, value, info, className }: Props) => (
  <StyledCard className={className}>
    <div className="flex items-center gap-2.5 title">
      {info && <BiInfoCircle size={16} />}
      {title}
    </div>
    <div className="value">{value}</div>
  </StyledCard>
);

const StyledCard = styled.div`
width: max-content;
  .title {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #737373;
    svg {
      cursor: pointer;
    }
    path {
      fill: #737373;
    }
  }
  .value {
    font-size: 24px;
    font-weight: 600;
    line-height: 33.6px;
    text-align: right;
    color: #111111;
  }
`;
