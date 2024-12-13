import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Input } from "../../../components/Input/Input";
import { Select } from "../../../components/Select/Select";

export const Period = () => (
  <StyledPeriod>
    <SectionTitle title="Період" />
    <div className="flex items-center gap-2.5">
      <Input label="з" calendar className="bg-white" />
      <Input label="до" calendar className="bg-white" />
      <Select
        value="За тиждень"
        options={[
          { title: "За день", value: "За день" },
          { title: "За тиждень", value: "За тиждень" },
          { title: "За місяць", value: "За місяць" },
          { title: "За рік", value: "За рік" },
        ]}
        className="max-w-[150px] bg-white"
      />
    </div>
  </StyledPeriod>
);

const StyledPeriod = styled.div`
  margin-bottom: 23px;
`;
