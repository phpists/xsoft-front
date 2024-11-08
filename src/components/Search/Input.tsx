import styled from "styled-components";

export const Input = () => <StyledInput placeholder="Пошук" />;

const StyledInput = styled.input`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
  color: #000;
  width: 155px;
  &::placeholder {
    color: #737373;
  }
`;
