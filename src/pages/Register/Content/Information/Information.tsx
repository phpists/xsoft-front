import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { ICash } from "../Content";

interface Props {
  data: ICash;
  onChange: (field: string, val: string | number | number[]) => void;
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
    <MainInfo data={data} onChange={onChange} errors={errors} />
    <Header onSave={onSave} loading={loading} />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
