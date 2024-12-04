import { BiPlus } from "react-icons/bi";
import styled from "styled-components";

export const AddButton = () => (
  <StyledAddButton className="flex items-center justify-center gap-1">
    <BiPlus size={14} />
    Створити групу
  </StyledAddButton>
);

const StyledAddButton = styled.button`
  width: 100%;
  height: 44px;
  background: #efefef;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #111111;
  margin-top: 24px;
`;
