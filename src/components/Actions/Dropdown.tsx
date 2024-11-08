import styled from "styled-components";
import { Option } from "./Actions";

interface Props {
  options: Option[];
}

export const Dropdown = ({ options }: Props) => (
  <StyledDropdown className="dropdown">
    {options?.map(({ title, onClick }, i) => (
      <div key={i} onClick={onClick}>
        {title}
      </div>
    ))}
  </StyledDropdown>
);

const StyledDropdown = styled.div`
  position: absolute;
  width: 240px;
  background: red;
  padding: 8px;
  border-radius: 8px;
  right: 0%;
  top: 100%;
  z-index: 2;
  background: #ffffff;
  border: 0.5px solid #dbdbdb;
  div {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #111111;
    padding: 12px 8px;
    border-radius: 8px;
    transition: all 0.3s;
    &:hover {
      background: #efefef;
    }
  }
`;
