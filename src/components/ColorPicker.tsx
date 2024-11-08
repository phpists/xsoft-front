import { useState } from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

const COLORS = [
  "#2EB062",
  "#6362FF",
  "#78A5F7",
  "#A96AFF",
  "#CDC2FF",
  "#FBCD00",
  "#FA9283",
  "#ED5E1E",
];

export const ColorPicker = () => {
  const [active, setActive] = useState("#A96AFF");

  return (
    <StyledColorPicker className="flex items-center gap-1">
      {COLORS?.map((color, i) => (
        <div
          key={i}
          style={{ background: color }}
          className={`${active === color && "active"}`}
          onClick={() => setActive(color)}
        >
          <BiCheck size={16} />
        </div>
      ))}
    </StyledColorPicker>
  );
};

const StyledColorPicker = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    transition: all 0.3s;
    cursor: pointer;
    svg {
      opacity: 0;
    }
    &.active {
      border: 1px solid #000000;
      svg {
        opacity: 1;
      }
    }
  }
`;
