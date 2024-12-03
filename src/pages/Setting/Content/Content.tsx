import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiHappy } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import { Services } from "./Services/Services";
import { Schedule } from "./Schedule";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../helpers";

import {
  INIT_PHONE,
  IPhone,
} from "../../../components/PhonesInput/PhonesInput";
import { useLazyEditUserQuery } from "../../../store/auth/auth.api";
import { useAppSelect } from "../../../hooks/redux";
import { useActions } from "../../../hooks/actions";

const TABS = [{ title: "Профіль", Icon: BiHappy }];

const INIT_VALUE = {
  first_name: "",
  last_name: "",
  color: "#2EB062",
  phones: [INIT_PHONE],
  password: "",
  password_confirmation: "",
};

export interface IPerson {
  first_name: string;
  last_name: string;
  color: string;
  phones: IPhone[];
  password: string;
  password_confirmation: string;
  user_id?: number;
}

export const Content = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<IPerson>(INIT_VALUE);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [editUser] = useLazyEditUserQuery();
  const { user } = useAppSelect((state) => state.auth);
  const { loginUser } = useActions();

  const handleChangeTab = (tab: number) => setActiveTab(tab);

  const handleChangeField = (
    field: string,
    value: string | boolean | number | string[] | IPhone[] | number[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((f) => f !== field));
  };

  const handleValidation = (): boolean => {
    const fieldsErr: string[] = [];

    data.first_name?.length === 0 && fieldsErr.push("first_name");
    data.last_name?.length === 0 && fieldsErr.push("last_name");

    setErrors(fieldsErr);
    if (fieldsErr?.length > 0) {
      showMessage("error", "Заповніть будь ласка всі поля");
    }
    return fieldsErr?.length === 0;
  };

  const handleSave = () => {
    if (handleValidation()) {
      setLoading(true);
      editUser(data).then((resp) => {
        setLoading(false);
        if (resp.isError) {
          showMessage("error", "Помилка збереження");
        } else {
          showMessage("success", "Дані успішно збережено");
          loginUser(resp?.data?.response?.user);
        }
      });
    }
  };

  useEffect(() => {
    if (user) {
      const { first_name, last_name, color, phone } = user;

      setData({
        ...INIT_VALUE,
        user_id: user?.id,
        first_name,
        last_name,
        color,
        phones: [{ phone, type_id: [] }],
      });
    }
  }, [user]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info data={data} />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <div className="max-w-[150px]">
              <Tabs tabs={TABS} active={activeTab} onChange={handleChangeTab} />
            </div>
          </div>
          <div className="content-wrapper no-scrollbar">
            {activeTab === 0 ? (
              <Information
                data={data}
                onChange={handleChangeField}
                onSave={handleSave}
                errors={errors}
                loading={loading}
              />
            ) : activeTab === 2 ? (
              <Schedule />
            ) : activeTab === 4 ? (
              <Services />
            ) : null}
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
