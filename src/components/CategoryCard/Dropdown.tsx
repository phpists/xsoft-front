import styled from "styled-components";
import { Option } from "./CategoryCard";

interface Props {
  options?: Option[];
  value?: string | number;
  onChange?: (val: string | number) => void;
}

export const Dropdown = ({ options, value, onChange }: Props) => (
  <StyledDropdown className="dropdown flex flex-col gap-1">
    {options?.map(({ title, value: v }, i) => (
      <div
        key={i}
        className={v === value ? "active" : ""}
        onClick={() => onChange && onChange(v)}
      >
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
