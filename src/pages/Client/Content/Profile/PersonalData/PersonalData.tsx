import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { PhonesInput } from "../../../../../components/PhonesInput/PhonesInput";
import { AddButton } from "../AddButton";

export const PersonalData = () => (
  <StyledPersonalData>
    <SectionTitle title="Особисті дані" />
    <div className="flex items-center gap-3.5 mb-4">
      <Input label="Ім’я" required />
      <Input label="Прізвище" required />
    </div>
    <div className="mb-3 5">
      <PhonesInput />
    </div>
    <AddButton title="Додати фото" />
  </StyledPersonalData>
);

const StyledPersonalData = styled.div``;
