import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Textarea } from "../../../../../components/Textarea";
import { Select } from "../../../../../components/Select/Select";

export const MainInfo = () => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <Input label="Назва" required className="max-w-[479px] mb-3.5" />
    <Select
      label="Тип складу"
      options={[
        { title: "Тип 1", value: "1" },
        { title: "Тип 2", value: "2" },
        { title: "Тип 3", value: "3" },
      ]}
      className="max-w-[479px] mb-3.5"
    />
    <Textarea label="Опис" className="max-w-[479px]" />
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
