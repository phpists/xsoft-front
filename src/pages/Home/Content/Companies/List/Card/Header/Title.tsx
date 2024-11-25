import styled from "styled-components";

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => <StyledTitle>{title}</StyledTitle>;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #111111;
`;
