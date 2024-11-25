import { useState } from "react";
import { IProduct } from "../../../types/products";
import { useGetProductInfoQuery } from "../../../store/products/products.api";
import { MediaFile } from "../../../components/Files/Files";
import { Tabs } from "../../../components/Tabs/Tabs";
import { BiSolidCartAlt } from "react-icons/bi";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Divider } from "./Divider";
import { Items } from "./Items/Items";
import { Total } from "./Total/Total";

const TABS = [
  { title: "Оплачено", Icon: BiSolidCartAlt },
  { title: "Потребує оплати", Icon: BiSolidCartAlt },
  { title: "Скасовано", Icon: BiSolidCartAlt },
];

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

export const Arrival = () => {
  const [status, setStatus] = useState(0);
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
    <StyledArrival>
      <Header />
      <div className="selling-content">
        {" "}
        <div className="py-3.5 px-4 border-b-[1px] border-[#DBDBDB] bg-white status-wrapper">
          <div>
            <Tabs
              tabs={TABS}
              active={status}
              onChange={(val) => setStatus(val)}
            />
          </div>
        </div>
        <div className="arrival-main-content">
          <MainInfo />
          <Divider />
          <Items />
          <Total />
        </div>
      </div>
    </StyledArrival>
  );
};

const StyledArrival = styled.div`
  padding: 0 14px;
  height: calc(100vh - 63px);
  overflow: auto;
  .selling-content {
    border-radius: 16px;
    /* overflow: hidden; */
  }
  .status-wrapper {
    border-radius: 16px 16px 0 0;
  }
  .arrival-main-content {
    background: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 34px;
    border-radius: 0 0 16px 16px;

    /* overflow: auto; */
    .vendors-select {
      .value {
        max-width: 300px;
      }
    }
  }
  .input-icon-card-wrapper {
    flex-shrink: 0;
  }
`;
