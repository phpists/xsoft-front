import styled from "styled-components";
import { Product } from "./Product";
import { Empty } from "./Empty";

interface Props {
  title: string;
}

export const Info = ({ title }: Props) => {
  return (
    <StyledInfo>
      {title?.length === 0 ? <Empty /> : <Product title={title} />}
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  border-right: 1px solid #dbdbdb;
  padding: 14px;
`;
