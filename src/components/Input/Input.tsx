import { useRef, useState } from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { IconCard } from "./IconCard";
import { Sign } from "./Sign";
import { NumberIcon } from "./NumberIcon";
import { BiCheck } from "react-icons/bi";
import { Dropdown } from "./Dropdown";

export interface Option {
  title: string;
  value: string | number;
}

interface Props {
  label?: string;
  error?: boolean;
  required?: boolean;
  className?: string;
  Icon?: any;
  defaultValue?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  clearOnBlur?: boolean;
  autoFocus?: boolean;
  sign?: string;
  message?: string;
  RightIcon?: any;
  number?: boolean;
  valueLabel?: string;
  options?: Option[];
  value?: string | number;
  onChange?: (val: string | number) => void;
  calendar?: boolean;
  onPressEnter?: () => void;
  labelActive?: boolean;
  noCheck?: boolean;
  time?: boolean;
}

export const Input = ({
  label,
  error,
  required,
  className,
  Icon,
  defaultValue,
  disabled,
  onFocus,
  onBlur,
  clearOnBlur,
  autoFocus,
  sign,
  message,
  RightIcon,
  number,
  valueLabel,
  options,
  value,
  onChange,
  calendar,
  onPressEnter,
  labelActive,
  noCheck,
  time,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [inputFocused, setInputFocused] = useState(false);

  const handleBlur = () => {
    setTimeout(() => {
      setInputFocused(false);
      onBlur && onBlur();
      if (clearOnBlur && onChange) {
        onChange("");
      }
    }, 200);
  };

  return (
    <div className={number ? "w-max" : "w-full"}>
      <StyledInput
        className={`field flex items-center ${inputFocused && "focused"} ${
          error && "error"
        } ${Icon && "has-icon"} ${className} ${calendar && "calendar"}`}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
            (calendar || time) && inputRef.current.showPicker();
          }
          if (buttonRef.current) {
            buttonRef.current.focus();
          }
        }}
      >
        {Icon ? <IconCard Icon={Icon} /> : null}
        <div className="input-content">
          <div className="flex items-center gap-1">
            {valueLabel}
            {options ? (
              <button
                ref={buttonRef}
                onFocus={() => {
                  setInputFocused(true);
                  onFocus && onFocus();
                }}
                onBlur={handleBlur}
                className="h-[20px]"
              >
                <div className="button-wrapper-overflow"></div>
                {options.find((opt) => opt.value === value)?.title}
              </button>
            ) : (
              <input
                value={value}
                type={
                  time ? "time" : calendar ? "date" : number ? "number" : "text"
                }
                onChange={(e) =>
                  options ? null : onChange ? onChange(e.target.value) : null
                }
                ref={inputRef}
                onFocus={() => {
                  setInputFocused(true);
                  onFocus && onFocus();
                }}
                onBlur={handleBlur}
                disabled={disabled}
                autoFocus={autoFocus}
                onKeyDown={(e) =>
                  e.keyCode === 13 && onPressEnter && onPressEnter()
                }
              />
            )}
          </div>
          {label ? (
            <div
              className={`flex items-center label select-none	 ${
                ((value && value?.toString()?.length > 0) ||
                  inputFocused ||
                  valueLabel ||
                  calendar ||
                  labelActive) &&
                "active"
              }`}
            >
              {label} {required ? <span className="required">*</span> : null}
            </div>
          ) : null}
        </div>
        {sign ? (
          <Sign sign={sign} />
        ) : number || options ? (
          <NumberIcon />
        ) : null}
        {RightIcon ? (
          RightIcon
        ) : number ||
          clearOnBlur ||
          sign ||
          options ||
          noCheck ||
          time ? null : value && value?.toString()?.length > 0 ? (
          <BiCheck size={16} className="ml-auto mr-2.5" fill="#077D55" />
        ) : null}
        {options && inputFocused ? (
          <Dropdown options={options} onChange={onChange} />
        ) : null}
      </StyledInput>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

const StyledInput = styled.div`
  border: 1px solid #07284a33;
  border-radius: 8px;
  position: relative;
  height: 54px;
  .input-content {
    padding: 25px 10px 10px;
    width: 100%;
    position: relative;
    .button-wrapper-overflow {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      cursor: pointer;
      z-index: 1;
    }
  }
  &.calendar {
    cursor: pointer;
    input {
      cursor: pointer;
    }
    input::-webkit-calendar-picker-indicator {
      cursor: pointer !important;
    }
  }
  input {
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #000000;
    width: 100%;
    &:disabled {
      background: none;
    }
  }
  &.has-icon {
    .label {
      /* left: 64px; */
    }
  }
  .label {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #989898;
    position: absolute;
    left: 10px;
    top: 17px;
    transition: all 0.2s;
    white-space: nowrap;
    &.active {
      font-size: 10px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: 0.02em;
      top: 10px;
    }
  }
  &.focused {
    border: 1px solid #0095f6;
  }
  &.error {
    border: 1px solid #d92d20;
    .required {
      color: #d92d20;
    }
  }
`;
