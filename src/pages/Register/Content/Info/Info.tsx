import styled from "styled-components";
import { Product } from "./Product";
import { Location } from "../../../../components/Location";
import { ICash } from "../Content";
import { Empty } from "./Empty";

interface Props {
  data: ICash;
}
export const Info = ({ data }: Props) => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      {data?.title?.length > 0 ? <Product title={data.title} /> : <Empty />}
      {/* <Location location="Львів, Дрогобич" className="mt-2.5 mb-6" /> */}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
