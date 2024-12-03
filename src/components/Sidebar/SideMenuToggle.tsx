import styled from "styled-components";
import icon from "../../assets/menu-open.svg";
import { useAppSelect } from "../../hooks/redux";
import { useActions } from "../../hooks/actions";
import { useLocation } from "react-router-dom";

export const SideMenuToggle = () => {
  const { sideMenuOpen } = useAppSelect((app) => app.app);
  const { toggleSideMenu } = useActions();
  const { pathname } = useLocation();
  const PAGES = ["/clients", "/items", "/pesonal", "/calendar"];
  const IS_AVAIBLE = PAGES.includes(pathname);

  return (
    <StyledSideMenuToggle
      className={`flex items-center justify-center ${
        !sideMenuOpen && IS_AVAIBLE && "active"
      }`}
      onClick={() => toggleSideMenu()}
    >
      <img src={icon} alt="" />
    </StyledSideMenuToggle>
  );
};

const StyledSideMenuToggle = styled.button`
  position: absolute;
  left: calc(100%);
  top: 82px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #efefef;
  border: 1px solid #dbdbdb;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  z-index: 11;
  &.active {
    left: calc(100% + -30px);
    visibility: visible;
    opacity: 1;
  }
`;
