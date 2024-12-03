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
    <div className="option">
      26 бер <b>20 клієнтів</b>
    </div>
    <span className="divider"></span>
    <div className="option">
      <div className="flex items-center gap-2">
        <BiPlus size={16} /> Надходження
      </div>
      <b> 400 ₴</b>
    </div>
    <div className="option">
      <div className="flex items-center gap-2">
        <BiPlus size={16} /> Надходження
      </div>
      <b> 400 ₴</b>
    </div>
    <div className="option">
      <div className="flex items-center gap-2">
        <BiPlus size={16} /> Надходження
      </div>
      <b> 400 ₴</b>
    </div>
    <div className="option">
      <div className="flex items-center gap-2">
        <BiMinus size={16} /> Списання з каси 1
      </div>
      <b> 400 ₴</b>
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

  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    color: #737373;
    height: 44px;
    b {
      color: #111111;
      font-weight: 400;
    }
  }
  .divider {
    background: #efefef;
    height: 2px;
  }
`;
