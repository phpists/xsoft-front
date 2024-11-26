import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Textarea } from "../../../../../components/Textarea";

export const MainInfo = () => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <div className="flex items-center gap-3.5 w-max">
      <Input label="Назва" className="w-[479px]" />
      <Input label="Кількість" number labelActive className="w-[92px]" />
    </div>
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
