import { BiMap } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  location: string;
  className?: string;
}

export const Location = ({ location, className }: Props) => (
  <StyledLocation className={`flex items-center ${className}`}>
    <BiMap size={16} />
    {location}
  </StyledLocation>
);

const StyledLocation = styled.div`
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #737373;
  path {
    fill: #737373;
  }
`;
