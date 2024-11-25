import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import {
  IPhone,
  PhonesInput,
} from "../../../../../components/PhonesInput/PhonesInput";

interface Props {
  data: any;
  onChange: (
    field: string,
    value: string | boolean | number | IPhone[]
  ) => void;
  errors: string[];
}

export const PersonalData = ({ data, onChange, errors }: Props) => (
  <StyledPersonalData>
    <SectionTitle title="Особисті дані" />
    <div className="flex items-center gap-3.5 mb-4">
      <Input
        label="Ім’я"
        required
        value={data.first_name}
        onChange={(val: string | number) => onChange("first_name", val)}
        error={!!errors?.includes("first_name")}
      />
      <Input
        label="Прізвище"
        required
        value={data.last_name}
        onChange={(val: string | number) => onChange("last_name", val)}
        error={!!errors?.includes("last_name")}
      />
    </div>
    <div className="mb-3 5">
      <PhonesInput
        data={data?.phones}
        onChange={(val: IPhone[]) => onChange("phones", val)}
        error={!!errors?.includes("phones")}
      />
    </div>
    {/* <AddButton title="Додати фото" /> */}
  </StyledPersonalData>
);

const StyledPersonalData = styled.div``;
