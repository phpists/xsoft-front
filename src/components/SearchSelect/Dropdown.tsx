import styled from "styled-components";
import { Option } from "./SearchSelect";
import { Search } from "./Search";
import { Button } from "../Button";
import { useState } from "react";

interface Props {
  options: Option[];
  value?: string[];
  onChange?: (val: string[]) => void;
}

export const Dropdown = ({ options, value, onChange }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <StyledDropdown className="dropdown flex flex-col gap-1">
      <Search value={search} onChange={(val) => setSearch(val)} />
      {options
        ?.filter((v) =>
          search?.length === 0
            ? true
            : v.title.toLowerCase().includes(search.toLowerCase())
        )
        ?.map(({ title, value: v }, i) => (
          <div
            key={i}
            className={value?.includes(v) ? "active" : ""}
            onClick={() =>
              value &&
              onChange &&
              onChange(
                value.includes(v)
                  ? value.filter((pv) => pv !== v)
                  : [...value, v]
              )
            }
          >
            {title}
          </div>
        ))}
      <Button
        title="Обрати все"
        type="outline"
        className="mt-1"
        onClick={() =>
          onChange &&
          onChange(
            options
              ?.filter((v) =>
                search?.length === 0
                  ? true
                  : v.title.toLowerCase().includes(search.toLowerCase())
              )
              ?.map(({ value }) => value)
          )
        }
      />
    </StyledDropdown>
  );
};

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
