import styled from "styled-components";
import { Title } from "./Title";
import { Input } from "./Input/Input";
import { AgreeCheckbox } from "./AgreeCheckbox";
import { useState } from "react";
import { Button } from "./Button";
import { Link } from "./Link";
import { checkEmailValidation, showMessage } from "../../helpers";
import { useLazyRegisterQuery } from "../../store/auth/auth.api";

export const Registration = () => {
  const [data, setData] = useState({
    phone: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    agree: false,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [registrate] = useLazyRegisterQuery();

  const handleChangeField = (field: string, val: string | boolean) => {
    setData({ ...data, [field]: val });
    if (val?.toString()?.length > 0) {
      setErrors(errors?.filter((f) => f !== field));
    }
  };

  const handleCheckFields = (): boolean => {
    const errs = [];
    setErrors([]);

    data.phone?.length < 10 && errs.push("phone");

    if (checkEmailValidation(data?.email) || data.email?.length === 0) {
      errs.push("email");
    }
    data.phone?.length === 0 && errs.push("phone");
    data.first_name?.length === 0 && errs.push("first_name");
    data.last_name?.length === 0 && errs.push("last_name");
    data.password?.length === 0 && errs.push("password");
    data.password_confirmation?.length === 0 &&
      errs.push("password_confirmation");
    if (
      data.password !== data.password_confirmation &&
      !errs.includes("password_confirmation")
    ) {
      errs.push("password_confirmation");
    }

    if (errs?.length > 0) {
      setErrors(errs);
      showMessage("error", "Заповніть всі поля");
      return false;
    } else {
      return true;
    }
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      registrate(data).then((resp) => {
        console.log(resp);
      });
    }
  };

  return (
    <StyledRegistration className="flex items-center justify-center">
      <div className="card">
        <Title title="Приєднатися до XSOFTcrm" />
        <div className="flelds">
          <Input
            label="На цей номер буде відправлено пароль"
            placeholder="Номер телефону"
            mask="+380 00 000 00 00"
            value={data?.phone}
            onChange={(val) => handleChangeField("phone", val)}
            error={errors?.includes("phone")}
          />
          <Input
            label="Використовуватиметься для входу"
            placeholder="Електрона пошта"
            value={data?.email}
            onChange={(val) => handleChangeField("email", val)}
            error={errors?.includes("email")}
          />
          <Input
            placeholder="Ім’я"
            value={data?.first_name}
            onChange={(val) => handleChangeField("first_name", val)}
            error={errors?.includes("first_name")}
          />
          <Input
            placeholder="Прізвище"
            value={data?.last_name}
            onChange={(val) => handleChangeField("last_name", val)}
            error={errors?.includes("last_name")}
          />
          <Input
            placeholder="Пароль"
            type="password"
            value={data?.password}
            onChange={(val) => handleChangeField("password", val)}
            error={errors?.includes("password")}
          />
          <Input
            placeholder="Підтвердження паролю"
            type="password"
            value={data?.password_confirmation}
            onChange={(val) => handleChangeField("password_confirmation", val)}
            error={errors?.includes("password_confirmation")}
          />
        </div>
        <AgreeCheckbox
          value={!!data?.agree}
          onChange={() => handleChangeField("agree", !data?.agree)}
        />
        <Button
          title="Зареєструватися"
          className="mb-2.5"
          onClick={handleSave}
          disabled={!data?.agree}
        />
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
