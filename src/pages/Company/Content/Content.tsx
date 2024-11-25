import styled from "styled-components";
import { Header } from "./Header/Header";
import { Info } from "./Info/Info";
import { Information } from "./Information/Information";
import { useEffect, useState } from "react";
import {
  useLazyAddCompanyQuery,
  useLazyEditCompanyQuery,
} from "../../../store/companies/companies.api";
import { showMessage } from "../../../helpers";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyResponse } from "../../../types/companies";
import { useAppSelect } from "../../../hooks/redux";
import { IPhone } from "../../../components/PhonesInput/PhonesInput";
import { useActions } from "../../../hooks/actions";

export interface ILocation {
  name: string;
  title: string;
  phones: IPhone[];
  latitude: string;
  longitude: string;
}

export interface ICompany {
  title: string;
  color: string;
  category_id: number | undefined;
  locations: ILocation[];
}

const INIT_VALUE = {
  title: "",
  color: "#2EB062",
  category_id: undefined,
  locations: [],
};

export const Content = () => {
  const { id } = useParams();
  const { companies } = useAppSelect((state) => state.companies);
  const [data, setData] = useState<ICompany>(INIT_VALUE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [addCompany] = useLazyAddCompanyQuery();
  const [editCompany] = useLazyEditCompanyQuery();
  const { onSaveCompanies } = useActions();

  const navigate = useNavigate();

  const handleChangeField = (
    field: string,
    val: string | number | string[] | number[]
  ) => {
    setData({ ...data, [field]: val });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleCheckFields = () => {
    const fieldsErr: string[] = [];

    data.title?.length === 0 && fieldsErr.push("title");
    !data.category_id && fieldsErr.push("category_id");
    data.locations?.length === 0 && fieldsErr.push("locations");

    setErrors(fieldsErr);

    if (fieldsErr.length > 0) {
      showMessage("error", "Заповніть обов'язкові поля");
    }

    return fieldsErr.length === 0;
  };

  const handleCreate = () => {
    addCompany(data).then((resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка створення компанії");
      } else {
        const createdCompany = resp?.data.response.company;
        onSaveCompanies([...(companies ?? []), createdCompany]);
        showMessage("success", "Компанію успішно створенно");
        navigate("/");
      }
    });
  };

  const handleEdit = () => {
    editCompany(data).then((resp) => {
      setLoading(false);
      if (resp.isError) {
        showMessage("error", "Помилка збережені компанії");
      } else {
        const updatedCompany = resp?.data.response.company;
        onSaveCompanies(
          companies?.map((c, i) =>
            c.id.toString() === id ? updatedCompany : c
          )
        );
        showMessage("success", "Компанія успішно збережена");
        navigate("/");
      }
    });
  };

  const handleSave = () => {
    if (handleCheckFields()) {
      setLoading(true);
      id ? handleEdit() : handleCreate();
    }
  };

  const handleGetCurrentCompany = () => {
    const company = companies?.find(
      (c: CompanyResponse) => c.id?.toString() === id
    );
    if (company) {
      const { branches, ...otherData } = company;
      setData({
        ...otherData,
        locations: branches.map(
          ({ location, id, phones, title, latitude, longitude }) => ({
            title: location,
            id,
            phones: phones?.map((p) => ({ ...p, phone: p?.phone ?? "" })),
            name: title,
            latitude,
            longitude,
          })
        ),
      });
    }
  };

  useEffect(() => {
    id && handleGetCurrentCompany();
  }, [id, companies]);

  return (
    <StyledContent>
      <Header />
      <div className="main-wrapper">
        <Info
          title={data.title}
          categoryId={data.category_id}
          color={data.color}
          locations={data.locations}
        />
        <div>
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
    height: calc(100vh - 122px);
    background: #efefef;
    overflow: auto;
  }
`;
