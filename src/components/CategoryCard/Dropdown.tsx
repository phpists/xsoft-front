import styled from "styled-components";
import { Option } from "./CategoryCard";

interface Props {
  options?: Option[];
}

export const Dropdown = ({ options }: Props) => (
  <StyledDropdown className="dropdown flex flex-col gap-1">
    {options?.map(({ title, value }, i) => (
      <div key={i} className={i === 0 ? "active" : ""}>
        {title}
      </div>
    ))}
  </StyledDropdown>
);

const StyledDropdown = styled.div`
  padding: 8px;
  border: 0.5px solid #dbdbdb;
  background: #ffffff;
  z-index: 10;
  border-radius: 8px;
  margin-top: 4px;
  div {
    padding: 12px 8px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    color: #111111;
    transition: all 0.2s;
    cursor: pointer;
    &:hover,
    &.active {
      background: #efefef;
    }
  }
`;
