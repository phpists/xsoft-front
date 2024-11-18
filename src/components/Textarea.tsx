import { useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  error?: boolean;
}

export const Textarea = ({
  label,
  className,
  value,
  onChange,
  error,
}: Props) => {
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <StyledTextarea
      className={`${inputFocused && "focused"} ${
        error && "error"
      } ${className}`}
    >
      <div className="label">{label}</div>
      <textarea
        name=""
        id=""
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      ></textarea>
    </StyledTextarea>
  );
};
const StyledTextarea = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  text-align: left;
  color: #737373;
  textarea {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    width: 100%;
    resize: none;
    height: 50px;
    color: #000;
  }
  &.focused {
    border: 1px solid #0095f6;
  }
  &.error {
    border: 1px solid #d92d20;
  }
`;
