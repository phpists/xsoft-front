import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { Input } from "../../../../components/Input/Input";
import { useAppSelect } from "../../../../hooks/redux";
import { useGetProductInfoQuery } from "../../../../store/products/products.api";

interface Props {
  data: any;
  onChange: (field: string, value: any) => void;
  errors: string[];
}

export const Category = ({ data, onChange, errors }: Props) => {
  const { selectedCompany } = useAppSelect((state) => state.app);
  const { companies } = useAppSelect((state) => state.companies);
  const { data: productInfo } = useGetProductInfoQuery({});

  return (
    <StyledCategory>
      <SectionTitle title="Посада і компанія" />
      <div className="flex items-center gap-6 ">
        <div className="max-w-[479px]">
          {" "}
          <Input
            label="Компанія"
            className="w-[479px] mb-[22px]"
            value={
              companies?.find((c) => c.id?.toString() === selectedCompany)
                ?.title
            }
            // value={value?.toString()}
            // onChange={onChange}
            // error={error}
          />
        </div>
        <Select
          label="Оберіть категорію"
          options={
            productInfo?.categories?.map(({ id, title }) => ({
              title,
              value: id,
            })) ?? []
          }
          className="!w-[479px] mb-[22px]"
          value={data.category_id}
          onChange={(val) => onChange("category_id", val)}
          error={!!errors.includes("category_id")}
        />
      </div>
    </StyledCategory>
  );
};
const StyledCategory = styled.div``;
