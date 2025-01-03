import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
// import { useState } from "react";
import { Button } from "./Button";
import { Link } from "./Link";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkEmailValidation, showMessage } from "../../helpers";
import { useLazyLoginQuery } from "../../store/auth/auth.api";
import { useActions } from "../../hooks/actions";

export const Login = () => {
  const [data, setData] = useState({ login: "", password: "" });
  const [login] = useLazyLoginQuery();
  const navigate = useNavigate();
  const { loginUser } = useActions();

  const handleChangeField = (field: string, val: string) =>
    setData({ ...data, [field]: val });

  const handleLogin = () => {
    login(data).then((resp: any) => {
      if (resp.isError) {
        showMessage(
          "error",
          resp?.error?.data?.message ?? "Помилка авторизації"
        );
      } else {
        localStorage.setItem("token", resp?.data.response.access_token);
        loginUser(resp?.data.response?.user);
        navigate("/");
        window.location.reload();
      }
    });
  };

  return (
    <StyledLogin className="flex items-center justify-center">
      <div className="card">
        <Title title="З поверненням!" />
        <div className="flelds">
          <Input
            placeholder="Електрона пошта"
            value={data?.login}
            onChange={(val) => handleChangeField("login", val)}
            error={
              data?.login?.length > 0
                ? checkEmailValidation(data?.login)
                : false
            }
          />
          <Input
            label="Забули пароль?"
            link={"/forgot-password"}
            placeholder="Пароль"
            type="password"
            labelLink
            value={data?.password}
            onChange={(val) => handleChangeField("password", val)}
          />
        </div>
        <Button
          title="Увійти"
          className="mb-2.5 mt-10"
          onClick={handleLogin}
          disabled={
            data.login?.length === 0 ||
            data?.password?.length === 0 ||
            checkEmailValidation(data?.login)
          }
        />
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
