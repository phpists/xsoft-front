import styled from "styled-components";
import { NavList } from "./NavList/NavList";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <NavList />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  background: #ffffff;
  width: 70px;
  border-right: 1px solid #dbdbdb;
  padding: 8px;
  height: 100vh;
  overflow: auto;
`;
