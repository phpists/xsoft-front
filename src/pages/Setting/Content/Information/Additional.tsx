import { BiLock, BiMailSend } from "react-icons/bi";
import { Input } from "../../../../components/Input/Input";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Textarea } from "../../../../components/Textarea";
import { IPerson } from "../Content";
import { Button } from "../../../../components/Button";
import { useLazyGeneratePasswordQuery } from "../../../../store/personal/personal.api";
import { useState } from "react";
import { useLazyUpdateUserPasswordQuery } from "../../../../store/auth/auth.api";
import { showMessage } from "../../../../helpers";

interface Props {
  data: IPerson;
  onChange: (
    field: string,
    value: string | boolean | number | string[]
  ) => void;
  errors: string[];
}

export const Additional = ({ data, onChange, errors }: Props) => {
  const [generatePassword] = useLazyGeneratePasswordQuery();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savePassword] = useLazyUpdateUserPasswordQuery();

  const handleGeneratePassword = () => {
    setLoading(true);
    generatePassword({}).then((resp) => {
      onChange("password", resp.data?.response.password ?? "");
      setLoading(false);
    });
  };

  const handleCheckValidation = () => {
    if (data.password !== data.password_confirmation) {
      showMessage("error", "Паролі не співпадають");
      return false;
    } else if (data.password?.length < 8) {
      showMessage("error", "Мінімільна кількість символів паролю - 8");
      return false;
    }

    return true;
  };

  const handleSavePassword = () => {
    if (handleCheckValidation()) {
      const { password, password_confirmation, user_id } = data;
      savePassword({ password, password_confirmation, user_id }).then(
        (resp) => {
          if (resp.isError) {
            showMessage("error", "Помилка");
          } else {
            showMessage("success", "Пароль успішно збережено");
            onChange("password", "");
            setTimeout(() => onChange("password_confirmation", ""), 100);
          }
        }
      );
    }
  };

  return (
    <div>
      <SectionTitle title="Додатково" />
      <div className="flex items-center gap-3.5 mb-3.5 w-max">
        <Input
          label="Пароль"
          Icon={BiLock}
          className="dark-icon w-[470px]"
          value={data.password}
          onChange={(val) => onChange("password", val)}
          error={!!errors.includes("password")}
        />
        {/* <Button
          title="Згенерувати пароль"
          className="max-w-[180px]"
          onClick={handleGeneratePassword}
          loading={loading}
          disabled={loading || saving}
        /> */}
      </div>
      <Input
        label="Підтвердження паролю"
        Icon={BiLock}
        className="dark-icon w-[470px] mb-3.5"
        value={data.password_confirmation}
        onChange={(val) => onChange("password_confirmation", val)}
        error={!!errors.includes("password_confirmation")}
      />
      <Button
        title="Зберегти"
        className="max-w-[180px]"
        onClick={handleSavePassword}
        loading={saving}
        disabled={
          data.password?.length === 0 || data.password_confirmation.length === 0
        }
      />
    </div>
  );
};
