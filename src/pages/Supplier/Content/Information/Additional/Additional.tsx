import { Input } from "../../../../../components/Input/Input";
import { SectionTitle } from "../../SectionTitle";
import { BiCalendar, BiLock, BiMailSend } from "react-icons/bi";
import { Textarea } from "../../../../../components/Textarea";
import { IPhone } from "../../../../../components/PhonesInput/PhonesInput";
import { useLazyGeneratePasswordQuery } from "../../../../../store/personal/personal.api";
import { useState } from "react";
import { Button } from "../../../../../components/Button";

interface Props {
  data: any;
  onChange: (
    field: string,
    value: string | boolean | number | IPhone[]
  ) => void;
  errors: string[];
}

export const Additional = ({ data, onChange, errors }: Props) => {
  const [generatePassword] = useLazyGeneratePasswordQuery();
  const [loading, setLoading] = useState(false);

  const handleGeneratePassword = () => {
    setLoading(true);
    generatePassword({}).then((resp) => {
      onChange("password", resp.data?.response.password ?? "");
      setLoading(false);
    });
  };

  return (
    <div>
      <SectionTitle title="Додатково" />
      <Input
        label="Email"
        className="max-w-[480px] mb-3.5"
        Icon={BiMailSend}
        value={data?.email}
        onChange={(val) => onChange("email", val)}
        error={!!errors?.includes("email")}
      />
      {/* <div className="flex items-center gap-3.5 mb-3.5 w-max">
        <Input
          label="Пароль"
          Icon={BiLock}
          className="dark-icon w-[470px]"
          value={data.password}
          onChange={(val) => onChange("password", val)}
          error={!!errors.includes("password")}
        />
        <Button
          title="Згенерувати пароль"
          className="max-w-[180px]"
          onClick={handleGeneratePassword}
          loading={loading}
          disabled={loading}
        />
      </div> */}
      <Textarea
        label="Коментар"
        className="!max-w-[480px]"
        value={data?.comment}
        onChange={(val) => onChange("comment", val)}
        error={!!errors?.includes("comment")}
      />
    </div>
  );
};
