import styled from "styled-components";
import { Range } from "./Range";

export const Dropdown = () => (
  <StyledDropdown className="dropdown">
    <div className="title">Масштабування в хвилинах</div>
    <Range />
  </StyledDropdown>
);

const StyledDropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  width: 240px;
  padding: 12px 8px 8px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  background: #fff;
  .title {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
