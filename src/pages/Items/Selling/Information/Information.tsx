import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Selling } from "./Selling/Selling";
import { ISellingProduct } from "../Selling";
import { IMovementsSearchResponseItem } from "../../../../types/movements";

interface Props {
  data: ISellingProduct;
  onChange: (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => void;
  onSave: () => void;
  errors: string[];
  loading: boolean;
  onSelectProduct: (product: IMovementsSearchResponseItem) => void;
  off?: boolean;
}

export const Information = ({
  data,
  onChange,
  onSave,
  errors,
  loading,
  onSelectProduct,
  off,
}: Props) => (
  <StyledInformation>
    <MainInfo
      data={data}
      onChange={onChange}
      errors={errors}
      onSelectProduct={onSelectProduct}
    />
    <Selling data={data} onChange={onChange} errors={errors} />{" "}
    <Header onSave={onSave} loading={loading} off={off} />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  max-height: calc(100vh - 182px);
  overflow: auto;
  .vendors-select {
    .value {
      max-width: 300px;
    }
  }
`;
