import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { ForgotPassword } from "./ForgotPassword";
import { ResetPassword } from "./ResetPassword";

export const Auth = () => {
  return (
    <StyledAuth>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </StyledAuth>
  );
};

const StyledAuth = styled.div`
  height: 100vh;
  overflow: auto;
  .card {
    border: 1px solid #dbdbdb;
    padding: 40px;
    border-radius: 16px;
    width: 100%;
    max-width: 425px;
    @media (max-width: 600px) {
      padding: 20px;
    }
  }
`;
