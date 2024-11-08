import styled from "styled-components";

interface Props {
  message?: string;
}

export const Message = ({ message }: Props) => (
  <StyledMessage>{message} </StyledMessage>
);

const StyledMessage = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.02em;
  color: #d92d20;
  margin-top: 6px;
`;
