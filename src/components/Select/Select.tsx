import styled from "styled-components";
import { BiSolidChevronDown } from "react-icons/bi";
import { Dropdown } from "./Dropdown";
import { IconCard } from "./IconCard";
import { Input } from "../Input/Input";
import { useState } from "react";

export interface Option {
  title: string;
  value: string;
}

interface Props {
  label: string;
  options: Option[];
  className?: string;
  dropdownButton?: string;
  onClickDropdownButton?: () => void;
  Icon?: any;
  search?: boolean;
  value?: string;
  message?: string;
}

export const Select = ({
  label,
  options,
  className,
  dropdownButton,
  onClickDropdownButton,
  Icon,
  search,
  value,
  message,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleFocusInput = (e: any) => {
    if (search) {
      const input = e.target.querySelector("input");
      input?.focus();
      setOpen(true);
    }
  };

  return (
    <StyledSelect
      className={`field flex items-center justify-between ${className} ${
        open && "open"
      } ${search && "search"}`}
      onClick={(e: any) =>
        e.target?.localName === "div" && e.currentTarget.blur()
      }
      onFocus={handleFocusInput}
    >
      <div className="flex items-center gap-2">
        {Icon ? <IconCard Icon={Icon} /> : null}
        {search && open ? (
          <Input
            label={label}
            className="search-input-wrapper"
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            clearOnBlur
            autoFocus
          />
        ) : value ? (
          options.find((opt) => opt.value === value)?.title
        ) : (
          label
        )}
      </div>
      <BiSolidChevronDown className="arrow" />
      <Dropdown
        options={options}
        dropdownButton={dropdownButton}
        onClickDropdownButton={onClickDropdownButton}
      />
    </StyledSelect>
  );
};
const StyledSelect = styled.button`
  width: 100%;
  padding: 9px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #111111;
  transition: all 0.2s;
  position: relative;
  height: 54px;
  svg {
    transition: all 0.2s;
  }
  &:focus,
  &.open {
    border: 1px solid #0095f6;
    .arrow {
      transform: rotate(180deg);
    }
  }
  .dropdown {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
  &:focus,
  &.open {
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
  .search-input-wrapper {
    border: none !important;
    padding: 0;
    .input-content {
      padding-left: 0;
      .label {
        left: 0;
        /* top: 13px; */
      }
    }
  }
  &.search {
    .dropdown {
      top: calc(100% + 4px) !important;
      width: 100%;
      div {
        font-weight: 400;
      }
    }
  }
`;
