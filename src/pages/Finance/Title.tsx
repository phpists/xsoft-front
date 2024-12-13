import styled from "styled-components";

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => <StyledTitle>{title}</StyledTitle>;

const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 25.2px;
  letter-spacing: 0.02em;
  color: #111111;
`;
