import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Input } from "../../../components/Input/Input";
import { Select } from "../../../components/Select/Select";
import { IFilters } from "./Registers";

interface Props {
  filters: IFilters;
  onChange: (field: string, value: string | undefined) => void;
}

export const Period = ({ filters, onChange }: Props) => (
  <StyledPeriod>
    <SectionTitle title="Період" />
    <div className="flex items-center gap-2.5">
      <Input
        label="з"
        calendar
        className="bg-white"
        value={filters.date_start}
        onChange={(val) => onChange("date_start", val?.toString())}
      />
      <Input
        label="до"
        calendar
        className="bg-white"
        value={filters.date_end}
        onChange={(val) => onChange("date_end", val?.toString())}
      />
      <Select
        options={[
          { title: "За день", value: "1" },
          { title: "За тиждень", value: "2" },
          { title: "За місяць", value: "3" },
          { title: "За рік", value: "4" },
        ]}
        className="max-w-[150px] bg-white"
        value={filters.time_period}
        onChange={(val) => onChange("time_period", val?.toString())}
      />
    </div>
  </StyledPeriod>
);

const StyledPeriod = styled.div`
  margin-bottom: 23px;
`;
