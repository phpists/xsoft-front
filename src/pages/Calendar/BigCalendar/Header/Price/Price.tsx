import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";

export const Price = () => (
  <StyledPrice className="flex items-center gap-1">
    <span>4 400 ₴</span> <BiChevronDown size={16} className="arrow" />
    <Dropdown />
  </StyledPrice>
);

const StyledPrice = styled.button`
  padding: 10px 6px 10px 8px;
  background: #dbdbdb;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #111111;
  border-radius: 7px;
  position: relative;
  height: 40px;
  .arrow {
    transition: all 0.3s;
  }
  &:focus {
    background: #fff;
    .arrow {
      transform: rotate(180deg);
    }
  }
  .dropdown {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
  &:focus {
    .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }
`;
