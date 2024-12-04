import styled from "styled-components";
import { useLazyLogoutQuery } from "../../../store/auth/auth.api";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/actions";

export const Dropdown = () => {
  const [logout] = useLazyLogoutQuery();
  const navigate = useNavigate();
  const { loginUser } = useActions();

  const handleLogout = () => {
    logout({});
    localStorage.removeItem("token");
    loginUser(null);
    navigate("/");
  };

  return (
    <StyledDropdown className="dropdown">
      <div onClick={() => navigate("/settings")}>Налаштування</div>
      <div onClick={handleLogout}>Вийти</div>
    </StyledDropdown>
  );
};
const StyledDropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  background: #ffffff;
  box-shadow: 0px 6px 14px 0px #07284a33;
  width: 150px;
  padding: 8px;
  border-radius: 8px;
  border: 0.5px solid #dbdbdb;
  z-index: 10;
  div {
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    padding: 8px;
    text-align: left;
    border-radius: 8px;
    transition: all 0.3s;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      background: #efefef;
    }
  }
`;
