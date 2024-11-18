import styled from "styled-components";
import { Option } from "./Select";
import { Button } from "../Button";
import { BiCheck } from "react-icons/bi";

interface Props {
  options: Option[];
  dropdownButton?: string;
  onClickDropdownButton?: () => void;
  onChange?: (val: string | number) => void;
  multiselect?: boolean;
  multiselectValue?: any;
  onChangeMultiselect?: (val: string[] | number[]) => void;
}

export const Dropdown = ({
  options,
  dropdownButton,
  onClickDropdownButton,
  onChange,
  multiselect,
  multiselectValue,
  onChangeMultiselect,
}: Props) => {
  const handleChangeMultiselect = (value: string | number) => {
    if (onChangeMultiselect) {
      const prevValue: any = Array.isArray(multiselectValue)
        ? multiselectValue
        : [];

      onChangeMultiselect(
        !!prevValue?.find((v: string | number) => v === value)
          ? prevValue?.filter((v: string | number) => v !== value)
          : [...prevValue, value]
      );
    }
  };

  return (
    <StyledDropdown className="dropdown">
      <span className="options-wrapper">
        {options?.length > 0 ? (
          options?.map(({ title, value }, i) => (
            <div
              key={i}
              onClick={() =>
                multiselect
                  ? handleChangeMultiselect(value)
                  : onChange && onChange(value)
              }
              className={`flex items-center justify-between ${
                Array.isArray(multiselectValue) &&
                multiselectValue?.find((v) => v === value) &&
                "active"
              }`}
            >
              {title}{" "}
              {multiselectValue &&
              multiselectValue?.find((v: string | number) => v === value) ? (
                <BiCheck />
              ) : null}
            </div>
          ))
        ) : (
          <div className="empty">Пусто</div>
        )}
      </span>
      {dropdownButton ? (
        <Button
          title={dropdownButton}
          onClick={onClickDropdownButton}
          className="mt-1"
          type="outline"
        />
      ) : null}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% - 4px);
  background: #ffffff;
  box-shadow: 0px 6px 14px 0px #07284a33;
  width: 244px;
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;
  .options-wrapper {
    flex-direction: column;
    gap: 5px;
    max-height: 300px;
    overflow: auto;
  }
  div {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    padding: 12px 8px;
    text-align: left;
    border-radius: 8px;
    transition: all 0.3s;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
    &:hover,
    &.active {
      background: #efefef;
    }
    &.empty {
      text-align: center;
      background: #ffffff !important;
    }
  }
`;
