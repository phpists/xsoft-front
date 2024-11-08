import styled from "styled-components";

export const Id = () => <StyledId> #1234</StyledId>;

const StyledId = styled.div`
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #00000080;
`;
