import styled from "styled-components";

interface Props {
  text: string;
}

export const Subtitle = ({ text }: Props) => (
  <StyledSubtitle>{text}</StyledSubtitle>
);

const StyledSubtitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: center;
  color: #737373;
  margin-bottom: 40px;
  white-space: break-spaces;
`;
