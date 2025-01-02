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
  useLazyEditMovementQuery,
  useLazyGetMovementQuery,
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
import {
  useLazyCancelPayDebtQuery,
  useLazyGetDebtQuery,
  useLazyPayDebtQuery,
} from "../../../store/finance/finance.api";

const TABS = [
  { title: "Оплачено", Icon: BiSolidCartAlt },
  { title: "Потребує оплати", Icon: BiSolidCartAlt },
  { title: "Скасовано", Icon: BiSolidCartAlt },
];

interface Props {
  onBack: () => void;
}
export interface IProductMovementItem {
  product_id?: number;
  qty: number;
  measurement_id?: number;
  cost_price: number;
  retail_price: number;
}

export interface IProductMovement {
  staff_id?: number;
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
  }[];
  debt_data: {
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
  cashes: [
    {
      cashes_id: undefined,
      amount: 0,
    },
  ],
  debt_data: {
    cashes_id: undefined,
    amount: 0,
  },
};

export const Debt = ({ onBack }: Props) => {
  const { search } = useLocation();
  const { user } = useAppSelect((state) => state.auth);
  const [status, setStatus] = useState(0);
  const [data, setData] = useState<IProductMovement>(INIT_VALUE);
  const [loading, setLoading] = useState<string | undefined>(undefined);
  const [errors, setErrors] = useState<string[]>([]);
  const { data: info } = useGetMovementsInfoQuery({});
  const [addMovement] = useLazyAddMovementQuery();
  const [editMovement] = useLazyEditMovementQuery();
  const [getMovement] = useLazyGetMovementQuery();
  const [cancelPayDebt] = useLazyCancelPayDebtQuery();
  const [payDebt] = useLazyPayDebtQuery();

  const handleChangeField = (
    field: string,
    value: string | boolean | number | IProductMovementItem[]
  ) => {
    let updateData = { ...data, [field]: value };
    if (field === "installment_payment") {
      updateData = {
        ...updateData,
        cashes: !!value
          ? [
              ...data.cashes,
              {
                cashes_id: undefined,
                amount: 0,
              },
            ]
          : [data.cashes?.[0]],
      };
    }

    setData(updateData);
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    !data?.warehouse_id && fieldsErr.push("warehouse_id");
    !data?.supplier_id && fieldsErr.push("supplier_id");
    data.items.find((i) => !i.product_id) && fieldsErr.push("items");
    setErrors(fieldsErr);

    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }

    return fieldsErr.length === 0;
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      const { id } = getSearchValues();
      setLoading("save");
      id
        ? editMovement(data).then((resp) => {
            setLoading(undefined);
            if (resp.isError) {
              showMessage("error", "Помилка");
            } else {
              showMessage("success", "Успішно збережено");
              onBack();
            }
          })
        : addMovement(data).then((resp) => {
            setLoading(undefined);
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
    const { movementId, id } = getSearchValues();
    movementId &&
      getMovement(movementId).then((resp) =>
        setData({
          ...resp?.data.response.product_movement,
          items: resp?.data.response?.product_movement?.items?.map(
            ({
              product_id,
              qty,
              measurement_id,
              cost_price,
              retail_price,
              product: { title },
            }: any) => ({
              product_id,
              qty,
              measurement_id,
              cost_price,
              retail_price,
              title,
            })
          ) ?? [INIT_ITEM],
          debt_data: {
            id,
            cashes_id:
              resp?.data.response?.product_movement?.transactions?.find(
                (t: any) => t.type_title === "Борг"
              )?.cashes_id,
            amount:
              resp?.data.response?.product_movement?.transactions?.find(
                (t: any) => t.type_title === "Борг"
              )?.amount ?? 0,
          },
          date_create:
            resp?.data.response?.product_movement?.date_create?.split(" ")?.[0],
          time_create: resp?.data.response?.product_movement?.created_at
            ?.split(" ")?.[1]
            ?.substring(0, 5),
          cashes: resp?.data.response?.product_movement?.transactions
            ?.filter((t: any) => t.type_title !== "Борг")
            ?.map(({ cashes_id, amount }: any) => ({ cashes_id, amount })),
        })
      );
  }, [search]);

  const handlePayDebt = () => {
    setLoading("payDebt");
    const { id } = getSearchValues();
    payDebt(id).then((resp) => {
      setLoading(undefined);
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Успішно збережено");
        onBack();
      }
    });
  };

  const handleCancelPayDebt = () => {
    setLoading("cancelPayDebt");
    const { id } = getSearchValues();
    cancelPayDebt(id).then((resp) => {
      setLoading(undefined);
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Успішно збережено");
        onBack();
      }
    });
  };

  return (
    <StyledDebt>
      <Header onBack={onBack} />
      <div className="selling-content">
        <div className="py-2 bg-white status-wrapper">
          {/* <div>
            <Tabs
              tabs={TABS}
              active={status}
              onChange={(val) => setStatus(val)}
            />
          </div> */}
        </div>
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
          <div className="flex items-center justify-end gap-2">
            <Button
              title="Оплатити"
              onClick={handlePayDebt}
              disabled={!!loading}
              loading={loading === "payDebt"}
              className="max-w-[150px]"
            />
            <Button
              title="Відмінити оплату"
              onClick={handleCancelPayDebt}
              disabled={!!loading}
              loading={loading === "cancelPayDebt"}
              className="max-w-[150px]"
            />
            <Button
              title="Зберегти"
              onClick={handleSave}
              disabled={!!loading}
              loading={loading === "save"}
              className="max-w-[150px]"
            />
          </div>
        </div>
      </div>
    </StyledDebt>
  );
};

const StyledDebt = styled.div`
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
    padding: 0 24px 24px;
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
