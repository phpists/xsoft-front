import { BiX } from "react-icons/bi";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: Props) => (
  <StyledCloseButton
    className="flex items-center justify-center"
    onClick={onClick}
  >
    <BiX />
  </StyledCloseButton>
);

const StyledCloseButton = styled.button`
  height: 16px;
  width: 16px;
  path {
    fill: #737373;
  }
`;
