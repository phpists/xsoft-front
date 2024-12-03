import styled from "styled-components";
import { Product } from "./Product";
import { Empty } from "./Empty";
import { IPerson } from "../Content";

interface Props {
  data: IPerson;
}
export const Info = ({ data }: Props) => (
  <StyledInfo>
    {data.first_name?.length === 0 && data.last_name.length === 0 ? (
      <Empty />
    ) : null}
    {data.first_name?.length > 0 || data.last_name.length > 0 ? (
      <Product
        firstName={data.first_name}
        lastName={data.last_name}
        color={data.color}
      />
    ) : null}
  </StyledInfo>
);

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
