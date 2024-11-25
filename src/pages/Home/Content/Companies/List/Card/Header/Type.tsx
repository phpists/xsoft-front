import styled from "styled-components";

interface Props {
  category?: string;
}

export const Type = ({ category }: Props) => (
  <StyledType>{category}</StyledType>
);

const StyledType = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #73737380;
`;
