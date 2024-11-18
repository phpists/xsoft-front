import { BiPlus } from "react-icons/bi";
import styled from "styled-components";

export const Button = () => (
  <StyledButton className="flex items-center gap-1">
    <BiPlus size={14} /> Приєднатися
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 13px 14px;
  border-radius: 7px;
  background: #efefef;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #737373;
  transition: all 0.3s;
  path {
    fill: #737373;
  }
  &:hover {
    background: #0095f6;
    color: #fff;
    path {
      fill: #fff;
    }
  }
`;
