import styled from "styled-components";
import { BiSolidChevronDown } from "react-icons/bi";
import { Dropdown } from "./Dropdown";
import { IconCard } from "./IconCard";
import { Input } from "../Input/Input";
import { useState } from "react";
import { Count } from "./Count";

export interface Option {
  title: string;
  value: string;
}

interface Props {
  label?: string;
  options: Option[];
  className?: string;
  dropdownButton?: string;
  onClickDropdownButton?: () => void;
  Icon?: any;
  search?: boolean;
  value?: string;
  message?: string;
  hideArrow?: boolean;
  dropdownTop?: boolean;
  showCount?: boolean;
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
  hideArrow,
  dropdownTop,
  showCount,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleFocusInput = (e: any) => {
    if (search) {
      const input = e.target.querySelector("input");
      input?.focus();
      setOpen(true);
    }
  };

  const handleClickOnOption = (e: any) => {
    if (
      e.target?.localName === "div" &&
      !e.target.classList.contains("value")
    ) {
      e.currentTarget.blur();
    }
  };

  return (
    <StyledSelect
      className={`field flex items-center justify-between ${className} ${
        open && "open"
      } ${search && "search"} ${dropdownTop && "dropdownTop"}`}
      onClick={handleClickOnOption}
      onFocus={handleFocusInput}
    >
      <div className="flex items-center gap-2">
        {Icon ? <IconCard Icon={Icon} /> : null}
        {showCount ? <Count count={options?.length} /> : null}
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
          <div className="value">
            {options.find((opt) => opt.value === value)?.title}
          </div>
        ) : label ? (
          label
        ) : (
          ""
        )}
      </div>
      {hideArrow ? null : <BiSolidChevronDown className="arrow" />}
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
  .value {
    max-width: 190px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.dropdownTop {
    .dropdown {
      bottom: 100%;
      top: unset;
    }
  }
`;
