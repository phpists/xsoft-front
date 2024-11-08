import { Input } from "../../../../../components/Input/Input";
import { SectionTitle } from "../../SectionTitle";
import { BiCalendar, BiMailSend } from "react-icons/bi";
import { Textarea } from "../../../../../components/Textarea";

export const Additional = () => (
  <div>
    <SectionTitle title="Додатково" />
    <Input
      label="Дата народження"
      className="max-w-[480px] mb-3.5"
      Icon={BiCalendar}
    />
    <Input label="Email" className="max-w-[480px] mb-3.5" Icon={BiMailSend} />
    <Textarea label="Коментар" className="!max-w-[480px]" />
  </div>
);
