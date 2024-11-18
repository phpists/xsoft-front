import { Input } from "../../../../../components/Input/Input";
import { SectionTitle } from "../../SectionTitle";
import { BiCalendar, BiMailSend } from "react-icons/bi";
import { Textarea } from "../../../../../components/Textarea";
import { IClient } from "../../Content";
import { IPhone } from "../../../../../components/PhonesInput/PhonesInput";

interface Props {
  data: IClient;
  onChange: (
    field: string,
    value: string | boolean | number | IPhone[]
  ) => void;
  errors: string[];
}

export const Additional = ({ data, onChange, errors }: Props) => (
  <div>
    <SectionTitle title="Додатково" />
    <Input
      label="Дата народження"
      className="max-w-[480px] mb-3.5"
      Icon={BiCalendar}
      calendar
      value={data?.bd_day}
      onChange={(val) => onChange("bd_day", val)}
      error={!!errors?.includes("bd_day")}
    />
    <Input
      label="Email"
      className="max-w-[480px] mb-3.5"
      Icon={BiMailSend}
      value={data?.email}
      onChange={(val) => onChange("email", val)}
      error={!!errors?.includes("email")}
    />
    <Textarea
      label="Коментар"
      className="!max-w-[480px]"
      value={data?.comment}
      onChange={(val) => onChange("comment", val)}
      error={!!errors?.includes("comment")}
    />
  </div>
);
