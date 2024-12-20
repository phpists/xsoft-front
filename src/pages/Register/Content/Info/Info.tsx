import styled from "styled-components";
import { Product } from "./Product";
import { Location } from "../../../../components/Location";
import { IBrand } from "../Content";
import { Empty } from "./Empty";

interface Props {
  data: IBrand;
}
export const Info = ({ data }: Props) => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      {data?.title?.length > 0 ? (
        <Product title={data.title} color={data?.color} />
      ) : (
        <Empty />
      )}
      {/* <Location location="Львів, Дрогобич" className="mt-2.5 mb-6" /> */}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
