import styled from "styled-components";

export const Dropdown = () => (
  <StyledDropdpown className="dropdown">
    <div>З розкладом спочатку</div>
    <div>Без розкладу спочатку</div>
    <div>Тільки з розкладом</div>
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
