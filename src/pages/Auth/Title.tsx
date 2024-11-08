import styled from "styled-components";

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => <StyledTitle>{title}</StyledTitle>;

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 44.8px;
  text-align: center;
  color: #111111;
  margin-bottom: 40px;
`;
