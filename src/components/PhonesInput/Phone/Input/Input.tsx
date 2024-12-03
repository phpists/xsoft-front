import styled from "styled-components";
import { Country } from "./Country";
import { Label } from "./Label";
import { IMaskInput } from "react-imask";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  error?: boolean;
}

export const Input = ({ value, onChange, error }: Props) => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <StyledInput
      className={`phones-input-wrapper ${inputFocused && "focused"} ${
        error && value?.length < 18 && "error"
      }`}
    >
      <Country />
      <div className="px-2.5 py-2">
        <Label />
        <IMaskInput
          mask="+ 380 00 000 00 00"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          value={value}
          onAccept={(value, mask) => onChange && onChange(value)}
        />
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: grid;
  grid-template-columns: 52px 1fr;
  grid-auto-rows: max-content;
  border-radius: 8px;
  border: 1px solid #07284a33;
  overflow: hidden;
  max-width: 422px;
  width: 100%;
  background: #fff;
  &.error {
    border: 1px solid #d92d20;
  }
  input {
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-align: left;
    color: #111111;
  }
  &.focused {
    border: 1px solid #0095f6;
  }
`;
