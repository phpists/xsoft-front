import { BiCube, BiTrash } from "react-icons/bi";
import { Option, Select } from "../../../../components/Select/Select";
import { Input } from "../../../../components/Input/Input";
import { useLazyGetProductsQuery } from "../../../../store/products/products.api";
import { useEffect, useState } from "react";
import { IProductResponse } from "../../../../types/products";
import { useLazySearchProductMovementQuery } from "../../../../store/movements/movements.api";
import {
  IMovementsSearchResponse,
  IMovementsSearchResponseItem,
} from "../../../../types/movements";

interface Props {
  hideDelete?: boolean;
  product_id?: number;
  qty: number;
  measurement_id?: number;
  cost_price: number;
  retail_price: number;
  measurementOptions: Option[];
  onChange: (field: string, value: any, isObject?: boolean) => void;
  onDelete: () => void;
  error: boolean;
  title?: string;
  id?: string;
}

export const Card = ({
  id,
  hideDelete,
  product_id,
  qty,
  measurement_id,
  cost_price,
  retail_price,
  measurementOptions,
  title,
  onChange,
  onDelete,
  error,
}: Props) => {
  const [getProducts] = useLazySearchProductMovementQuery();
  const [products, setProducts] = useState<IMovementsSearchResponseItem[]>([]);

  const handleSearchProducts = (q: string) => {
    if (q.length > 0) {
      getProducts(q).then((resp) =>
        setProducts(resp?.data?.response?.product_movement_items ?? [])
      );
    }
  };

  const handleSelectProduct = (id: string) => {
    const product = products.find((p) => p.id.toString() === id);

    if (product) {
      onChange(
        "item",
        {
          id: id,
          product_id: product.product_id,
          measurement_id: product.measurement_id,
          cost_price: product.cost_price,
          retail_price: product.retail_price,
          product_movement_id: product?.product_movement_id
        },
        true
      );
    }
  };

  useEffect(() => {
    if (id && products?.length === 0 && title) {
      handleSearchProducts(title);
    }
  }, [product_id]);

  return (
    <div className="flex items-center justify-between mb-3.5">
      <Select
        label="Продукт"
        options={
          products?.map(
            ({ product: { title }, id, qty, measurement_id, cost_price }) => ({
              title,
              value: id?.toString(),
              subtitle: `${qty} ${
                measurementOptions.find((o) => o.value === measurement_id)
                  ?.title ?? ""
              }`,
            })
          ) ?? []
        }
        Icon={<BiCube />}
        className="max-w-[345px]"
        value={id}
        onChange={(val) => handleSelectProduct(val.toString())}
        search
        onSeach={handleSearchProducts}
        error={error && !id}
      />
      <div className="flex items-center gap-3.5">
        <Input
          label="Кількість"
          number
          labelActive
          className="w-[92px]"
          value={qty}
          onChange={(val) => onChange("qty", Number(val))}
        />{" "}
        <Input
          label="Одиниця"
          options={measurementOptions}
          labelActive
          className="w-[85px]"
          value={measurement_id}
          //   onChange={(val) => onChange("measurement_id", Number(val))}
          disabled
        />{" "}
        <Input
          label="Ціна закупки"
          number
          labelActive
          className="w-[154px]"
          sign="UAH"
          value={cost_price}
          onChange={(val) => onChange("cost_price", Number(val))}
        />{" "}
        <Input
          label="Ціна роздрібна"
          number
          labelActive
          className="w-[154px]"
          sign="UAH"
          value={retail_price}
          onChange={(val) => onChange("retail_price", Number(val))}
        />
        {hideDelete ? (
          <div className="w-[20px] shrink-0"></div>
        ) : (
          <button onClick={onDelete}>
            <BiTrash size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
