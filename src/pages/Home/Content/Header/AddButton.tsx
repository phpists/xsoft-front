import { BiPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AddButton = () => (
  <StyledAddButton
    to="/company"
    className="flex items-center justify-center gap-1"
  >
    <BiPlus size={14} />
    Нова компанія
  </StyledAddButton>
);

const StyledAddButton = styled(NavLink)`
  height: 40px;
  border-radius: 7px;
  background: #ffffff;
  padding: 13px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  transition: all 0.3s;
  path {
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background: #0095f6;

    path {
      fill: #fff;
    }
  }
`;
