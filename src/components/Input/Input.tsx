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
  value: string;
}

interface Props {
  label?: string;
  error?: string;
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
}: Props) => {
  const [value, setValue] = useState(defaultValue ?? "");
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(false);

  const handleBlur = () => {
    setInputFocused(false);
    onBlur && onBlur();
    clearOnBlur && setValue("");
  };

  return (
    <div className={number ? "w-max" : "w-full"}>
      <StyledInput
        className={`field flex items-center ${inputFocused && "focused"} ${
          error && "error"
        } ${Icon && "has-icon"} ${className}`}
      >
        {Icon ? <IconCard Icon={Icon} /> : null}
        <div className="input-content">
          <div className="flex items-center gap-1">
            {valueLabel}
            <input
              value={value}
              type={number ? "number" : "text"}
              onChange={(e) => (options ? null : setValue(e.target.value))}
              ref={inputRef}
              onFocus={() => {
                setInputFocused(true);
                onFocus && onFocus();
              }}
              onBlur={handleBlur}
              disabled={disabled}
              autoFocus={autoFocus}
            />
          </div>
          {label ? (
            <div
              className={`flex items-center label select-none	 ${
                (value?.length > 0 || inputFocused || valueLabel) && "active"
              }`}
              onClick={() => inputRef.current && inputRef.current.focus()}
            >
              {label} {required ? <span className="required">*</span> : null}
            </div>
          ) : null}
        </div>
        {number || options ? (
          <NumberIcon />
        ) : sign ? (
          <Sign sign={sign} />
        ) : null}
        {RightIcon ? (
          RightIcon
        ) : number || clearOnBlur || sign || options ? null : value?.length >
          0 ? (
          <BiCheck size={16} className="ml-auto mr-2.5" fill="#077D55" />
        ) : null}
        {options && inputFocused ? <Dropdown options={options} /> : null}
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
      left: 64px;
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
