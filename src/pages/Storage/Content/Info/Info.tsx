import styled from "styled-components";
import { Product } from "./Product";
import { Media } from "../../../../components/Media/Media";
import { Location } from "../../../../components/Location";

export const Info = () => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      <Product />
      <Location location="Львів, Дрогобич" className="mt-2.5 mb-6" />
      <Media />
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
