import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { CategorySelect } from "../../../../../components/CategorySelect/CategorySelect";
import { Textarea } from "../../../../../components/Textarea";
import { IProduct, IProductInfo } from "../../../../../types/products";

interface Props {
  data: IProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  productInfo?: IProductInfo;
  errors: string[];
  onRefreshProductInfo: () => void;
}

export const Category = ({
  data,
  onChange,
  productInfo,
  errors,
  onRefreshProductInfo,
}: Props) => (
  <StyledCategory>
    <SectionTitle title="Бренда та категорія" />
    <div className="flex items-center gap-3.5 w-full mb-3.5">
      <CategorySelect
        label="Бренд"
        noAddButton
        options={productInfo?.brands?.map(({ id, title }) => ({
          title,
          value: id,
        }))}
        value={data.brand_id}
        onChange={(val) => onChange("brand_id", val)}
        error={!!errors?.includes("brand_id")}
      />
      <CategorySelect
        label="Категорія"
        options={productInfo?.categories?.map(({ id, title }) => ({
          title,
          value: id,
        }))}
        value={data.category_id}
        onChange={(val) => onChange("category_id", val)}
        error={!!errors?.includes("category_id")}
        onSuccessfulAdCategory={onRefreshProductInfo}
      />
    </div>
    <Textarea
      label="Опис"
      className="textarea"
      value={data.description}
      onChange={(val) => onChange("description", val)}
      error={!!errors?.includes("description")}
    />
  </StyledCategory>
);

const StyledCategory = styled.div`
  .textarea {
    textarea {
      height: 35px;
    }
  }
`;
