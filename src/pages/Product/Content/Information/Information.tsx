import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Divider } from "../Divider";
import { Category } from "./Category/Category";
import { Selling } from "./Selling/Selling";
import { Availability } from "./Availability";
import { Files, MediaFile } from "../../../../components/Files/Files";
import { IProduct, IProductInfo } from "../../../../types/products";

interface Props {
  data: IProduct;
  onChange: (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => void;
  productInfo?: IProductInfo;
  onSave: () => void;
  errors: string[];
  loading: boolean;
  files: MediaFile[];
  onChangeFiles: (val: MediaFile[]) => void;
  onRefreshProductInfo: () => void;
}

export const Information = ({
  data,
  onChange,
  productInfo,
  onSave,
  errors,
  loading,
  onChangeFiles,
  files,
  onRefreshProductInfo,
}: Props) => (
  <StyledInformation>
    <Header data={data} onChange={onChange} onSave={onSave} loading={loading} />
    <MainInfo
      data={data}
      onChange={onChange}
      productInfo={productInfo}
      errors={errors}
    />
    <Divider />
    <Category
      data={data}
      onChange={onChange}
      productInfo={productInfo}
      errors={errors}
      onRefreshProductInfo={onRefreshProductInfo}
    />
    <Divider />
    <Selling
      data={data}
      onChange={onChange}
      productInfo={productInfo}
      errors={errors}
    />
    <Divider />
    {/* <Materials data={data} onChange={onChange} productInfo={productInfo} />
    <Divider /> */}
    <Availability
      data={data}
      onChange={onChange}
      productInfo={productInfo}
      errors={errors}
    />
    <Divider />
    <Files value={files} onAdd={onChangeFiles} />
  </StyledInformation>
);

const StyledInformation = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;
