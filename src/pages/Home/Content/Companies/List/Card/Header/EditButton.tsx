import { BiPencil } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const EditButton = () => (
  <StyledEditButton to="/company">
    <BiPencil size={20} />
  </StyledEditButton>
);

const StyledEditButton = styled(NavLink)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 14px;
`;
