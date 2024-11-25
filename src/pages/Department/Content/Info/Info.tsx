import styled from "styled-components";
import { Product } from "./Product";
import { Location } from "../../../../components/Location";
import { Personal } from "./Personal";

export const Info = () => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      <Product />
      <Personal />
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
