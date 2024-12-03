import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

interface Props {
  checked: boolean;
  onClick: () => void;
  className?: string;
}

export const Checkbox = ({ checked, onClick, className }: Props) => (
  <StyledCheckbox
    onClick={onClick}
    className={`flex items-center justify-center ${className}`}
  >
    <button
      className={`flex items-center justify-center ${checked && "active"}`}
    >
      {checked ? <BiCheck size={18} /> : null}
    </button>
  </StyledCheckbox>
);

const StyledCheckbox = styled.div`
  padding: 12.5px 10.5px;
  button {
    width: 15px;
    height: 15px;
    border: 2px solid #111111;
    border-radius: 2px;
    padding-bottom: 1px;
    &.active {
      background: #2f6fed;
      border: none;
    }
    svg {
      flex-shrink: 0;
      path {
        fill: #fff;
      }
    }
  }
`;
