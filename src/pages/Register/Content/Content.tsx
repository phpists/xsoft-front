import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import { useNavigate, useParams } from "react-router-dom";
import { showMessage } from "../../../helpers";
import {
  useLazyAddBrandQuery,
  useLazyEditBrandQuery,
  useLazyGetBrandQuery,
} from "../../../store/brands/brands.api";
import {
  useLazyAddCashQuery,
  useLazyEditCashQuery,
  useLazyGetCashQuery,
} from "../../../store/finance/finance.api";

const TABS = [{ title: "Інформація", Icon: BiSolidCartAlt }];

export interface ICash {
  title: string;
  appointment: string;
  description: string;
  is_cash_category: number;
  cash_categories: number[];
}

const INIT_CASH = {
  title: "",
  appointment: "",
  description: "",
  is_cash_category: 0,
  cash_categories: [],
};

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getCash] = useLazyGetCashQuery();
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<ICash>(INIT_CASH);
  const [errors, setErrors] = useState<string[]>([]);
  const [addCash] = useLazyAddCashQuery();
  const [editCash] = useLazyEditCashQuery();
  const [loading, setLoading] = useState(false);

  const handleChangeField = (
    field: string,
    val: string | number | number[]
  ) => {
    let updatedValue = { ...data, [field]: val };

    if (field === "is_cash_category") {
      updatedValue = { ...updatedValue, cash_categories: [] };
    }

    setData(updatedValue);
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    data.title?.length === 0 && fieldsErr.push("title");
    data.appointment?.length === 0 && fieldsErr.push("appointment");
    data.description?.length === 0 && fieldsErr.push("description");

    setErrors(fieldsErr);

    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }

    return fieldsErr.length === 0;
  };

  const handleCreate = () => {
    addCash(data).then((resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка створення");
      } else {
        showMessage("success", "Успішно створено");
        navigate("/finance");
      }
    });
  };

  const handleEdit = () => {
    editCash(data).then((resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка збереженя");
      } else {
        showMessage("success", "Успішно збережено");
        navigate("/finance");
      }
    });
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      setLoading(true);
      id ? handleEdit() : handleCreate();
    }
  };
  const handleChangeTab = (tab: number) => setActiveTab(tab);

  useEffect(() => {
    if (id) {
      getCash(id).then((resp) => {
        const cash = resp?.data?.response?.cashes;
        if (cash) {
          setData({
            ...cash,
            cash_categories:
              cash?.cash_categories?.map((c: any) => c.cash_category_id) ?? [],
          });
        } else {
          setData(INIT_CASH);
        }
      });
    }
  }, [id]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info data={data} />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <div className="w-[196px]">
              <Tabs tabs={TABS} active={activeTab} onChange={handleChangeTab} />
            </div>
          </div>
          <div className="content-wrapper no-scrollbar">
            <Information
              data={data}
              onChange={handleChangeField}
              onSave={handleSave}
              loading={loading}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  padding: 12px 14px 14px;
  .main-wrapper {
    display: grid;
    grid-template-columns: 320px 1fr;
    border-radius: 16px;
    background: #fff;
    height: calc(100vh - 123px);
    overflow: hidden;
  }
  .content-wrapper {
    height: calc(100vh - 184px);
    background: #efefef;
    overflow: auto;
  }
`;
