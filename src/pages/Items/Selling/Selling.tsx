import { useState } from "react";
import { IProduct } from "../../../types/products";
import { Information } from "./Information/Information";
import { useGetProductInfoQuery } from "../../../store/products/products.api";
import { MediaFile } from "../../../components/Files/Files";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import styled from "styled-components";
import { Header } from "./Header/Header";

const TABS = [{ title: "Інформація", Icon: BiSolidCartAlt }];

const INIT_VALUE = {
  brand_id: undefined,
  category_id: undefined,
  article: "",
  title: "",
  description: "",
  product_measure_id: undefined,
  color: "#2EB062",
  balance: 0,
  cost_price: 0,
  retail_price: 0,
  tags: [],
  vendors: [],
};

interface Props {
  off?: boolean;
}

export const Selling = ({ off }: Props) => {
  const [data, setData] = useState<IProduct>(INIT_VALUE);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [media, setMedia] = useState<MediaFile[]>([]);
  const { data: productInfo, refetch: refetchProductInfo } =
    useGetProductInfoQuery({});

  const handleChangeField = (
    field: string,
    value: string | boolean | number | string[] | number[]
  ) => {
    setData({ ...data, [field]: value });
    setErrors(errors.filter((e) => e !== field));
  };

  const handleSave = () => {};

  return (
    <StyledSelling>
      <Header off={off} />
      <div className="selling-content">
        {" "}
        <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB] bg-white">
          <div className="w-[196px]">
            <Tabs tabs={TABS} active={0} onChange={() => null} />
          </div>
        </div>
        <Information
          data={data}
          onChange={handleChangeField}
          productInfo={productInfo}
          onSave={handleSave}
          errors={errors}
          loading={loading}
          files={media}
          onChangeFiles={(val: MediaFile[]) => setMedia(val)}
          onRefreshProductInfo={() => refetchProductInfo()}
        />
      </div>
    </StyledSelling>
  );
};

const StyledSelling = styled.div`
  padding: 0 14px;
  .selling-content {
    border-radius: 16px;
    overflow: hidden;
  }
`;
