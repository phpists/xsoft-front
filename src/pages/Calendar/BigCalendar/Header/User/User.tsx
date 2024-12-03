import styled from "styled-components";
import { Avatar } from "../../../../../components/Avatar/Avatar";
import { Dropdown } from "./Dropdown";

export const User = () => (
  <StyledUser className="flex items-center gap-1">
    <Avatar firstName="О" lastName="С" size={32} />
    <div className="name truncate">Олександр Степанов</div>
    <Dropdown />
  </StyledUser>
);

const StyledUser = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #111111;
  padding: 4px;
  border-radius: 100px 4px 4px 100px;
  background: #dbdbdb;
  position: relative;
  border: 0.7px solid transparent;

  .name {
    max-width: 92px;
  }
  &:focus {
    border: 0.7px solid #000000;
    background: #fff;
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
