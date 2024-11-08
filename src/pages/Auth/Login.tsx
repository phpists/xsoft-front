import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
// import { useState } from "react";
import { Button } from "./Button";
import { Link } from "./Link";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //   const [data, setData] = useState({});
  const navigate = useNavigate();
  //   const handleChangeField = (field, val) => setData({ ...data, [field]: val });

  const handleLogin = () => {
    localStorage.setItem("token", "!ds");
    navigate("/");
    window.location.reload();
  };
  return (
    <StyledLogin className="flex items-center justify-center">
      <div className="card">
        <Title title="З поверненням!" />
        <div className="flelds">
          <Input
            label="На цей номер буде відправлено пароль"
            placeholder="Номер телефону"
            mask="+380 00 000 00 00"
          />
          <Input
            label="Забули пароль?"
            link={"/forgot-password"}
            placeholder="Пароль"
            type="password"
            labelLink
          />
        </div>
        <Button title="Увійти" className="mb-2.5 mt-10" onClick={handleLogin} />
        <Link title="Ще не зареєстровані?" link="/registration" />
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  padding: 46px 20px 56px;
  min-height: 100vh;
  .flelds {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
