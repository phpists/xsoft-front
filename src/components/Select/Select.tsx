import styled from "styled-components";
import { BiSolidChevronDown } from "react-icons/bi";
import { Dropdown } from "./Dropdown";
import { IconCard } from "./IconCard";
import { Input } from "../Input/Input";
import { useEffect, useState } from "react";
import { Count } from "./Count";
import { Avatar } from "../Avatar/Avatar";

export interface Option {
  title: string;
  value: string | number;
  subtitle?: string;
  showAvatar?: boolean;
}

interface Props {
  label?: string;
  options: Option[];
  className?: string;
  dropdownButton?: string;
  onClickDropdownButton?: () => void;
  Icon?: any;
  search?: boolean;
  value?: string | number;
  message?: string;
  hideArrow?: boolean;
  dropdownTop?: boolean;
  showCount?: boolean;
  onChange?: (val: string | number) => void;
  error?: boolean;
  multiselect?: boolean;
  multiselectValue?: string[] | number[];
  onChangeMultiselect?: (val: string[] | number[]) => void;
  showLabel?: boolean;
  rightIcon?: boolean;
  component?: any;
  onSeach?: (val: string) => void;
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
  onChange,
  error,
  multiselect,
  multiselectValue,
  onChangeMultiselect,
  showLabel,
  rightIcon,
  component,
  onSeach,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [searchV, setSearchV] = useState("");

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
      !e.target.classList.contains("value") &&
      !e.target.classList.contains("label") &&
      !multiselect
    ) {
      e.currentTarget.blur();
    }
  };

  const handleSearch = (v: string) => {
    setSearchV(v);
    if (onSeach) {
      onSeach(v);
    }
  };

  useEffect(() => {
    if (!open) {
      if (onSeach) {
        onSeach("");
      }
    }
  }, [open]);

  return (
    <StyledSelect
      className={`field flex items-center justify-between ${className} ${
        open && "open"
      } ${search && "search"} ${dropdownTop && "dropdownTop"} ${
        error && "error"
      }`}
      onClick={handleClickOnOption}
      onFocus={handleFocusInput}
    >
      <div className="flex items-center gap-2">
        {Icon ? <IconCard Icon={Icon} rightIcon={rightIcon} /> : null}
        {showCount ? <Count count={options?.length} /> : null}
        {search && open ? (
          <Input
            label={label}
            className="search-input-wrapper"
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            clearOnBlur
            autoFocus
            value={searchV}
            onChange={(val) => handleSearch(val.toString())}
          />
        ) : multiselectValue && multiselectValue?.length > 0 ? (
          <div className="value">
            {multiselectValue
              ?.map((v) => options.find((opt) => opt.value === v)?.title)
              ?.join(",")}
          </div>
        ) : value ? (
          <div className="value flex items-center">
            {options.find((opt) => opt.value === value)?.showAvatar ? (
              <Avatar
                size={24}
                firstName={
                  options
                    .find((opt) => opt.value === value)
                    ?.title?.split(" ")?.[0]
                }
                lastName={
                  options
                    .find((opt) => opt.value === value)
                    ?.title?.split(" ")?.[1]
                }
                className="mr-2"
              />
            ) : null}
            <div>
              {showLabel ? <div className="label mb2">{label}</div> : null}
              <div className="flex">
                {options.find((opt) => opt.value === value?.toString())
                  ?.title ?? value}
              </div>
            </div>
            {options.find((opt) => opt.value === value)?.subtitle ? (
              <div className="subtitle ml-1">
                {" "}
                - {options.find((opt) => opt.value === value)?.subtitle}
              </div>
            ) : null}
          </div>
        ) : label ? (
          <span className="label">{label}</span>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center gap-3.5">
        {component}
        {hideArrow ? null : <BiSolidChevronDown className="arrow" />}
      </div>
      <Dropdown
        options={options?.filter((opt) =>
          setSearchV?.length > 0
            ? opt.title.toLowerCase().includes(searchV.toLowerCase())
            : true
        )}
        dropdownButton={dropdownButton}
        onClickDropdownButton={onClickDropdownButton}
        onChange={onChange}
        multiselect={multiselect}
        multiselectValue={multiselectValue}
        onChangeMultiselect={onChangeMultiselect}
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
  &.error {
    border: 1px solid #d92d20;
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
  }
  &:focus,
  &.open {
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
  .label {
    color: #989898;
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
    .label {
      font-size: 10px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0.02em;
      color: #737373;
    }
  }
  &.dropdownTop {
    .dropdown {
      bottom: 100%;
      top: unset;
    }
  }
  .subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #737373;
  }
`;
