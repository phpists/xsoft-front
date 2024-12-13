import { useEffect, useState } from "react";
import { IProduct } from "../../../types/products";
import { Information } from "./Information/Information";
import { useGetProductInfoQuery } from "../../../store/products/products.api";
import { MediaFile } from "../../../components/Files/Files";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { getSearchValues, showMessage } from "../../../helpers";
import {
  useLazyAddMovementSaleQuery,
  useLazyGetProductQuery,
} from "../../../store/movements/movements.api";
import { IMovementsSearchResponseItem } from "../../../types/movements";
import { useLocation } from "react-router-dom";

export interface ISellingProduct {
  product_movement_id?: number;
  product_id?: number;
  type_id?: number;
  qty: number;
  measurement_id?: number;
  cost_price: number;
  retail_price: number;
  description: string;
  title: string;
  article: string;
}

const INIT_VALUE = {
  product_movement_id: undefined,
  product_id: undefined,
  type_id: 2,
  qty: 0,
  measurement_id: undefined,
  cost_price: 0,
  retail_price: 0,
  description: "",
  title: "",
  article: "",
};

interface Props {
  off?: boolean;
  onBack: () => void;
}

export const Selling = ({ off, onBack }: Props) => {
  const { search } = useLocation();
  const [data, setData] = useState<ISellingProduct>(INIT_VALUE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [addMovementSale] = useLazyAddMovementSaleQuery();
  const [getProduct] = useLazyGetProductQuery();

  const handleChangeField = (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    setErrors(fieldsErr);

    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }

    return fieldsErr.length === 0;
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      setLoading(true);
      const { title, article, ...sendData } = data;
      addMovementSale({ ...sendData, type_id: off ? 3 : 2 }).then(
        (resp: any) => {
          setLoading(false);
          if (resp.isError) {
            if (!!resp?.error?.data?.errors?.qty) {
              showMessage("error", resp?.error?.data?.errors?.qty);
            } else {
              showMessage("error", resp?.error?.data?.message ?? "Помилка");
            }
          } else {
            showMessage("success", "Успішно збережено");
            onBack();
          }
        }
      );
    }
  };

  const handleSelectProduct = (product: IMovementsSearchResponseItem) => {
    if (product) {
      const {
        product: { article, title, description },
        qty,
        measurement_id,
        product_id,
        cost_price,
        retail_price,
        product_movement_id,
      } = product;

      setData({
        article,
        title,
        description,
        qty,
        measurement_id,
        product_id,
        cost_price,
        retail_price,
        product_movement_id,
      });
    }
  };

  useEffect(() => {
    if (search) {
      const { id } = getSearchValues();
      getProduct(id).then((resp: any) => {
        const product = resp?.data?.response?.product;
        if (product) {
          const {
            product: {
              article,
              title,
              description,
              product_measure_id,
              cost_price,
              retail_price,
            },
            product_movement_id,
            qty,
          } = product;

          if (product_movement_id) {
            setData({
              article,
              title,
              description,
              qty,
              measurement_id: product_measure_id,
              product_id: id,
              cost_price,
              retail_price,
              product_movement_id,
            });
          } else {
            showMessage("error", "Всі товари продані!");
          }
        } else {
          showMessage("error", "Всі товари продані!");
        }
      });
    }
  }, [search]);

  return (
    <StyledSelling>
      <Header off={off} onBack={onBack} />
      <div className="selling-content">
        <Information
          data={data}
          onChange={handleChangeField}
          onSave={handleSave}
          errors={errors}
          loading={loading}
          onSelectProduct={handleSelectProduct}
          off={off}
        />
      </div>
    </StyledSelling>
  );
};

const StyledSelling = styled.div`
  padding: 0 14px;
  .selling-content {
    border-radius: 16px;
    overflow: hidden;
  }
`;
