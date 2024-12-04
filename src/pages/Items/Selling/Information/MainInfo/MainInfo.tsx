import styled from "styled-components";
import { Input } from "../../../../../components/Input/Input";
import { BiRefresh } from "react-icons/bi";
import { IProduct, IProductInfo } from "../../../../../types/products";
import { SectionTitle } from "../SectionTitle";
import { Textarea } from "../../../../../components/Textarea";

interface Props {
  data: IProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  productInfo?: IProductInfo;
  errors: string[];
}

export const MainInfo = ({ data, onChange, productInfo, errors }: Props) => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <div className="flex items-center justify-between mb-2.5">
      <Input
        label="Назва"
        required
        className="max-w-[479px]"
        value={data.title}
        onChange={(val) => onChange("title", val)}
        error={!!errors?.includes("title")}
      />
      <div className="flex items-center gap-3 5">
        <Input
          label="Артикул"
          required
          className="w-[200px]"
          RightIcon={<BiRefresh size={20} className="m-2.5 shrink-0" />}
          value={data.article}
          onChange={(val) => onChange("article", val)}
          error={!!errors?.includes("article")}
        />
      </div>
    </div>
    <Textarea
      label="Опис"
      className="textarea"
      value={data.description}
      onChange={(val) => onChange("description", val)}
      error={!!errors?.includes("description")}
    />
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
