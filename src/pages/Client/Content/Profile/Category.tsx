import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Select } from "../../../../components/Select/Select";
import { AddButton } from "./AddButton";

export const Category = () => (
  <StyledCategory>
    <SectionTitle title="Категорія клієнта" />
    <Select
      label="Оберіть категорію"
      options={[
        { title: "Категорія 1", value: "test" },
        { title: "Категорія 2", value: "test" },
        { title: "Категорія 3", value: "test" },
      ]}
      className="max-w-[479px] mb-[22px]"
    />
    <AddButton title="Додати тег" />
  </StyledCategory>
);

const StyledCategory = styled.div``;
