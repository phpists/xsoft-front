import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import { checkEmailValidation, showMessage } from "../../../helpers";
import { useNavigate, useParams } from "react-router-dom";
import { INIT_PHONE } from "../../../components/PhonesInput/PhonesInput";
import {
  useLazyAddSupplierQuery,
  useLazyEditSupplierQuery,
  useLazyGetSupplierQuery,
} from "../../../store/suppliers/suppliers.api";

const TABS = [{ title: "Інформація", Icon: BiSolidCartAlt }];

const INIT_VALUE = {
  first_name: "",
  last_name: "",
  color: "#2EB062",
  category_id: undefined,
  phones: [INIT_PHONE],
  email: "",
  comment: "",
};

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getSupplier] = useLazyGetSupplierQuery();
  const [data, setData] = useState<any>(INIT_VALUE);
  const [activeTab, setActiveTab] = useState(0);
  const [addSupplier] = useLazyAddSupplierQuery();
  const [editSupplier] = useLazyEditSupplierQuery();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChangeTab = (tab: number) => setActiveTab(tab);
  const handleChangeField = (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    data.first_name?.length === 0 && fieldsErr.push("first_name");
    data.last_name?.length === 0 && fieldsErr.push("last_name");
    if (data.email?.length === 0 || checkEmailValidation(data.email)) {
      fieldsErr.push("email");
    }
    !data.category_id && fieldsErr.push("category_id");

    setErrors(fieldsErr);
    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }
    return fieldsErr.length === 0;
  };

  const handleSuccesCreate = () => {
    showMessage("success", "Постачальника успішно добавлено");
    navigate("/items");
  };

  const handleCreate = () => {
    addSupplier(data).then(async (resp: any) => {
      setLoading(false);
      if (!resp.isError) {
        console.log(resp);
        handleSuccesCreate();
      } else {
        showMessage("error", resp?.error.data.message);
      }
    });
  };

  const handleEdit = () => {
    editSupplier(data).then(async (resp: any) => {
      setLoading(false);
      if (!resp.isError) {
        showMessage("success", "Постачальника успішно збережено");
        navigate("/items");
      } else {
        showMessage("error", resp?.error.data.message);
      }
    });
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      setLoading(true);
      id ? handleEdit() : handleCreate();
    }
  };

  useEffect(() => {
    if (id) {
      getSupplier(id).then((resp: any) => {
        const supplier = resp?.data?.response?.supplier;
        setData({
          ...supplier,
          color: supplier?.color ?? "#2EB062",
        });
      });
    }
  }, [id]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info
          firstName={data?.first_name}
          lastName={data?.last_name}
          color={data.color}
        />
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
              errors={errors}
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
