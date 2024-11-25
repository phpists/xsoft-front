import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Input } from "../../../../../components/Input/Input";
import { BiRefresh } from "react-icons/bi";
import { Select } from "../../../../../components/Select/Select";
import { CategorySelect } from "../../../../../components/CategorySelect/CategorySelect";
import { useGetProductInfoQuery } from "../../../../../store/products/products.api";
import { ICompany } from "../../Content";

interface Props {
  data: ICompany;
  onChange: (
    field: string,
    value: string | number | string[] | number[]
  ) => void;
  errors: string[];
}

export const MainInfo = ({ data, onChange, errors }: Props) => {
  const { data: productInfo, refetch } = useGetProductInfoQuery({});

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
        options={productInfo?.categories?.map(({ id, title }) => ({
          title,
          value: id,
        }))}
        className="max-w-[345px]"
        value={data.category_id}
        onChange={(val) => onChange("category_id", val)}
        error={!!errors.includes("category_id")}
        onSuccessfulAdCategory={refetch}
      />
    </StyledMainInfo>
  );
};

const StyledMainInfo = styled.div``;
