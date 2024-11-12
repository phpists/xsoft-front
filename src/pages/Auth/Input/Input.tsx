import styled from "styled-components";
import { Label } from "./Label";
import { useState } from "react";
import { TogglePassword } from "./TogglePassword";
import { IMaskInput } from "react-imask";

interface Props {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  type?: string;
  placeholder?: string;
  labelLink?: boolean;
  link?: string;
  mask?: string;
  value?: string;
  onChange?: (val: string) => void;
}

export const Input = ({
  label,
  error,
  errorMessage,
  type = "text",
  placeholder,
  labelLink,
  link,
  mask,
  value,
  onChange,
}: Props) => {
  const [showPassword, setShowPassord] = useState(type !== "password");
  return (
    <StyledInput className={`${error && "error"}`}>
      <div className="relative">
        {mask ? (
          <IMaskInput
            mask={mask}
            unmask={true} // true|false|'typed'
            onAccept={(value, mask) => onChange && onChange(value)}
            placeholder={placeholder}
            value={value}
          />
        ) : (
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        )}

        {type === "password" ? (
          <TogglePassword
            show={showPassword}
            onToggle={() => setShowPassord(!showPassword)}
          />
        ) : null}
      </div>
      <Label
        label={label}
        labelLink={labelLink}
        link={link}
        error={error}
        errorMessage={errorMessage}
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 100%;
  input {
    height: 54px;
    padding: 16px 10px;
    border: 1px solid #07284a33;
    border-radius: 8px;
    width: 100%;
    padding-right: 15px;
    &:focus {
      outline: 1px solid #0095f6;
    }
    &::placeholder {
      color: #989898;
    }
  }
  &.error {
    input {
      border: 1px solid #d92d20;
    }
    .label {
      color: #d92d20;
    }
  }
`;
