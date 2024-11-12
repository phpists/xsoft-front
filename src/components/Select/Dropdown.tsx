import styled from "styled-components";
import { Option } from "./Select";
import { Button } from "../Button";

interface Props {
  options: Option[];
  dropdownButton?: string;
  onClickDropdownButton?: () => void;
}

export const Dropdown = ({
  options,
  dropdownButton,
  onClickDropdownButton,
}: Props) => (
  <StyledDropdown className="dropdown">
    {options?.map(({ title }, i) => (
      <div key={i}>{title}</div>
    ))}
    {dropdownButton ? (
      <Button
        title={dropdownButton}
        onClick={onClickDropdownButton}
        className="mt-1"
        type="outline"
      />
    ) : null}
  </StyledDropdown>
);

const StyledDropdown = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% - 4px);
  background: #ffffff;
  box-shadow: 0px 6px 14px 0px #07284a33;
  width: 244px;
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  z-index: 2;
  div {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    padding: 12px 8px;
    text-align: left;
    border-radius: 8px;
    transition: all 0.3s;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      background: #efefef;
    }
  }
`;
