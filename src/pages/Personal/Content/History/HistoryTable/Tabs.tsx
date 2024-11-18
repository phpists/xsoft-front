import { useState } from "react";
import styled from "styled-components";

const TABS = ["Все", "Бонуси", "Покупки"];

export const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <StyledTabs className="flex items-center gap-2">
      {TABS.map((t, i) => (
        <button
          key={i}
          className={`${active === i && "active"}`}
          onClick={() => setActive(i)}
        >
          {t}
        </button>
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  button {
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #737373;
    background: #efefef;
    transition: all 0.3s;
    border: 1px solid transparent;
    &.active {
      background: #fff;
      border: 1px solid #dbdbdb;
    }
  }
`;
