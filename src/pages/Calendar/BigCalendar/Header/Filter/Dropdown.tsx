import {
  BiCalendar,
  BiCalendarEvent,
  BiCoffee,
  BiMinus,
  BiPlus,
  BiTimeFive,
} from "react-icons/bi";
import styled from "styled-components";

export const Dropdown = () => (
  <StyledDropdpown className="dropdown">
    <div>
      <BiTimeFive size={16} /> очікування клієнта
    </div>
    <div>
      <BiPlus size={16} />
      Клієнт прийшов{" "}
    </div>
    <div>
      <BiMinus size={16} />
      Не з’явився{" "}
    </div>
    <div>
      <BiPlus size={16} />
      Клієнт підтвердив
    </div>
  </StyledDropdpown>
);

const StyledDropdpown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  padding: 8px;
  border: 0.5px solid #dbdbdb;
  border-radius: 8px;
  background: #fff;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0px 6px 14px 0px #1e1e1e1a;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 8px;
    transition: all 0.3s;
    border-radius: 8px;
    height: 44px;
    cursor: pointer;
    &:hover {
      background: #efefef;
    }
  }
  .divider {
    background: #efefef;
    height: 2px;
  }
`;
