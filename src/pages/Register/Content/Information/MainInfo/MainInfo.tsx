import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Textarea } from "../../../../../components/Textarea";
import { IBrand } from "../../Content";
import { Toggle } from "../../../../../components/Toggle";
import { Checkbox } from "../../../../../components/Checkbox";

interface Props {
  data: IBrand;
  onChange: (field: string, val: string) => void;
  errors: string[];
}

export const MainInfo = ({ data, onChange, errors }: Props) => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <div className="flex items-center mb-3.5 gap-3.5">
      <Input
        label="Назва"
        required
        value={data.title}
        onChange={(val) => onChange("title", val.toString())}
        error={!!errors.includes("title")}
      />
      <Input
        label="Призначення"
        required
        value={data.title}
        onChange={(val) => onChange("title", val.toString())}
        error={!!errors.includes("title")}
      />
    </div>
    <Textarea
      label="Коментар"
      className="max-w-[479px]  mb-3.5"
      value={data.description}
      onChange={(val) => onChange("description", val.toString())}
      error={!!errors.includes("description")}
    />
    <div className="w-max">
      <Toggle label="Прив’язати касу до статей" />
    </div>
    <div className="flex flex-col">
      <div className="flex items-center w-max checkbox-value">
        <Checkbox checked onClick={() => null} /> <span>Стаття 1</span>
      </div>
      <div className="flex items-center w-max checkbox-value">
        <Checkbox checked onClick={() => null} /> <span>Стаття 2</span>
      </div>
      <div className="flex items-center w-max checkbox-value">
        <Checkbox checked onClick={() => null} /> <span>Стаття 3</span>
      </div>
    </div>
  </StyledMainInfo>
);

const StyledMainInfo = styled.div`
  .checkbox-value {
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    div {
      padding: 10px;
    }
  }
`;
