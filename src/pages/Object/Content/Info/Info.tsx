import styled from "styled-components";
import { Product } from "./Product";
import { Location } from "../../../../components/Location";

export const Info = () => {
  return (
    <StyledInfo>
      {/* <Empty /> */}
      <Product />
      
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
