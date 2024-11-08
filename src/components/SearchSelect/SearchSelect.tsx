import styled from "styled-components";
import { BiSolidChevronDown } from "react-icons/bi";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

export interface Option {
  title: string;
  value: string;
}

interface Props {
  label: string;
  options: Option[];
  className?: string;
}

export const SearchSelect = ({ label, options, className }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledSearchSelect className={`${className} ${open && "open"}`}>
      <button
        className="flex items-center justify-between select-btn"
        onClick={() => setOpen(!open)}
      >
        {label}
        <BiSolidChevronDown />
      </button>
      {open ? <Dropdown options={options} /> : null}
    </StyledSearchSelect>
  );
};

const StyledSearchSelect = styled.button`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #111111;
  transition: all 0.2s;
  position: relative;
  .select-btn {
    padding: 11.5px 8px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    background: #fff;
    width: 100%;
  }
  svg {
    transition: all 0.2s;
  }
  &.open {
    .select-btn {
      border: 1px solid #0095f6;
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;
