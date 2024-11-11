import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { CategorySelect } from "../../../../../components/CategorySelect/CategorySelect";
import { Textarea } from "../../../../../components/Textarea";

export const Category = () => (
  <StyledCategory>
    <SectionTitle title="Бренда та категорія" />
    <div className="flex items-center gap-3.5 w-full mb-3.5">
      <CategorySelect label="Бренд" />
      <CategorySelect label="Категорія" />
    </div>
    <Textarea label="Опис" className="textarea" />
  </StyledCategory>
);

const StyledCategory = styled.div`
  .textarea {
    textarea {
      height: 35px;
    }
  }
`;
