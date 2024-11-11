import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
import { AgreeCheckbox } from "./AgreeCheckbox";
import { useState } from "react";
import { Button } from "./Button";
import { Link } from "./Link";

export const Registration = () => {
  const [data, setData] = useState({ agree: false });

  const handleChangeField = (field: string, val: string | boolean) =>
    setData({ ...data, [field]: val });

  return (
    <StyledRegistration className="flex items-center justify-center">
      <div className="card">
        <Title title="Приєднатися до XSOFTcrm" />
        <div className="flelds">
          <Input
            label="На цей номер буде відправлено пароль"
            placeholder="Номер телефону"
            mask="+380 00 000 00 00"
          />
          <Input
            label="Використовуватиметься для входу"
            placeholder="Електрона пошта"
          />
          <Input placeholder="Ім’я" />
          <Input placeholder="Прізвище" />
          <Input placeholder="Пароль" type="password" />
          <Input placeholder="Підтвердження паролю" type="password" />
        </div>
        <AgreeCheckbox
          value={!!data?.agree}
          onChange={() => handleChangeField("agree", !data?.agree)}
        />
        <Button title="Зареєструватися" className="mb-2.5" />
        <Link title="Вже є обліковий запис?" link="/login" />
      </div>
    </StyledRegistration>
  );
};

const StyledRegistration = styled.div`
  padding: 46px 20px 56px;
  min-height: 100vh;
  .flelds {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
