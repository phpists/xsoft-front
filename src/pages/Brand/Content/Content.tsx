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

const TABS = [{ title: "Інформація", Icon: BiSolidCartAlt }];

export interface IBrand {
  id?: number;
  title: string;
  description: string;
  color: string;
}

const INIT_BRAND = {
  title: "",
  description: "",
  color: "#2EB062",
};

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getBrand] = useLazyGetBrandQuery();
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<IBrand>(INIT_BRAND);
  const [errors, setErrors] = useState<string[]>([]);
  const [addBrand] = useLazyAddBrandQuery();
  const [editBrand] = useLazyEditBrandQuery();
  const [loading, setLoading] = useState(false);

  const handleChangeField = (field: string, val: string) => {
    setData({ ...data, [field]: val });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    data.title?.length === 0 && fieldsErr.push("title");
    // data.description?.length === 0 && fieldsErr.push("description");

    setErrors(fieldsErr);

    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }

    return fieldsErr.length === 0;
  };

  const handleCreate = () => {
    addBrand(data).then((resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка створення бренду");
      } else {
        showMessage("success", "Бренд успішно створено");
        navigate("/items");
      }
    });
  };

  const handleEdit = () => {
    editBrand(data).then((resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка збереженя бренду");
      } else {
        showMessage("success", "Бренд успішно збережено");
        navigate("/items");
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
      getBrand(id).then((resp) =>
        setData(resp?.data?.response?.brand ?? INIT_BRAND)
      );
    }
  }, [id]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info />
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
