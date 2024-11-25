import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Affiliaties } from "./Affiliaties/Affiliaties";
import { ICompany } from "../Content";

interface Props {
  data: ICompany;
  onChange: (
    field: string,
    value: string | number | string[] | number[]
  ) => void;
  onSave: () => void;
  loading: boolean;
  errors: string[];
}

export const Information = ({
  data,
  onChange,
  onSave,
  loading,
  errors,
}: Props) => (
  <StyledInformation>
    <Header data={data} onChange={onChange} onSave={onSave} loading={loading} />
    <MainInfo data={data} onChange={onChange} errors={errors} />
    <Affiliaties data={data} onChange={onChange} errors={errors} />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
