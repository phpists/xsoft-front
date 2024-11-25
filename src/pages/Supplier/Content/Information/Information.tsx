import styled from "styled-components";
import { Header } from "./Header/Header";

import { IProduct } from "../../../../types/products";
import { PersonalData } from "./PersonalData/PersonalData";
import { Divider } from "../Divider";
import { Category } from "./Category";
import { Additional } from "./Additional/Additional";

interface Props {
  data: IProduct;
  onChange: (field: string, value: any) => void;
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
    <Header data={data} onChange={onChange} onSave={onSave} loading={loading} />
    <PersonalData data={data} onChange={onChange} errors={errors} />
    <Divider />
    <Category />
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
