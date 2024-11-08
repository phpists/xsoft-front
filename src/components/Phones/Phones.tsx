import styled from "styled-components";
import { Icon } from "./Icon";
import { Phone } from "./Phone";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Dropdown } from "./Dropdown";

export const Phones = () => (
  <StyledPhones className="flex items-center w-full relative">
    <Icon />
    <div className="content flex items-center justify-between px-2.5 w-full">
      <Phone />
      <BiChevronDown className="arrow" />
    </div>
    <Dropdown />
  </StyledPhones>
);

const StyledPhones = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  text-align: left;
  svg {
    transition: all 0.2s;
  }
  &:focus {
    border: 1px solid #0095f6;
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
