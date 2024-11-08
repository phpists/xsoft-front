import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Textarea } from "../../../../../components/Textarea";

export const MainInfo = () => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <Input label="Назва" required className="max-w-[479px] mb-3.5" />
    <Textarea label="Опис" className="max-w-[479px]" />
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
