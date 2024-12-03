import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
// import { useState } from "react";
import { Button } from "./Button";
import { useState } from "react";
import { useLazyForgotPasswordQuery } from "../../store/auth/auth.api";
import { checkEmailValidation, showMessage } from "../../helpers";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [forgotPassword] = useLazyForgotPasswordQuery();

  const handleSubmit = () => {
    forgotPassword(email).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка, акаунт не знайдено");
      } else {
        showMessage(
          "success",
          "Посилання для скидання паролю надіслано на вашу електронну пошту."
        );
        navigate("/");
      }
    });
  };

  return (
    <StyledForgotPassword className="flex items-center justify-center">
      <div className="card">
        <Title title="Забули пароль?" />
        <div className="flelds">
          <Input
            // label="Надіслати повторно через 59 сек"
            placeholder="Електрона пошта"
            value={email}
            onChange={(val) => setEmail(val)}
            error={email?.length === 0 ? false : checkEmailValidation(email)}
          />
        </div>
        <Button
          title="Відновити"
          className="mt-10"
          onClick={handleSubmit}
          disabled={email?.length === 0 || checkEmailValidation(email)}
        />
      </div>
    </StyledForgotPassword>
  );
};

const StyledForgotPassword = styled.div`
  padding: 46px 20px 56px;
  min-height: 100vh;
`;
