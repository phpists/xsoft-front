import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export const AddButton = () => (
  <StyledAddButton className="flex items-center justify-center">
    <BiPlus />
  </StyledAddButton>
);

const StyledAddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid #000000;
  transition: all 0.3s;
  &:hover {
    background: #000000;
    path {
      fill: #fff;
    }
  }
`;
