import { useEffect, useState } from "react";
import { useGetProductInfoQuery } from "../../../store/products/products.api";
import { MediaFile } from "../../../components/Files/Files";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Divider } from "./Divider";
import { Items } from "./Items/Items";
import { Total } from "./Total/Total";
import {
  useGetMovementsInfoQuery,
  useLazyAddMovementQuery,
  useLazyAddMovementSaleQuery,
  useLazyEditMovementQuery,
  useLazyGetMovementQuery,
  useLazyGetProductQuery,
} from "../../../store/movements/movements.api";
import { useAppSelect } from "../../../hooks/redux";
import {
  getNowDate,
  getNowHours,
  getSearchValues,
  showMessage,
} from "../../../helpers";
import { Button } from "../../../components/Button";
import { useLocation } from "react-router-dom";

const TABS = [
  { title: "Оплачено", Icon: BiSolidCartAlt },
  { title: "Потребує оплати", Icon: BiSolidCartAlt },
  { title: "Скасовано", Icon: BiSolidCartAlt },
];

interface Props {
  off?: boolean;
  onBack: () => void;
}
export interface IProductMovementItem {
  product_id?: number;
  qty: number;
  measurement_id?: number;
  cost_price: number;
  retail_price: number;
  id?: string;
  title?: string;
}

export interface IProductMovement {
  staff_id?: string | undefined;
  warehouse_id?: number;
  supplier_id?: number;
  total_price: number;
  date_create: string;
  time_create: string;
  debt: boolean;
  installment_payment: boolean;
  box_office_date: string;
  items: IProductMovementItem[];
  cashes: {
    cashes_id: number | undefined;
    amount: number;
  };
}

export const INIT_ITEM = {
  product_id: undefined,
  qty: 0,
  measurement_id: undefined,
  cost_price: 0,
  retail_price: 0,
};

export const Selling = ({ off, onBack }: Props) => {
  const INIT_VALUE = {
    staff_id: undefined,
    warehouse_id: undefined,
    supplier_id: undefined,
    total_price: 0,
    date_create: getNowDate(),
    time_create: getNowHours(),
    debt: false,
    installment_payment: false,
    box_office_date: "",
    items: [INIT_ITEM],
    cashes: {
      cashes_id: undefined,
      amount: 0,
    },
  };
  const { search } = useLocation();
  const { user } = useAppSelect((state) => state.auth);
  const [status, setStatus] = useState(0);
  const [data, setData] = useState<IProductMovement>(INIT_VALUE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const { data: info } = useGetMovementsInfoQuery({});
  const [addMovement] = useLazyAddMovementSaleQuery();
  const [getProduct] = useLazyGetProductQuery();

  const handleChangeField = (
    field: string,
    value: string | boolean | number | IProductMovementItem[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    !data?.warehouse_id && fieldsErr.push("warehouse_id");
    data.items.find((i) => !i.product_id) && fieldsErr.push("items");
    setErrors(fieldsErr);

    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }

    return fieldsErr.length === 0;
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      setLoading(true);
      addMovement({ ...data, type_id: off ? 3 : 2 }).then((resp) => {
        setLoading(false);
        if (resp.isError) {
          showMessage("error", "Помилка");
        } else {
          showMessage("success", "Успішно збережено");
          onBack();
        }
      });
    }
  };

  useEffect(() => {
    if (user && !data.staff_id) {
      handleChangeField("staff_id", user.id.toString());
    }
  }, [user]);

  useEffect(() => {
    if (search) {
      const { id } = getSearchValues();
      getProduct(id).then((resp: any) => {
        const product = resp?.data?.response?.product;
        if (product) {
          const {
            product: { title },
            product_movement_id,
            qty,
          } = product;

          console.log(product);
          if (product_movement_id) {
            setData({
              ...data,
              staff_id: user?.id?.toString() ?? undefined,
              items: [
                {
                  ...INIT_ITEM,
                  id: product?.id,
                  product_id: product.product_id,
                  measurement_id: product.measurement_id,
                  cost_price: product.cost_price,
                  retail_price: product.retail_price,
                  title,
                },
              ],
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
      <Header onBack={onBack} off={off} />
      <div className="selling-content">
        {/* <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB] bg-white status-wrapper">
          <div>
            <Tabs
              tabs={TABS}
              active={status}
              onChange={(val) => setStatus(val)}
            />
          </div>
        </div> */}
        <div className="arrival-main-content">
          <MainInfo
            info={info}
            data={data}
            onChange={handleChangeField}
            errors={errors}
          />
          <Divider />
          <Items
            info={info}
            data={data}
            onChange={handleChangeField}
            errors={errors}
          />
          <Total data={data} onChange={handleChangeField} errors={errors} />
          <Button
            title="Зберегти"
            onClick={handleSave}
            disabled={loading}
            loading={loading}
            className="max-w-[150px] ml-auto"
          />
        </div>
      </div>
    </StyledSelling>
  );
};

const StyledSelling = styled.div`
  padding: 0 14px;
  height: calc(100vh - 63px);
  overflow: auto;
  .selling-content {
    border-radius: 16px;
    /* overflow: hidden; */
  }
  .status-wrapper {
    border-radius: 16px 16px 0 0;
  }
  .arrival-main-content {
    background: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 34px;
    border-radius: 0 0 16px 16px;

    /* overflow: auto; */
    .vendors-select {
      .value {
        max-width: 300px;
      }
    }
  }
  .input-icon-card-wrapper {
    flex-shrink: 0;
  }
`;
