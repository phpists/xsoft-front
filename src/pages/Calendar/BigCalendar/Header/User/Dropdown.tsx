import {
  BiCalendar,
  BiCalendarEvent,
  BiCoffee,
  BiMinus,
  BiPlus,
} from "react-icons/bi";
import styled from "styled-components";

export const Dropdown = () => (
  <StyledDropdpown className="dropdown">
    <div>
      <BiCoffee size={16} /> Додати перерву
    </div>
    <div>
      <BiMinus size={16} />
      Скасувати робочий день
    </div>
    <div>
      <BiPlus size={16} />
      Додати робочі дні
    </div>
    <span className="divider"></span>
    <div>
      <BiCalendar size={16} />
      Огляд на тиждень
    </div>
    <div>
      <BiCalendarEvent size={16} />
      Графік роботи
    </div>
  </StyledDropdpown>
);

const StyledDropdpown = styled.div`
  position: absolute;
  top: calc(100% - 4px);
  left: 0;
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
