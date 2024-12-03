import { BiCog, BiFilterAlt } from "react-icons/bi";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";

export const Setting = () => (
  <StyledSetting>
    <BiCog size={20} />
    <Dropdown />
  </StyledSetting>
);

const StyledSetting = styled.button`
  position: relative;
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
