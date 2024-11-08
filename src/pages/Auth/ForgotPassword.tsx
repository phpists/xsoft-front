import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
// import { useState } from "react";
import { Button } from "./Button";

export const ForgotPassword = () => {
  //   const [data, setData] = useState({});

  //   const handleChangeField = (field, val) => setData({ ...data, [field]: val });

  return (
    <StyledForgotPassword className="flex items-center justify-center">
      <div className="card">
        <Title title="Забули пароль?" />
        <div className="flelds">
          <Input
            label="Надіслати повторно через 59 сек"
            placeholder="Електрона пошта"
          />
        </div>
        <Button title="Відновити" className="mt-10" />
      </div>
    </StyledForgotPassword>
  );
};

const StyledForgotPassword = styled.div`
  padding: 46px 20px 56px;
  min-height: 100vh;
`;
