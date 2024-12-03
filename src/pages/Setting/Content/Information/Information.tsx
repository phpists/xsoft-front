import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Divider } from "../Divider";
import { Additional } from "./Additional";
import { IPerson } from "../Content";
import { IPhone } from "../../../../components/PhonesInput/PhonesInput";

interface Props {
  data: IPerson;
  onChange: (
    field: string,
    value: string | boolean | number | string[] | IPhone[] | number[]
  ) => void;
  onSave: () => void;
  errors: string[];
  loading: boolean;
}

export const Information = ({
  data,
  onChange,
  onSave,
  errors,
  loading,
}: Props) => (
  <StyledInformation>
    <Header
      color={data.color}
      onChangeColor={(val) => onChange("color", val)}
      onSave={onSave}
      loading={loading}
    />
    <MainInfo data={data} onChange={onChange} errors={errors} />
    <Divider />
    <Additional data={data} onChange={onChange} errors={errors} />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
