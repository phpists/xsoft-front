import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import { showMessage } from "../../../helpers";
import { useNavigate, useParams } from "react-router-dom";
import {
  useLazyAddWarehouseQuery,
  useLazyEditWarehouseQuery,
  useLazyGetWarehouseQuery,
} from "../../../store/warehouses/warehouses.api";

const TABS = [{ title: "Інформація", Icon: BiSolidCartAlt }];

export interface IStorage {
  title: string;
  description: string;
}

const INIT_VALUE = {
  title: "",
  description: "",
};

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IStorage>(INIT_VALUE);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [addStorage] = useLazyAddWarehouseQuery();
  const [editStorage] = useLazyEditWarehouseQuery();
  const [getStorage] = useLazyGetWarehouseQuery();

  const handleChangeField = (field: string, val: string) => {
    setData({ ...data, [field]: val });
    setErrors(errors?.filter((f) => f !== field));
  };

  const handleCheckFields = () => {
    const errs = [];

    data.title.length === 0 && errs.push("title");

    setErrors(errs);

    if (errs.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }
    return errs.length === 0;
  };

  const handleCreate = () => {
    addStorage(data).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Склад успішно створено");
        navigate("/items");
      }
    });
  };

  const handleEdit = () => {
    editStorage(data).then((resp) => {
      if (resp.isError) {
        showMessage("error", "Помилка");
      } else {
        showMessage("success", "Склад успішно збережено");
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

  const handleGetStorage = () =>
    getStorage(id).then((resp) =>
      setData(resp?.data.response.warehouse ?? INIT_VALUE)
    );

  useEffect(() => {
    id && handleGetStorage();
  }, [id]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info title={data.title} />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <div className="w-[196px]">
              <Tabs tabs={TABS} active={0} onChange={() => null} />
            </div>
          </div>
          <div className="content-wrapper no-scrollbar">
            <Information
              data={data}
              onChange={handleChangeField}
              errors={errors}
              onSave={handleSave}
              loading={loading}
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
