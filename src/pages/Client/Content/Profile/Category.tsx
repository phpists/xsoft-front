import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { useGetCategoriesQuery } from "../../../../store/clients/clients.api";
import { AddTag } from "../../../../components/AddTag";

interface Props {
  value: string | undefined;
  onChange: (val: string | number) => void;
  error?: boolean;
  onAddTag?: (val: string) => void;
}

export const Category = ({ value, onChange, error, onAddTag }: Props) => {
  const { data: categories } = useGetCategoriesQuery({});

  return (
    <StyledCategory>
      <SectionTitle title="Категорія клієнта" />
      <Select
        label="Оберіть категорію"
        options={categories ?? []}
        className="max-w-[479px] mb-[22px]"
        value={value?.toString()}
        onChange={onChange}
        error={error}
      />
      {/* <AddTag onAdd={onAddTag} /> */}
    </StyledCategory>
  );
};
const StyledCategory = styled.div``;
