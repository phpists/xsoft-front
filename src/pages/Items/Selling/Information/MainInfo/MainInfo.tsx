import styled from "styled-components";
import { Input } from "../../../../../components/Input/Input";
import { BiRefresh } from "react-icons/bi";
import { IProduct, IProductInfo } from "../../../../../types/products";
import { SectionTitle } from "../SectionTitle";

interface Props {
  data: IProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  productInfo?: IProductInfo;
  errors: string[];
}

export const MainInfo = ({ data, onChange, productInfo, errors }: Props) => (
  <StyledMainInfo>
    <SectionTitle title="Основна інформація" />
    <div className="flex items-center justify-between">
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
        <Input
          label="Одиниця виміру"
          required
          className="w-[160px]"
          value={data?.product_measure_id}
          options={
            productInfo?.measurements?.map(({ id, title }) => ({
              title,
              value: id,
            })) ?? []
          }
          onChange={(val) => onChange("product_measure_id", val)}
          error={!!errors?.includes("product_measure_id")}
        />
      </div>
    </div>
  </StyledMainInfo>
);

const StyledMainInfo = styled.div``;
