import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiHappy, BiPaperPlane, BiWallet, BiArchive } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Profile } from "./Profile/Profile";
import { Loyalty } from "./Loyalty/Loyalty";
import { History } from "./History/History";
import {
  INIT_PHONE,
  IPhone,
} from "../../../components/PhonesInput/PhonesInput";
import { MediaFile } from "../../../components/Files/Files";
import {
  useLazyAddClientQuery,
  useLazyEditClientQuery,
  useLazyGetClientQuery,
  useLazySaveClientMediaQuery,
} from "../../../store/clients/clients.api";
import { formatInputDate, showMessage } from "../../../helpers";
import { useNavigate, useParams } from "react-router-dom";
import { Client } from "../../../types/clients.";

const TABS = [
  { title: "Профіль", Icon: BiHappy },
  { title: "Комунікація", Icon: BiPaperPlane },
  { title: "Лояльність", Icon: BiWallet },
  { title: "Історія", Icon: BiArchive },
];

export interface IClient {
  category_id?: number;
  first_name: string;
  last_name: string;
  color: string;
  bd_day: string;
  email: string;
  comment: string;
  phones: IPhone[];
  tags: string[];
  media: MediaFile[];
}

const INIT_COLOR = "#2EB062";
const CLIENT_INIT = {
  category_id: undefined,
  first_name: "",
  last_name: "",
  color: INIT_COLOR,
  bd_day: "",
  email: "",
  comment: "",
  phones: [INIT_PHONE],
  tags: [],
  media: [],
};

export const Content = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getClient] = useLazyGetClientQuery();
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<IClient>(CLIENT_INIT);
  const [addClient] = useLazyAddClientQuery();
  const [editClient] = useLazyEditClientQuery();
  const [saveClientMedia] = useLazySaveClientMediaQuery();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChangeTab = (tab: number) => setActiveTab(tab);
  const handleChangeField = (
    field: string,
    value: string | boolean | number | IPhone[] | MediaFile[] | string[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((f) => f !== field));
  };

  const handleValidation = (): boolean => {
    const fieldsErr: string[] = [];

    !data.category_id && fieldsErr.push("category_id");
    data.first_name?.length === 0 && fieldsErr.push("first_name");
    data.last_name?.length === 0 && fieldsErr.push("last_name");
    data.phones?.find((p) => p.phone?.length === 0) && fieldsErr.push("phones");
    data.bd_day?.length === 0 && fieldsErr.push("bd_day");
    data.email?.length === 0 && fieldsErr.push("email");

    setErrors(fieldsErr);
    return fieldsErr?.length === 0;
  };

  const handleSaveMedia = async (clientId: string) => {
    const formData = new FormData();
    const mediaFiles = data.media?.filter((m) => !!m.file);

    if (mediaFiles?.length > 0) {
      formData.append("user_id", clientId ?? id);
      mediaFiles.forEach(
        (m, i) => m.file && formData.append(`media[${i}]`, m.file)
      );
      const resp = await saveClientMedia(formData);
      const updatedMedia = resp?.data.response.user?.media?.map((m: any) => ({
        file: undefined,
        url: m.file ?? "",
        id: m.id,
      }));

      updatedMedia && setData({ ...data, media: updatedMedia });
      return;
    } else {
      return;
    }
  };

  const handleSuccesCreate = () => {
    showMessage("success", "Клієнта успішно добавлено");
    navigate("/clients");
  };

  const handleFormatSendData = () => {
    const { media, ...sendData } = data;
    return {
      ...sendData,
      phone: data.phones[0]?.phone.replaceAll(/\s/g, ""),
      phones: data?.phones?.map((p) => ({
        ...p,
        phone: p?.phone.replaceAll(/\s/g, ""),
      })),
      bd_day: formatInputDate(data.bd_day),
    };
  };

  const handleCreateClient = () => {
    addClient(handleFormatSendData()).then(async (resp: any) => {
      setLoading(false);
      if (!resp.isError) {
        if (data?.media?.length > 0) {
          const clientId = resp?.data?.response?.user?.id;
          await handleSaveMedia(clientId);
          handleSuccesCreate();
        } else {
          handleSuccesCreate();
        }
      } else {
        showMessage("error", resp?.error.data.message);
      }
    });
  };

  const handleEditClient = () => {
    editClient(handleFormatSendData()).then(async (resp: any) => {
      setLoading(false);
      if (data?.media?.length > 0 && id) {
        await handleSaveMedia(id);
        showMessage("success", "Дані успішно збережено");
      } else {
        showMessage("success", "Дані успішно збережено");
      }
    });
  };

  const handleSave = () => {
    if (handleValidation()) {
      setLoading(true);
      id ? handleEditClient() : handleCreateClient();
    } else {
      showMessage("error", "Заповніть обов'язкові поля");
    }
  };

  const handleGetClient = () => {
    getClient(id).then((resp) => {
      const { role_id, created_at, updated_at, media, ...client }: any =
        resp?.data.response.user;

      if (client) {
        setData({
          ...client,
          phones: client?.phones?.length > 0 ? client?.phones : [INIT_PHONE],
          color: client?.color ?? INIT_COLOR,
          media: media.map((m: any) => ({
            file: undefined,
            url: m.file ?? "",
            id: m.id,
          })),
          bd_day: client?.bd_date,
          tags: client?.tags ?? [],
        });
      }
    });
  };

  useEffect(() => {
    if (id) {
      handleGetClient();
    }
  }, [id]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info
          files={data.media}
          onChangeFiles={(val: MediaFile[]) => handleChangeField("media", val)}
          phones={data.phones}
          color={data?.color}
          firstName={data?.first_name}
          lastName={data.last_name}
          tags={data?.tags}
          onChangeTags={(val: string[]) => handleChangeField("tags", val)}
        />
        <div>
          <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB]">
            <Tabs tabs={TABS} active={activeTab} onChange={handleChangeTab} />
          </div>
          <div className="content-wrapper no-scrollbar">
            {activeTab === 0 ? (
              <Profile
                data={data}
                onChange={handleChangeField}
                onSave={handleSave}
                loading={loading}
                errors={errors}
              />
            ) : activeTab === 2 ? (
              <Loyalty />
            ) : activeTab === 3 ? (
              <History />
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
