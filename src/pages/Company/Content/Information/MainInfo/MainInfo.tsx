import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { Select } from "../../../../../components/Select/Select";
import { CategorySelect } from "../../../../../components/CategorySelect/CategorySelect";
import { ICompany } from "../../Content";
import { useGetCompanyCategoriesQuery } from "../../../../../store/companies/companies.api";

interface Props {
  data: ICompany;
  onChange: (
    field: string,
    value: string | number | string[] | number[]
  ) => void;
  errors: string[];
}

export const MainInfo = ({ data, onChange, errors }: Props) => {
  const { data: companyCategories, refetch } = useGetCompanyCategoriesQuery({});

  const handleRefetchCategories = () => {
    refetch().then((resp) => {
      const newCategoryId = resp?.data?.[resp?.data?.length - 1]?.value;
      if (newCategoryId) {
        onChange("category_id", newCategoryId);
      }
    });
  };

  return (
    <StyledMainInfo>
      <SectionTitle title="Основна інформація" />
      <Input
        label="Назва"
        required
        className="max-w-[345px] mb-2"
        value={data.title}
        onChange={(val) => onChange("title", val)}
        error={!!errors.includes("title")}
      />
      <CategorySelect
        label="Категорія"
        options={companyCategories}
        className="max-w-[345px]"
        value={data.category_id}
        onChange={(val) => onChange("category_id", val)}
        error={!!errors.includes("category_id")}
        onSuccessfulAdCategory={handleRefetchCategories}
        company
      />
    </StyledMainInfo>
  );
};

const StyledMainInfo = styled.div``;
