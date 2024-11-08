import styled from "styled-components";
import { Logo } from "./Logo";
import { Notifications } from "./Notifications/Notifications";
import menuIcon from "../../assets/menu.svg";
import { User } from "./User/User";

export const Header = () => {
  return (
    <StyledHeader className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center">
        <Notifications />
        <button className="menu">
          <img src={menuIcon} alt="" />
        </button>
        <User />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  padding: 14px 20px 14px 14px;
  .menu {
    padding: 4px;
    width: 24px;
    height: 24px;
    margin-right: 14px;
  }
`;
