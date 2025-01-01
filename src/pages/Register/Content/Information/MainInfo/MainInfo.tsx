import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Textarea } from "../../../../../components/Textarea";
import { ICash } from "../../Content";
import { Toggle } from "../../../../../components/Toggle";
import { Checkbox } from "../../../../../components/Checkbox";
import { useGetCashCategoriesQuery } from "../../../../../store/finance/finance.api";

interface Props {
  data: ICash;
  onChange: (field: string, val: string | number | number[]) => void;
  errors: string[];
}

export const MainInfo = ({ data, onChange, errors }: Props) => {
  const { data: cashCategories } = useGetCashCategoriesQuery({});

  return (
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
          value={data.appointment}
          onChange={(val) => onChange("appointment", val.toString())}
          error={!!errors.includes("appointment")}
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
        <Toggle
          label="Прив’язати касу до статей"
          value={data?.is_cash_category === 1}
          onChange={() =>
            onChange("is_cash_category", data?.is_cash_category === 1 ? 0 : 1)
          }
        />
      </div>
      {data?.is_cash_category === 1 ? (
        <div className="flex flex-col">
          {cashCategories?.response?.cash_categories?.map(({ id, title }) => (
            <div
              className="flex items-center w-max checkbox-value"
              onClick={() =>
                onChange(
                  "cash_categories",
                  data?.cash_categories.includes(id)
                    ? data?.cash_categories.filter((cId) => cId !== id)
                    : [...data?.cash_categories, id]
                )
              }
            >
              <Checkbox
                checked={data?.cash_categories.includes(id)}
                onClick={() =>
                  onChange(
                    "cash_categories",
                    data?.cash_categories.includes(id)
                      ? data?.cash_categories.filter((cId) => cId !== id)
                      : [...data?.cash_categories, id]
                  )
                }
              />{" "}
              <span>{title}</span>
            </div>
          ))}
        </div>
      ) : null}
    </StyledMainInfo>
  );
};

const StyledMainInfo = styled.div`
  .checkbox-value {
    font-size: 12px;
    font-weight: 500;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    cursor: pointer;
    div {
      padding: 10px;
    }
  }
`;
