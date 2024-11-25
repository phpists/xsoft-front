import { BiPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AddButton = () => (
  <StyledAddButton
    to="/company"
    className="flex items-center justify-center gap-1"
  >
    <BiPlus size={14} />
    Додати компанію
  </StyledAddButton>
);

const StyledAddButton = styled(NavLink)`
  height: 44px;
  border-radius: 7px;
  background: #0095f6;
  padding: 12px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  transition: all 0.3s;
  color: #fff;
  path {
    fill: #fff;
  }
  &:hover {
    background: #1a77f2;
  }
`;
