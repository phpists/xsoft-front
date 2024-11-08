import styled from "styled-components";
import { BiPhone } from "react-icons/bi";

interface Props {
  className?: string;
}

export const PhoneRow = ({ className }: Props) => (
  <StyledPhoneRow className={`flex items-center gap-2 ${className}`}>
    <BiPhone />
    +380 50 123 4567
  </StyledPhoneRow>
);

const StyledPhoneRow = styled.div`
  padding: 10px;
  white-space: nowrap;
  svg {
    fill: #737373;
  }
`;
