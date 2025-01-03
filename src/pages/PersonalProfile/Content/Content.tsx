import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import {
  BiCalendar,
  BiCube,
  BiHappy,
  BiLineChart,
  BiWallet,
} from "react-icons/bi";
import { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import { Services } from "./Services/Services";
import { Schedule } from "./Schedule";
import { useNavigate, useParams } from "react-router-dom";
import { checkEmailValidation, showMessage } from "../../../helpers";
import {
  useLazyAddStaffQuery,
  useLazyEditStaffQuery,
  useLazyGetStaffPersonQuery,
  useLazySaveStaffMediaQuery,
} from "../../../store/personal/personal.api";
import { MediaFile } from "../../../components/Files/Files";
import {
  INIT_PHONE,
  IPhone,
} from "../../../components/PhonesInput/PhonesInput";
import { ISearchStaffItemResponse } from "../../../types/personal";

const TABS = [
  { title: "Профіль", Icon: BiHappy },
  { title: "Статистика", Icon: BiLineChart },
  { title: "Графік роботи", Icon: BiCalendar },
  { title: "Зарплатня", Icon: BiWallet },
  { title: "Послуги", Icon: BiCube },
];

const INIT_VALUE = {
  role_id: undefined,
  first_name: "",
  last_name: "",
  color: "#2EB062",
  email: "",
  comment: "",
  password: "",
  phones: [INIT_PHONE],
  branches: [],
};

export interface IPerson {
  id?: number;
  role_id?: number;
  first_name: string;
  last_name: string;
  color: string;
  email: string;
  comment: string;
  password: string;
  phones: IPhone[];
  branches: number[];
  position_id?: number;
  department_id?: number;
  phone?: string;
}

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getPerson] = useLazyGetStaffPersonQuery();
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<IPerson>(INIT_VALUE);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [addProfile] = useLazyAddStaffQuery();
  const [editProfile] = useLazyEditStaffQuery();
  const [saveMedia] = useLazySaveStaffMediaQuery();
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [selectedUser, setSelectedUser] = useState<
    ISearchStaffItemResponse | undefined
  >(undefined);

  const handleChangeTab = (tab: number) => setActiveTab(tab);

  const handleSaveMedia = async (productId: string) => {
    const formData = new FormData();
    const mediaFiles = media?.filter((m) => !!m.file);

    if (mediaFiles?.length > 0) {
      formData.append("staff_id", productId ?? id);
      mediaFiles.forEach(
        (m, i) => m.file && formData.append(`media[${i}]`, m.file)
      );
      const resp = await saveMedia(formData);
      const updatedMedia = resp?.data.response.staff?.media?.map((m: any) => ({
        file: undefined,
        url: m.file ?? "",
        id: m.id,
      }));

      updatedMedia && setMedia(updatedMedia);
      return;
    } else {
      return;
    }
  };
  const handleChangeField = (
    field: string,
    value: string | boolean | number | string[] | IPhone[] | number[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((f) => f !== field));
  };

  const handleValidation = (): boolean => {
    const fieldsErr: string[] = [];

    !data.role_id && fieldsErr.push("role_id");
    // data.first_name?.length === 0 && fieldsErr.push("first_name");
    // data.last_name?.length === 0 && fieldsErr.push("last_name");
    // if (data.email?.length === 0 || checkEmailValidation(data.email)) {
    //   fieldsErr.push("email");
    // }
    // (data.password?.length === 0 || !data.password) &&
    //   !id &&
    //   fieldsErr.push("password");

    setErrors(fieldsErr);
    if (fieldsErr?.length > 0) {
      showMessage("error", "Заповніть будь ласка всі поля");
    }
    return fieldsErr?.length === 0;
  };

  const handleAdd = () => {
    addProfile(data).then(async (resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка створення");
      } else {
        const staffId = resp?.data.response?.staff?.id;
        await handleSaveMedia(staffId);
        showMessage("success", "Працівника успішно створено");
        navigate("/pesonal");
      }
    });
  };
  const handleEdit = () => {
    editProfile(data).then(async (resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка збереження");
      } else {
        await handleSaveMedia(id ?? "");
        showMessage("success", "Працівника успішно збережено");
        navigate("/pesonal");
      }
    });
  };

  const handleSave = () => {
    if (handleValidation()) {
      setLoading(true);
      id ? handleEdit() : handleAdd();
    }
  };

  const handleGetPerson = (selectedId?: string) => {
    if (selectedId) {
      getPerson(selectedId).then((resp: any) => {
        const { media, branches, ...otherData } = resp?.data?.response?.staff;
        setData({
          ...otherData,
          branches: branches.map((b: any) => b.id),
          phones: otherData.phones ?? [INIT_PHONE],
        });
        setSelectedUser(resp?.data?.response?.staff);
        setMedia(
          media.map((m: any) => ({
            file: undefined,
            url: m.file ?? "",
            id: m.id,
          }))
        );
      });
    }
  };

  const handleChangeSelectedUser = (val: any | undefined) => {
    setSelectedUser(val);
    val && setData({ ...val, phones: val.phones ?? [INIT_PHONE] });
  };

  useEffect(() => {
    handleGetPerson(id);
  }, []);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info
          data={data}
          files={media}
          onChangeFiles={(val: MediaFile[]) => setMedia(val)}
        />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <Tabs tabs={TABS} active={activeTab} onChange={handleChangeTab} />
          </div>
          <div className="content-wrapper no-scrollbar">
            {activeTab === 0 ? (
              <Information
                data={data}
                onChange={handleChangeField}
                onSave={handleSave}
                errors={errors}
                loading={loading}
                files={media}
                onChangeFiles={(val: MediaFile[]) => setMedia(val)}
                selectedUser={selectedUser}
                onChangeSelectedUser={handleChangeSelectedUser}
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
