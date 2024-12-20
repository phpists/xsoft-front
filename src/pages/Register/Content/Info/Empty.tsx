import styled from "styled-components";

export const Empty = () => (
  <StyledEmpty className="flex items-center justify-center">
    Заповніть дані про касу
  </StyledEmpty>
);

const StyledEmpty = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  color: #737373;
  height: 100%;
`;
