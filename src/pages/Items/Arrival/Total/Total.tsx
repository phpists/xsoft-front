import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { BiCalendar, BiUser } from "react-icons/bi";
import { Input } from "../../../../components/Input/Input";
import { Toggle } from "../../../../components/Toggle";

export const Total = () => (
  <StyledTotal>
    <div className="flex items-center justify-between mb-3.5">
      <SectionTitle title="Сума приходу" className="!mb-0" />
      <SectionTitle title="2 000 ₴" className="!mb-0" />
    </div>
    <div className="flex items-center justify-between mb-3.5">
      <Select
        label="Каса"
        options={[]}
        Icon={<BiUser />}
        className="max-w-[479px]"
      />
      <Input label="Ціна закупки" value={450} sign="UAH" number labelActive />
    </div>
    <div className="max-w-max mb-3.5">
      <Toggle label="Дозволити борг" />
    </div>{" "}
    <div className="max-w-max mb-3.5">
      <Toggle label="Сплати частково" />
    </div>
    <Input
      label="Дата"
      labelActive
      calendar
      Icon={BiCalendar}
      className="w-[194px]"
    />
  </StyledTotal>
);

const StyledTotal = styled.div`
  padding: 14px;
  border-radius: 7px;
  border: 1px solid #dbdbdb;
`;
