import styled from "styled-components";
import { BiPhone } from "react-icons/bi";

interface Props {
  className?: string;
  phone?: string;
}

export const PhoneRow = ({ className, phone = "-" }: Props) => (
  <StyledPhoneRow
    className={`flex items-center gap-2 ${className}`}
    href={`tel:${phone}`}
  >
    <BiPhone />
    {phone}
  </StyledPhoneRow>
);

const StyledPhoneRow = styled.a`
  padding: 10px;
  white-space: nowrap;
  svg {
    fill: #737373;
  }
`;
