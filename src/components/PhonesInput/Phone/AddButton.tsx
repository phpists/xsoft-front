import styled from "styled-components";
import { BiPlus, BiTrash } from "react-icons/bi";

interface Props {
  onClick: () => void;
  isRemove?: boolean;
}

export const AddButton = ({ onClick, isRemove }: Props) => (
  <StyledAddButton
    className="flex items-center justify-center"
    onClick={onClick}
  >
    {isRemove ? <BiTrash /> : <BiPlus />}
  </StyledAddButton>
);

const StyledAddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid #000000;
  transition: all 0.3s;
  flex-shrink: 0;
  &:hover {
    background: #000000;
    path {
      fill: #fff;
    }
  }
`;
