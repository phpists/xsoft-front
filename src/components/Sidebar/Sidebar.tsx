import styled from "styled-components";
import { NavList } from "./NavList/NavList";
import { SideMenuToggle } from "./SideMenuToggle";

export const Sidebar = () => {
  return (
    <div className="relative">
      <StyledSidebar>
        <NavList />
      </StyledSidebar>
      <SideMenuToggle />
    </div>
  );
};

const StyledSidebar = styled.div`
  background: #ffffff;
  width: 75px;
  border-right: 1px solid #dbdbdb;
  padding: 8px;
  height: 100vh;
  overflow: auto;
`;
