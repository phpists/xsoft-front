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
