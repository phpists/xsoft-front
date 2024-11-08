import styled from "styled-components";
import { Label } from "./Label";
import { useState } from "react";
import { TogglePassword } from "./TogglePassword";
import { IMaskInput } from "react-imask";

interface Props {
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  labelLink?: boolean;
  link?: string;
  mask?: string;
}

export const Input = ({
  label,
  error,
  type = "text",
  placeholder,
  labelLink,
  link,
  mask,
}: Props) => {
  const [showPassword, setShowPassord] = useState(type !== "password");
  return (
    <StyledInput className={`${error && "error"}`}>
      <div className="relative">
        {mask ? (
          <IMaskInput
            mask={mask}
            unmask={true} // true|false|'typed'
            onAccept={(value, mask) => console.log(value)}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
          />
        )}

        {type === "password" ? (
          <TogglePassword
            show={showPassword}
            onToggle={() => setShowPassord(!showPassword)}
          />
        ) : null}
      </div>
      <Label label={label} labelLink={labelLink} link={link} error={error} />
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
