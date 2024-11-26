import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Textarea } from "../../../../../components/Textarea";
import { IBrand } from "../../Content";

interface Props {
  data: IBrand;
  onChange: (field: string, val: string) => void;
  errors: string[];
}

export const MainInfo = ({ data, onChange, errors }: Props) => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <Input
      label="Назва"
      required
      className="max-w-[479px] mb-3.5"
      value={data.title}
      onChange={(val) => onChange("title", val.toString())}
      error={!!errors.includes("title")}
    />
    <Textarea
      label="Опис"
      className="max-w-[479px]"
      value={data.description}
      onChange={(val) => onChange("description", val.toString())}
      error={!!errors.includes("description")}
    />
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
