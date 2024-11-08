import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Dropdown } from "./Dropdown";

export interface Option {
  title: string;
  onClick: () => void;
}

interface Props {
  options: Option[];
  className?: string;
}

export const Actions = ({ options, className }: Props) => (
  <StyledActions
    className={`flex items-center justify-center relative ${className}`}
    onClick={(e: any) =>
      e.target?.localName === "div" && e.currentTarget.blur()
    }
  >
    <BiDotsVerticalRounded />
    <Dropdown options={options} />
  </StyledActions>
);

const StyledActions = styled.button`
  height: 40px;
  width: 40px;
  .dropdown {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
  &:focus {
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
`;
