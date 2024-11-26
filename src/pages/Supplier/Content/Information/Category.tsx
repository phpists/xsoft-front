import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { Input } from "../../../../components/Input/Input";

export const Category = () => {
  return (
    <StyledCategory>
      <SectionTitle title="Посада і компанія" />
      <div className="flex items-center gap-6">
        <Select
          label="Оберіть категорію"
          options={[]}
          className="max-w-[479px] mb-[22px]"
          // value={value?.toString()}
          // onChange={onChange}
          // error={error}
        />
        <Input
          label="Компанія"
          className="max-w-[479px] mb-[22px]"
          // value={value?.toString()}
          // onChange={onChange}
          // error={error}
        />
      </div>
    </StyledCategory>
  );
};
const StyledCategory = styled.div``;
