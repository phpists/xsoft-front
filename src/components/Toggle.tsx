import { useState } from "react";
import styled from "styled-components";

interface Props {
  label?: string;
}

export const Toggle = ({ label }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <StyledToggle
      className={`flex items-center ${active && "active"}`}
      onClick={() => setActive(!active)}
    >
      {label ? <div className="mr-auto">{label}</div> : null}
      <button className="flex items-center">
        <div></div>
      </button>
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;

  button {
    border-radius: 25px;
    background: #dbdbdb;
    padding: 2px;
    justify-content: start;
    width: 50px;
    cursor: pointer;
    transition: all 0.3s;
    div {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background: #fff;
      box-shadow: 0px 2px 5px 0px #0000001a;
    }
  }
  &.active {
    button {
      background: #0095f6;
      justify-content: flex-end;
    }
  }
`;
