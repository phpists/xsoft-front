import { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { CloseButton } from "./CloseButton";
import { Input } from "./Input";

export const Search = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledSearch className={`flex items-center gap-2 ${active && "active"}`}>
      <BiSearch
        size={20}
        onClick={() => setActive(true)}
        className="cursor-pointer shrink-0"
      />
      <Input />
      <CloseButton onClick={() => setActive(false)} />
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  width: 20px;
  overflow: hidden;
  padding: 0;
  transition: all 0.3s;
  height: 42px;

  &.active {
    background: #ffffff;
    border-radius: 8px;
    border: 0.5px solid #dbdbdb;
    padding: 10px 8px;
    width: 223px;
  }
`;
