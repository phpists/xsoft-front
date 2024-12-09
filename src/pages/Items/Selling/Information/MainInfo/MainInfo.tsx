import styled from "styled-components";
import { Input } from "../../../../../components/Input/Input";
import { BiRefresh } from "react-icons/bi";
import { IProductInfo } from "../../../../../types/products";
import { SectionTitle } from "../SectionTitle";
import { Textarea } from "../../../../../components/Textarea";
import { ISellingProduct } from "../../Selling";
import { useLazySearchProductMovementQuery } from "../../../../../store/movements/movements.api";
import { Select } from "../../../../../components/Select/Select";
import { useState } from "react";
import { IMovementsSearchResponseItem } from "../../../../../types/movements";

interface Props {
  data: ISellingProduct;
  onChange: (field: string, value: string | boolean | number) => void;
  productInfo?: IProductInfo;
  errors: string[];
  onSelectProduct: (product: IMovementsSearchResponseItem) => void;
}

export const MainInfo = ({
  data,
  onChange,
  onSelectProduct,
  errors,
}: Props) => {
  const [getSearchProductMovement] = useLazySearchProductMovementQuery();
  const [product, setProduct] = useState<
    IMovementsSearchResponseItem | undefined
  >();

  const handleSearch = (val: string) => {
    if (val.length > 0) {
      getSearchProductMovement(val).then((resp) =>
        setProduct(resp.data?.response.product_movement_item)
      );
    }
  };

  const handleSelectProduct = (val: string | number) => {
    if (val && product) {
      onSelectProduct(product);
    }
  };

  return (
    <StyledMainInfo>
      <SectionTitle title="Основна інформація" />
      <div className="flex items-center justify-between mb-2.5">
        <Select
          label="Назва"
          className="max-w-[479px]"
          value={data.title}
          onChange={handleSelectProduct}
          error={!!errors?.includes("title")}
          options={
            product
              ? [{ title: product?.product?.title ?? "", value: product.id }]
              : []
          }
          hideArrow
          search
          onSeach={handleSearch}
        />
        <div className="flex items-center gap-3 5">
          <Select
            label="Артикул"
            className="!w-[200px]"
            Icon={<BiRefresh size={20} className="m-2.5 shrink-0" />}
            value={data.article}
            onChange={handleSelectProduct}
            error={!!errors?.includes("article")}
            options={
              product
                ? [
                    {
                      title: product?.product?.article ?? "",
                      value: product.id,
                    },
                  ]
                : []
            }
            hideArrow
            search
            onSeach={handleSearch}
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
};

const StyledMainInfo = styled.div``;
