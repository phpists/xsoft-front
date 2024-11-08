import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export const Logo = () => (
  <StyledLogo to="/">
    <img src={logo} alt="logo" />
  </StyledLogo>
);

const StyledLogo = styled(NavLink)``;
