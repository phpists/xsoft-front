import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
// import { useState } from "react";
import { Button } from "./Button";
import { useState } from "react";
import { useLazyResetPasswordQuery } from "../../store/auth/auth.api";
import { getSearchValues, showMessage } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/actions";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const [resetPassword] = useLazyResetPasswordQuery();
  const { loginUser } = useActions();

  const handleCheckValidation = () => {
    if (password !== passwordConfirmation) {
      showMessage("error", "Паролі не співпадають");
      return false;
    } else if (password?.length < 8) {
      showMessage("error", "Мінімільна кількість символів паролю - 8");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (handleCheckValidation()) {
      const { email, token } = getSearchValues();
      resetPassword({
        password,
        password_confirmation: passwordConfirmation,
        email,
        token,
      }).then((resp) => {
        if (resp.isError) {
          showMessage("error", "Помилка");
        } else {
          console.log(resp);
          showMessage("success", "Пароль успішно відновленно");
          localStorage.setItem("token", resp?.data.response.access_token);
          loginUser(resp?.data.response?.user);
          navigate("/");
          window.location.reload();
        }
      });
    }
  };

  return (
    <StyledResetPassword className="flex items-center justify-center">
      <div className="card">
        <Title title="Відновлення паролю" />
        <div className="flelds">
          <Input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(val) => setPassword(val)}
          />
          <Input
            placeholder="Підтвердження паролю"
            type="password"
            value={passwordConfirmation}
            onChange={(val) => setPasswordConfirmation(val)}
          />
        </div>
        <Button
          title="Відновити"
          className="mt-10"
          onClick={handleSubmit}
          disabled={password?.length === 0 || passwordConfirmation.length === 0}
        />
      </div>
    </StyledResetPassword>
  );
};

const StyledResetPassword = styled.div`
  padding: 46px 20px 56px;
  min-height: 100vh;
  .flelds {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
