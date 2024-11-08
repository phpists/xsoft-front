import styled from "styled-components";
import { Option } from "./SearchSelect";
import { Search } from "./Search";
import { Button } from "../Button";

interface Props {
  options: Option[];
}

export const Dropdown = ({ options }: Props) => (
  <StyledDropdown className="dropdown flex flex-col gap-1">
    <Search />
    {options?.map(({ title }, i) => (
      <div key={i} className={i === 0 ? "active" : ""}>
        {title}
      </div>
    ))}
    <Button title="Обрати все" type="outline" className="mt-1" />
  </StyledDropdown>
);

const StyledDropdown = styled.div`
  background: #ffffff;
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  margin-top: 4px;
  div {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    text-align: left;
    padding: 12px 8px;
    border-radius: 8px;
    transition: all 0.3s;
    &:hover,
    &.active {
      background: #efefef;
    }
  }
`;
